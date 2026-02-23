"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/[0.06] blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl px-5 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Let us take that headache
        </h2>
        <p className="text-white/50 mb-8">
          Check your eligibility in 2 minutes. No documents. No branch visits.
        </p>
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
          </Link>
        </Button>
        <p className="mt-4 text-sm text-white/40">
          No CIBIL impact. 2 minutes.
        </p>
      </motion.div>
    </section>
  );
}
