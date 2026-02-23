"use client";

import { motion } from "framer-motion";
import type { LeaderboardEntry } from "@/lib/warRoomEngine";
import { formatCurrencyFull } from "@/lib/warRoomData";

const RANK_ACCENT: Record<number, string> = {
  1: "#10b981",
  2: "#f59e0b",
  3: "#94a3b8",
};

interface LeaderboardCardProps {
  entry: LeaderboardEntry;
  isUpdated?: boolean;
  accentFlash?: "up" | "down" | null;
}

export function LeaderboardCard({
  entry,
  isUpdated,
  accentFlash,
}: LeaderboardCardProps) {
  const accentColor =
    RANK_ACCENT[entry.rank] ?? "rgba(255,255,255,0.12)";
  const flashColor =
    accentFlash === "up" ? "#10b981" : accentFlash === "down" ? "#ef4444" : accentColor;

  return (
    <motion.div
      layout
      className={`flex items-center w-full rounded-xl border overflow-hidden shrink-0 h-[72px] transition-colors ${
        isUpdated ? "bg-emerald-500/[0.08] border-emerald-500/20" : "bg-white/[0.02] border-white/[0.08]"
      }`}
      transition={{ layout: { type: "spring", stiffness: 280, damping: 28 } }}
    >
      <motion.div
        className="w-[3px] h-full shrink-0"
        style={{ backgroundColor: flashColor }}
        animate={{ backgroundColor: flashColor }}
        transition={{ duration: accentFlash ? 0.4 : 0 }}
      />
      <div className="w-10 shrink-0 flex items-center justify-center text-white/50 text-sm font-bold tabular-nums">
        <motion.span
          key={entry.rank}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{ transformOrigin: "center center", perspective: "100px" }}
        >
          {entry.rank}
        </motion.span>
      </div>
      {/* Logo circle */}
      <div
        className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white ml-2"
        style={{ backgroundColor: entry.lender.color }}
      >
        {entry.lender.shortName.slice(0, 2)}
      </div>
      {/* Name + tagline */}
      <div className="min-w-0 flex-1 px-3 py-2">
        <p className="text-white font-semibold text-sm truncate">
          {entry.lender.name}
        </p>
        <p className="text-white/30 text-xs truncate">
          {entry.rank <= 3 ? "Top offer" : "Competitive rate"}
        </p>
      </div>
      <div
        className={`shrink-0 text-right pr-3 font-bold tabular-nums text-sm ${
          entry.rank <= 3 ? "text-emerald-400" : "text-white/70"
        }`}
      >
        {entry.rate.toFixed(2)}%
      </div>
      <div className="shrink-0 text-white/50 text-sm tabular-nums pr-4 w-24 text-right">
        {formatCurrencyFull(entry.emi)}/mo
      </div>
    </motion.div>
  );
}
