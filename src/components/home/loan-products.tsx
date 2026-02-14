"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, User, Bike, Briefcase, ArrowRight, Users } from "lucide-react";

/* ─── Each product shows: rate comparison + savings + lender count ─── */
const products = [
  {
    title: "Home Loan",
    href: "/home-loan",
    icon: Home,
    lenders: 12,
    marketRate: 9.5,
    credraceRate: 8.25,
    savings: "₹2.8 Lakh",
    savingsContext: "saved on a ₹50L loan",
    maxAmount: "Up to ₹5 Cr",
    tenure: "30 year tenure",
  },
  {
    title: "Personal Loan",
    href: "/personal-loan",
    icon: User,
    lenders: 15,
    marketRate: 13.5,
    credraceRate: 10.25,
    savings: "₹45,000",
    savingsContext: "saved on a ₹5L loan",
    maxAmount: "Up to ₹40 Lakh",
    tenure: "5 year tenure",
  },
  {
    title: "Two-Wheeler Loan",
    href: "/two-wheeler-loan",
    icon: Bike,
    lenders: 8,
    marketRate: 11.5,
    credraceRate: 7.99,
    savings: "₹8,200",
    savingsContext: "saved on a ₹1.2L loan",
    maxAmount: "100% on-road funding",
    tenure: "4 year tenure",
  },
  {
    title: "Business Loan",
    href: "/eligibility",
    icon: Briefcase,
    lenders: 10,
    marketRate: 18.0,
    credraceRate: 14.0,
    savings: "₹1.2 Lakh",
    savingsContext: "saved on a ₹20L loan",
    maxAmount: "Up to ₹50 Lakh",
    tenure: "5 year tenure",
  },
];

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  };
}

export function LoanProducts() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            Loan Products
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-tight">
            See what you save with{" "}
            <span className="inline-flex items-baseline font-extrabold"><span className="text-gray-900">Cred</span><span className="text-emerald-500">race</span></span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto leading-relaxed">
            Banks compete on our platform. You get rates that beat what
            you&apos;d find walking into any single branch.
          </p>
        </motion.div>

        {/* ─── Product cards with rate comparison ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product, i) => {
            const Icon = product.icon;
            const barRatio = product.credraceRate / product.marketRate;

            return (
              <motion.div key={product.title} {...fadeUp(0.05 + i * 0.08)}>
                <Link
                  href={product.href}
                  className="group flex flex-col h-full rounded-2xl bg-white border border-gray-200/60 overflow-hidden transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-0.5"
                >
                  {/* Top accent that appears on hover */}
                  <div className="h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="p-6 sm:p-7 flex flex-col h-full">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl bg-gray-900 group-hover:bg-emerald-500 transition-colors duration-300 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {product.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
                        <Users className="h-3 w-3" />
                        <span>{product.lenders} lenders</span>
                      </div>
                    </div>

                    {/* Rate comparison bars */}
                    <div className="space-y-3 mb-6">
                      {/* Market rate bar */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-medium text-gray-400">
                            Market average
                          </span>
                          <span className="text-sm font-bold text-gray-300 line-through decoration-1">
                            {product.marketRate.toFixed(2)}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gray-200"
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>

                      {/* Credrace rate bar (animated) */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-semibold text-emerald-600">
                            Via Cred<span className="text-emerald-600">race</span>
                          </span>
                          <span className="text-sm font-extrabold text-emerald-600">
                            {product.credraceRate.toFixed(2)}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-emerald-50 overflow-hidden">
                          <motion.div
                            initial={{ width: "100%" }}
                            whileInView={{
                              width: `${Math.round(barRatio * 100)}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.8,
                              delay: 0.3 + i * 0.1,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full bg-emerald-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Savings badge + loan details */}
                    <div className="flex items-center gap-3 mb-5 flex-1">
                      <div className="rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2 shrink-0">
                        <p className="text-sm font-extrabold text-emerald-700">
                          {product.savings}
                        </p>
                        <p className="text-[10px] text-emerald-600/60">
                          {product.savingsContext}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-gray-400 font-medium">
                        <span>{product.maxAmount}</span>
                        <span className="text-gray-200">·</span>
                        <span>{product.tenure}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      Compare rates
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
