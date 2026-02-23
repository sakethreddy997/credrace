"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { WarRoomInputs, LoanType, IncomeBracket } from "@/lib/warRoomData";
import { formatCurrencyFull } from "@/lib/warRoomData";

const LOAN_AMOUNT_MIN = 1_00_000;
const LOAN_AMOUNT_MAX = 1_00_00_000;
const LOAN_AMOUNT_STEP = 50_000;

const INCOME_OPTIONS: { value: IncomeBracket; label: string }[] = [
  { value: "below_25k", label: "Below ₹25K" },
  { value: "25k_50k", label: "₹25K–50K" },
  { value: "50k_1l", label: "₹50K–1L" },
  { value: "above_1l", label: "Above ₹1L" },
];

const LOAN_TYPE_OPTIONS: { value: LoanType; label: string }[] = [
  { value: "home", label: "Home Loan" },
  { value: "personal", label: "Personal Loan" },
  { value: "two-wheeler", label: "Two-Wheeler" },
  { value: "business", label: "Business" },
];

interface WarRoomInputProps {
  onStart: (inputs: WarRoomInputs) => void;
}

export function WarRoomInput({ onStart }: WarRoomInputProps) {
  const [loanAmount, setLoanAmount] = useState(25_00_000);
  const [incomeBracket, setIncomeBracket] = useState<IncomeBracket>("50k_1l");
  const [loanType, setLoanType] = useState<LoanType>("home");
  const [isStarting, setIsStarting] = useState(false);

  const handleSubmit = () => {
    if (isStarting) return;
    setIsStarting(true);
    setTimeout(() => {
      onStart({ loanAmount, incomeBracket, loanType });
    }, 800);
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-emerald-500/[0.07] blur-[150px] animate-mesh" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.05] blur-[130px] animate-mesh-reverse" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/[0.03] blur-[200px]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a1425]/80 backdrop-blur-xl shadow-[0_8px_60px_rgba(0,0,0,0.5)] p-8 sm:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent pointer-events-none" />
        <h1 className="relative text-white text-[2rem] sm:text-[2.25rem] font-bold text-center mb-2 tracking-tight">
          Start Your Race
        </h1>
        <p className="relative text-white/50 text-center text-base sm:text-lg mb-8">
          5 seconds. Tell us what you need. Watch 30+ banks compete.
        </p>

        <div className="relative space-y-6">
          <div>
            <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2">
              Loan Amount
            </label>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <input
                type="range"
                min={LOAN_AMOUNT_MIN}
                max={LOAN_AMOUNT_MAX}
                step={LOAN_AMOUNT_STEP}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="war-room-slider flex-1 h-2 rounded-full appearance-none cursor-pointer bg-white/10"
              />
              <div className="min-w-[140px] rounded-xl px-4 py-3 text-white font-semibold text-right text-lg border border-white/[0.08] bg-white/[0.04] tabular-nums">
                {formatCurrencyFull(loanAmount)}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2">
              Monthly Income
            </label>
            <select
              value={incomeBracket}
              onChange={(e) => setIncomeBracket(e.target.value as IncomeBracket)}
              className="w-full rounded-xl px-4 py-3 text-white font-medium border border-white/[0.08] bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/30 transition-all"
            >
              {INCOME_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#0a1425] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2">
              Loan Type
            </label>
            <div className="flex flex-wrap gap-2">
              {LOAN_TYPE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setLoanType(opt.value)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold border transition-all ${
                    loanType === opt.value
                      ? "bg-emerald-500 text-white border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      : "bg-white/[0.04] text-white/80 border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.button
          type="button"
          onClick={handleSubmit}
          disabled={isStarting}
          className="relative mt-8 w-full py-4 rounded-2xl font-bold text-[15px] text-white flex items-center justify-center gap-2 overflow-hidden bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-300"
          whileHover={isStarting ? {} : { scale: 1.02 }}
          whileTap={isStarting ? {} : { scale: 0.98 }}
          animate={isStarting ? { boxShadow: "0 0 48px rgba(16,185,129,0.4)" } : {}}
          transition={{ duration: 0.3 }}
        >
          <span className="relative z-10">
            {isStarting ? "Engines Starting…" : "🏁 Start the Race"}
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}
