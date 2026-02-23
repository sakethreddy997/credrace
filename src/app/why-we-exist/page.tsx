import type { Metadata } from "next";
import { ProblemHero } from "@/components/why-we-exist/ProblemHero";
import { ProblemSection } from "@/components/why-we-exist/ProblemSection";
import { SolutionSection } from "@/components/why-we-exist/SolutionSection";
import { FinalCTA } from "@/components/why-we-exist/FinalCTA";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why We Exist — The Problem We Solve | Credrace",
  description:
    "Your focus should be the home, not the loan. We take care of branches, documents, and follow-ups so you don't have to.",
  alternates: { canonical: `${SITE_URL}/why-we-exist` },
  openGraph: {
    title: "Why We Exist | Credrace",
    description:
      "Your focus should be the home, not the loan. We take care of the rest.",
  },
};

export default function WhyWeExistPage() {
  return (
    <>
      <ProblemHero />
      <ProblemSection />
      <SolutionSection />
      <FinalCTA />
    </>
  );
}
