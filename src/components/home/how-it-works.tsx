"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  MessageSquare,
  BarChart3,
  Banknote,
  CheckCircle2,
  Clock,
  Shield,
  TrendingDown,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Step data — unified emerald palette ─── */
const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    subtitle: "5 questions. Under 2 minutes.",
    description:
      "Answer quick questions about your loan type, income, and city. No documents required. No hard inquiry on your CIBIL score.",
    icon: MessageSquare,
    visual: "form",
  },
  {
    number: "02",
    title: "Watch banks compete",
    subtitle: "30+ lenders. One dashboard.",
    description:
      "Our engine matches your profile instantly. See every offer side-by-side with rates, fees, EMI, and total cost. Completely transparent.",
    icon: BarChart3,
    visual: "compare",
  },
  {
    number: "03",
    title: "Get your money",
    subtitle: "Pick an offer. We handle the rest.",
    description:
      "Choose the best offer. Your dedicated loan manager handles all paperwork and follow-ups. Disbursal happens within 24 to 48 hours.",
    icon: Banknote,
    visual: "success",
  },
];

/* ─── Mini visual mockups for each step ─── */
function StepVisual({ type }: { type: string }) {
  if (type === "form") {
    return (
      <div className="space-y-2.5">
        {/* Mini form mockup */}
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08]">
          <div className="h-2 w-2 rounded-full bg-emerald-400/60" />
          <div className="h-2 w-20 rounded-full bg-white/10" />
          <div className="ml-auto h-2 w-12 rounded-full bg-emerald-400/20" />
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08]">
          <div className="h-2 w-2 rounded-full bg-emerald-400/60" />
          <div className="h-2 w-16 rounded-full bg-white/10" />
          <div className="ml-auto h-2 w-16 rounded-full bg-emerald-400/20" />
        </div>
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08]">
          <div className="h-2 w-2 rounded-full bg-emerald-400/60" />
          <div className="h-2 w-24 rounded-full bg-white/10" />
          <div className="ml-auto h-2 w-10 rounded-full bg-emerald-400/20" />
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-8 rounded-lg bg-emerald-500 flex items-center justify-center origin-left"
        >
          <span className="text-[10px] font-bold text-white tracking-wide">
            CHECK ELIGIBILITY
          </span>
        </motion.div>
      </div>
    );
  }

  if (type === "compare") {
    return (
      <div className="space-y-2.5">
        {/* Lender comparison rows */}
        {[
          { name: "SBI", rate: "8.65%", w: "72%" },
          { name: "HDFC", rate: "8.25%", w: "65%", best: true },
          { name: "ICICI", rate: "9.10%", w: "78%" },
        ].map((lender) => (
          <div
            key={lender.name}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg border ${
              lender.best
                ? "bg-emerald-500/10 border-emerald-500/30"
                : "bg-white/[0.04] border-white/[0.08]"
            }`}
          >
            <span
              className={`text-[11px] font-bold w-10 ${
                lender.best ? "text-emerald-400" : "text-white/50"
              }`}
            >
              {lender.name}
            </span>
            <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: lender.w }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`h-full rounded-full ${
                  lender.best ? "bg-emerald-500" : "bg-white/15"
                }`}
              />
            </div>
            <span
              className={`text-[11px] font-bold ${
                lender.best ? "text-emerald-400" : "text-white/40"
              }`}
            >
              {lender.rate}
            </span>
            {lender.best && (
              <span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded">
                BEST
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  // success visual — celebratory green, not amber/yellow
  return (
    <div className="space-y-2.5">
      {/* Approval celebration */}
      <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
        <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
          <PartyPopper className="h-4 w-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-[10px] text-emerald-400/60 font-medium">
            Loan approved
          </p>
          <p className="text-base font-bold text-emerald-400">₹48,50,000</p>
        </div>
        <div className="ml-auto">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
        </div>
      </div>
      <div className="flex gap-2.5">
        <div className="flex-1 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
          <p className="text-[10px] text-white/30">Best rate</p>
          <p className="text-xs font-bold text-emerald-400">8.25%</p>
        </div>
        <div className="flex-1 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
          <p className="text-[10px] text-white/30">EMI</p>
          <p className="text-xs font-bold text-white/70">₹38,420/mo</p>
        </div>
        <div className="flex-1 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
          <p className="text-[10px] text-white/30">Tenure</p>
          <p className="text-xs font-bold text-white/70">20 yrs</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/15">
        <Clock className="h-3 w-3 text-emerald-400/70" />
        <span className="text-[10px] font-medium text-emerald-400/70">
          Disbursal in 24-48 hours
        </span>
      </div>
    </div>
  );
}

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 scroll-mt-20 gradient-brand relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-emerald-500/[0.03] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Top fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div {...fadeUp()} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              How it works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Three steps to your
            <br />
            <span className="gradient-text-hero">best loan offer</span>
          </h2>
          <p className="mt-5 text-white/40 max-w-md mx-auto leading-relaxed">
            No branch visits. No middlemen. Just a smarter, faster way to get
            your loan.
          </p>
        </motion.div>

        {/* ─── Steps — 3 column cards with unified emerald palette ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                {...fadeUp(0.1 + i * 0.12)}
                className="group relative"
              >
                {/* Connector arrow between cards (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="h-8 w-8 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center backdrop-blur-sm">
                      <ArrowRight className="h-3.5 w-3.5 text-white/40" />
                    </div>
                  </div>
                )}

                <div className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-emerald-500/20">
                  {/* Top emerald accent bar */}
                  <div className="h-1 bg-emerald-500 opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-emerald-500/[0.06] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative p-6 sm:p-7">
                    {/* Step number + icon row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-5xl font-black text-white/[0.12] group-hover:text-emerald-400/25 transition-colors duration-500 select-none">
                        {step.number}
                      </div>
                      <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                        <Icon className="h-5 w-5 text-emerald-400 group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Title + subtitle */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-400/70 mb-4">
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-white/40 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Mini visual mockup */}
                    <StepVisual type={step.visual} />
                  </div>
                </div>

                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-4 bg-white/10" />
                      <div className="h-5 w-5 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
                        <ArrowRight className="h-2.5 w-2.5 text-white/30 rotate-90" />
                      </div>
                      <div className="w-px h-4 bg-white/10" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ─── Trust strip ─── */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          {[
            { icon: Shield, text: "Zero CIBIL impact" },
            { icon: Clock, text: "Under 2 minutes" },
            { icon: TrendingDown, text: "Rates from 8.25%" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-white/30"
            >
              <item.icon className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* ─── CTA ─── */}
        <motion.div {...fadeUp(0.45)} className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-gray-100 text-gray-900 font-semibold text-[15px] px-8 h-13 rounded-xl shadow-lg shadow-white/10 group"
          >
            <Link href="/eligibility">
              Start now, it&apos;s free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <p className="mt-3 text-sm text-white/25">
            No signup needed. See results instantly.
          </p>
        </motion.div>
      </div>

      {/* No bottom fade — flows seamlessly into dark Social Proof section */}
    </section>
  );
}
