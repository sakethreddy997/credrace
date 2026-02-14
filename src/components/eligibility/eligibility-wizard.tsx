"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Home,
  User,
  Bike,
  Briefcase,
  Building2,
  Laptop,
  Store,
  MapPin,
  PartyPopper,
  TrendingUp,
  TrendingDown,
  Shield,
  Zap,
  Lock,
  CornerDownLeft,
  RotateCcw,
  Check,
  Sparkles,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Calendar,
  Target,
  Award,
  IndianRupee,
  UserCheck,
  FileCheck,
  Headphones,
  PhoneCall,
  MessageCircle,
  Clock,
  ShieldCheck,
  Ban,
  CircleDot,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  computeEligibility,
  countMatchingLenders,
  quickEstimate,
  formatINR,
  SCORE_BANDS,
  type LoanType,
  type EmploymentType,
  type CreditScoreBand,
  type BorrowerProfile,
  type EligibilityOutput,
  type LenderMatch,
  type SavingsAnalysis,
} from "@/lib/eligibility-engine";

/* ═══════════════════════════════════════════
   Form State
   ═══════════════════════════════════════════ */

interface FormData {
  loanType: LoanType | null;
  employmentType: EmploymentType | null;
  monthlyIncome: string;
  age: string;
  creditScoreBand: CreditScoreBand | null;
  city: string;
  existingEMIs: string;
  propertyValue: string;
  vehiclePrice: string;
  businessVintageYears: string;
  annualTurnover: string;
  phone: string;
  email: string;
}

const INITIAL_DATA: FormData = {
  loanType: null,
  employmentType: null,
  monthlyIncome: "",
  age: "",
  creditScoreBand: null,
  city: "",
  existingEMIs: "",
  propertyValue: "",
  vehiclePrice: "",
  businessVintageYears: "",
  annualTurnover: "",
  phone: "",
  email: "",
};

const LOAN_TYPE_LABELS: Record<LoanType, string> = {
  home: "Home Loan",
  personal: "Personal Loan",
  "two-wheeler": "Two-Wheeler",
  business: "Business Loan",
};
const EMPLOYMENT_LABELS: Record<EmploymentType, string> = {
  salaried: "Salaried",
  "self-employed": "Self-Employed",
  "business-owner": "Business Owner",
};

/* ═══════════════════════════════════════════
   Step IDs
   ═══════════════════════════════════════════ */

type StepId =
  | "loan-type"
  | "employment"
  | "income"
  | "age"
  | "credit-score"
  | "city"
  | "emis"
  | "product-details"
  | "results";

function getSteps(loanType: LoanType | null): StepId[] {
  const base: StepId[] = [
    "loan-type",
    "employment",
    "income",
    "age",
    "credit-score",
    "city",
    "emis",
  ];
  // Product-specific step (skip for personal loans)
  if (loanType && loanType !== "personal") {
    base.push("product-details");
  }
  base.push("results");
  return base;
}

/* ═══════════════════════════════════════════
   Indian Currency Format Preview
   ═══════════════════════════════════════════ */

function formatIndianCurrency(value: string): string | null {
  const num = parseInt(value);
  if (!num || num <= 0) return null;
  const formatted = num.toLocaleString("en-IN");
  let words = "";
  if (num >= 10000000) {
    words = ` (₹${(num / 10000000).toFixed(2)} Crore)`;
  } else if (num >= 100000) {
    words = ` (₹${(num / 100000).toFixed(2)} Lakh)`;
  } else if (num >= 1000) {
    words = ` (₹${(num / 1000).toFixed(1)}K)`;
  }
  return `₹${formatted}${words}`;
}

function CurrencyPreview({ value }: { value: string }) {
  const display = formatIndianCurrency(value);
  if (!display) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-sm font-semibold text-emerald-400/80 mt-2.5 pl-1"
    >
      {display}
    </motion.p>
  );
}

/* ═══════════════════════════════════════════
   Selection Card
   ═══════════════════════════════════════════ */

function SelectionCard({
  selected,
  onClick,
  icon: Icon,
  label,
  subtitle,
  shortcut,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ElementType;
  label: string;
  subtitle?: string;
  shortcut: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.005 }}
      whileTap={{ scale: 0.985 }}
      className={cn(
        "relative flex items-center gap-4 rounded-2xl border p-5 w-full text-left transition-all duration-300 cursor-pointer overflow-hidden group",
        selected
          ? "border-emerald-500/40 bg-emerald-500/[0.08] shadow-[0_0_30px_rgba(16,185,129,0.08)]"
          : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.05]"
      )}
    >
      {selected && (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/[0.06] to-transparent pointer-events-none" />
      )}
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 shrink-0",
          selected
            ? "bg-emerald-500 shadow-lg shadow-emerald-500/25"
            : "bg-white/[0.08] group-hover:bg-white/[0.12]"
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5 transition-colors duration-300",
            selected
              ? "text-white"
              : "text-white/50 group-hover:text-white/70"
          )}
        />
      </div>
      <div className="flex-1 min-w-0">
        <span
          className={cn(
            "text-sm font-bold block transition-colors",
            selected ? "text-emerald-400" : "text-white/80"
          )}
        >
          {label}
        </span>
        {subtitle && (
          <span className="text-xs text-white/40 block mt-0.5">
            {subtitle}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2.5">
        <span className="text-[10px] text-white/20 font-mono hidden sm:block">
          {shortcut}
        </span>
        {selected && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}

/* ═══════════════════════════════════════════
   Breadcrumb Trail
   ═══════════════════════════════════════════ */

function BreadcrumbTrail({
  data,
  stepIdx,
}: {
  data: FormData;
  stepIdx: number;
}) {
  const items: string[] = [];
  if (data.loanType && stepIdx > 0)
    items.push(LOAN_TYPE_LABELS[data.loanType]);
  if (data.employmentType && stepIdx > 1)
    items.push(EMPLOYMENT_LABELS[data.employmentType]);
  if (data.monthlyIncome && stepIdx > 2)
    items.push(formatINR(parseInt(data.monthlyIncome)));
  if (data.age && stepIdx > 3) items.push(`Age ${data.age}`);
  if (data.creditScoreBand && stepIdx > 4)
    items.push(SCORE_BANDS[data.creditScoreBand].label);

  if (items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-1.5 flex-wrap mb-8"
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/15 px-3 py-1">
            <Check className="h-2.5 w-2.5 text-emerald-400" />
            <span className="text-[10px] text-emerald-400/70 font-medium">
              {item}
            </span>
          </div>
          {i < items.length - 1 && (
            <ArrowRight className="h-2.5 w-2.5 text-white/25" />
          )}
        </div>
      ))}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Inline Feedback
   ═══════════════════════════════════════════ */

function InlineFeedback({
  icon: Icon,
  text,
  variant = "default",
}: {
  icon: React.ElementType;
  text: string;
  variant?: "default" | "success" | "warning";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className={cn(
        "flex items-center gap-2.5 mt-4 rounded-xl border px-4 py-3",
        variant === "success"
          ? "bg-emerald-500/[0.06] border-emerald-500/15"
          : variant === "warning"
          ? "bg-amber-500/[0.06] border-amber-500/15"
          : "bg-white/[0.02] border-white/[0.06]"
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4 shrink-0",
          variant === "success"
            ? "text-emerald-400"
            : variant === "warning"
            ? "text-amber-400"
            : "text-white/45"
        )}
      />
      <p
        className={cn(
          "text-xs font-medium",
          variant === "success"
            ? "text-emerald-400/90"
            : variant === "warning"
            ? "text-amber-400/90"
            : "text-white/50"
        )}
      >
        {text}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   FOIR Gauge
   ═══════════════════════════════════════════ */

function FOIRGauge({
  foir,
  label,
  status,
}: {
  foir: number;
  label: string;
  status: "healthy" | "moderate" | "stretched";
}) {
  const pct = Math.min(foir, 80); // visual cap at 80% for gauge
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-bold text-white/45 uppercase tracking-wider">
          Debt-to-income (FOIR)
        </p>
        <span
          className={cn(
            "text-xs font-bold",
            status === "healthy"
              ? "text-emerald-400"
              : status === "moderate"
              ? "text-amber-400"
              : "text-red-400"
          )}
        >
          {foir}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(pct / 80) * 100}%` }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={cn(
            "h-full rounded-full",
            status === "healthy"
              ? "bg-emerald-500"
              : status === "moderate"
              ? "bg-amber-500"
              : "bg-red-500"
          )}
        />
      </div>
      <div className="flex justify-between mt-1.5 text-[9px] text-white/30">
        <span>0%</span>
        <span className="text-emerald-400/50">|40%</span>
        <span className="text-amber-400/50">|55%</span>
        <span>80%+</span>
      </div>
      <p className="text-[10px] text-white/40 mt-2">{label}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Lender Match Card (Differentiated)
   ═══════════════════════════════════════════ */

const TYPE_LABELS = {
  "public-bank": "PSU Bank",
  "private-bank": "Private Bank",
  nbfc: "NBFC",
  hfc: "HFC",
};

function LenderCard({
  match,
  rank,
}: {
  match: LenderMatch;
  rank: number;
}) {
  const [expanded, setExpanded] = useState(rank === 0); // first card open by default
  const isTop = rank === 0;
  const confColors = {
    high: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    low: "text-red-400 bg-red-500/10 border-red-500/20",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border overflow-hidden transition-all",
        isTop
          ? "border-emerald-500/25 bg-emerald-500/[0.04]"
          : "border-white/[0.06] bg-white/[0.02]"
      )}
    >
      {/* Top badge for #1 */}
      {isTop && (
        <div className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-500/10 border-b border-emerald-500/10">
          <Award className="h-3 w-3 text-emerald-400" />
          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
            Best match for your profile
          </span>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-4 hover:bg-white/[0.02] transition-colors"
      >
        {/* Row 1: Name + Tags + Confidence */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-white truncate">
                {match.lenderName}
              </p>
              <span className="text-[9px] text-white/30 font-medium shrink-0">
                {TYPE_LABELS[match.lenderType]}
              </span>
            </div>
            {match.bestForTag && (
              <span className="inline-flex items-center gap-1 mt-1 text-[9px] font-bold text-emerald-400 bg-emerald-500/10 rounded-full px-2 py-0.5">
                <Sparkles className="h-2.5 w-2.5" />
                {match.bestForTag}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div
              className={cn(
                "flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase",
                confColors[match.confidence]
              )}
            >
              {match.confidence}
            </div>
            {expanded ? (
              <ChevronUp className="h-3.5 w-3.5 text-white/40" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-white/40" />
            )}
          </div>
        </div>

        {/* Row 2: Key metrics grid - THE DIFFERENTIATED VIEW */}
        <div className="grid grid-cols-5 gap-2.5">
          <div>
            <p className="text-[9px] text-white/35 font-medium uppercase mb-0.5">
              Your rate
            </p>
            <p className="text-sm font-extrabold text-white">
              {match.estimatedRate}%
            </p>
          </div>
          <div>
            <p className="text-[9px] text-white/35 font-medium uppercase mb-0.5">
              EMI
            </p>
            <p className="text-sm font-extrabold text-white">
              {formatINR(match.estimatedEMI)}
            </p>
          </div>
          <div>
            <p className="text-[9px] text-white/35 font-medium uppercase mb-0.5">
              Max loan
            </p>
            <p className="text-sm font-extrabold text-white">
              {formatINR(match.maxEligibleAmount)}
            </p>
          </div>
          <div>
            <p className="text-[9px] text-white/35 font-medium uppercase mb-0.5">
              Tenure
            </p>
            <p className="text-sm font-extrabold text-white">
              {match.maxTenureYears}y
            </p>
          </div>
          <div>
            <p className="text-[9px] text-white/35 font-medium uppercase mb-0.5">
              Approval
            </p>
            <p className="text-sm font-extrabold text-white">
              {match.approvalDaysMin}-{match.approvalDaysMax}
              <span className="text-[8px] text-white/30 font-medium ml-0.5">days</span>
            </p>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3 border-t border-white/[0.06] pt-3">
              {/* Cost breakdown */}
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2.5">
                  <p className="text-[9px] text-white/35 uppercase mb-0.5">
                    Total interest
                  </p>
                  <p className="text-xs font-bold text-white/70">
                    {formatINR(match.totalInterest)}
                  </p>
                </div>
                <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2.5">
                  <p className="text-[9px] text-white/35 uppercase mb-0.5">
                    Processing fee
                  </p>
                  <p className="text-xs font-bold text-white/70">
                    {formatINR(match.processingFeeEstimate)}
                  </p>
                  <p className="text-[8px] text-white/25 mt-0.5">
                    {match.processingFeeLabel}
                  </p>
                </div>
                <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] p-2.5">
                  <p className="text-[9px] text-white/35 uppercase mb-0.5">
                    Total cost
                  </p>
                  <p className="text-xs font-bold text-white/70">
                    {formatINR(match.totalCost)}
                  </p>
                </div>
              </div>

              {/* Rate range */}
              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-white/30">Rate range:</span>
                <span className="text-white/50 font-medium">
                  {match.rateMin}% – {match.rateMax}%
                </span>
                <span className="text-white/30">·</span>
                <span className="text-emerald-400/70 font-medium">
                  Your estimated: {match.estimatedRate}%
                </span>
              </div>

              {/* Gates passed + Warnings */}
              <div className="flex flex-wrap gap-1">
                {match.passedGates.slice(0, 4).map((g, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-[9px] text-emerald-400/60 bg-emerald-500/[0.06] rounded-full px-2 py-0.5"
                  >
                    <Check className="h-2 w-2" />
                    {g}
                  </span>
                ))}
                {match.warnings.map((w, i) => (
                  <span
                    key={`w${i}`}
                    className="flex items-center gap-1 text-[9px] text-amber-400/60 bg-amber-500/[0.06] rounded-full px-2 py-0.5"
                  >
                    <AlertTriangle className="h-2 w-2" />
                    {w}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              {match.highlights.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {match.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[9px] text-white/40 bg-white/[0.04] border border-white/[0.06] rounded-full px-2 py-0.5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Wizard
   ═══════════════════════════════════════════ */

export function EligibilityWizard() {
  const [stepIdx, setStepIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [result, setResult] = useState<EligibilityOutput | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const incomeRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const emisRef = useRef<HTMLInputElement>(null);
  const propRef = useRef<HTMLInputElement>(null);
  const vehRef = useRef<HTMLInputElement>(null);
  const bizRef = useRef<HTMLInputElement>(null);

  const steps = getSteps(data.loanType);
  const currentStep = steps[stepIdx];
  const totalInputSteps = steps.length - 1; // exclude results
  const isResults = currentStep === "results";
  const progress = isResults ? 100 : ((stepIdx + 1) / totalInputSteps) * 100;

  // Build partial profile for inline feedback
  const income = parseInt(data.monthlyIncome) || 0;
  const emis = parseInt(data.existingEMIs) || 0;
  const age = parseInt(data.age) || 0;

  const lenderCount = data.loanType
    ? countMatchingLenders({
        loanType: data.loanType,
        ...(data.employmentType ? { employmentType: data.employmentType } : {}),
        ...(income > 0 ? { monthlyIncome: income } : {}),
        ...(age > 0 ? { age } : {}),
        ...(data.creditScoreBand
          ? { creditScoreBand: data.creditScoreBand }
          : {}),
      })
    : 30;

  // Auto-focus inputs
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep === "income") incomeRef.current?.focus();
      if (currentStep === "age") ageRef.current?.focus();
      if (currentStep === "city") cityRef.current?.focus();
      if (currentStep === "emis") emisRef.current?.focus();
      if (currentStep === "product-details") {
        if (data.loanType === "home") propRef.current?.focus();
        if (data.loanType === "two-wheeler") vehRef.current?.focus();
        if (data.loanType === "business") bizRef.current?.focus();
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [currentStep, data.loanType]);

  const goForward = useCallback(() => {
    setDirection(1);
    const nextIdx = stepIdx + 1;
    if (nextIdx >= steps.length) return;
    if (steps[nextIdx] === "results") {
      // Compute eligibility
      const profile: BorrowerProfile = {
        loanType: data.loanType!,
        employmentType: data.employmentType!,
        monthlyIncome: income,
        age,
        creditScoreBand: data.creditScoreBand!,
        city: data.city,
        existingEMIs: emis,
        ...(data.propertyValue
          ? { propertyValue: parseInt(data.propertyValue) }
          : {}),
        ...(data.vehiclePrice
          ? { vehicleOnRoadPrice: parseInt(data.vehiclePrice) }
          : {}),
        ...(data.businessVintageYears
          ? { businessVintageYears: parseInt(data.businessVintageYears) }
          : {}),
        ...(data.annualTurnover
          ? { annualTurnover: parseInt(data.annualTurnover) }
          : {}),
      };
      setResult(computeEligibility(profile));
    }
    setStepIdx(nextIdx);
  }, [stepIdx, steps, data, income, age, emis]);

  const goBack = useCallback(() => {
    setDirection(-1);
    if (isResults) setResult(null);
    setStepIdx((s) => Math.max(s - 1, 0));
  }, [isResults]);

  const canProceed = useCallback((): boolean => {
    switch (currentStep) {
      case "loan-type":
        return data.loanType !== null;
      case "employment":
        return data.employmentType !== null;
      case "income":
        return data.monthlyIncome !== "" && parseInt(data.monthlyIncome) > 0;
      case "age":
        return data.age !== "" && parseInt(data.age) >= 18 && parseInt(data.age) <= 80;
      case "credit-score":
        return data.creditScoreBand !== null;
      case "city":
        return data.city.trim().length >= 2;
      case "emis":
        return true;
      case "product-details":
        return true; // optional details
      default:
        return false;
    }
  }, [currentStep, data]);

  function selectLoanType(type: LoanType) {
    setData((d) => ({ ...d, loanType: type }));
    setTimeout(() => {
      setDirection(1);
      setStepIdx(1);
    }, 250);
  }

  function selectEmployment(type: EmploymentType) {
    setData((d) => ({ ...d, employmentType: type }));
    setTimeout(() => {
      setDirection(1);
      setStepIdx(2);
    }, 250);
  }

  function selectCreditScore(band: CreditScoreBand) {
    setData((d) => ({ ...d, creditScoreBand: band }));
    setTimeout(() => {
      setDirection(1);
      setStepIdx((s) => s + 1);
    }, 250);
  }

  // Keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.key === "Enter" &&
        ["income", "age", "city", "emis", "product-details"].includes(
          currentStep
        ) &&
        canProceed()
      ) {
        e.preventDefault();
        goForward();
      }
      if (currentStep === "loan-type") {
        const types: LoanType[] = [
          "home",
          "personal",
          "two-wheeler",
          "business",
        ];
        const idx = parseInt(e.key) - 1;
        if (idx >= 0 && idx < types.length) selectLoanType(types[idx]);
      }
      if (currentStep === "employment") {
        const types: EmploymentType[] = [
          "salaried",
          "self-employed",
          "business-owner",
        ];
        const idx = parseInt(e.key) - 1;
        if (idx >= 0 && idx < types.length) selectEmployment(types[idx]);
      }
      if (currentStep === "credit-score") {
        const bands: CreditScoreBand[] = [
          "excellent",
          "good",
          "fair",
          "low-or-none",
        ];
        const idx = parseInt(e.key) - 1;
        if (idx >= 0 && idx < bands.length) selectCreditScore(bands[idx]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, canProceed, goForward]);

  const slideVariants = {
    enter: (d: number) => ({ y: d > 0 ? 30 : -30, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (d: number) => ({ y: d > 0 ? -30 : 30, opacity: 0 }),
  };

  // Quick estimate for inline feedback
  const estimate =
    income > 0 && data.loanType
      ? quickEstimate(data.loanType, income, emis)
      : null;

  return (
    <div
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #020617 0%, #071222 25%, #0c1a30 50%, #071018 100%)",
      }}
    >
      {/* ─── Ambient background ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
      </div>

      {/* ─── Progress bar ─── */}
      <div className="fixed top-16 left-0 right-0 z-40 h-[2px] bg-white/[0.04]">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>

      {/* ─── Floating lender badge ─── */}
      {!isResults && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-24 right-6 z-30 hidden lg:flex items-center gap-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] px-4 py-2.5"
        >
          <div className="relative flex items-center justify-center">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400/80" />
            <div className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <motion.span
            key={lenderCount}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            className="text-xs font-bold text-white/50"
          >
            <span className="text-emerald-400">{lenderCount}</span> lenders
            matching
          </motion.span>
        </motion.div>
      )}

      {/* ─── Main content ─── */}
      <div className="relative flex-1 flex items-center justify-center px-5 sm:px-8 py-20 sm:py-24">
        <div
          className={cn(
            "w-full",
            isResults ? "max-w-2xl" : "max-w-lg"
          )}
        >
          {/* Breadcrumb */}
          {!isResults && <BreadcrumbTrail data={data} stepIdx={stepIdx} />}

          <AnimatePresence mode="wait" custom={direction}>
            {/* ═══ LOAN TYPE ═══ */}
            {currentStep === "loan-type" && (
              <motion.div
                key="loan-type"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <StepLabel step={1} total={totalInputSteps} />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                  What type of loan
                  <br />
                  do you need?
                </h2>
                <p className="text-sm text-white/40 mb-8">
                  Pick one and we&apos;ll match you with the best lenders.
                </p>
                <div className="space-y-3">
                  <SelectionCard selected={data.loanType === "home"} onClick={() => selectLoanType("home")} icon={Home} label="Home Loan" subtitle="Buy, construct, or refinance. Up to ₹5 Cr." shortcut={1} />
                  <SelectionCard selected={data.loanType === "personal"} onClick={() => selectLoanType("personal")} icon={User} label="Personal Loan" subtitle="No collateral. Up to ₹40 Lakh." shortcut={2} />
                  <SelectionCard selected={data.loanType === "two-wheeler"} onClick={() => selectLoanType("two-wheeler")} icon={Bike} label="Two-Wheeler Loan" subtitle="100% on-road funding. EMIs from ₹999." shortcut={3} />
                  <SelectionCard selected={data.loanType === "business"} onClick={() => selectLoanType("business")} icon={Briefcase} label="Business Loan" subtitle="Working capital. No collateral." shortcut={4} />
                </div>
              </motion.div>
            )}

            {/* ═══ EMPLOYMENT ═══ */}
            {currentStep === "employment" && (
              <motion.div
                key="employment"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <StepLabel step={2} total={totalInputSteps} />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                  How are you employed?
                </h2>
                <p className="text-sm text-white/40 mb-8">
                  Lenders offer different rates for different profiles.
                </p>
                <div className="space-y-3">
                  <SelectionCard selected={data.employmentType === "salaried"} onClick={() => selectEmployment("salaried")} icon={Building2} label="Salaried" subtitle="Full-time at a company" shortcut={1} />
                  <SelectionCard selected={data.employmentType === "self-employed"} onClick={() => selectEmployment("self-employed")} icon={Laptop} label="Self-Employed" subtitle="Professional, freelancer, or consultant" shortcut={2} />
                  <SelectionCard selected={data.employmentType === "business-owner"} onClick={() => selectEmployment("business-owner")} icon={Store} label="Business Owner" subtitle="MSME, proprietor, or partnership" shortcut={3} />
                </div>
                <BackButton onClick={goBack} />
              </motion.div>
            )}

            {/* ═══ INCOME ═══ */}
            {currentStep === "income" && (
              <motion.div
                key="income"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <StepLabel step={3} total={totalInputSteps} />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                  What&apos;s your monthly income?
                </h2>
                <p className="text-sm text-white/40 mb-8">
                  Net take-home salary or average monthly earnings.
                </p>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-white/35">₹</span>
                  <input ref={incomeRef} type="number" inputMode="numeric" placeholder="50000" value={data.monthlyIncome} onChange={(e) => setData({ ...data, monthlyIncome: e.target.value })} className="w-full h-16 text-2xl font-extrabold pl-12 pr-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" min={0} />
                </div>
                <CurrencyPreview value={data.monthlyIncome} />
                {estimate && estimate.max > 0 && (
                  <InlineFeedback icon={TrendingUp} text={`Estimated range: ${formatINR(estimate.min)} – ${formatINR(estimate.max)}`} variant="success" />
                )}
                <FormActions onBack={goBack} onForward={goForward} canProceed={canProceed()} label="Continue" />
              </motion.div>
            )}

            {/* ═══ AGE ═══ */}
            {currentStep === "age" && (
              <motion.div
                key="age"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <StepLabel step={4} total={totalInputSteps} />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                  How old are you?
                </h2>
                <p className="text-sm text-white/40 mb-8">
                  Age affects tenure limits and lender eligibility.
                </p>
                <div className="relative">
                  <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/35" />
                  <input ref={ageRef} type="number" inputMode="numeric" placeholder="30" value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })} className="w-full h-16 text-2xl font-extrabold pl-14 pr-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" min={18} max={80} />
                </div>
                {/* Quick picks */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {["25", "30", "35", "40", "45", "50"].map((a) => (
                    <button key={a} onClick={() => setData({ ...data, age: a })} className={cn("px-4 py-2 rounded-xl text-xs font-semibold transition-all", data.age === a ? "bg-emerald-500/15 border border-emerald-500/25 text-emerald-400" : "bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white/60 hover:bg-white/[0.07]")}>{a} yrs</button>
                  ))}
                </div>
                {age > 0 && data.loanType === "home" && (
                  <InlineFeedback icon={TrendingUp} text={`Max tenure: ${Math.min(30, 65 - age)} years (retirement-adjusted)`} variant="success" />
                )}
                {age > 55 && (
                  <InlineFeedback icon={AlertTriangle} text="Some lenders have age-at-maturity limits. Your options may be narrowed." variant="warning" />
                )}
                <FormActions onBack={goBack} onForward={goForward} canProceed={canProceed()} label="Continue" />
              </motion.div>
            )}

            {/* ═══ CREDIT SCORE ═══ */}
            {currentStep === "credit-score" && (
              <motion.div
                key="credit-score"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <StepLabel step={5} total={totalInputSteps} />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                  Your CIBIL score range?
                </h2>
                <p className="text-sm text-white/40 mb-8">
                  Self-declared. This helps match you with the right lenders.
                </p>
                <div className="space-y-3">
                  <SelectionCard selected={data.creditScoreBand === "excellent"} onClick={() => selectCreditScore("excellent")} icon={Target} label="Excellent (750+)" subtitle="Best rates. All lenders available." shortcut={1} />
                  <SelectionCard selected={data.creditScoreBand === "good"} onClick={() => selectCreditScore("good")} icon={CheckCircle2} label="Good (700–749)" subtitle="Eligible for most products." shortcut={2} />
                  <SelectionCard selected={data.creditScoreBand === "fair"} onClick={() => selectCreditScore("fair")} icon={AlertTriangle} label="Fair (650–699)" subtitle="Some lenders may have restrictions." shortcut={3} />
                  <SelectionCard selected={data.creditScoreBand === "low-or-none"} onClick={() => selectCreditScore("low-or-none")} icon={Shield} label="Below 650 / No History" subtitle="Limited but we'll find options." shortcut={4} />
                </div>
                <BackButton onClick={goBack} />
              </motion.div>
            )}

            {/* ═══ CITY ═══ */}
            {currentStep === "city" && (
              <motion.div
                key="city"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <StepLabel step={6} total={totalInputSteps} />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                  Which city do you live in?
                </h2>
                <p className="text-sm text-white/40 mb-8">
                  Lender availability varies by location.
                </p>
                <div className="relative">
                  <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-white/35" />
                  <input ref={cityRef} type="text" placeholder="e.g. Hyderabad" value={data.city} onChange={(e) => setData({ ...data, city: e.target.value })} className="w-full h-16 text-2xl font-extrabold pl-14 pr-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Hyderabad", "Mumbai", "Bangalore", "Delhi", "Chennai", "Pune"].map((city) => (
                    <button key={city} onClick={() => setData({ ...data, city })} className={cn("px-4 py-2 rounded-xl text-xs font-semibold transition-all", data.city === city ? "bg-emerald-500/15 border border-emerald-500/25 text-emerald-400" : "bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white/60 hover:bg-white/[0.07]")}>{city}</button>
                  ))}
                </div>
                {data.city.length >= 2 && (
                  <InlineFeedback icon={MapPin} text={`${lenderCount} lenders active in ${data.city}`} variant="success" />
                )}
                <FormActions onBack={goBack} onForward={goForward} canProceed={canProceed()} label="Continue" />
              </motion.div>
            )}

            {/* ═══ EMIS ═══ */}
            {currentStep === "emis" && (
              <motion.div
                key="emis"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <StepLabel
                  step={7}
                  total={totalInputSteps}
                  last={data.loanType === "personal"}
                />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                  Any existing EMIs?
                </h2>
                <p className="text-sm text-white/40 mb-8">
                  Total monthly payments on running loans. Enter 0 if none.
                </p>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-white/35">₹</span>
                  <input ref={emisRef} type="number" inputMode="numeric" placeholder="0" value={data.existingEMIs} onChange={(e) => setData({ ...data, existingEMIs: e.target.value })} className="w-full h-16 text-2xl font-extrabold pl-12 pr-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" min={0} />
                </div>
                <CurrencyPreview value={data.existingEMIs} />
                {income > 0 && (
                  <InlineFeedback
                    icon={emis > 0 && emis / income > 0.5 ? TrendingDown : Sparkles}
                    text={
                      emis > 0
                        ? `FOIR: ${Math.round((emis / income) * 100)}%. ${emis / income <= 0.4 ? "Healthy range." : emis / income <= 0.55 ? "Moderate." : "High. May limit offers."}`
                        : "No existing debt. This maximises your eligibility."
                    }
                    variant={emis === 0 || emis / income <= 0.4 ? "success" : emis / income <= 0.55 ? "default" : "warning"}
                  />
                )}
                <FormActions
                  onBack={goBack}
                  onForward={goForward}
                  canProceed
                  label={data.loanType === "personal" ? "See my results" : "Continue"}
                />
              </motion.div>
            )}

            {/* ═══ PRODUCT DETAILS (conditional) ═══ */}
            {currentStep === "product-details" && (
              <motion.div
                key="product-details"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <StepLabel step={8} total={totalInputSteps} last />

                {data.loanType === "home" && (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                      Estimated property value?
                    </h2>
                    <p className="text-sm text-white/40 mb-8">
                      Helps calculate LTV (loan-to-value) within RBI limits. Optional.
                    </p>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-white/35">₹</span>
                      <input ref={propRef} type="number" inputMode="numeric" placeholder="5000000" value={data.propertyValue} onChange={(e) => setData({ ...data, propertyValue: e.target.value })} className="w-full h-16 text-2xl font-extrabold pl-12 pr-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" min={0} />
                    </div>
                    <CurrencyPreview value={data.propertyValue} />
                    {data.propertyValue && parseInt(data.propertyValue) > 0 && (
                      <InlineFeedback
                        icon={Shield}
                        text={`RBI LTV cap: ${Math.round(getRbiLTV(parseInt(data.propertyValue)) * 100)}%. Max from property: ${formatINR(Math.round(parseInt(data.propertyValue) * getRbiLTV(parseInt(data.propertyValue)) / 10000) * 10000)}`}
                        variant="success"
                      />
                    )}
                  </>
                )}

                {data.loanType === "two-wheeler" && (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                      Vehicle on-road price?
                    </h2>
                    <p className="text-sm text-white/40 mb-8">
                      Some lenders fund up to 100% of on-road price. Optional.
                    </p>
                    <div className="relative">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-bold text-white/35">₹</span>
                      <input ref={vehRef} type="number" inputMode="numeric" placeholder="120000" value={data.vehiclePrice} onChange={(e) => setData({ ...data, vehiclePrice: e.target.value })} className="w-full h-16 text-2xl font-extrabold pl-12 pr-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" min={0} />
                    </div>
                    <CurrencyPreview value={data.vehiclePrice} />
                  </>
                )}

                {data.loanType === "business" && (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-[-0.03em] mb-2">
                      About your business
                    </h2>
                    <p className="text-sm text-white/40 mb-8">
                      Vintage and turnover help match you with the right lenders. Optional.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-white/45 uppercase tracking-wider mb-2 block">
                          Years in business
                        </label>
                        <input ref={bizRef} type="number" inputMode="numeric" placeholder="5" value={data.businessVintageYears} onChange={(e) => setData({ ...data, businessVintageYears: e.target.value })} className="w-full h-14 text-xl font-extrabold px-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" min={0} />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-white/45 uppercase tracking-wider mb-2 block">
                          Annual turnover
                        </label>
                        <div className="relative">
                          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl font-bold text-white/35">₹</span>
                          <input type="number" inputMode="numeric" placeholder="3000000" value={data.annualTurnover} onChange={(e) => setData({ ...data, annualTurnover: e.target.value })} className="w-full h-14 text-xl font-extrabold pl-12 pr-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all" min={0} />
                        </div>
                        <CurrencyPreview value={data.annualTurnover} />
                      </div>
                    </div>
                    {data.businessVintageYears && parseInt(data.businessVintageYears) < 3 && (
                      <InlineFeedback icon={AlertTriangle} text="Most lenders require 3+ years of business vintage. Your options may be limited." variant="warning" />
                    )}
                  </>
                )}

                <FormActions onBack={goBack} onForward={goForward} canProceed label="See my results" />
              </motion.div>
            )}

            {/* ═══ RESULTS ═══ */}
            {isResults && result && (
              <motion.div
                key="results"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="pb-16"
              >
                {/* ═══ 1. SAVINGS HERO ═══ */}
                {result.savings && result.savings.totalInterestSaved > 10000 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden mb-5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-emerald-500/10 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
                    <div className="absolute -top-20 -right-20 w-[200px] h-[200px] bg-emerald-500/[0.1] rounded-full blur-[60px] pointer-events-none" />
                    <div className="relative border border-emerald-500/20 rounded-3xl p-5 sm:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-7 w-7 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                          <IndianRupee className="h-3.5 w-3.5 text-emerald-400" />
                        </div>
                        <p className="text-[10px] font-bold text-emerald-400/80 uppercase tracking-[0.15em]">
                          Your savings by comparing
                        </p>
                      </div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4"
                      >
                        Save up to{" "}
                        <span className="text-emerald-400">
                          {formatINR(result.savings.totalInterestSaved)}
                        </span>{" "}
                        in interest
                      </motion.p>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
                          <p className="text-[9px] text-white/35 font-medium uppercase mb-1">
                            EMI saved
                          </p>
                          <p className="text-sm font-extrabold text-white">
                            {formatINR(result.savings.emiSavingsPerMonth)}
                            <span className="text-[9px] text-white/30 font-medium">/mo</span>
                          </p>
                        </div>
                        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
                          <p className="text-[9px] text-white/35 font-medium uppercase mb-1">
                            Best rate
                          </p>
                          <p className="text-sm font-extrabold text-emerald-400">
                            {result.savings.bestEstimatedRate}%
                          </p>
                        </div>
                        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
                          <p className="text-[9px] text-white/35 font-medium uppercase mb-1">
                            vs highest
                          </p>
                          <p className="text-sm font-extrabold text-red-400/70">
                            {result.savings.worstEstimatedRate}%
                          </p>
                        </div>
                      </div>
                      <p className="text-[10px] text-white/30 mt-3">
                        Compared at {formatINR(result.savings.comparisonAmount)} over{" "}
                        {Math.round(result.savings.comparisonTenureMonths / 12)} years across {result.matchedLenders.length} matched lenders
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* ═══ 2. ELIGIBILITY SUMMARY CARD ═══ */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

                  {/* Header */}
                  <div className="relative flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.04]">
                    <div className="flex items-center gap-3">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.3 }}
                        className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25"
                      >
                        <PartyPopper className="h-4 w-4 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-extrabold text-white">
                          {result.matchedLenders.length > 0
                            ? "You're eligible!"
                            : "Limited matches found"}
                        </p>
                        <p className="text-[11px] text-white/45">
                          {result.matchedLenders.length} of{" "}
                          {result.totalLendersChecked} lenders matched your profile
                        </p>
                      </div>
                    </div>
                    <div
                      className={cn(
                        "hidden sm:flex items-center gap-1.5 rounded-full border px-2.5 py-1",
                        result.overallConfidence === "high"
                          ? "bg-emerald-500/10 border-emerald-500/20"
                          : result.overallConfidence === "medium"
                          ? "bg-amber-500/10 border-amber-500/20"
                          : "bg-red-500/10 border-red-500/20"
                      )}
                    >
                      <CheckCircle2
                        className={cn(
                          "h-3 w-3",
                          result.overallConfidence === "high"
                            ? "text-emerald-400"
                            : result.overallConfidence === "medium"
                            ? "text-amber-400"
                            : "text-red-400"
                        )}
                      />
                      <span
                        className={cn(
                          "text-[10px] font-bold capitalize",
                          result.overallConfidence === "high"
                            ? "text-emerald-400"
                            : result.overallConfidence === "medium"
                            ? "text-amber-400"
                            : "text-red-400"
                        )}
                      >
                        {result.overallConfidence} confidence
                      </span>
                    </div>
                  </div>

                  {/* Loan range + key stats in a compact grid */}
                  <div className="px-5 sm:px-6 py-5">
                    {result.maxAmount > 0 && (
                      <div className="mb-4">
                        <p className="text-[9px] font-bold text-emerald-400/50 uppercase tracking-[0.15em] mb-1">
                          Estimated loan range
                        </p>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                        >
                          {formatINR(result.minAmount)} – {formatINR(result.maxAmount)}
                        </motion.p>
                      </div>
                    )}
                    <div className="grid grid-cols-4 gap-2.5">
                      <DetailCell label="Best rate" value={`${result.bestRateMin}%`} />
                      <DetailCell label="Max tenure" value={`${result.maxTenureYears}y`} />
                      <DetailCell label="Max EMI capacity" value={formatINR(result.foir.maxAffordableEMI)} />
                      <DetailCell label="FOIR" value={`${result.foir.currentFOIR}%`} />
                    </div>
                  </div>

                  {/* Confidence reasons as chips */}
                  {result.confidenceReasons.length > 0 && (
                    <div className="px-5 sm:px-6 pb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {result.confidenceReasons.map((reason, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-1 text-[9px] text-emerald-400/60 bg-emerald-500/[0.05] border border-emerald-500/10 rounded-full px-2 py-0.5"
                          >
                            <Check className="h-2 w-2" />
                            {reason}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* ═══ 3. THE CREDRACE PROMISE ═══ */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-white/[0.04]">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      <p className="text-sm font-extrabold text-white">
                        The Credrace Promise
                      </p>
                    </div>
                    <p className="text-[11px] text-white/35">
                      Why thousands choose us instead of walking into a bank branch
                    </p>
                  </div>
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* No CIBIL impact guarantee */}
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Shield className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white mb-0.5">
                          Your CIBIL score stays untouched
                        </p>
                        <p className="text-[10px] text-white/40 leading-relaxed">
                          We never do a hard credit pull. Everything above is based on soft analysis
                          of your profile against published lender criteria. Your score is 100% safe.
                        </p>
                      </div>
                    </div>

                    {/* One targeted application */}
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Target className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white mb-0.5">
                          One targeted application, not five
                        </p>
                        <p className="text-[10px] text-white/40 leading-relaxed">
                          Going to 5 banks means 5 hard CIBIL inquiries (your score drops 20-50 points).
                          With Credrace, we identify the best match first, then submit <strong className="text-white/60">one strong, targeted application</strong>.
                          One inquiry. Maximum approval chance.
                        </p>
                      </div>
                    </div>

                    {/* Guided, not auto-submitted */}
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <UserCheck className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white mb-0.5">
                          We review together, then apply
                        </p>
                        <p className="text-[10px] text-white/40 leading-relaxed">
                          Clicking &quot;Apply&quot; below does NOT auto-submit to any bank. A dedicated loan manager
                          connects with you, reviews your profile and documents together, and only then
                          submits a prepared application. <strong className="text-white/60">Nothing happens without your consent.</strong>
                        </p>
                      </div>
                    </div>

                    {/* Approval confidence */}
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white mb-0.5">
                          In-principle approval in {result.fastestApprovalDays.min}-{result.fastestApprovalDays.max} working days
                        </p>
                        <p className="text-[10px] text-white/40 leading-relaxed">
                          Because we pre-qualify your profile before applying, our approval rate is significantly
                          higher than direct applications. We only apply where you&apos;re most likely to get approved.
                        </p>
                      </div>
                    </div>

                    {/* No rejection nightmare */}
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Ban className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white mb-0.5">
                          No more rejection surprises
                        </p>
                        <p className="text-[10px] text-white/40 leading-relaxed">
                          The typical problem: you find a house, visit a bank, wait 2 weeks, get rejected, start over.
                          With Credrace, you know your eligibility across {result.matchedLenders.length} lenders <strong className="text-white/60">before</strong> you
                          commit. No wasted time. No nasty surprises.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ═══ 3.5 WITH vs WITHOUT CREDRACE ═══ */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-4 rounded-2xl overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
                    {/* Without */}
                    <div className="bg-red-500/[0.04] p-4">
                      <p className="text-[10px] font-bold text-red-400/70 uppercase tracking-wider mb-3">
                        Without Credrace
                      </p>
                      <div className="space-y-2.5">
                        {[
                          "Visit 3-4 bank branches",
                          "Submit docs to each separately",
                          "Wait 2-3 weeks per bank",
                          "3-4 hard CIBIL inquiries",
                          "Score drops 20-50 points",
                          "Risk of rejection at each step",
                          "No rate comparison leverage",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-red-400/50 text-[10px] mt-0.5">✕</span>
                            <p className="text-[10px] text-white/35 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* With */}
                    <div className="bg-emerald-500/[0.04] p-4">
                      <p className="text-[10px] font-bold text-emerald-400/70 uppercase tracking-wider mb-3">
                        With Credrace
                      </p>
                      <div className="space-y-2.5">
                        {[
                          "Check all lenders in 2 minutes",
                          "One document set, we handle rest",
                          `Approval in ${result.fastestApprovalDays.min}-${result.fastestApprovalDays.max} working days`,
                          "Only 1 targeted CIBIL inquiry",
                          "Score protected throughout",
                          "Pre-qualified = near-certain approval",
                          "Competing offers get you best rate",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-400/70 text-[10px] mt-0.5">✓</span>
                            <p className="text-[10px] text-white/45 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ═══ 4. MATCHED LENDERS (Differentiated) ═══ */}
                {result.matchedLenders.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-bold text-white/50 uppercase tracking-wider">
                        Your lender matches ({result.matchedLenders.length})
                      </p>
                      <p className="text-[10px] text-white/35">
                        Rates personalized to your profile
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      {result.matchedLenders.slice(0, 6).map((match, idx) => (
                        <LenderCard
                          key={match.lenderId}
                          match={match}
                          rank={idx}
                        />
                      ))}
                      {result.matchedLenders.length > 6 && (
                        <p className="text-xs text-white/35 text-center py-2">
                          +{result.matchedLenders.length - 6} more lenders available
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* ═══ 5.5 WHAT YOU GET WITH CREDRACE ═══ */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6"
                >
                  <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
                    What you get with Credrace
                  </p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { icon: IndianRupee, label: "100% free", sub: "We earn from lenders, never from you" },
                      { icon: UserCheck, label: "Dedicated manager", sub: "A real person guides start to finish" },
                      { icon: TrendingDown, label: "Rate negotiation", sub: "We use competing offers as leverage" },
                      { icon: FileCheck, label: "Document help", sub: "We tell you exactly what to prepare" },
                      { icon: Headphones, label: "End-to-end support", sub: "No bank visits needed from you" },
                      { icon: Clock, label: `${result.fastestApprovalDays.min}-${result.fastestApprovalDays.max} day approval`, sub: "We track and follow up daily" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3 text-center hover:bg-white/[0.05] transition-colors"
                      >
                        <div className="h-6 w-6 rounded-lg bg-emerald-500/10 flex items-center justify-center mx-auto mb-2">
                          <item.icon className="h-3 w-3 text-emerald-400/80" />
                        </div>
                        <p className="text-[10px] font-bold text-white mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[8px] text-white/30 leading-relaxed">
                          {item.sub}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full h-11 mt-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:from-emerald-400 hover:to-emerald-500 transition-all flex items-center justify-center gap-2"
                    onClick={() => {
                      const el = document.getElementById("contact-capture");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <PhoneCall className="h-4 w-4" />
                    Get started with Credrace
                  </button>
                  <p className="text-[9px] text-white/20 text-center mt-2">
                    Takes 30 seconds. A loan manager connects within 2 hours.
                  </p>
                </motion.div>

                {/* ═══ 5. FOIR GAUGE + PROTECTION ═══ */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* FOIR */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <FOIRGauge
                      foir={result.foir.currentFOIR}
                      label={result.foir.foirLabel}
                      status={result.foir.foirStatus}
                    />
                  </motion.div>

                  {/* Protection */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <Shield className="h-3.5 w-3.5 text-emerald-400/70" />
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider">
                        Your protection
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      {result.protection.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400/60 shrink-0 mt-0.5" />
                          <p className="text-[10px] text-white/45 leading-relaxed">{h}</p>
                        </div>
                      ))}
                      {result.protection.warnings.map((w, i) => (
                        <div key={`w${i}`} className="flex items-start gap-1.5">
                          <AlertTriangle className="h-3 w-3 text-amber-400/60 shrink-0 mt-0.5" />
                          <p className="text-[10px] text-amber-400/60 leading-relaxed">{w}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* ═══ 6. IMPROVEMENT TIPS ═══ */}
                {result.improvementTips.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 rounded-2xl border border-amber-500/10 bg-amber-500/[0.03] p-4"
                  >
                    <p className="text-[10px] font-bold text-amber-400/70 uppercase tracking-wider mb-2.5">
                      How to improve your eligibility
                    </p>
                    <div className="space-y-1.5">
                      {result.improvementTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Zap className="h-3 w-3 text-amber-400/60 shrink-0 mt-0.5" />
                          <p className="text-[10px] text-white/45">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ═══ 7. APPLY SECTION (Step-by-step process) ═══ */}
                <motion.div
                  id="contact-capture"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="mt-5 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.06] to-white/[0.02] overflow-hidden"
                >
                  {/* Header */}
                  <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-white/[0.04]">
                    <p className="text-base font-extrabold text-white mb-1">
                      Ready to get your loan approved?
                    </p>
                    <p className="text-[11px] text-white/40">
                      This does NOT auto-submit to any bank. Here&apos;s exactly what happens:
                    </p>
                  </div>

                  {/* Step-by-step process */}
                  <div className="px-5 sm:px-6 py-5 space-y-3.5">
                    {[
                      {
                        step: "1",
                        icon: PhoneCall,
                        title: "A dedicated loan manager calls you",
                        desc: "Within 2 hours of applying, a real person connects with you on WhatsApp or call.",
                        time: "Within 2 hours",
                      },
                      {
                        step: "2",
                        icon: FileCheck,
                        title: "We review your profile together",
                        desc: "We go through your documents, verify details, and pick the best 1-2 lenders from your matches.",
                        time: "Day 1",
                      },
                      {
                        step: "3",
                        icon: Target,
                        title: "One targeted application goes out",
                        desc: "A single, well-prepared application to the best-fit lender. One CIBIL check, maximum approval chance.",
                        time: "Day 1-2",
                      },
                      {
                        step: "4",
                        icon: CheckCircle2,
                        title: "In-principle approval",
                        desc: `Based on your profile, we expect approval within ${result.fastestApprovalDays.min}-${result.fastestApprovalDays.max} working days. We track and follow up daily.`,
                        time: `Day ${result.fastestApprovalDays.min}-${result.fastestApprovalDays.max}`,
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0">
                            <item.icon className="h-3.5 w-3.5 text-emerald-400" />
                          </div>
                          {i < 3 && (
                            <div className="w-px flex-1 bg-gradient-to-b from-emerald-500/20 to-transparent mt-1" />
                          )}
                        </div>
                        <div className="flex-1 pb-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-xs font-bold text-white">
                              {item.title}
                            </p>
                            <span className="text-[8px] font-bold text-emerald-400/50 bg-emerald-500/10 rounded-full px-1.5 py-0.5">
                              {item.time}
                            </span>
                          </div>
                          <p className="text-[10px] text-white/40 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact capture */}
                  <div className="px-5 sm:px-6 pb-5">
                    <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4">
                      <p className="text-xs font-bold text-white mb-0.5">
                        Share your details to get started
                      </p>
                      <p className="text-[10px] text-white/30 mb-3">
                        A dedicated manager will call you. No spam, no auto-dialling.
                        You stay in control.
                      </p>
                      <div className="space-y-2.5">
                        {/* Mobile number */}
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-white/30">
                            +91
                          </span>
                          <input
                            type="tel"
                            inputMode="numeric"
                            placeholder="Mobile number"
                            value={data.phone}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                              setData({ ...data, phone: val });
                            }}
                            className="w-full h-12 pl-14 pr-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm font-medium placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                          />
                        </div>
                        {/* Email */}
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/25" />
                          <input
                            type="email"
                            placeholder="Email address"
                            value={data.email}
                            onChange={(e) =>
                              setData({ ...data, email: e.target.value })
                            }
                            className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm font-medium placeholder:text-white/25 focus:border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 transition-all"
                          />
                        </div>
                        {/* Error message */}
                        {submitError && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-xl bg-red-500/10 border border-red-500/30 p-3"
                          >
                            <p className="text-xs text-red-400 font-medium">{submitError}</p>
                          </motion.div>
                        )}

                        {/* Submit */}
                        <button
                          className={cn(
                            "w-full h-12 rounded-xl text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2",
                            data.phone.length === 10 &&
                              data.email.includes("@") &&
                              data.email.includes(".") &&
                              !submitting
                              ? "bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/20"
                              : "bg-white/[0.08] text-white/30 cursor-not-allowed"
                          )}
                          onClick={async () => {
                            if (
                              data.phone.length === 10 &&
                              data.email.includes("@") &&
                              data.email.includes(".") &&
                              !submitting
                            ) {
                              setSubmitting(true);
                              setSubmitError(null);

                              try {
                                const response = await fetch("/api/eligibility", {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    loanType: data.loanType,
                                    phone: data.phone,
                                    email: data.email.trim(),
                                    eligibleAmount: result
                                      ? `₹${(result.maxAmount / 100000).toFixed(1)}L`
                                      : undefined,
                                    matchedLenders: result?.matchedLenders.length,
                                  }),
                                });

                                const responseData = await response.json();

                                if (!response.ok) {
                                  throw new Error(
                                    responseData.error || "Something went wrong. Please try again."
                                  );
                                }

                                // Success - show success message
                                alert(
                                  "Thank you! A dedicated loan manager will reach out within 2 hours."
                                );
                              } catch (err) {
                                setSubmitError(
                                  err instanceof Error
                                    ? err.message
                                    : "Failed to submit. Please try again."
                                );
                              } finally {
                                setSubmitting(false);
                              }
                            }
                          }}
                        >
                          {submitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <PhoneCall className="h-4 w-4" />
                              Apply now
                            </>
                          )}
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mt-3 text-[9px] text-white/25">
                        <span className="flex items-center gap-1">
                          <Lock className="h-2.5 w-2.5" /> Encrypted
                        </span>
                        <span className="flex items-center gap-1">
                          <Shield className="h-2.5 w-2.5" /> No CIBIL impact
                        </span>
                        <span className="flex items-center gap-1">
                          <Zap className="h-2.5 w-2.5" /> 100% free
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Disclaimer */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  className="text-[9px] text-white/25 mt-4 text-center leading-relaxed"
                >
                  Indicative estimates based on published lender criteria and your profile. Final
                  offer subject to lender assessment, documentation, and credit
                  bureau verification. Credrace is a loan marketplace, not a lender.
                </motion.p>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-3 mt-4"
                >
                  <button
                    onClick={goBack}
                    className="flex-1 flex items-center justify-center gap-2 h-10 rounded-xl text-[11px] font-semibold border border-white/[0.08] text-white/45 hover:text-white/70 hover:bg-white/[0.06] transition-all"
                  >
                    <ArrowLeft className="h-3 w-3" />
                    Edit answers
                  </button>
                  <button
                    onClick={() => {
                      setStepIdx(0);
                      setDirection(1);
                      setData(INITIAL_DATA);
                      setResult(null);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 h-10 rounded-xl text-[11px] font-semibold border border-white/[0.08] text-white/45 hover:text-white/70 hover:bg-white/[0.06] transition-all"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Start over
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ─── Bottom trust bar ─── */}
      {!isResults && (
        <div className="fixed bottom-0 left-0 right-0 z-40">
          <div className="px-5 pb-5 pt-8 bg-gradient-to-t from-[#071018] via-[#071018]/90 to-transparent">
            <div className="flex items-center justify-center gap-6 text-[10px] text-white/35 font-medium">
              <div className="flex items-center gap-1.5">
                <Lock className="h-3 w-3 text-emerald-500/60" />
                256-bit encrypted
              </div>
              <div className="h-3 w-px bg-white/[0.12]" />
              <div className="flex items-center gap-1.5">
                <Shield className="h-3 w-3 text-emerald-500/60" />
                No CIBIL impact
              </div>
              <div className="h-3 w-px bg-white/[0.12]" />
              <div className="flex items-center gap-1.5">
                <Zap className="h-3 w-3 text-emerald-500/60" />
                100% free
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   Sub-components
   ═══════════════════════════════════════════ */

function StepLabel({
  step,
  total,
  last,
}: {
  step: number;
  total: number;
  last?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-[10px] font-bold text-emerald-400/70 uppercase tracking-widest">
        {last ? "Last step" : `Step ${step} of ${total}`}
      </span>
    </div>
  );
}

function DetailCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3">
      <p className="text-[9px] text-white/35 font-bold uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-xs font-bold text-white/80 truncate">{value}</p>
    </div>
  );
}

function FormActions({
  onBack,
  onForward,
  canProceed,
  label,
}: {
  onBack: () => void;
  onForward: () => void;
  canProceed: boolean;
  label: string;
}) {
  return (
    <div className="flex items-center justify-between mt-10">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/60 transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back
      </button>
      <div className="flex items-center gap-3">
        <span className="hidden sm:flex items-center gap-1 text-[10px] text-white/25">
          press <CornerDownLeft className="h-3 w-3" />
        </span>
        <button
          onClick={onForward}
          disabled={!canProceed}
          className={cn(
            "flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold transition-all duration-300",
            canProceed
              ? "bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:bg-emerald-400"
              : "bg-white/[0.06] text-white/25 cursor-not-allowed"
          )}
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 mt-8 text-xs text-white/40 hover:text-white/60 transition-colors"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      Back
    </button>
  );
}

/** Helper to get RBI LTV for inline feedback */
function getRbiLTV(propertyValue: number): number {
  if (propertyValue <= 2000000) return 0.9;
  if (propertyValue <= 7500000) return 0.8;
  return 0.75;
}
