import type { Metadata } from "next";
import { EligibilityWizard } from "@/components/eligibility/eligibility-wizard";
import { WebPageSchema } from "@/components/json-ld";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Check Loan Eligibility in 2 Minutes | Credrace",
  description:
    "Find out how much loan you can get. No documents required, no impact on your CIBIL score. Compare offers from 30+ lenders on Credrace.",
  alternates: { canonical: `${SITE_URL}/eligibility` },
  openGraph: {
    title: "Check Loan Eligibility | Credrace",
    description:
      "Find out how much loan you can get. No documents, no CIBIL score impact.",
  },
};

export default function EligibilityPage() {
  return (
    <>
      <WebPageSchema
        title="Check Loan Eligibility in 2 Minutes"
        description="Find out how much loan you can get. No documents required, no impact on your CIBIL score."
        url="/eligibility"
      />
      <div className="mx-auto max-w-3xl px-5 pt-10 pb-6 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
          Check Your Loan Eligibility in 2 Minutes
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Find out how much loan you can get with a quick, free eligibility
          check. No documents required at this stage, and no impact on your
          CIBIL score. Whether you need a home loan, personal loan, two-wheeler
          loan, or business loan, we match you with offers from 30+ verified
          lenders. Compare rates, choose the best offer, and apply with
          confidence. Start below to check your loan eligibility and see
          personalised options in minutes.
        </p>
      </div>
      <EligibilityWizard />
    </>
  );
}
