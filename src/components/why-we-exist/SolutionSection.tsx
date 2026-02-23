"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeadphonesIcon,
  FileCheck,
  Zap,
} from "lucide-react";
const benefits = [
  {
    icon: Zap,
    title: "One application",
    description:
      "Submit once. We match you with multiple offers in one place. No branch runaround.",
  },
  {
    icon: HeadphonesIcon,
    title: "Someone who follows up",
    description:
      "A dedicated person handles your case from start to disbursal. You never have to chase.",
  },
  {
    icon: FileCheck,
    title: "Terms in plain language",
    description:
      "We explain what you get and what you pay. No fine-print surprises.",
  },
  {
    icon: ShieldCheck,
    title: "No CIBIL impact to check",
    description:
      "See what you qualify for in 2 minutes. No hard inquiry. Your score stays untouched.",
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

export function SolutionSection() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
      }}
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/[0.05] blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-3">
            What we do instead
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
            One place. One person. Clear terms.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                {...fadeUp(0.08 + i * 0.06)}
                className="group rounded-2xl border border-white/[0.08] bg-[#0a1425]/80 backdrop-blur-sm p-6 hover:bg-white/[0.03] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/[0.04] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
