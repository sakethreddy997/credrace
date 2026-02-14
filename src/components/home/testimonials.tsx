"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

/* ─── Testimonial data — result-first ─── */
const testimonials = [
  {
    result: "₹3.2 Lakh",
    resultLabel: "saved in interest",
    quote:
      "Compared 5 home loan offers. Every fee visible upfront. No surprises, no hidden charges.",
    author: "Customer from Hyderabad",
    loanType: "Home Loan",
    size: "large" as const,
  },
  {
    result: "24 hours",
    resultLabel: "to approval",
    quote:
      "Applied in the evening, got approved next morning. Zero branch visits. The manager handled everything.",
    author: "Customer from Hyderabad",
    loanType: "Personal Loan",
    size: "small" as const,
  },
  {
    result: "Zero",
    resultLabel: "spam calls",
    quote:
      "First-time borrower. Credrace made it simple. Everything explained clearly, and nobody called to push unnecessary products.",
    author: "Customer from Hyderabad",
    loanType: "Two-Wheeler Loan",
    size: "small" as const,
  },
  {
    result: "₹1.8 Lakh",
    resultLabel: "saved via transfer",
    quote:
      "Didn't even know balance transfer was an option. Moved my home loan and saved ₹1.8 Lakh on remaining tenure.",
    author: "Customer from Hyderabad",
    loanType: "Balance Transfer",
    size: "large" as const,
  },
  {
    result: "3 days",
    resultLabel: "to disbursal",
    quote:
      "Applied Thursday evening. By Monday, funds were in my account. The speed was unreal for a business loan.",
    author: "Customer from Hyderabad",
    loanType: "Business Loan",
    size: "small" as const,
  },
  {
    result: "100%",
    resultLabel: "transparent",
    quote:
      "The rate I was quoted is exactly what I got. No hidden charges. Finally, a process I could trust.",
    author: "Customer from Hyderabad",
    loanType: "Personal Loan",
    size: "small" as const,
  },
];

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  };
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            Customer stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-tight">
            Real results from real borrowers
          </h2>
          <p className="mt-4 text-gray-500 max-w-md mx-auto leading-relaxed">
            Every number below is a real outcome from someone who used Credrace.
          </p>
        </motion.div>

        {/* ─── Bento grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {testimonials.map((t, i) => {
            const isLarge = t.size === "large";

            return (
              <motion.div
                key={i}
                {...fadeUp(0.05 + i * 0.06)}
                className={`group ${isLarge ? "sm:col-span-2 lg:col-span-2" : "lg:col-span-1"}`}
              >
                <div
                  className={`
                    relative h-full rounded-2xl overflow-hidden transition-all duration-500
                    ${
                      isLarge
                        ? "bg-gray-900 text-white p-7 sm:p-9 hover:shadow-2xl hover:shadow-gray-900/20"
                        : "bg-white border border-gray-200/60 text-gray-900 p-6 sm:p-7 hover:shadow-lg hover:-translate-y-0.5"
                    }
                  `}
                >
                  {/* Decorative quote mark for large cards */}
                  {isLarge && (
                    <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
                      <Quote className="h-10 w-10 text-white/[0.06] fill-white/[0.06]" />
                    </div>
                  )}

                  {/* Subtle hover glow for large cards */}
                  {isLarge && (
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-emerald-500/[0.06] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  )}

                  <div className="relative">
                    {/* THE RESULT — big, bold, unmissable */}
                    <div className="mb-5">
                      <p
                        className={`font-extrabold tracking-tight leading-none ${
                          isLarge
                            ? "text-4xl sm:text-5xl text-emerald-400"
                            : "text-2xl sm:text-3xl text-emerald-600"
                        }`}
                      >
                        {t.result}
                      </p>
                      <p
                        className={`text-sm font-medium mt-1.5 ${
                          isLarge ? "text-white/40" : "text-gray-400"
                        }`}
                      >
                        {t.resultLabel}
                      </p>
                    </div>

                    {/* Quote */}
                    <p
                      className={`leading-relaxed mb-6 ${
                        isLarge
                          ? "text-[15px] text-white/60"
                          : "text-sm text-gray-500"
                      }`}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div
                      className={`flex items-center justify-between pt-4 border-t ${
                        isLarge ? "border-white/[0.08]" : "border-gray-100"
                      }`}
                    >
                      <div>
                        <p
                          className={`text-sm font-semibold ${
                            isLarge ? "text-white/80" : "text-gray-900"
                          }`}
                        >
                          {t.author}
                        </p>
                        <p
                          className={`text-xs mt-0.5 ${
                            isLarge ? "text-white/30" : "text-gray-400"
                          }`}
                        >
                          {t.loanType}
                        </p>
                      </div>
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          isLarge
                            ? "bg-emerald-500/10"
                            : "bg-emerald-50"
                        }`}
                      >
                        <span className="text-emerald-500 text-xs font-bold">
                          ✓
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Bottom CTA ─── */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-14 text-center"
        >
          <Link
            href="/eligibility"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 group"
          >
            Join 10,000+ smart borrowers
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
