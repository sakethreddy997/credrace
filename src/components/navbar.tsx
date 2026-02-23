"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandIcon } from "@/components/brand";
import { ConnectModal } from "@/components/connect-modal";

const loanLinks = [
  { label: "Home Loan", href: "/home-loan", desc: "Rates from 8.25%" },
  { label: "Personal Loan", href: "/personal-loan", desc: "Quick disbursal" },
  { label: "Two-Wheeler Loan", href: "/two-wheeler-loan", desc: "EMI from ₹999" },
  { label: "Business Loan", href: "/eligibility", desc: "Up to ₹50 Lakh" },
];

const navLinks = [
  { label: "Why we exist", href: "/why-we-exist" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQs", href: "/#faq" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loanMenuOpen, setLoanMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-2xl shadow-[0_1px_40px_rgba(0,0,0,0.3)] border-b border-white/[0.04]"
          : "bg-[#030712]/60 backdrop-blur-xl border-b border-white/[0.06]"
      }`}
    >
      <nav className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <BrandIcon />
          <span className="text-[17px] font-bold tracking-tight flex items-baseline">
            <span className="text-white transition-colors duration-300">
              Cred
            </span>
            <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300">
              race
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {/* Loan Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoanMenuOpen(true)}
            onMouseLeave={() => setLoanMenuOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              Loans
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${loanMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {loanMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 pt-2 w-[240px]"
                >
                  <div className="rounded-xl bg-[#0c1627]/95 backdrop-blur-2xl border border-white/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.4)] p-1.5 overflow-hidden">
                    {loanLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex flex-col gap-0.5 px-3.5 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group/item"
                      >
                        <span className="text-[13px] font-medium text-white/80 group-hover/item:text-white transition-colors">
                          {link.label}
                        </span>
                        <span className="text-[11px] text-white/30 group-hover/item:text-emerald-400/60 transition-colors">
                          {link.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => {
            const isFaq = link.href === "/#faq";
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-[13px] font-medium rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                onClick={
                  isFaq && pathname === "/"
                    ? (e) => {
                        e.preventDefault();
                        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    : undefined
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <ConnectModal>
            <Button
              size="sm"
              className="bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold px-4 h-9 rounded-full text-[13px] border border-white/[0.15] hover:border-white/[0.25] transition-all duration-300 shadow-sm"
            >
              <PhoneCall className="mr-1.5 h-3.5 w-3.5" />
              Get Connected
            </Button>
          </ConnectModal>
          <Button
            asChild
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-5 h-9 rounded-full text-[13px] shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all duration-300"
          >
            <Link href="/eligibility">
              Check Eligibility
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0c1627]/98 backdrop-blur-2xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              <p className="text-[10px] font-semibold text-white/25 uppercase tracking-widest px-3 pt-1 pb-2">
                Loan Products
              </p>
              {loanLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-white/70 rounded-lg hover:bg-white/[0.06] hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  <span className="text-[11px] text-white/25">{link.desc}</span>
                </Link>
              ))}

              <div className="h-px bg-white/[0.06] my-2" />

              {navLinks.map((link) => {
                const isFaq = link.href === "/#faq";
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-white/70 rounded-lg hover:bg-white/[0.06] hover:text-white"
                    onClick={(e) => {
                      setMobileOpen(false);
                      if (isFaq && pathname === "/") {
                        e.preventDefault();
                        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-3 space-y-2">
                <Button
                  asChild
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold h-11 rounded-xl text-sm shadow-[0_0_20px_rgba(5,150,105,0.3)]"
                >
                  <Link href="/eligibility" onClick={() => setMobileOpen(false)}>
                    Check Eligibility
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <ConnectModal>
                  <Button
                    className="w-full h-11 rounded-xl text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.15] hover:border-white/[0.25] transition-all"
                  >
                    <PhoneCall className="mr-1.5 h-4 w-4" />
                    Get Connected
                  </Button>
                </ConnectModal>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
