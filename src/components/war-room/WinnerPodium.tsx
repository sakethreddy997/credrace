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

const TROPHIES = ["🥇", "🥈", "🥉"];

interface WinnerPodiumProps {
  topThree: LeaderboardEntry[];
  inputs: WarRoomInputs;
  visible: boolean;
}

function runConfetti() {
  const duration = 1500;
  const end = Date.now() + duration;
  const colors = ["#10b981", "#f59e0b"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0.4, y: 0.6 },
      colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 0.6, y: 0.6 },
      colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

export function WinnerPodium({
  topThree,
  inputs,
  visible,
}: WinnerPodiumProps) {
  const confettiFired = useRef(false);

  useEffect(() => {
    if (!visible || topThree.length === 0 || confettiFired.current) return;
    confettiFired.current = true;
    runConfetti();
  }, [visible, topThree.length]);

  if (!visible || topThree.length === 0) return null;

  const winner = topThree[0];
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

  const order = [1, 0, 2];
  const entries = order.map((i) => topThree[i]).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-end justify-center gap-2 md:gap-4">
        {entries.map((entry, idx) => {
          const isWinner = entry.rank === 1;
          const heights = ["h-32", "h-40", "h-28"];
          const orderIdx = entry.rank === 1 ? 1 : entry.rank === 2 ? 0 : 2;
          return (
            <motion.div
              key={entry.lender.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + orderIdx * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className={`flex flex-col items-center justify-end rounded-2xl border border-white/[0.08] backdrop-blur-xl p-4 ${heights[orderIdx]} ${
                isWinner ? "bg-[#0a1425]/90 shadow-[0_0_40px_rgba(16,185,129,0.25)]" : "bg-[#0a1425]/80"
              }`}
              style={{ minWidth: 120 }}
            >
              <span className="text-2xl mb-1">{TROPHIES[entry.rank - 1]}</span>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2"
                style={{ backgroundColor: entry.lender.color }}
              >
                {entry.lender.shortName.slice(0, 2)}
              </div>
              <p className="text-white font-semibold text-sm text-center truncate w-full">
                {entry.lender.name}
              </p>
              <p
                className={`font-bold tabular-nums mt-1 ${isWinner ? "text-3xl text-emerald-400" : "text-2xl text-emerald-400/90"}`}
              >
                {entry.rate.toFixed(2)}%
              </p>
              <p className="text-white/50 text-xs mt-0.5">
                {formatCurrencyFull(entry.emi)}/mo
              </p>
              {isWinner && (
                <span className="mt-2 text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  ⚡ Best Rate
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="text-center mt-2">
        <p className="text-white font-bold text-lg">
          🏆 {winner.lender.name} wins your race!
        </p>
        <p className="text-white/50 text-sm mt-1">
          Saves you ₹{savingsLakh} Lakh vs. going to SBI directly
        </p>
      </div>
    </motion.div>
  );
}
