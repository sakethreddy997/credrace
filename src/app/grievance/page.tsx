import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grievance Redressal | Credrace",
  description:
    "Grievance redressal policy for Credrace. How to raise and resolve complaints regarding our loan marketplace services.",
  alternates: { canonical: `${SITE_URL}/grievance` },
};

export default function GrievancePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Grievance Redressal
      </h1>
      <p className="text-gray-600 mb-6">
        {SITE_NAME} is committed to resolving any concerns you may have. If you
        have a complaint or grievance related to our services, please contact
        our support team at support@credrace.com. We aim to acknowledge your
        grievance within 48 hours and work toward a resolution in accordance
        with applicable regulations.
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
