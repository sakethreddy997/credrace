import type { Metadata } from "next";
import { EligibilityWizard } from "@/components/eligibility/eligibility-wizard";
import { WebPageSchema } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Check Loan Eligibility in 2 Minutes | Credrace",
  description:
    "Find out how much loan you can get. No documents required, no impact on your CIBIL score. Compare offers from 30+ lenders on Credrace.",
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
      <EligibilityWizard />
    </>
  );
}
