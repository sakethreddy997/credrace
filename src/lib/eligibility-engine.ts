/**
 * Credrace Eligibility Engine
 * Bank-grade, India-focused loan eligibility computation
 *
 * Anchored on:
 * - RBI regulatory constraints (LTV caps, KFS, penal charge rules)
 * - Published lender eligibility criteria (SBI, HDFC, ICICI, Axis, Bajaj, etc.)
 * - CIBIL score banding (300-900, >700 "good")
 * - FOIR/DTI affordability math (40-55% typical, 65% stretch)
 * - Annuity-based max-loan computation
 *
 * Architecture:
 * 1. Lender-neutral underwriting (prudent defaults)
 * 2. Lender-specific policy overlays (per bank/NBFC)
 * 3. Confidence scoring with auditable reason codes
 * 4. Borrower protection assessment
 */

/* ═══════════════════════════════════════════
   Types
   ═══════════════════════════════════════════ */

export type LoanType = "home" | "personal" | "two-wheeler" | "business";
export type EmploymentType = "salaried" | "self-employed" | "business-owner";
export type CreditScoreBand = "excellent" | "good" | "fair" | "low-or-none";

export interface BorrowerProfile {
  loanType: LoanType;
  employmentType: EmploymentType;
  monthlyIncome: number;
  age: number;
  creditScoreBand: CreditScoreBand;
  city: string;
  existingEMIs: number;
  // Product-specific (optional, enhances accuracy)
  propertyValue?: number; // home loans
  vehicleOnRoadPrice?: number; // two-wheeler
  businessVintageYears?: number; // business
  annualTurnover?: number; // business
}

export interface LenderMatch {
  lenderId: string;
  lenderName: string;
  lenderType: "public-bank" | "private-bank" | "nbfc" | "hfc";
  maxEligibleAmount: number;
  rateMin: number;
  rateMax: number;
  /** Profile-calibrated estimated rate for THIS borrower */
  estimatedRate: number;
  /** EMI at the lender's max eligible amount */
  estimatedEMI: number;
  /** Total interest payable over full tenure at max amount */
  totalInterest: number;
  /** Total cost: principal + interest + fees */
  totalCost: number;
  /** Processing fee in rupees */
  processingFeeEstimate: number;
  /** Processing fee display string */
  processingFeeLabel: string;
  maxTenureYears: number;
  maxTenureMonths: number;
  /** Estimated approval days (working days) */
  approvalDaysMin: number;
  approvalDaysMax: number;
  confidence: "high" | "medium" | "low";
  passedGates: string[];
  warnings: string[];
  highlights: string[];
  /** Tag like "Lowest rate", "Lowest EMI", etc. (set after all lenders evaluated) */
  bestForTag: string | null;
}

export interface FOIRAnalysis {
  currentFOIR: number; // existing EMIs / income (%)
  maxAffordableEMI: number; // at 55% FOIR cap
  foirStatus: "healthy" | "moderate" | "stretched";
  foirLabel: string;
}

export interface ProtectionInfo {
  highlights: string[];
  warnings: string[];
}

export interface SavingsAnalysis {
  /** The standard amount used for fair comparison across lenders */
  comparisonAmount: number;
  bestEstimatedRate: number;
  worstEstimatedRate: number;
  /** EMI at comparison amount with best rate */
  bestEMI: number;
  /** EMI at comparison amount with worst rate */
  worstEMI: number;
  /** Monthly EMI savings (worst - best) */
  emiSavingsPerMonth: number;
  /** Total interest saved over tenure (worst - best) */
  totalInterestSaved: number;
  /** Total cost saved including fees */
  totalCostSaved: number;
  /** Processing fee range */
  lowestFee: number;
  highestFee: number;
  /** The comparison tenure in months */
  comparisonTenureMonths: number;
}

export interface EligibilityOutput {
  // Amount range (best of matched lenders)
  minAmount: number;
  maxAmount: number;
  bestRateMin: number;
  bestRateMax: number;
  maxTenureYears: number;

  // FOIR analysis
  foir: FOIRAnalysis;

  // Lender matches (sorted by confidence then amount)
  matchedLenders: LenderMatch[];
  totalLendersChecked: number;

  // Overall confidence
  overallConfidence: "high" | "medium" | "low";
  confidenceReasons: string[];

  // Savings analysis
  savings: SavingsAnalysis | null;

  // Fastest approval timeline (from best match)
  fastestApprovalDays: { min: number; max: number };

  // Borrower protection
  protection: ProtectionInfo;

  // Improvement tips (if applicable)
  improvementTips: string[];
}

/* ═══════════════════════════════════════════
   Constants
   ═══════════════════════════════════════════ */

/** Credit score band to numeric range */
const SCORE_BANDS: Record<
  CreditScoreBand,
  { min: number; max: number; label: string }
> = {
  excellent: { min: 750, max: 900, label: "750+" },
  good: { min: 700, max: 749, label: "700-749" },
  fair: { min: 650, max: 699, label: "650-699" },
  "low-or-none": { min: 300, max: 649, label: "Below 650" },
};

/** FOIR zones (RBI-aligned, ICICI/HDFC referenced) */
const FOIR_HEALTHY = 0.4; // ≤40%
const FOIR_MODERATE = 0.55; // 40-55%
// Above 55% = "stretched"

/** RBI LTV caps for individual housing loans */
function getRbiHomeLTV(loanAmount: number): number {
  if (loanAmount <= 2000000) return 0.9; // up to ₹20L
  if (loanAmount <= 7500000) return 0.8; // ₹20L - ₹75L
  return 0.75; // above ₹75L
}

/* ═══════════════════════════════════════════
   Lender Product Rules
   Sourced from published bank eligibility
   pages and RBI regulatory guidance
   ═══════════════════════════════════════════ */

interface LenderRule {
  id: string;
  name: string;
  type: "public-bank" | "private-bank" | "nbfc" | "hfc";
  product: LoanType;
  // Age gates
  ageMin: number;
  ageMax: number; // age at maturity for salaried
  ageMaxSE: number; // age at maturity for self-employed
  // Employment
  allowedEmployment: EmploymentType[];
  // Income floors
  minIncomeSalaried: number; // monthly
  minIncomeSE: number; // monthly (self-employed/business-owner)
  // Credit gate
  minScoreBand: CreditScoreBand; // minimum acceptable band
  // Business-specific gates
  minBusinessVintageYears?: number;
  minAnnualTurnover?: number;
  // Affordability
  maxFOIR: number;
  maxLoanMultiple?: number; // e.g., 30x NMI (SBI personal)
  // Funding
  maxLoanAmount: number;
  maxLTV?: number; // secured products
  // Rates (indicative, subject to change)
  rateMin: number;
  rateMax: number;
  processingFee: string;
  // Funding limits
  minLoanAmount: number;
  // Tenure
  maxTenureMonths: number;
  // Protection
  floatingRate: boolean;
  noPrepaymentPenalty: boolean; // for floating-rate individual loans, banks can't charge
  // Marketing
  highlights: string[];
}

/** Shorthand rule factory with sensible defaults */
function r(
  overrides: Partial<LenderRule> &
    Pick<LenderRule, "id" | "name" | "type" | "product">
): LenderRule {
  return {
    ageMin: 21,
    ageMax: 60,
    ageMaxSE: 65,
    allowedEmployment: ["salaried", "self-employed", "business-owner"],
    minIncomeSalaried: 25000,
    minIncomeSE: 25000,
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 5000000,
    minLoanAmount: 50000,
    rateMin: 10,
    rateMax: 18,
    processingFee: "Up to 2%",
    maxTenureMonths: 60,
    floatingRate: true,
    noPrepaymentPenalty: true,
    highlights: [],
    ...overrides,
  };
}

const LENDER_RULES: LenderRule[] = [
  /* ─── HOME LOANS ─── */
  r({
    id: "sbi-home",
    name: "State Bank of India",
    type: "public-bank",
    product: "home",
    ageMin: 18,
    ageMax: 70,
    ageMaxSE: 70,
    minIncomeSalaried: 15000,
    minIncomeSE: 15000,
    minScoreBand: "fair",
    maxFOIR: 0.55,
    maxLoanAmount: 50000000,
    maxLTV: 0.9,
    rateMin: 8.25,
    rateMax: 10.15,
    processingFee: "0.35% (min ₹2,000, max ₹10,000)",
    maxTenureMonths: 360,
    highlights: ["Largest home loan provider", "YONO instant sanction"],
  }),
  r({
    id: "hdfc-home",
    name: "HDFC Bank",
    type: "private-bank",
    product: "home",
    ageMin: 21,
    ageMax: 65,
    ageMaxSE: 65,
    minIncomeSalaried: 10000,
    minIncomeSE: 16700, // ₹2L/yr
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 100000000,
    maxLTV: 0.9,
    rateMin: 8.35,
    rateMax: 9.75,
    processingFee: "Up to 0.5% or ₹3,000 (whichever is higher)",
    maxTenureMonths: 360,
    highlights: ["Fastest processing", "Doorstep service"],
  }),
  r({
    id: "icici-home",
    name: "ICICI Bank",
    type: "private-bank",
    product: "home",
    ageMin: 20,
    ageMax: 65,
    ageMaxSE: 70,
    minIncomeSalaried: 20000,
    minIncomeSE: 20000,
    minScoreBand: "good", // published 700+
    maxFOIR: 0.55,
    maxLoanAmount: 50000000,
    maxLTV: 0.9,
    rateMin: 8.4,
    rateMax: 9.85,
    processingFee: "0.5%-1% of loan amount",
    maxTenureMonths: 360,
    highlights: ["700+ CIBIL preferred", "Online tracking"],
  }),
  r({
    id: "axis-home",
    name: "Axis Bank",
    type: "private-bank",
    product: "home",
    ageMin: 21,
    ageMax: 60,
    ageMaxSE: 65,
    minIncomeSalaried: 20000,
    minIncomeSE: 20000,
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 50000000,
    maxLTV: 0.9,
    rateMin: 8.5,
    rateMax: 10.05,
    processingFee: "Up to 1%",
    maxTenureMonths: 360,
    highlights: ["No prepayment charges (floating)", "Digital processing"],
  }),
  r({
    id: "bob-home",
    name: "Bank of Baroda",
    type: "public-bank",
    product: "home",
    ageMin: 18,
    ageMax: 70,
    ageMaxSE: 70,
    minIncomeSalaried: 12000,
    minIncomeSE: 12000,
    minScoreBand: "fair",
    maxFOIR: 0.55,
    maxLoanAmount: 50000000,
    maxLTV: 0.9,
    rateMin: 8.25,
    rateMax: 10.25,
    processingFee: "0.25%-0.50%",
    maxTenureMonths: 360,
    highlights: ["Competitive PSU rates", "Wide branch network"],
  }),
  r({
    id: "pnbhf-home",
    name: "PNB Housing",
    type: "hfc",
    product: "home",
    ageMin: 21,
    ageMax: 60,
    ageMaxSE: 65,
    minIncomeSalaried: 15000,
    minIncomeSE: 20000,
    minScoreBand: "fair",
    maxFOIR: 0.6,
    maxLoanAmount: 50000000,
    maxLTV: 0.9,
    rateMin: 8.5,
    rateMax: 11.0,
    processingFee: "Up to 0.5%",
    maxTenureMonths: 360,
    highlights: ["Flexible eligibility", "Balance transfer options"],
  }),
  r({
    id: "lic-home",
    name: "LIC Housing Finance",
    type: "hfc",
    product: "home",
    ageMin: 21,
    ageMax: 65,
    ageMaxSE: 65,
    minIncomeSalaried: 10000,
    minIncomeSE: 15000,
    minScoreBand: "fair",
    maxFOIR: 0.55,
    maxLoanAmount: 50000000,
    maxLTV: 0.9,
    rateMin: 8.35,
    rateMax: 10.75,
    processingFee: "Up to 0.5%",
    maxTenureMonths: 360,
    highlights: ["Government-backed trust", "Low processing fees"],
  }),
  r({
    id: "kotak-home",
    name: "Kotak Mahindra Bank",
    type: "private-bank",
    product: "home",
    ageMin: 21,
    ageMax: 60,
    ageMaxSE: 65,
    minIncomeSalaried: 20000,
    minIncomeSE: 25000,
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 50000000,
    maxLTV: 0.9,
    rateMin: 8.5,
    rateMax: 9.75,
    processingFee: "Up to 0.5%",
    maxTenureMonths: 240,
    highlights: ["Quick approval", "Dedicated RM"],
  }),

  /* ─── PERSONAL LOANS ─── */
  r({
    id: "sbi-personal",
    name: "State Bank of India",
    type: "public-bank",
    product: "personal",
    ageMin: 21,
    ageMax: 58,
    ageMaxSE: 65,
    minIncomeSalaried: 15000,
    minIncomeSE: 20000,
    minScoreBand: "good",
    maxFOIR: 0.65, // SBI published: EMI/NMI ≤65%
    maxLoanMultiple: 30, // SBI published: loan ≤ 30x NMI
    maxLoanAmount: 5000000,
    rateMin: 11.0,
    rateMax: 14.0,
    processingFee: "Up to 1.5%",
    maxTenureMonths: 72,
    highlights: ["Max 30x monthly income", "Wide network"],
  }),
  r({
    id: "hdfc-personal",
    name: "HDFC Bank",
    type: "private-bank",
    product: "personal",
    ageMin: 21,
    ageMax: 60,
    ageMaxSE: 65,
    minIncomeSalaried: 25000,
    minIncomeSE: 30000,
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 4000000,
    rateMin: 10.5,
    rateMax: 21.0,
    processingFee: "Up to 2.5%",
    maxTenureMonths: 60,
    highlights: ["10-sec approval for existing customers", "Minimal docs"],
  }),
  r({
    id: "icici-personal",
    name: "ICICI Bank",
    type: "private-bank",
    product: "personal",
    ageMin: 20,
    ageMax: 58,
    ageMaxSE: 65,
    minIncomeSalaried: 30000,
    minIncomeSE: 30000,
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 5000000,
    rateMin: 10.5,
    rateMax: 16.0,
    processingFee: "Up to 2.5%",
    maxTenureMonths: 60,
    highlights: ["2-yr work experience required", "Competitive rates"],
  }),
  r({
    id: "axis-personal",
    name: "Axis Bank",
    type: "private-bank",
    product: "personal",
    ageMin: 21,
    ageMax: 60,
    ageMaxSE: 65,
    minIncomeSalaried: 25000,
    minIncomeSE: 30000,
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 4000000,
    rateMin: 10.49,
    rateMax: 22.0,
    processingFee: "Up to 2%",
    maxTenureMonths: 60,
    highlights: ["Fast disbursal", "Flexi repayment"],
  }),
  r({
    id: "bajaj-personal",
    name: "Bajaj Finserv",
    type: "nbfc",
    product: "personal",
    ageMin: 21,
    ageMax: 67,
    ageMaxSE: 67,
    minIncomeSalaried: 22000,
    minIncomeSE: 25000,
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 4000000,
    rateMin: 11.0,
    rateMax: 26.0,
    processingFee: "Up to 3.5%",
    maxTenureMonths: 84,
    highlights: ["High upper age limit", "Quick online approval"],
  }),
  r({
    id: "kotak-personal",
    name: "Kotak Mahindra Bank",
    type: "private-bank",
    product: "personal",
    ageMin: 21,
    ageMax: 60,
    ageMaxSE: 65,
    minIncomeSalaried: 20000,
    minIncomeSE: 25000,
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 4000000,
    rateMin: 10.99,
    rateMax: 24.0,
    processingFee: "Up to 2.5%",
    maxTenureMonths: 60,
    highlights: ["Dedicated manager", "Online tracking"],
  }),
  r({
    id: "indusind-personal",
    name: "IndusInd Bank",
    type: "private-bank",
    product: "personal",
    ageMin: 21,
    ageMax: 60,
    ageMaxSE: 65,
    minIncomeSalaried: 25000,
    minIncomeSE: 30000,
    minScoreBand: "good",
    maxFOIR: 0.55,
    maxLoanAmount: 3000000,
    rateMin: 10.49,
    rateMax: 25.0,
    processingFee: "Up to 2.5%",
    maxTenureMonths: 60,
    highlights: ["Digital-first process", "Wide coverage"],
  }),

  /* ─── TWO-WHEELER LOANS ─── */
  r({
    id: "hdfc-tw",
    name: "HDFC Bank",
    type: "private-bank",
    product: "two-wheeler",
    ageMin: 21,
    ageMax: 65,
    ageMaxSE: 65,
    minIncomeSalaried: 10000,
    minIncomeSE: 12000,
    minScoreBand: "fair",
    maxFOIR: 0.6,
    maxLoanAmount: 500000,
    maxLTV: 0.9,
    rateMin: 7.99,
    rateMax: 14.0,
    processingFee: "Up to 2.5%",
    maxTenureMonths: 48,
    highlights: ["Low starting rate", "Nationwide network"],
  }),
  r({
    id: "icici-tw",
    name: "ICICI Bank",
    type: "private-bank",
    product: "two-wheeler",
    ageMin: 21,
    ageMax: 65,
    ageMaxSE: 65,
    minIncomeSalaried: 12000,
    minIncomeSE: 15000,
    minScoreBand: "good", // ICICI published 700+
    maxFOIR: 0.6,
    maxLoanAmount: 500000,
    maxLTV: 0.9,
    rateMin: 8.0,
    rateMax: 14.5,
    processingFee: "Up to 2.5%",
    maxTenureMonths: 48,
    highlights: ["Score 700+ preferred", "Quick disbursal"],
  }),
  r({
    id: "axis-tw",
    name: "Axis Bank",
    type: "private-bank",
    product: "two-wheeler",
    ageMin: 21,
    ageMax: 60,
    ageMaxSE: 65,
    minIncomeSalaried: 12000, // ₹1.44L/yr
    minIncomeSE: 20833, // ₹2.5L/yr
    minScoreBand: "fair",
    maxFOIR: 0.6,
    maxLoanAmount: 500000,
    maxLTV: 1.0, // Axis published up to 100%
    rateMin: 8.5,
    rateMax: 15.0,
    processingFee: "Up to 2%",
    maxTenureMonths: 48,
    highlights: ["Up to 100% on-road funding", "Includes electric vehicles"],
  }),
  r({
    id: "bajaj-tw",
    name: "Bajaj Finance",
    type: "nbfc",
    product: "two-wheeler",
    ageMin: 18,
    ageMax: 70,
    ageMaxSE: 70,
    minIncomeSalaried: 10000,
    minIncomeSE: 12000,
    minScoreBand: "good", // Bajaj published 700+
    maxFOIR: 0.6,
    maxLoanAmount: 500000,
    maxLTV: 1.0,
    rateMin: 7.99,
    rateMax: 30.0,
    processingFee: "Up to 3.5%",
    maxTenureMonths: 60,
    highlights: ["Widest age range (18-70)", "Zero down payment options"],
  }),
  r({
    id: "hero-tw",
    name: "Hero FinCorp",
    type: "nbfc",
    product: "two-wheeler",
    ageMin: 18,
    ageMax: 65,
    ageMaxSE: 65,
    minIncomeSalaried: 8000,
    minIncomeSE: 10000,
    minScoreBand: "fair",
    maxFOIR: 0.65,
    maxLoanAmount: 300000,
    maxLTV: 1.0,
    rateMin: 8.5,
    rateMax: 16.0,
    processingFee: "Up to 2.5%",
    maxTenureMonths: 48,
    highlights: ["Low income threshold", "Dealer financing"],
  }),
  r({
    id: "tvs-tw",
    name: "TVS Credit",
    type: "nbfc",
    product: "two-wheeler",
    ageMin: 18,
    ageMax: 65,
    ageMaxSE: 65,
    minIncomeSalaried: 8000,
    minIncomeSE: 10000,
    minScoreBand: "fair",
    maxFOIR: 0.65,
    maxLoanAmount: 300000,
    maxLTV: 1.0,
    rateMin: 8.5,
    rateMax: 18.0,
    processingFee: "Up to 3%",
    maxTenureMonths: 48,
    highlights: ["Accessible to thin-file borrowers", "Quick at-dealer processing"],
  }),

  /* ─── BUSINESS LOANS ─── */
  r({
    id: "hdfc-biz",
    name: "HDFC Bank",
    type: "private-bank",
    product: "business",
    ageMin: 21,
    ageMax: 65,
    ageMaxSE: 65,
    allowedEmployment: ["self-employed", "business-owner"],
    minIncomeSalaried: 0,
    minIncomeSE: 25000,
    minScoreBand: "good",
    minBusinessVintageYears: 3,
    minAnnualTurnover: 2000000,
    maxFOIR: 0.55,
    maxLoanAmount: 5000000,
    rateMin: 11.0,
    rateMax: 21.5,
    processingFee: "Up to 2%",
    maxTenureMonths: 48,
    highlights: ["Collateral-free", "Overdraft facility available"],
  }),
  r({
    id: "icici-biz",
    name: "ICICI Bank",
    type: "private-bank",
    product: "business",
    ageMin: 21,
    ageMax: 65,
    ageMaxSE: 65,
    allowedEmployment: ["self-employed", "business-owner"],
    minIncomeSalaried: 0,
    minIncomeSE: 25000,
    minScoreBand: "good",
    minBusinessVintageYears: 3,
    minAnnualTurnover: 2000000,
    maxFOIR: 0.55,
    maxLoanAmount: 5000000,
    rateMin: 14.0,
    rateMax: 20.0,
    processingFee: "Up to 2%",
    maxTenureMonths: 48,
    highlights: ["6-month bank statement processing", "SME focused"],
  }),
  r({
    id: "axis-biz",
    name: "Axis Bank",
    type: "private-bank",
    product: "business",
    ageMin: 21,
    ageMax: 65,
    ageMaxSE: 65,
    allowedEmployment: ["self-employed", "business-owner"],
    minIncomeSalaried: 0,
    minIncomeSE: 25000,
    minScoreBand: "good",
    minBusinessVintageYears: 3,
    minAnnualTurnover: 3000000, // ₹30L published
    maxFOIR: 0.55,
    maxLoanAmount: 7500000, // ₹75L published
    rateMin: 14.25,
    rateMax: 21.0,
    processingFee: "Up to 2%",
    maxTenureMonths: 60,
    highlights: ["Up to ₹75 Lakh collateral-free", "Longer tenure option"],
  }),
  r({
    id: "bajaj-biz",
    name: "Bajaj Finserv",
    type: "nbfc",
    product: "business",
    ageMin: 21,
    ageMax: 80,
    ageMaxSE: 80,
    allowedEmployment: ["self-employed", "business-owner"],
    minIncomeSalaried: 0,
    minIncomeSE: 20000,
    minScoreBand: "fair", // Bajaj published 685+
    minBusinessVintageYears: 3,
    minAnnualTurnover: 1500000,
    maxFOIR: 0.55,
    maxLoanAmount: 5000000,
    rateMin: 14.0,
    rateMax: 30.0,
    processingFee: "Up to 3.5%",
    maxTenureMonths: 84,
    highlights: ["Score 685+ accepted", "High age limit (80)"],
  }),
  r({
    id: "tata-biz",
    name: "Tata Capital",
    type: "nbfc",
    product: "business",
    ageMin: 21,
    ageMax: 65,
    ageMaxSE: 65,
    allowedEmployment: ["self-employed", "business-owner"],
    minIncomeSalaried: 0,
    minIncomeSE: 20000,
    minScoreBand: "good",
    minBusinessVintageYears: 2,
    minAnnualTurnover: 1200000,
    maxFOIR: 0.55,
    maxLoanAmount: 7500000,
    rateMin: 12.0,
    rateMax: 26.0,
    processingFee: "Up to 2.5%",
    maxTenureMonths: 60,
    highlights: ["Lower vintage requirement (2 yrs)", "Flexible docs"],
  }),
];

/* ═══════════════════════════════════════════
   Math Helpers
   ═══════════════════════════════════════════ */

/** Standard present-value-of-annuity formula to compute max loan principal */
function maxLoanFromEMI(
  maxEMI: number,
  annualRate: number,
  tenureMonths: number
): number {
  if (maxEMI <= 0 || annualRate <= 0 || tenureMonths <= 0) return 0;
  const r = annualRate / 12 / 100;
  const n = tenureMonths;
  const factor = (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
  return Math.round((maxEMI * factor) / 1000) * 1000; // round to nearest 1000
}

/** Compute EMI for a given principal, rate, and tenure */
function computeEMI(
  principal: number,
  annualRate: number,
  tenureMonths: number
): number {
  if (principal <= 0 || annualRate <= 0 || tenureMonths <= 0) return 0;
  const r = annualRate / 12 / 100;
  const n = tenureMonths;
  return Math.round(principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
}

/**
 * Estimate the interest rate a borrower would get from a specific lender.
 * Based on: credit score band, employment type, and lender's published rate range.
 *
 * Rationale: Banks offer their best rates to excellent-credit salaried borrowers
 * and progressively higher rates to riskier profiles. This creates meaningful
 * differentiation between lenders for the same borrower.
 */
function estimateRate(
  rule: LenderRule,
  scoreBand: CreditScoreBand,
  employmentType: EmploymentType
): number {
  const range = rule.rateMax - rule.rateMin;
  // Score factor: where in the range does this score land?
  let scoreFactor: number;
  switch (scoreBand) {
    case "excellent":
      scoreFactor = 0.0; // best rate
      break;
    case "good":
      scoreFactor = 0.25;
      break;
    case "fair":
      scoreFactor = 0.55;
      break;
    case "low-or-none":
      scoreFactor = 0.85;
      break;
  }
  // Employment adjustment: self-employed/business pay slightly more
  let employmentAdj = 0;
  if (employmentType === "self-employed")
    employmentAdj = Math.min(0.15, range * 0.05);
  if (employmentType === "business-owner")
    employmentAdj = Math.min(0.25, range * 0.08);
  const estimated = rule.rateMin + range * scoreFactor + employmentAdj;
  return Math.round(Math.min(estimated, rule.rateMax) * 100) / 100;
}

/**
 * Estimate approval working days based on product, lender type, and confidence.
 *
 * Rationale:
 * - Home/business loans take longer due to documentation and valuation.
 * - PSU banks typically process slower; NBFCs are faster.
 * - Strong profiles (high confidence) get prioritised processing.
 * - These are realistic ranges based on published lender benchmarks
 *   (SBI YONO, HDFC doorstep, Bajaj instant approval, MSME 14-day mandate, etc.)
 */
function estimateApprovalDays(
  product: LoanType,
  lenderType: "public-bank" | "private-bank" | "nbfc" | "hfc",
  confidence: "high" | "medium" | "low"
): { min: number; max: number } {
  // Product-based baseline (working days)
  let min: number, max: number;
  switch (product) {
    case "home":
      // In-principal approval: 3-7 business days
      min = 3;
      max = 7;
      break;
    case "personal":
    case "two-wheeler":
    case "business":
      // All other products: 1-2 business days
      min = 1;
      max = 2;
      break;
  }

  return { min, max };
}

/** Parse processing fee percentage from display string */
function parseFeePercent(feeStr: string): number {
  // Extract the first number followed by %
  const match = feeStr.match(/([\d.]+)\s*%/);
  return match ? parseFloat(match[1]) : 2.0;
}

/** Check if a credit score band meets minimum */
function scoreBandMeetsMin(
  actual: CreditScoreBand,
  minimum: CreditScoreBand
): boolean {
  const order: CreditScoreBand[] = [
    "low-or-none",
    "fair",
    "good",
    "excellent",
  ];
  return order.indexOf(actual) >= order.indexOf(minimum);
}

/* ═══════════════════════════════════════════
   Lender Matching Engine
   ═══════════════════════════════════════════ */

function evaluateLender(
  profile: BorrowerProfile,
  rule: LenderRule
): LenderMatch | null {
  const passedGates: string[] = [];
  const warnings: string[] = [];
  let eligible = true;

  const isSalaried = profile.employmentType === "salaried";
  const ageMax = isSalaried ? rule.ageMax : rule.ageMaxSE;
  const minIncome = isSalaried
    ? rule.minIncomeSalaried
    : rule.minIncomeSE;

  // ─── Gate 1: Employment type ───
  if (!rule.allowedEmployment.includes(profile.employmentType)) {
    return null; // hard exclusion
  }
  passedGates.push("Employment type accepted");

  // ─── Gate 2: Age ───
  if (profile.age < rule.ageMin || profile.age > ageMax) {
    return null; // hard exclusion
  }
  passedGates.push("Age within eligibility window");

  // ─── Gate 3: Income ───
  if (profile.monthlyIncome < minIncome) {
    return null; // hard exclusion
  }
  passedGates.push("Income meets minimum threshold");

  // ─── Gate 4: Credit score ───
  if (!scoreBandMeetsMin(profile.creditScoreBand, rule.minScoreBand)) {
    warnings.push(
      `Credit score below ${rule.name}'s minimum (needs ${SCORE_BANDS[rule.minScoreBand].label})`
    );
    eligible = false;
  } else {
    passedGates.push("Credit score meets requirement");
  }

  // ─── Gate 5: Business-specific ───
  if (rule.product === "business") {
    if (
      rule.minBusinessVintageYears &&
      profile.businessVintageYears !== undefined &&
      profile.businessVintageYears < rule.minBusinessVintageYears
    ) {
      warnings.push(
        `Business vintage below ${rule.minBusinessVintageYears} years`
      );
      eligible = false;
    }
    if (
      rule.minAnnualTurnover &&
      profile.annualTurnover !== undefined &&
      profile.annualTurnover < rule.minAnnualTurnover
    ) {
      warnings.push(
        `Annual turnover below ₹${(rule.minAnnualTurnover / 100000).toFixed(0)} Lakh`
      );
      eligible = false;
    }
    // If business data not provided, assume they might qualify
    if (
      rule.minBusinessVintageYears &&
      profile.businessVintageYears === undefined
    ) {
      passedGates.push("Business vintage (assumed eligible)");
    }
    if (rule.minAnnualTurnover && profile.annualTurnover === undefined) {
      passedGates.push("Annual turnover (assumed eligible)");
    }
  }

  // ─── Compute max eligible amount ───
  // Use PROFILE-CALIBRATED rate (not midpoint) for realistic differentiation
  const estRate = estimateRate(
    rule,
    profile.creditScoreBand,
    profile.employmentType
  );

  // FOIR-based max
  const maxEMIFromFOIR =
    rule.maxFOIR * profile.monthlyIncome - profile.existingEMIs;
  let maxFromFOIR = maxLoanFromEMI(maxEMIFromFOIR, estRate, rule.maxTenureMonths);

  // Loan multiple cap (e.g., SBI personal: 30x NMI)
  if (rule.maxLoanMultiple) {
    const maxFromMultiple = rule.maxLoanMultiple * profile.monthlyIncome;
    maxFromFOIR = Math.min(maxFromFOIR, maxFromMultiple);
  }

  // Product cap
  let maxAmount = Math.min(maxFromFOIR, rule.maxLoanAmount);

  // LTV cap for secured loans
  if (rule.maxLTV) {
    let assetValue = 0;
    if (rule.product === "home" && profile.propertyValue) {
      // For home loans, also apply RBI LTV cap
      const rbiLTV = getRbiHomeLTV(maxFromFOIR);
      const effectiveLTV = Math.min(rule.maxLTV, rbiLTV);
      assetValue = profile.propertyValue;
      const maxFromLTV = assetValue * effectiveLTV;
      maxAmount = Math.min(maxAmount, maxFromLTV);
      if (maxFromLTV < maxFromFOIR) {
        passedGates.push("LTV within RBI cap");
      }
    } else if (rule.product === "two-wheeler" && profile.vehicleOnRoadPrice) {
      assetValue = profile.vehicleOnRoadPrice;
      const maxFromLTV = assetValue * rule.maxLTV;
      maxAmount = Math.min(maxAmount, maxFromLTV);
    }
  }

  maxAmount = Math.max(maxAmount, 0);
  if (maxAmount < rule.minLoanAmount) {
    return null; // doesn't meet minimum
  }

  // Round to nearest 10k
  maxAmount = Math.round(maxAmount / 10000) * 10000;

  // ─── Compute confidence ───
  const foirPost =
    profile.monthlyIncome > 0
      ? (profile.existingEMIs +
          computeEMI(maxAmount * 0.7, estRate, rule.maxTenureMonths)) /
        profile.monthlyIncome
      : 1;

  let confidence: "high" | "medium" | "low" = "medium";
  if (
    eligible &&
    scoreBandMeetsMin(profile.creditScoreBand, "good") &&
    foirPost <= FOIR_MODERATE
  ) {
    confidence = "high";
  } else if (!eligible) {
    confidence = "low";
  }

  // ─── Compute EMI and total cost at max amount ───
  const emi = computeEMI(maxAmount, estRate, rule.maxTenureMonths);
  const totalPayment = emi * rule.maxTenureMonths;
  const totalInterest = totalPayment - maxAmount;
  const feePercent = parseFeePercent(rule.processingFee);
  const processingFeeEstimate = Math.round((maxAmount * feePercent) / 100);
  const totalCost = maxAmount + totalInterest + processingFeeEstimate;

  // ─── Estimate approval timeline ───
  const approvalDays = estimateApprovalDays(
    rule.product,
    rule.type,
    confidence
  );

  return {
    lenderId: rule.id,
    lenderName: rule.name,
    lenderType: rule.type,
    maxEligibleAmount: maxAmount,
    rateMin: rule.rateMin,
    rateMax: rule.rateMax,
    estimatedRate: estRate,
    estimatedEMI: emi,
    totalInterest,
    totalCost,
    processingFeeEstimate,
    processingFeeLabel: rule.processingFee,
    maxTenureYears: Math.round(rule.maxTenureMonths / 12),
    maxTenureMonths: rule.maxTenureMonths,
    approvalDaysMin: approvalDays.min,
    approvalDaysMax: approvalDays.max,
    confidence,
    passedGates,
    warnings,
    highlights: rule.highlights,
    bestForTag: null, // set later in computeEligibility
  };
}

/* ═══════════════════════════════════════════
   Main Eligibility Computation
   ═══════════════════════════════════════════ */

export function computeEligibility(
  profile: BorrowerProfile
): EligibilityOutput {
  const productRules = LENDER_RULES.filter(
    (r) => r.product === profile.loanType
  );

  // Evaluate all lenders for this product
  const allMatches: LenderMatch[] = [];
  for (const rule of productRules) {
    const match = evaluateLender(profile, rule);
    if (match) allMatches.push(match);
  }

  // Sort: high confidence first, then by estimated rate ascending (best rate first)
  allMatches.sort((a, b) => {
    const confOrder = { high: 3, medium: 2, low: 1 };
    if (confOrder[b.confidence] !== confOrder[a.confidence])
      return confOrder[b.confidence] - confOrder[a.confidence];
    if (a.estimatedRate !== b.estimatedRate)
      return a.estimatedRate - b.estimatedRate; // lowest rate first
    return b.maxEligibleAmount - a.maxEligibleAmount;
  });

  // ─── Assign "Best for" tags ───
  if (allMatches.length >= 2) {
    const byRate = [...allMatches].sort(
      (a, b) => a.estimatedRate - b.estimatedRate
    );
    const byAmount = [...allMatches].sort(
      (a, b) => b.maxEligibleAmount - a.maxEligibleAmount
    );
    const byEMI = [...allMatches].sort(
      (a, b) => a.estimatedEMI - b.estimatedEMI
    );
    const byTotalCost = [...allMatches].sort(
      (a, b) => a.totalCost - b.totalCost
    );
    const byFee = [...allMatches].sort(
      (a, b) => a.processingFeeEstimate - b.processingFeeEstimate
    );

    // Only assign if the winner is clearly better
    if (byRate[0].estimatedRate < byRate[1].estimatedRate)
      byRate[0].bestForTag = byRate[0].bestForTag || "Lowest rate";
    if (byAmount[0].maxEligibleAmount > byAmount[1].maxEligibleAmount)
      byAmount[0].bestForTag = byAmount[0].bestForTag || "Highest amount";
    if (byTotalCost[0].totalCost < byTotalCost[1].totalCost)
      byTotalCost[0].bestForTag =
        byTotalCost[0].bestForTag || "Lowest total cost";
    if (byFee[0].processingFeeEstimate < byFee[1].processingFeeEstimate)
      byFee[0].bestForTag = byFee[0].bestForTag || "Lowest fees";
    // EMI only if different from rate winner
    if (
      byEMI[0].lenderId !== byRate[0].lenderId &&
      byEMI[0].estimatedEMI < byEMI[1].estimatedEMI
    )
      byEMI[0].bestForTag = byEMI[0].bestForTag || "Lowest EMI";

    // Fastest approval
    const bySpeed = [...allMatches].sort(
      (a, b) => a.approvalDaysMin - b.approvalDaysMin
    );
    if (
      bySpeed[0].approvalDaysMin < bySpeed[1].approvalDaysMin
    )
      bySpeed[0].bestForTag =
        bySpeed[0].bestForTag || "Fastest approval";
  }

  // ─── FOIR Analysis ───
  const currentFOIR =
    profile.monthlyIncome > 0
      ? (profile.existingEMIs / profile.monthlyIncome) * 100
      : 0;
  const maxAffordableEMI = Math.max(
    0.55 * profile.monthlyIncome - profile.existingEMIs,
    0
  );
  let foirStatus: "healthy" | "moderate" | "stretched" = "healthy";
  if (currentFOIR / 100 > FOIR_MODERATE) foirStatus = "stretched";
  else if (currentFOIR / 100 > FOIR_HEALTHY) foirStatus = "moderate";

  const foirLabel =
    foirStatus === "healthy"
      ? "Healthy. Maximum borrowing capacity preserved."
      : foirStatus === "moderate"
      ? "Moderate. Some lenders may restrict eligibility."
      : "Stretched. May significantly limit loan options.";

  const foir: FOIRAnalysis = {
    currentFOIR: Math.round(currentFOIR * 10) / 10,
    maxAffordableEMI: Math.round(maxAffordableEMI),
    foirStatus,
    foirLabel,
  };

  // ─── Aggregate results ───
  const highConfidence = allMatches.filter((m) => m.confidence === "high");
  const hasMatches = allMatches.length > 0;

  const maxAmount = hasMatches
    ? Math.max(...allMatches.map((m) => m.maxEligibleAmount))
    : 0;
  const minAmount = hasMatches
    ? Math.round(maxAmount * 0.6 / 10000) * 10000 // conservative estimate
    : 0;
  const bestRateMin = hasMatches
    ? Math.min(...allMatches.map((m) => m.rateMin))
    : 0;
  const bestRateMax = hasMatches
    ? Math.min(...allMatches.map((m) => m.rateMax))
    : 0;
  const maxTenureYears = hasMatches
    ? Math.max(...allMatches.map((m) => m.maxTenureYears))
    : 0;

  // ─── Overall confidence ───
  let overallConfidence: "high" | "medium" | "low" = "low";
  const confidenceReasons: string[] = [];

  if (highConfidence.length >= 3) {
    overallConfidence = "high";
    confidenceReasons.push(
      `${highConfidence.length} lenders are a strong match for your profile`
    );
  } else if (allMatches.length >= 3) {
    overallConfidence = "medium";
    confidenceReasons.push(
      `${allMatches.length} lenders found, but some criteria need attention`
    );
  } else if (allMatches.length > 0) {
    overallConfidence = "low";
    confidenceReasons.push(
      "Limited lender matches. See improvement tips below."
    );
  }

  if (scoreBandMeetsMin(profile.creditScoreBand, "good")) {
    confidenceReasons.push(
      `CIBIL score band (${SCORE_BANDS[profile.creditScoreBand].label}) meets most lender requirements`
    );
  }
  if (foirStatus === "healthy") {
    confidenceReasons.push(
      `FOIR at ${foir.currentFOIR}% is in the healthy range (<40%)`
    );
  }

  // ─── Borrower protection ───
  const protection: ProtectionInfo = {
    highlights: [],
    warnings: [],
  };

  if (
    profile.loanType === "home" ||
    profile.loanType === "two-wheeler"
  ) {
    protection.highlights.push(
      "No prepayment penalty on floating-rate loans to individuals (RBI mandate)"
    );
  }
  if (profile.loanType === "home") {
    protection.highlights.push(
      "LTV capped by RBI for your safety (75-90% based on loan amount)"
    );
    protection.highlights.push(
      "Lenders must provide rate-reset options in rising interest cycles"
    );
  }
  protection.highlights.push(
    "Key Facts Statement (KFS) with full APR disclosure required before sanction"
  );
  protection.highlights.push(
    "Penal charges (if any) apply only on defaulted amount and cannot be capitalised"
  );

  if (foirStatus === "stretched") {
    protection.warnings.push(
      "Your current obligations are high. Taking additional debt increases financial stress."
    );
  }

  // ─── Improvement tips ───
  const improvementTips: string[] = [];
  if (!scoreBandMeetsMin(profile.creditScoreBand, "good")) {
    const higherBandLenders = productRules.filter(
      (r) => r.minScoreBand === "good" || r.minScoreBand === "excellent"
    ).length;
    improvementTips.push(
      `Improving your CIBIL score to 700+ would unlock ${higherBandLenders} more lender${higherBandLenders > 1 ? "s" : ""}`
    );
  }
  if (foirStatus === "stretched") {
    improvementTips.push(
      "Reducing existing EMIs would improve your debt-to-income ratio and eligibility"
    );
  }
  if (profile.loanType === "home" && !profile.propertyValue) {
    improvementTips.push(
      "Adding property value helps compute exact LTV-based eligibility"
    );
  }
  if (allMatches.length === 0) {
    improvementTips.push(
      "Consider applying with a co-applicant to boost combined income eligibility"
    );
    if (profile.monthlyIncome < 25000) {
      improvementTips.push(
        "Most lenders require minimum ₹15,000-₹30,000 monthly income for this product"
      );
    }
  }

  // ─── Savings Analysis ───
  let savings: SavingsAnalysis | null = null;
  if (allMatches.length >= 2) {
    // Use the min max-amount among the top 3 matches for fair comparison
    const top3 = allMatches.slice(0, Math.min(3, allMatches.length));
    const comparisonAmount =
      Math.round(
        Math.min(...top3.map((m) => m.maxEligibleAmount)) / 100000
      ) * 100000;
    const comparisonTenure = Math.max(
      ...top3.map((m) => m.maxTenureMonths)
    );

    // Compute EMI & interest at comparison amount for each match
    const comparisons = allMatches
      .filter((m) => m.maxEligibleAmount >= comparisonAmount)
      .map((m) => {
        const emi = computeEMI(comparisonAmount, m.estimatedRate, comparisonTenure);
        const totalPaid = emi * comparisonTenure;
        const interest = totalPaid - comparisonAmount;
        const fee = Math.round(
          (comparisonAmount * parseFeePercent(m.processingFeeLabel)) / 100
        );
        return { ...m, cEMI: emi, cInterest: interest, cFee: fee };
      });

    if (comparisons.length >= 2) {
      const bestEMI = Math.min(...comparisons.map((c) => c.cEMI));
      const worstEMI = Math.max(...comparisons.map((c) => c.cEMI));
      const bestInterest = Math.min(...comparisons.map((c) => c.cInterest));
      const worstInterest = Math.max(
        ...comparisons.map((c) => c.cInterest)
      );
      const bestEstRate = Math.min(
        ...comparisons.map((c) => c.estimatedRate)
      );
      const worstEstRate = Math.max(
        ...comparisons.map((c) => c.estimatedRate)
      );
      const lowestFee = Math.min(...comparisons.map((c) => c.cFee));
      const highestFee = Math.max(...comparisons.map((c) => c.cFee));

      savings = {
        comparisonAmount,
        bestEstimatedRate: bestEstRate,
        worstEstimatedRate: worstEstRate,
        bestEMI,
        worstEMI,
        emiSavingsPerMonth: worstEMI - bestEMI,
        totalInterestSaved: worstInterest - bestInterest,
        totalCostSaved:
          worstInterest - bestInterest + (highestFee - lowestFee),
        lowestFee,
        highestFee,
        comparisonTenureMonths: comparisonTenure,
      };
    }
  }

  // ─── Fastest approval ───
  const fastestApprovalDays =
    allMatches.length > 0
      ? {
          min: Math.min(...allMatches.map((m) => m.approvalDaysMin)),
          max: Math.min(...allMatches.map((m) => m.approvalDaysMax)),
        }
      : { min: 0, max: 0 };

  return {
    minAmount,
    maxAmount,
    bestRateMin,
    bestRateMax,
    maxTenureYears,
    foir,
    matchedLenders: allMatches,
    totalLendersChecked: productRules.length,
    overallConfidence,
    confidenceReasons,
    savings,
    fastestApprovalDays,
    protection,
    improvementTips,
  };
}

/* ═══════════════════════════════════════════
   Utility exports for wizard inline feedback
   ═══════════════════════════════════════════ */

/** Count matching lenders at any point during the flow */
export function countMatchingLenders(
  partialProfile: Partial<BorrowerProfile> & { loanType: LoanType }
): number {
  const productRules = LENDER_RULES.filter(
    (r) => r.product === partialProfile.loanType
  );

  let count = productRules.length;

  for (const rule of productRules) {
    // Employment check
    if (
      partialProfile.employmentType &&
      !rule.allowedEmployment.includes(partialProfile.employmentType)
    ) {
      count--;
      continue;
    }
    // Age check
    if (partialProfile.age !== undefined) {
      const isSalaried = partialProfile.employmentType === "salaried";
      const ageMax = isSalaried ? rule.ageMax : rule.ageMaxSE;
      if (partialProfile.age < rule.ageMin || partialProfile.age > ageMax) {
        count--;
        continue;
      }
    }
    // Income check
    if (partialProfile.monthlyIncome !== undefined) {
      const isSalaried = partialProfile.employmentType === "salaried";
      const minIncome = isSalaried
        ? rule.minIncomeSalaried
        : rule.minIncomeSE;
      if (partialProfile.monthlyIncome > 0 && partialProfile.monthlyIncome < minIncome) {
        count--;
        continue;
      }
    }
    // Credit score check
    if (partialProfile.creditScoreBand) {
      if (
        !scoreBandMeetsMin(
          partialProfile.creditScoreBand,
          rule.minScoreBand
        )
      ) {
        count--;
        continue;
      }
    }
  }

  return count;
}

/** Quick estimate range during flow (before full computation) */
export function quickEstimate(
  loanType: LoanType,
  monthlyIncome: number,
  existingEMIs: number = 0
): { min: number; max: number } {
  const productRules = LENDER_RULES.filter((r) => r.product === loanType);
  if (productRules.length === 0 || monthlyIncome <= 0)
    return { min: 0, max: 0 };

  const bestRate = Math.min(...productRules.map((r) => r.rateMin));
  const maxTenure = Math.max(...productRules.map((r) => r.maxTenureMonths));
  const maxFOIR = Math.max(...productRules.map((r) => r.maxFOIR));

  const maxEMI = maxFOIR * monthlyIncome - existingEMIs;
  const maxAmount = maxLoanFromEMI(maxEMI, bestRate, maxTenure);
  const minAmount = Math.round(maxAmount * 0.5 / 10000) * 10000;

  return {
    min: Math.max(minAmount, 0),
    max: Math.max(maxAmount, 0),
  };
}

/** Format INR amount */
export function formatINR(n: number): string {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(1)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)} Lakh`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export { SCORE_BANDS };
