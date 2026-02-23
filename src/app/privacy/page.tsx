import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Credrace",
  description:
    "Privacy Policy for Credrace — India's trusted loan marketplace. How we collect, use, and protect your personal information.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">
        Last updated: {new Date().toLocaleDateString("en-IN")}. {SITE_NAME} is
        committed to protecting your privacy. This page outlines how we collect,
        use, and safeguard your information when you use our loan marketplace
        services.
      </p>
      <p className="text-gray-600 mb-6">
        We use 256-bit encryption and do not share your data with third parties
        without your explicit consent. For full policy details, please contact
        us at support@credrace.com.
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
