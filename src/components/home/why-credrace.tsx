"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  HeadphonesIcon,
  Zap,
  ArrowRightLeft,
  Clock,
  ArrowRight,
  FileX,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/* ─── Before / After comparisons ─── */
const comparisons = [
  {
    icon: Building2,
    before: { number: "12+", label: "bank visits" },
    after: { number: "0", label: "bank visits" },
    tagline: "Stay home. We bring the banks to you.",
  },
  {
    icon: Clock,
    before: { number: "45+", label: "days waiting" },
    after: { number: "2", label: "minutes" },
    tagline: "From weeks of follow-ups to instant results.",
  },
  {
    icon: FileX,
    before: { number: "1", label: "offer, take it or leave" },
    after: { number: "30+", label: "offers competing" },
    tagline: "Banks compete. You pick the winner.",
  },
  {
    icon: Eye,
    before: { number: "Hidden", label: "charges & fees" },
    after: { number: "100%", label: "transparent" },
    tagline: "Every rupee explained before you sign.",
  },
];

/* ─── Feature cards ─── */
const features = [
  {
    title: "Zero CIBIL impact",
    description:
      "We analyse your profile against historical approvals. No hard inquiry. Your score stays untouched.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated loan manager",
    description:
      "A real person handles your case from eligibility to disbursal. You never have to chase anyone.",
    icon: HeadphonesIcon,
  },
  {
    title: "30+ lender network",
    description:
      "Top banks and NBFCs on one platform. SBI, HDFC, ICICI, Bajaj, Tata Capital, and more.",
    icon: ArrowRightLeft,
  },
  {
    title: "2-minute eligibility",
    description:
      "5 questions. No documents upfront. See what you can get before you commit to anything.",
    icon: Zap,
  },
];

/* ─── Animated counter ─── */
function AnimatedNumber({
  value,
  isInView,
}: {
  value: string;
  isInView: boolean;
}) {
  const isNumeric = /^\d+$/.test(value.replace("+", ""));
  const numericPart = parseInt(value.replace("+", ""), 10);
  const hasSuffix = value.includes("+");
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    const duration = 1200;
    const steps = 30;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayNum(Math.floor(numericPart * eased));
      if (step >= steps) {
        setDisplayNum(numericPart);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, isNumeric, numericPart]);

  if (!isNumeric) return <>{value}</>;
  return (
    <>
      {displayNum}
      {hasSuffix ? "+" : ""}
    </>
  );
}

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  };
}

export function WhyCredrace() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 sm:py-32 gradient-brand relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-emerald-500/[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/[0.03] blur-[100px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ─── Section header ─── */}
        <motion.div {...fadeUp()} className="text-center mb-20">
          <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
            Why Cred<span className="text-emerald-300">race</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
            We turned the loan process{" "}
            <span className="gradient-text-hero">upside down</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-lg mx-auto leading-relaxed">
            See how the old way of getting a loan compares to the Cred<span className="text-emerald-400/60">race</span> way.
          </p>
        </motion.div>

        {/* ─── Before vs After comparison grid ─── */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          {comparisons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp(0.05 + i * 0.08)}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-emerald-500/[0.06] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] mb-5">
                    <Icon className="h-5 w-5 text-white/50 group-hover:text-emerald-400 transition-colors duration-300" />
                  </div>

                  {/* Numbers comparison */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    {/* Before */}
                    <div>
                      <p className="text-2xl sm:text-3xl font-extrabold text-white/20 line-through decoration-red-400/40 decoration-2 tabular-nums">
                        <AnimatedNumber
                          value={item.before.number}
                          isInView={isInView}
                        />
                      </p>
                      <p className="text-[11px] text-white/20 mt-0.5">
                        {item.before.label}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-500/10 shrink-0">
                      <ArrowRight className="h-4 w-4 text-emerald-400" />
                    </div>

                    {/* After */}
                    <div>
                      <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">
                        <AnimatedNumber
                          value={item.after.number}
                          isInView={isInView}
                        />
                      </p>
                      <p className="text-[11px] text-emerald-400/60 mt-0.5">
                        {item.after.label}
                      </p>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-white/45 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Feature cards ─── */}
        <motion.div {...fadeUp(0.1)} className="mb-5">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            The Cred<span className="text-emerald-300">race</span> advantage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                {...fadeUp(0.1 + i * 0.06)}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-emerald-500/[0.04] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-4">
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Bottom CTA ─── */}
        <motion.div {...fadeUp(0.3)} className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-[15px] px-7 h-13 rounded-xl shadow-lg shadow-emerald-500/25 group"
          >
            <Link href="/eligibility">
              Experience the difference
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <p className="mt-3 text-sm text-white/30">
            Free. 2 minutes. No documents needed.
          </p>
        </motion.div>
      </div>

      {/* Bottom fade to next section (white) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
}
