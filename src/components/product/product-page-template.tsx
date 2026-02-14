"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Users,
  TrendingDown,
  Clock,
  Building2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── Types ─── */

interface FeatureItem {
  label: string;
  value: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BenefitItem {
  text: string;
  icon?: string;
}

interface Stat {
  value: string;
  label: string;
}

interface CompareRow {
  label: string;
  bank: string;
  credrace: string;
  highlight?: boolean;
}

export interface ProductPageData {
  /* Hero */
  heroLabel: string;
  heroHeadline: string;
  heroSub: string;
  stats: Stat[];

  /* Value section */
  compareHeadline: string;
  compareSub: string;
  compareRows: CompareRow[];
  savingsAmount: string;
  savingsContext: string;

  /* Benefits */
  benefits: BenefitItem[];

  /* Features table */
  features: FeatureItem[];

  /* FAQs */
  faqs: FAQItem[];

  /* Related links */
  relatedLinks: { label: string; href: string }[];
}

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  };
}

export function ProductPageTemplate({ data }: { data: ProductPageData }) {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden pt-8 sm:pt-12" style={{ background: "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)" }}>
        {/* Background effects */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.06] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-12 pb-24 sm:pt-20 sm:pb-32">
          <div className="max-w-3xl">
            {/* Label */}
            <motion.div {...fadeUp()} className="mb-6">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/15 px-4 py-2">
                <div className="relative h-2 w-2">
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                  <div className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-emerald-400/90 tracking-wide">
                  {data.heroLabel}
                </span>
              </div>
            </motion.div>

            {/* Headline — short, punchy */}
            <motion.h1
              {...fadeUp(0.05)}
              className="text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold tracking-[-0.035em] leading-[1.08] text-white"
            >
              {data.heroHeadline}
            </motion.h1>

            {/* Subline — one sentence max */}
            <motion.p
              {...fadeUp(0.1)}
              className="mt-5 text-lg text-white/45 leading-relaxed max-w-xl"
            >
              {data.heroSub}
            </motion.p>

            {/* Stats row */}
            <motion.div
              {...fadeUp(0.15)}
              className="mt-10 flex flex-wrap gap-3"
            >
              {data.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 min-w-[120px]"
                >
                  <p className="text-2xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-white/35 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA + trust */}
            <motion.div {...fadeUp(0.2)} className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Button
                asChild
                size="lg"
                className="relative bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[15px] px-8 h-14 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-300 group overflow-hidden"
              >
                <Link href="/eligibility">
                  <span className="relative z-10 flex items-center gap-2">
                    Check your eligibility
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
              <div className="flex items-center gap-4 text-[12px] text-white/30 font-medium pt-2">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3 w-3 text-emerald-500/50" />
                  <span>No CIBIL impact</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3 w-3 text-emerald-500/50" />
                  <span>2-min check</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════ COMPARISON: Banks vs Credrace ═══════════════ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: copy */}
            <motion.div {...fadeUp()}>
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Why Credrace
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                {data.compareHeadline}
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                {data.compareSub}
              </p>

              {/* Savings callout */}
              <motion.div
                {...fadeUp(0.1)}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-emerald-50 border border-emerald-200/60 px-5 py-4"
              >
                <div className="h-11 w-11 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                  <TrendingDown className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-emerald-700">
                    Save {data.savingsAmount}
                  </p>
                  <p className="text-xs text-emerald-600/60">
                    {data.savingsContext}
                  </p>
                </div>
              </motion.div>

              {/* Trust line */}
              <motion.div
                {...fadeUp(0.15)}
                className="mt-6 flex items-center gap-4 text-xs text-gray-400 font-medium"
              >
                <div className="flex items-center gap-1.5">
                  <Building2 className="h-3 w-3" />
                  <span>30+ lenders</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-3 w-3" />
                  <span>10,000+ borrowers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3 w-3" />
                  <span>RBI-registered</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: comparison table */}
            <motion.div {...fadeUp(0.1)}>
              <div className="rounded-2xl border border-gray-200/80 bg-white shadow-premium overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-3 gap-0 px-5 sm:px-6 py-4 bg-gray-50/80 border-b border-gray-100">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider" />
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center">
                    Single bank
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider text-center">
                    Via Credrace
                  </div>
                </div>

                {/* Rows */}
                {data.compareRows.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 gap-0 px-5 sm:px-6 py-4 ${
                      i < data.compareRows.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    } ${row.highlight ? "bg-emerald-50/50" : ""}`}
                  >
                    <div className="text-sm text-gray-600 font-medium">
                      {row.label}
                    </div>
                    <div className="text-sm text-gray-400 text-center line-through decoration-1">
                      {row.bank}
                    </div>
                    <div className="text-sm font-bold text-emerald-600 text-center">
                      {row.credrace}
                    </div>
                  </div>
                ))}

                {/* Bottom CTA */}
                <div className="px-5 sm:px-6 py-4 bg-gray-50/50 border-t border-gray-100">
                  <Link
                    href="/eligibility"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 group"
                  >
                    See your personalised rates
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BENEFITS ═══════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
              What you get with Credrace
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.05 + i * 0.05)}
                className="group flex items-start gap-4 rounded-2xl border border-gray-200/60 bg-white p-5 sm:p-6 hover:shadow-premium-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pt-1.5">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Features table below */}
          <motion.div {...fadeUp(0.2)} className="mt-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Loan details at a glance
            </h3>
            <div className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {data.features.map((feature, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-6 py-4 ${
                      i < data.features.length - 1 ? "border-b border-gray-100" : ""
                    } ${i % 2 === 0 && i < data.features.length - 1 ? "sm:border-r" : ""}`}
                  >
                    <span className="text-sm text-gray-400">{feature.label}</span>
                    <span className="text-sm font-bold text-gray-900">
                      {feature.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ FAQs ═══════════════ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28">
                <motion.div {...fadeUp()}>
                  <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                    FAQs
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                    Common questions
                  </h2>
                  <p className="mt-4 text-gray-500 leading-relaxed">
                    Clear answers. No jargon. If you need more help, our team responds within 2 hours.
                  </p>
                </motion.div>

                <motion.div {...fadeUp(0.1)} className="mt-8">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl text-xs h-10 px-5"
                  >
                    <Link href="/eligibility">
                      Check eligibility
                      <ArrowRight className="ml-1.5 h-3 w-3" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Right: Accordion */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {data.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="rounded-xl border border-gray-200/80 bg-white px-5 sm:px-6 data-[state=open]:shadow-md data-[state=open]:border-gray-300/60 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-[15px] font-semibold text-gray-900 hover:no-underline py-5 [&[data-state=open]]:text-emerald-700">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BOTTOM CTA ═══════════════ */}
      <section className="py-20 sm:py-28" style={{ background: "linear-gradient(145deg, #020617 0%, #0a1628 40%, #0c1a30 100%)" }}>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-emerald-500/[0.06] blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.h2
              {...fadeUp()}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight"
            >
              Ready to get your best rate?
            </motion.h2>
            <motion.p
              {...fadeUp(0.05)}
              className="mt-4 text-white/40 leading-relaxed"
            >
              Free forever. Takes 2 minutes. No impact on your CIBIL score.
            </motion.p>

            <motion.div {...fadeUp(0.1)} className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-[15px] px-8 h-14 rounded-2xl shadow-lg shadow-white/10 group"
              >
                <Link href="/eligibility">
                  Check your eligibility for free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            {/* Related links */}
            <motion.div {...fadeUp(0.15)} className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="text-xs text-white/25 self-center mr-1">Also explore:</span>
              {data.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-medium text-white/40 hover:text-emerald-400 transition-colors px-3 py-1.5 rounded-full border border-white/[0.06] hover:border-emerald-500/20 hover:bg-emerald-500/[0.05]"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
