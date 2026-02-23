"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownOverlayProps {
  onComplete: () => void;
}

const LIGHT_DURATION_MS = 450;
const LIGHTS_HOLD_MS = 1200;
const LIGHTS_OUT_PAUSE_MS = 180;
const GO_VISIBLE_MS = 700;
const FLASH_FADE_MS = 400;

export function CountdownOverlay({ onComplete }: CountdownOverlayProps) {
  const [phase, setPhase] = useState<"lights" | "out" | "go" | "flash">("lights");
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    if (phase === "lights") {
      if (litCount < 5) {
        const t = setTimeout(() => setLitCount((c) => c + 1), LIGHT_DURATION_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("out"), LIGHTS_HOLD_MS);
      return () => clearTimeout(t);
    }
    if (phase === "out") {
      const t = setTimeout(() => setPhase("go"), LIGHTS_OUT_PAUSE_MS);
      return () => clearTimeout(t);
    }
    if (phase === "go") {
      const t = setTimeout(() => setPhase("flash"), GO_VISIBLE_MS);
      return () => clearTimeout(t);
    }
    if (phase === "flash") {
      const t = setTimeout(onComplete, FLASH_FADE_MS);
      return () => clearTimeout(t);
    }
  }, [phase, litCount, onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
      }}
    >
      {/* F1-style 5 lights */}
      {phase === "lights" && (
        <motion.div
          className="flex items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-red-500/50"
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{
                scale: 1,
                opacity: i < litCount ? 1 : 0.25,
                backgroundColor: i < litCount ? "#ef4444" : "rgba(30,30,30,0.9)",
                boxShadow: i < litCount ? "0 0 20px 4px rgba(239,68,68,0.6)" : "none",
              }}
              transition={{
                duration: 0.15,
                backgroundColor: { duration: 0.2 },
              }}
            />
          ))}
        </motion.div>
      )}

      {/* All lights out — brief tension */}
      {phase === "out" && (
        <motion.div
          className="flex items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1a1a1a] border border-white/10"
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.1 }}
            />
          ))}
        </motion.div>
      )}

      {/* GO — impact moment */}
      <AnimatePresence mode="wait">
        {phase === "go" && (
          <motion.div
            key="go"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08 }}
          >
            {/* Impact burst */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 320,
                height: 320,
                margin: -160,
                background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(16,185,129,0.1) 40%, transparent 70%)",
              }}
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1.8, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
            <motion.span
              className="relative text-5xl sm:text-7xl md:text-8xl font-black text-white select-none tracking-tighter drop-shadow-[0_0_40px_rgba(16,185,129,0.5)]"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              GO
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen flash — gate open feel */}
      {phase === "flash" && (
        <motion.div
          className="absolute inset-0 bg-emerald-500/30 pointer-events-none"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0 }}
          transition={{ duration: FLASH_FADE_MS / 1000, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
