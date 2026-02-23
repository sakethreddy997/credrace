import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { FAQSchema, WebPageSchema } from "@/components/json-ld";
import { HOME_FAQS, SITE_URL } from "@/lib/constants";

const WhyCredrace = dynamic(
  () => import("@/components/home/why-credrace").then((m) => ({ default: m.WhyCredrace })),
  { ssr: true }
);
const LoanProducts = dynamic(
  () => import("@/components/home/loan-products").then((m) => ({ default: m.LoanProducts })),
  { ssr: true }
);
const HowItWorks = dynamic(
  () => import("@/components/home/how-it-works").then((m) => ({ default: m.HowItWorks })),
  { ssr: true }
);
const SocialProof = dynamic(
  () => import("@/components/home/social-proof").then((m) => ({ default: m.SocialProof })),
  { ssr: true }
);
const Testimonials = dynamic(
  () => import("@/components/home/testimonials").then((m) => ({ default: m.Testimonials })),
  { ssr: true }
);
const FAQSection = dynamic(
  () => import("@/components/home/faq-section").then((m) => ({ default: m.FAQSection })),
  { ssr: true }
);
const CTABanner = dynamic(
  () => import("@/components/home/cta-banner").then((m) => ({ default: m.CTABanner })),
  { ssr: true }
);

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <WebPageSchema
        title="Credrace — India's Trusted Loan Marketplace"
        description="Compare personalised loan offers from 30+ lenders. Check your eligibility in 2 minutes. No impact on your CIBIL score."
        url="/"
      />
      <FAQSchema faqs={HOME_FAQS} />
      <Hero />
      <WhyCredrace />
      <LoanProducts />
      <HowItWorks />
      <SocialProof />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  );
}
