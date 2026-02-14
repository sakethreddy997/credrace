"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  TrendingDown,
  Zap,
  Users,
  Building2,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConnectModal } from "@/components/connect-modal";

/* ─── Animated counter for rate "discovery" ─── */
function AnimatedRate({
  from,
  to,
  delay,
}: {
  from: number;
  to: number;
  delay: number;
}) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const totalSteps = 50;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / totalSteps;
        const eased = 1 - Math.pow(1 - progress, 4);
        setValue(from - (from - to) * eased);
        if (step >= totalSteps) {
          setValue(to);
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [from, to, delay]);

  return <span>{value.toFixed(2)}%</span>;
}

/* ─── Offer data ─── */
const offers = [
  {
    bank: "HDFC Bank",
    badge: "Best Rate",
    letter: "H",
    rate: 8.35,
    emi: "₹33,614/mo",
    amount: "₹45L",
    best: true,
    color: "from-emerald-400 to-emerald-600",
  },
  {
    bank: "ICICI Bank",
    badge: "Quick Approval",
    letter: "I",
    rate: 8.5,
    emi: "₹34,200/mo",
    amount: "₹45L",
    best: false,
    color: "from-blue-400 to-blue-600",
  },
  {
    bank: "SBI",
    badge: "Highest Amount",
    letter: "S",
    rate: 8.4,
    emi: "₹33,890/mo",
    amount: "₹50L",
    best: false,
    color: "from-indigo-400 to-indigo-600",
  },
];

/* ─── Stagger children ─── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)" }}
    >
      {/* ─── Parallax gradient mesh ─── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-emerald-500/[0.07] blur-[150px] animate-mesh" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.05] blur-[130px] animate-mesh-reverse" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/[0.03] blur-[200px]" />
      </motion.div>

      {/* ─── Grid pattern ─── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ─── Radial spotlight ─── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ═══════════════ Left: Copy (7 cols) ═══════════════ */}
          <motion.div
            className="lg:col-span-7"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/15 px-4 py-2">
                <div className="relative h-2 w-2">
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
                  <div className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-semibold text-emerald-400/90 tracking-wide">
                  Trusted by 10,000+ borrowers across India
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] font-extrabold leading-[1.05] tracking-[-0.035em]"
            >
              <span className="text-white">Your loan.</span>
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  30+ banks racing
                </span>
              </span>
              <br />
              <span className="text-white/90">for the best offer.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg sm:text-xl text-white/45 leading-relaxed max-w-lg font-normal"
            >
              One application. Personalised offers from HDFC, SBI, ICICI and
              27 more. Pick the lowest rate. We handle everything else.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="relative bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[15px] px-8 h-14 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-300 group overflow-hidden"
              >
                <Link href="/eligibility">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="sm:hidden">Check eligibility, free</span>
                    <span className="hidden sm:inline">Check your eligibility, it&apos;s free</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  {/* Shine sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
              <ConnectModal>
                <Button
                  size="lg"
                  className="bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold h-14 rounded-2xl text-[15px] border border-white/[0.15] hover:border-white/[0.25] transition-all duration-300 shadow-lg"
                >
                  <PhoneCall className="h-4 w-4 mr-2" />
                  Get connected
                </Button>
              </ConnectModal>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-6 text-[13px] text-white/35 font-medium"
            >
              {[
                { icon: Shield, label: "256-bit encrypted" },
                { icon: CheckCircle2, label: "RBI-registered partners" },
                { icon: Shield, label: "No CIBIL impact" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="h-3.5 w-3.5 text-emerald-500/50" />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══════════════ Right: Offer Card (5 cols) ═══════════════ */}
          <motion.div
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="relative" style={{ perspective: "1200px" }}>
              {/* Outer glow */}
              <div className="absolute -inset-8 rounded-3xl bg-emerald-500/[0.06] blur-[60px] pointer-events-none animate-pulse-glow" />

              {/* ─── Card container ─── */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a1425]/80 backdrop-blur-xl shadow-[0_8px_60px_rgba(0,0,0,0.5)]">
                {/* Animated border highlight */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent" />
                </div>

                {/* Card header */}
                <div className="relative flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
                  <div>
                    <p className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-[0.2em]">
                      Your matched offers
                    </p>
                    <p className="text-base font-bold text-white mt-1">
                      3 lenders competing
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1.5">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400/70" />
                    <span className="text-[10px] font-medium text-white/40">
                      Verified offers
                    </span>
                  </div>
                </div>

                {/* Offer rows */}
                <div className="relative p-4 space-y-2.5">
                  {offers.map((offer, i) => (
                    <motion.div
                      key={offer.bank}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.9 + i * 0.15,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className={`relative rounded-xl p-4 border transition-all duration-300 ${
                        offer.best
                          ? "bg-emerald-500/[0.06] border-emerald-500/20 shadow-[inset_0_1px_0_rgba(52,211,153,0.1)]"
                          : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-9 w-9 rounded-lg bg-gradient-to-br ${offer.color} flex items-center justify-center text-[11px] font-bold text-white shadow-lg`}
                          >
                            {offer.letter}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {offer.bank}
                            </p>
                            <p className="text-[10px] text-white/30">
                              {offer.badge}
                            </p>
                          </div>
                        </div>
                        {offer.best && (
                          <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1 flex items-center gap-1">
                            <TrendingDown className="h-2.5 w-2.5" />
                            Lowest Rate
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <p className="text-[10px] text-white/25 mb-0.5">
                            Rate
                          </p>
                          <p
                            className={`text-sm font-bold tabular-nums ${
                              offer.best ? "text-emerald-400" : "text-white/90"
                            }`}
                          >
                            {offer.best ? (
                              <AnimatedRate
                                from={10.5}
                                to={8.35}
                                delay={1400}
                              />
                            ) : (
                              `${offer.rate.toFixed(2)}%`
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/25 mb-0.5">
                            EMI
                          </p>
                          <p className="text-sm font-bold text-white/90">
                            {offer.emi}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/25 mb-0.5">
                            Up to
                          </p>
                          <p className="text-sm font-bold text-white/90">
                            {offer.amount}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Savings callout */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="flex items-center gap-3 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/15 p-4"
                  >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                      <TrendingDown className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">
                        You could save ₹3.2 Lakh
                      </p>
                      <p className="text-[11px] text-white/35">
                        compared to going to a single bank
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="px-5 py-3.5 border-t border-white/[0.06] flex items-center justify-between bg-white/[0.015]"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-md bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Shield className="h-3.5 w-3.5 text-emerald-400/80" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-white/70">
                        No CIBIL score impact
                      </p>
                      <p className="text-[9px] text-white/25">Soft check only</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-white/30">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="h-3 w-3 text-white/20" />
                      <span>30+ lenders</span>
                    </div>
                    <div className="w-px h-3 bg-white/10" />
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3 w-3 text-white/20" />
                      <span>247 matched today</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* ─── Floating detail chips (only on xl+ to avoid overflow) ─── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="hidden xl:block absolute -left-4 top-1/4 -translate-x-full"
              >
                <div className="flex items-center gap-2 rounded-full bg-[#0c1627]/90 backdrop-blur-xl border border-white/[0.06] px-3.5 py-2 shadow-lg">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  <span className="text-[11px] font-medium text-white/60">
                    2-min check
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="hidden xl:block absolute -right-4 top-2/3 translate-x-full"
              >
                <div className="flex items-center gap-2 rounded-full bg-[#0c1627]/90 backdrop-blur-xl border border-white/[0.06] px-3.5 py-2 shadow-lg">
                  <Users className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-[11px] font-medium text-white/60">
                    Dedicated manager
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade (seamless into next dark section) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060d19] to-transparent pointer-events-none" />
    </section>
  );
}
