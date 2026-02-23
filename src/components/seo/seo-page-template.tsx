"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  TrendingDown,
  Clock,
  Building2,
  Zap,
  FileText,
  Calculator,
  MapPin,
  IndianRupee,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BreadcrumbSchema, FAQSchema, WebPageSchema } from "@/components/json-ld";

interface SEOPageData {
  // Meta
  title: string;
  description: string;
  url: string;
  keywords: string[];

  // Hero
  heroLabel: string;
  heroHeadline: string;
  heroSub: string;
  stats: { value: string; label: string }[];

  // Content sections
  introContent: string;
  mainContent: string;
  benefits: { text: string; icon?: string }[];
  features?: { label: string; value: string }[];

  // Comparison (if applicable)
  compareHeadline?: string;
  compareSub?: string;
  compareRows?: { label: string; bank: string; credrace: string; highlight?: boolean }[];
  savingsAmount?: string;
  savingsContext?: string;

  // FAQs
  faqs: { question: string; answer: string }[];

  // CTA
  ctaHeadline: string;
  ctaSub: string;
  ctaButtonText: string;
  ctaButtonHref: string;

  // Related links
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

export function SEOPageTemplate({ data }: { data: SEOPageData }) {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: data.heroHeadline, url: data.url },
  ];
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <WebPageSchema title={data.title} description={data.description} url={data.url} />
      <FAQSchema faqs={data.faqs} />

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        className="relative overflow-hidden pt-8 sm:pt-12"
        style={{
          background: "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
        }}
      >
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

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-bold text-emerald-400/80 uppercase tracking-wider mb-4"
            >
              {data.heroLabel}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              <span className="text-white">{data.heroHeadline}</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              {data.heroSub}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10"
            >
              {data.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-4 sm:p-5"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/40 font-medium">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base px-8 h-14 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-300"
              >
                <Link href={data.ctaButtonHref}>
                  {data.ctaButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════ INTRO CONTENT ═══════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp(0)}
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900"
          >
            <div dangerouslySetInnerHTML={{ __html: data.introContent }} />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ COMPARISON SECTION (if applicable) ═══════════════ */}
      {data.compareHeadline && data.compareRows && (
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <motion.div {...fadeUp(0)} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                {data.compareHeadline}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{data.compareSub}</p>
            </motion.div>

            <motion.div
              {...fadeUp(0.1)}
              className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-xl"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-500">
                        Single Bank
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-emerald-600">
                        Credrace
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.compareRows.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-gray-100 ${
                          row.highlight ? "bg-emerald-50/50" : ""
                        }`}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {row.label}
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-600 line-through">
                          {row.bank}
                        </td>
                        <td className="px-6 py-4 text-center text-sm font-bold text-emerald-600">
                          {row.credrace}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {data.savingsAmount && (
                <div className="px-6 py-5 bg-gradient-to-r from-emerald-50 to-teal-50 border-t border-emerald-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-emerald-900">Potential Savings</p>
                      <p className="text-xs text-emerald-700 mt-1">{data.savingsContext}</p>
                    </div>
                    <p className="text-2xl font-extrabold text-emerald-600">
                      {data.savingsAmount}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════ MAIN CONTENT (Improved Structure) ═══════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp(0)}
            className="space-y-12"
          >
            {/* Render content sections with better visual hierarchy */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-extrabold prose-headings:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-li:text-gray-600 prose-li:mb-2 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4"
              dangerouslySetInnerHTML={{ __html: data.mainContent }} 
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ BENEFITS GRID ═══════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose Credrace?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the best loan offers with zero hassle, zero spam, zero CIBIL impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-900 leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES TABLE (if applicable) ═══════════════ */}
      {data.features && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <motion.div {...fadeUp(0)} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Key Features
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp(0.1)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {data.features.map((feature, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4 flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                  <span className="text-sm font-bold text-gray-900">{feature.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ═══════════════ FAQ SECTION ═══════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about getting a loan in Hyderabad
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <Accordion type="single" collapsible className="space-y-4">
              {data.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-gray-200 bg-white px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <section
        className="py-20 sm:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
        }}
      >
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.06] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.04] blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {data.ctaHeadline}
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">{data.ctaSub}</p>
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base px-8 h-14 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-300"
            >
              <Link href={data.ctaButtonHref}>
                {data.ctaButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ RELATED LINKS ═══════════════ */}
      {data.relatedLinks.length > 0 && (
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm font-medium text-gray-500">Related Pages:</span>
              {data.relatedLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-sm font-medium text-emerald-600 hover:text-emerald-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
