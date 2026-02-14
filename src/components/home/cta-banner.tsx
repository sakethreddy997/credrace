"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, IndianRupee, BadgeCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

function fadeUp(delay: number = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  };
}

const whyFree = [
  {
    icon: IndianRupee,
    title: "₹0 to you. Always.",
    description:
      "We never charge borrowers. Not now, not later. No hidden fees, no premium plans.",
  },
  {
    icon: BadgeCheck,
    title: "Lenders pay us",
    description:
      "Banks and NBFCs pay Credrace when a loan is successfully disbursed. That's our business model.",
  },
  {
    icon: Heart,
    title: "Our incentive is your success",
    description:
      "We only earn when you get a great loan. So we're always working in your interest.",
  },
];

export function CTABanner() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp()}
          className="relative overflow-hidden rounded-3xl gradient-brand"
        >
          {/* Background effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/[0.06] blur-[120px] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            {/* ─── Top: The bold free statement ─── */}
            <div className="text-center mb-14">
              <motion.div {...fadeUp(0.05)}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    100% free service
                  </span>
                </div>
              </motion.div>

              <motion.h2
                {...fadeUp(0.1)}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto"
              >
                <span className="inline-flex items-baseline"><span>Cred</span><span className="text-emerald-400">race</span></span> is free.
                <br />
                <span className="gradient-text-hero">Forever.</span>
              </motion.h2>

              <motion.p
                {...fadeUp(0.15)}
                className="mt-5 text-base sm:text-lg text-white/50 max-w-lg mx-auto leading-relaxed"
              >
                We never charge borrowers. Not today, not ever.
                Here&apos;s why.
              </motion.p>
            </div>

            {/* ─── Middle: 3 reasons why it's free ─── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-14">
              {whyFree.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    {...fadeUp(0.15 + i * 0.08)}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5 text-center"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-3 mx-auto">
                      <Icon className="h-4.5 w-4.5 text-emerald-400" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/35 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* ─── Bottom: CTA ─── */}
            <motion.div {...fadeUp(0.35)} className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold text-[15px] px-8 h-13 rounded-xl shadow-lg shadow-white/10 group"
              >
                <Link href="/eligibility">
                  Check your eligibility for free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <p className="mt-3 text-sm text-white/25">
                Takes 2 minutes. No signup required.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
