import Link from "next/link";
import { Shield, Lock, HeadphonesIcon } from "lucide-react";
import { SITE_NAME, NAV_LINKS } from "@/lib/constants";
import { BrandIcon } from "@/components/brand";

export function Footer() {
  return (
    <footer className="bg-gray-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ─── Main footer grid ─── */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-12 pb-10 sm:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-2 mb-4 lg:mb-0">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <BrandIcon size="sm" />
              <span className="text-base font-bold tracking-tight flex items-baseline">
                <span className="text-white">Cred</span>
                <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300">
                  race
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
              India&apos;s loan marketplace. Compare offers from 30+ verified
              lenders and get the best rate. Free, transparent, no spam.
            </p>
            <p className="mt-2 text-xs text-white/50">
              Contact:{" "}
              <a
                href="mailto:support@credrace.com"
                className="text-white/50 hover:text-emerald-400 transition-colors"
              >
                support@credrace.com
              </a>
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                { icon: Lock, label: "Bank-grade encryption" },
                { icon: Shield, label: "RBI-registered partners" },
                { icon: HeadphonesIcon, label: "Dedicated support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 text-white/70"
                >
                  <item.icon className="h-3 w-3" />
                  <span className="text-[11px] font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-5">
              Products
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/eligibility"
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors duration-200"
                >
                  Business Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-5">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/eligibility"
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors duration-200"
                >
                  Check Eligibility
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors duration-200"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-5">
              Legal
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:block sm:space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/grievance"
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors duration-200"
                >
                  Grievance Redressal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div className="border-t border-white/[0.06] py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/60 text-center sm:text-left">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
              reserved. {SITE_NAME} is a loan marketplace and does not lend
              directly.
            </p>
            <p className="text-[11px] text-white/55 text-center sm:text-right max-w-sm">
              Loan approval, amounts, and interest rates are subject to the
              lending partner&apos;s policies and borrower eligibility.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
