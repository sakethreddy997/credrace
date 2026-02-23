"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatCurrencyFull } from "@/lib/warRoomData";

interface SavingsTickerProps {
  bestRate: number;
  monthlyEmi: number;
  totalSavings: number;
}

export function SavingsTicker({
  bestRate,
  monthlyEmi,
  totalSavings,
}: SavingsTickerProps) {
  const [displaySavings, setDisplaySavings] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const stepMs = duration / steps;
    const increment = totalSavings / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= totalSavings) {
        setDisplaySavings(totalSavings);
        clearInterval(timer);
      } else {
        setDisplaySavings(Math.round(current));
      }
    }, stepMs);
    return () => clearInterval(timer);
  }, [totalSavings]);

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 py-4 md:px-6 md:py-5 border-t border-white/[0.08] bg-[#0a1425]/80 backdrop-blur-xl">
      <div className="flex flex-wrap items-baseline gap-4 md:gap-6 text-sm">
        <div>
          <span className="text-white/50">Your best rate: </span>
          <span className="font-bold text-lg tabular-nums text-emerald-400">
            {bestRate.toFixed(2)}%
          </span>
        </div>
        <div>
          <span className="text-white/50">Monthly EMI: </span>
          <span className="font-bold text-white tabular-nums">
            {formatCurrencyFull(monthlyEmi)}/mo
          </span>
        </div>
        <div>
          <span className="text-white/50">Total savings vs. market average: </span>
          <span className="font-bold text-lg tabular-nums text-emerald-400">
            {formatCurrencyFull(displaySavings)}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end gap-1">
        <Link
          href="/eligibility"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-bold text-white bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.3)] hover:shadow-[0_0_36px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-[1.02]"
        >
          Claim This Rate →
        </Link>
        <p className="text-[10px] text-white/40">No CIBIL impact · Takes 2 minutes</p>
      </div>
    </div>
  );
}
