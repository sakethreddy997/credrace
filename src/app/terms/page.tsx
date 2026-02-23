import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Credrace",
  description:
    "Terms of Service for Credrace — India's trusted loan marketplace. Terms and conditions for using our platform.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <p className="text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString("en-IN")}. By using{" "}
        {SITE_NAME}, you agree to these terms. {SITE_NAME} is a loan
        marketplace and does not lend directly; loan approval, amounts, and
        interest rates are subject to our lending partners&apos; policies and
        your eligibility.
      </p>
      <p className="text-gray-600 mb-6">
        For full terms and conditions, please contact us at
        support@credrace.com.
      </p>
      <Link
        href="/"
        className="text-emerald-600 hover:text-emerald-700 font-medium"
      >
        Back to home
      </Link>
    </div>
  );
}
