// ─── SEO Data Structure for Scalable Page Generation ───

export interface City {
  name: string;
  slug: string;
  state: string;
  priority: number;
  areas?: Area[];
}

export interface Area {
  name: string;
  slug: string;
  priority: number;
}

export interface LoanType {
  name: string;
  slug: string;
  keywords: string[];
  rate: string;
  maxAmount: string;
  tenure: string;
}

// ─── Top Cities (Hyderabad Priority 1) ───
export const TOP_CITIES: City[] = [
  {
    name: "Hyderabad",
    slug: "hyderabad",
    state: "Telangana",
    priority: 1,
  },
  {
    name: "Bangalore",
    slug: "bangalore",
    state: "Karnataka",
    priority: 1,
  },
  {
    name: "Mumbai",
    slug: "mumbai",
    state: "Maharashtra",
    priority: 1,
  },
  {
    name: "Delhi",
    slug: "delhi",
    state: "Delhi",
    priority: 1,
  },
  {
    name: "Chennai",
    slug: "chennai",
    state: "Tamil Nadu",
    priority: 1,
  },
];

// ─── Hyderabad Areas ───
export const HYDERABAD_AREAS: Area[] = [
  { name: "Gachibowli", slug: "gachibowli", priority: 1 },
  { name: "Hitech City", slug: "hitech-city", priority: 1 },
  { name: "Banjara Hills", slug: "banjara-hills", priority: 1 },
  { name: "Jubilee Hills", slug: "jubilee-hills", priority: 1 },
  { name: "Kondapur", slug: "kondapur", priority: 1 },
  { name: "Madhapur", slug: "madhapur", priority: 1 },
  { name: "Kukatpally", slug: "kukatpally", priority: 1 },
  { name: "Miyapur", slug: "miyapur", priority: 1 },
  { name: "Manikonda", slug: "manikonda", priority: 1 },
  { name: "Financial District", slug: "financial-district", priority: 1 },
];

// ─── Loan Types ───
export const LOAN_TYPES: LoanType[] = [
  {
    name: "Home Loan",
    slug: "home-loan",
    keywords: ["home loan", "housing loan", "home finance"],
    rate: "8.25%",
    maxAmount: "₹5 Cr",
    tenure: "30 years",
  },
  {
    name: "Personal Loan",
    slug: "personal-loan",
    keywords: ["personal loan", "unsecured loan"],
    rate: "10.25%",
    maxAmount: "₹40 Lakh",
    tenure: "5 years",
  },
  {
    name: "Two-Wheeler Loan",
    slug: "two-wheeler-loan",
    keywords: ["bike loan", "two wheeler finance"],
    rate: "7.99%",
    maxAmount: "100% funding",
    tenure: "5 years",
  },
  {
    name: "Business Loan",
    slug: "business-loan",
    keywords: ["business loan", "commercial loan"],
    rate: "14%",
    maxAmount: "₹50 Lakh",
    tenure: "5 years",
  },
];

// ─── Phase 1: Core Categories for Hyderabad ───
export const PHASE1_CATEGORIES = [
  {
    slug: "home-loan-hyderabad",
    title: "Home Loan in Hyderabad",
    description: "Compare best home loan offers from 30+ banks in Hyderabad. Interest rates starting 8.25%, loan up to ₹5 Cr, instant eligibility check. No CIBIL impact.",
    keywords: ["home loan hyderabad", "housing loan hyderabad", "home finance hyderabad", "best home loan rates hyderabad"],
    type: "city-loan",
    loanType: "home-loan",
    city: "hyderabad",
  },
  {
    slug: "personal-loan-hyderabad",
    title: "Personal Loan in Hyderabad",
    description: "Get personal loan in Hyderabad with rates starting 10.25%. Quick approval, minimal docs, up to ₹40 Lakh. Compare offers from 30+ banks on Credrace.",
    keywords: ["personal loan hyderabad", "instant personal loan hyderabad", "personal loan online hyderabad"],
    type: "city-loan",
    loanType: "personal-loan",
    city: "hyderabad",
  },
  {
    slug: "home-loan-hyderabad-without-salary-slip",
    title: "Home Loan Without Salary Slip in Hyderabad",
    description: "Get home loan in Hyderabad without salary slip. Options for self-employed, business owners. Compare offers from 30+ lenders. Instant eligibility check.",
    keywords: ["home loan without salary slip hyderabad", "home loan self employed hyderabad", "home loan without documents hyderabad"],
    type: "special",
    loanType: "home-loan",
    city: "hyderabad",
  },
  {
    slug: "best-home-loan-rates-hyderabad-2025",
    title: "Best Home Loan Rates in Hyderabad 2025",
    description: "Compare best home loan interest rates in Hyderabad 2025. Current rates from 8.25%, updated daily. See rates from SBI, HDFC, ICICI, Axis and 27+ more banks.",
    keywords: ["best home loan rates hyderabad", "lowest home loan interest rate hyderabad", "home loan rates hyderabad 2025"],
    type: "rates",
    loanType: "home-loan",
    city: "hyderabad",
  },
  {
    slug: "home-loan-eligibility-hyderabad",
    title: "Home Loan Eligibility in Hyderabad",
    description: "Check home loan eligibility in Hyderabad. Calculate your eligible loan amount instantly. Age, income, CIBIL score requirements. No impact on credit score.",
    keywords: ["home loan eligibility hyderabad", "home loan eligibility calculator hyderabad", "home loan eligibility check hyderabad"],
    type: "eligibility",
    loanType: "home-loan",
    city: "hyderabad",
  },
  {
    slug: "home-loan-documents-hyderabad",
    title: "Home Loan Documents Required in Hyderabad",
    description: "Complete list of documents required for home loan in Hyderabad. Identity proof, income proof, property documents. Download checklist PDF.",
    keywords: ["home loan documents required hyderabad", "home loan documents list hyderabad", "home loan documents checklist hyderabad"],
    type: "documents",
    loanType: "home-loan",
    city: "hyderabad",
  },
  {
    slug: "home-loan-process-hyderabad",
    title: "Home Loan Application Process in Hyderabad",
    description: "Step-by-step guide to home loan application process in Hyderabad. Timeline, stages, tips. Get approved in 5-7 days with Credrace.",
    keywords: ["home loan application process hyderabad", "how to apply home loan hyderabad", "home loan process hyderabad"],
    type: "process",
    loanType: "home-loan",
    city: "hyderabad",
  },
  {
    slug: "sbi-home-loan-hyderabad",
    title: "SBI Home Loan in Hyderabad",
    description: "SBI home loan in Hyderabad - Interest rates, eligibility, documents, process. Compare SBI rates with other banks. Apply online through Credrace.",
    keywords: ["SBI home loan hyderabad", "SBI housing loan hyderabad", "SBI home loan rates hyderabad"],
    type: "bank",
    loanType: "home-loan",
    city: "hyderabad",
    bank: "SBI",
  },
  {
    slug: "hdfc-home-loan-hyderabad",
    title: "HDFC Home Loan in Hyderabad",
    description: "HDFC home loan in Hyderabad - Best rates, flexible tenure, quick approval. Compare HDFC with other banks. Check eligibility and apply online.",
    keywords: ["HDFC home loan hyderabad", "HDFC housing loan hyderabad", "HDFC home loan rates hyderabad"],
    type: "bank",
    loanType: "home-loan",
    city: "hyderabad",
    bank: "HDFC",
  },
  {
    slug: "icici-home-loan-hyderabad",
    title: "ICICI Home Loan in Hyderabad",
    description: "ICICI home loan in Hyderabad - Competitive rates, digital process, quick disbursal. Compare ICICI rates with 30+ banks. Apply online with Credrace.",
    keywords: ["ICICI home loan hyderabad", "ICICI housing loan hyderabad", "ICICI home loan rates hyderabad"],
    type: "bank",
    loanType: "home-loan",
    city: "hyderabad",
    bank: "ICICI",
  },
  {
    slug: "axis-home-loan-hyderabad",
    title: "Axis Bank Home Loan in Hyderabad",
    description: "Axis Bank home loan in Hyderabad - Competitive rates, flexible tenure, quick approval. Compare Axis rates with other banks. Interest rates starting 8.40%.",
    keywords: ["axis bank home loan hyderabad", "axis home loan hyderabad", "axis home loan rates hyderabad"],
    type: "bank",
    loanType: "home-loan",
    city: "hyderabad",
    bank: "Axis",
  },
  {
    slug: "lic-hfl-home-loan-hyderabad",
    title: "LIC Housing Finance Home Loan in Hyderabad",
    description: "LIC Housing Finance home loan in Hyderabad - Competitive rates, trusted brand, flexible options. Compare LIC HFL rates with other banks.",
    keywords: ["LIC housing finance home loan hyderabad", "LIC HFL home loan hyderabad", "LIC home loan hyderabad"],
    type: "bank",
    loanType: "home-loan",
    city: "hyderabad",
    bank: "LIC HFL",
  },
] as const;
