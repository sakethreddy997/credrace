"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Clock,
  FileQuestion,
  Target,
} from "lucide-react";

const problems = [
  {
    icon: Building2,
    headline: "You take time off. You wait.",
    description:
      "Lunch break, branch closed. Document missing — come tomorrow. Submit at another branch. The runaround adds up.",
  },
  {
    icon: Clock,
    headline: "You submit. They don't prioritize.",
    description:
      "No one calls you back. You chase. Your application sits in a queue while you lose sleep over it.",
  },
  {
    icon: FileQuestion,
    headline: "You never really know what you're signing.",
    description:
      "No one sits with you and explains what you get and what you lose. The fine print stays fine print.",
  },
  {
    icon: Target,
    headline: "Finding the right home is your job.",
    description:
      "Running between branches and reading fine print shouldn't be. That part should be someone else's headache.",
  },
];

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-emerald-500/[0.04] blur-[140px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
            The problem
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
            This is what getting a loan usually feels like
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line: vertical connector on large screens */}
          <div
            className="hidden lg:block absolute left-6 top-0 bottom-0 w-px bg-white/[0.06]"
            style={{ left: "1.5rem" }}
          />

          <div className="space-y-4 lg:space-y-6">
            {problems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(0.05 + i * 0.1)}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0a1425]/80 backdrop-blur-sm p-6 sm:p-7 hover:bg-white/[0.03] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.03] via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex gap-4 sm:gap-6 items-start">
                    <div className="flex shrink-0 items-center justify-center h-12 w-12 rounded-xl bg-white/[0.06] border border-white/[0.08] text-white/50 group-hover:text-emerald-400/80 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.headline}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-16 text-center text-lg sm:text-xl font-semibold text-white/90 max-w-xl mx-auto"
        >
          We built Credrace so that part is not your problem.
        </motion.p>
      </div>
    </section>
  );
}
