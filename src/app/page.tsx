import { Hero } from "@/components/home/hero";
import { SocialProof } from "@/components/home/social-proof";
import { WhyCredrace } from "@/components/home/why-credrace";
import { LoanProducts } from "@/components/home/loan-products";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { FAQSection } from "@/components/home/faq-section";
import { CTABanner } from "@/components/home/cta-banner";
import { FAQSchema, WebPageSchema } from "@/components/json-ld";
import { HOME_FAQS } from "@/lib/constants";

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
