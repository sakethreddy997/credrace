"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WarRoomInputs } from "@/lib/warRoomData";
import {
  getInitialLeaderboard,
  simulateLiveUpdate,
  getNextLiveUpdateDelay,
  type LeaderboardEntry,
} from "@/lib/warRoomEngine";
import { getTenureMonths, calculateSavings } from "@/lib/warRoomData";
import { LiveTicker } from "./LiveTicker";
import { LeaderboardCard } from "./LeaderboardCard";
import { WinnerPodium } from "./WinnerPodium";
import { WinnerHero } from "./WinnerHero";
import { SavingsTicker } from "./SavingsTicker";
import Link from "next/link";

/** Cards "cross the finish line" from left — each one races in and locks. */
const FINISH_LINE_VARIANTS = {
  hidden: { x: -140, opacity: 0, filter: "blur(4px)" },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.6 + i * 0.08,
      type: "spring" as const,
      stiffness: 320,
      damping: 28,
    },
  }),
};

interface WarRoomDashboardProps {
  inputs: WarRoomInputs;
}

export function WarRoomDashboard({ inputs }: WarRoomDashboardProps) {
  const sortedInitial = useMemo(
    () => getInitialLeaderboard(inputs),
    [inputs.loanAmount, inputs.incomeBracket, inputs.loanType]
  );

  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(sortedInitial);
  const [revealPhase, setRevealPhase] = useState<"winner" | "list">("winner");
  const [podiumVisible, setPodiumVisible] = useState(false);
  const [liveStep, setLiveStep] = useState(0);
  const [updatedCardId, setUpdatedCardId] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState(false);
  const leaderboardRef = useRef(leaderboard);
  leaderboardRef.current = leaderboard;

  useEffect(() => {
    if (revealPhase !== "list") return;
    const t = setTimeout(() => setPodiumVisible(true), 400);
    return () => clearTimeout(t);
  }, [revealPhase]);

  useEffect(() => {
    if (revealPhase !== "list") return;
    const delay = getNextLiveUpdateDelay(inputs, liveStep);
    const timer = setTimeout(() => {
      const current = leaderboardRef.current;
      const { leaderboard: next, updatedIndex } = simulateLiveUpdate(
        current,
        inputs,
        liveStep
      );
      const updatedId = next[updatedIndex]?.lender.id ?? null;
      setUpdatedCardId(updatedId);
      setLeaderboard(next);
      setLiveStep((s) => s + 1);
      setTimeout(() => setUpdatedCardId(null), 400);
    }, delay);
    return () => clearTimeout(timer);
  }, [revealPhase, liveStep, inputs]);

  const topThree = leaderboard.slice(0, 3);
  const best = topThree[0];
  const worst = leaderboard[leaderboard.length - 1];
  const tenure = getTenureMonths(inputs.loanType);
  const totalSavings =
    best && worst
      ? calculateSavings(inputs.loanAmount, best.rate, worst.rate, tenure)
      : 0;
  const displayList = expandedMobile ? leaderboard : leaderboard.slice(0, 10);

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background:
          "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
      }}
    >
      {/* Phase 1: Winner hero — full-screen "You won" moment */}
      <AnimatePresence>
        {revealPhase === "winner" && best && (
          <WinnerHero
            winner={best}
            inputs={inputs}
            onRevealList={() => setRevealPhase("list")}
          />
        )}
      </AnimatePresence>

      {/* Phase 2: Full war room — header, finish-line list, podium */}
      <motion.div
        className="flex flex-col flex-1 min-h-0"
        initial={false}
        animate={{
          opacity: revealPhase === "list" ? 1 : 0,
          pointerEvents: revealPhase === "list" ? "auto" : "none",
        }}
        transition={{ duration: 0.5 }}
      >
        <header className="flex items-center justify-between gap-4 px-4 py-3 border-b border-white/[0.08] shrink-0 bg-[#030712]/80 backdrop-blur-xl">
          <h1 className="text-white font-bold text-lg shrink-0 tracking-tight">
            🏁 Credrace War Room
          </h1>
          <LiveTicker />
        </header>

        <div className="flex-1 flex flex-col lg:flex-row min-h-0">
          {/* Leaderboard — "cross the finish line" */}
          <div className="flex-1 min-w-0 flex flex-col p-4 lg:pr-2 lg:w-[55%]">
            <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">
              Full race — 30 banks by best rate
            </p>
            <div className="relative space-y-2 overflow-y-auto">
              {/* Finish line: vertical accent on the left */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full opacity-80 z-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.5) 20%, rgba(16,185,129,0.5) 80%, transparent 100%)",
                }}
              />
              {displayList.map((entry, i) => (
                <motion.div
                  key={entry.lender.id}
                  layout
                  custom={i}
                  variants={FINISH_LINE_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  className="relative w-full z-10"
                  transition={{
                    layout: { type: "spring", stiffness: 280, damping: 28 },
                  }}
                >
                  <LeaderboardCard
                    entry={entry}
                    isUpdated={updatedCardId === entry.lender.id}
                    accentFlash={
                      entry.previousRank !== entry.rank
                        ? entry.rank < entry.previousRank
                          ? "up"
                          : "down"
                        : null
                    }
                  />
                </motion.div>
              ))}
            </div>
            {!expandedMobile && leaderboard.length > 10 && (
              <button
                type="button"
                onClick={() => setExpandedMobile(true)}
                className="mt-4 py-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Show all 30
              </button>
            )}
          </div>

          <div className="hidden lg:flex lg:w-[45%] lg:pl-2 lg:items-center lg:justify-center lg:py-6">
            <WinnerPodium
              topThree={topThree}
              inputs={inputs}
              visible={podiumVisible}
            />
          </div>
        </div>

        {podiumVisible && best && (
          <AnimatePresence>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="lg:hidden fixed bottom-24 left-4 right-4 z-20 rounded-2xl border border-white/[0.08] bg-[#0a1425]/95 backdrop-blur-xl p-4 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: best.lender.color }}
                >
                  {best.lender.shortName.slice(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white font-bold truncate">
                    🏆 {best.lender.name}
                  </p>
                  <p className="text-emerald-400 font-semibold text-sm tabular-nums">
                    {best.rate.toFixed(2)}% ·{" "}
                    {best.emi.toLocaleString("en-IN")}/mo
                  </p>
                </div>
                <Link
                  href="/eligibility"
                  className="shrink-0 px-4 py-2 rounded-xl font-bold text-white text-sm bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
                >
                  Claim
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {best && (
          <div className="shrink-0">
            <SavingsTicker
              bestRate={best.rate}
              monthlyEmi={best.emi}
              totalSavings={totalSavings}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
