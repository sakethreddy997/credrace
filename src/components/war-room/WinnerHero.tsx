"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import type { LeaderboardEntry } from "@/lib/warRoomEngine";
import {
  formatCurrencyFull,
  calculateSavings,
  getAdjustedRate,
  getTenureMonths,
} from "@/lib/warRoomData";
import { lenders } from "@/lib/warRoomData";
import type { WarRoomInputs } from "@/lib/warRoomData";

interface WinnerHeroProps {
  winner: LeaderboardEntry;
  inputs: WarRoomInputs;
  onRevealList: () => void;
}

function runConfetti() {
  const duration = 1800;
  const end = Date.now() + duration;
  const colors = ["#10b981", "#34d399", "#f59e0b"];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 60,
      origin: { x: 0.5, y: 0.6 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 60,
      origin: { x: 0.5, y: 0.6 },
      colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

export function WinnerHero({ winner, inputs, onRevealList }: WinnerHeroProps) {
  const confettiFired = useRef(false);
  const sbi = lenders.find((l) => l.shortName === "SBI");
  const tenure = getTenureMonths(inputs.loanType);
  const sbiRate = sbi ? getAdjustedRate(sbi, inputs) : winner.rate;
  const savingsVsSbi = calculateSavings(
    inputs.loanAmount,
    winner.rate,
    sbiRate,
    tenure
  );
  const savingsLakh = (savingsVsSbi / 1_00_000).toFixed(1);

  useEffect(() => {
    if (!confettiFired.current) {
      confettiFired.current = true;
      runConfetti();
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(onRevealList, 2200);
    return () => clearTimeout(t);
  }, [onRevealList]);

  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.06] via-transparent to-transparent pointer-events-none" />

      <motion.div
        className="relative text-center max-w-lg mx-auto"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.15 }}
      >
        <motion.p
          className="text-emerald-400/90 text-sm font-bold uppercase tracking-[0.2em] mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          30 banks raced. One won.
        </motion.p>

        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
          style={{ backgroundColor: winner.lender.color }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.35 }}
        >
          <span className="text-2xl font-black text-white">
            {winner.lender.shortName.slice(0, 2)}
          </span>
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-white mb-1"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {winner.lender.name}
        </motion.h2>
        <motion.p
          className="text-white/50 text-sm mb-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Your best rate
        </motion.p>

        <motion.div
          className="inline-flex flex-col items-center rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-8 py-5 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 280, damping: 24 }}
        >
          <span className="text-4xl sm:text-5xl font-black text-emerald-400 tabular-nums">
            {winner.rate.toFixed(2)}%
          </span>
          <span className="text-white/70 text-sm mt-1">
            {formatCurrencyFull(winner.emi)}/mo
          </span>
          <span className="text-emerald-400/90 text-xs font-semibold mt-2">
            Saves you ₹{savingsLakh} Lakh vs. going to SBI
          </span>
        </motion.div>

        <motion.p
          className="text-white/40 text-xs mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          See the full race below
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
