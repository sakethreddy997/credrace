"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Star,
  Users,
  Landmark,
  IndianRupee,
  Building2,
  Shield,
} from "lucide-react";

/* ─── Stats ─── */
const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Borrowers served",
    prefix: "",
    icon: Users,
    detail: "and growing every day",
  },
  {
    value: 30,
    suffix: "+",
    label: "Lending partners",
    prefix: "",
    icon: Landmark,
    detail: "top banks and NBFCs",
  },
  {
    value: 850,
    suffix: " Cr+",
    label: "Loans facilitated",
    prefix: "₹",
    icon: IndianRupee,
    detail: "across all loan types",
  },
  {
    value: 4.8,
    suffix: "/5",
    label: "Customer rating",
    prefix: "",
    icon: Star,
    isDecimal: true,
    detail: "based on 2,400+ reviews",
  },
];

/* ─── Lenders (8 for smaller DOM; marquee still duplicates for seamless loop) ─── */
const lenders = [
  "SBI",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak",
  "Bajaj Finserv",
  "Tata Capital",
  "LIC HFL",
];

/* ─── Animated counter ─── */
function AnimatedCounter({
  value,
  prefix,
  suffix,
  isDecimal = false,
  isInView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  isDecimal?: boolean;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const totalSteps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);
      if (step >= totalSteps) {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / totalSteps);
    return () => clearInterval(timer);
  }, [value, isInView]);

  const display = isDecimal
    ? count.toFixed(1)
    : Math.floor(count).toLocaleString("en-IN");

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  };
}

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 sm:py-28 gradient-brand relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] rounded-full bg-emerald-500/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-blue-500/[0.03] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ─── Section header ─── */}
        <motion.div {...fadeUp()} className="text-center mb-14">
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            Trusted by thousands
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Numbers that speak for themselves
          </h2>
        </motion.div>

        {/* ─── Stats grid ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                {...fadeUp(0.05 + i * 0.08)}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden text-center"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-emerald-500/[0.06] blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-4 mx-auto">
                    <Icon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      isDecimal={"isDecimal" in stat && !!stat.isDecimal}
                      isInView={isInView}
                    />
                  </p>
                  <p className="text-sm font-semibold text-white/50 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-white/25">{stat.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Lender Network ─── */}
        <motion.div {...fadeUp(0.3)}>
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8 overflow-hidden">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-7">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-base font-bold text-white/80">
                  Our lending network
                </span>
              </div>
              <div className="hidden sm:block h-px flex-1 bg-white/[0.06]" />
              <span className="text-xs font-medium text-emerald-400/70 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                30+ RBI-registered partners
              </span>
            </div>

            {/* Lender marquee */}
            <div className="relative overflow-hidden">
              {/* Fade edges matching card bg */}
              <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-[#0c1a2e] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-[#0c1a2e] to-transparent z-10 pointer-events-none" />

              <div className="flex gap-4 animate-marquee w-max">
                {[...lenders, ...lenders].map((name, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/[0.08] bg-white/[0.04] flex-shrink-0"
                  >
                    <Building2 className="h-4 w-4 text-emerald-400/60" />
                    <span className="text-sm font-semibold text-white/70 whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to testimonials (gray-50) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-10" />
    </section>
  );
}
