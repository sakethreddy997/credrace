import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Pre-approval in Hyderabad | In-Principle Approval | Credrace",
  description:
    "Get home loan pre-approval in Hyderabad. In-principle approval before property purchase. Know your loan amount, strengthen negotiation. Compare pre-approval offers from 30+ banks. Quick approval.",
  keywords: [
    "home loan pre approval hyderabad",
    "home loan pre-approval hyderabad",
    "in principle home loan approval hyderabad",
    "home loan pre sanction hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-pre-approval-hyderabad` },
  openGraph: {
    title: "Home Loan Pre-approval Hyderabad | Credrace",
    description: "Get home loan pre-approval in Hyderabad. In-principle approval before property purchase.",
    url: `${SITE_URL}/home-loan-pre-approval-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Pre-approval in Hyderabad | In-Principle Approval | Credrace",
  description:
    "Get home loan pre-approval in Hyderabad. In-principle approval before property purchase. Know your loan amount, strengthen negotiation.",
  url: "/home-loan-pre-approval-hyderabad",
  keywords: [
    "home loan pre approval hyderabad",
    "home loan pre-approval hyderabad",
    "in principle home loan approval hyderabad",
  ],

  heroLabel: "Home Loan Pre-approval",
  heroHeadline: "Home Loan Pre-approval in Hyderabad",
  heroSub:
    "Get home loan pre-approval (in-principle approval) in Hyderabad before property purchase. Know your eligible loan amount, strengthen negotiation with builders, and shop with confidence. Compare pre-approval offers from 30+ banks.",
  stats: [
    { value: "24-48 hrs", label: "Approval time" },
    { value: "30+", label: "Banks compared" },
    { value: "Know", label: "Loan amount" },
    { value: "Stronger", label: "Negotiation" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Planning to buy a <strong>home in Hyderabad</strong>? Get <strong>home loan pre-approval</strong> (in-principle approval) before you start property hunting. Pre-approval tells you exactly how much loan you can get, strengthens your negotiation position, and makes property purchase smoother.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get pre-approval from 30+ banks</strong> in Hyderabad. Know your loan amount, compare offers, and shop for properties with confidence. Quick approval in 24-48 hours.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Benefits of Pre-approval -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Benefits of Home Loan Pre-approval</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Know Your Budget</h3>
            <p class="text-gray-600">Pre-approval tells you exactly how much loan you can get. You know your budget and can shop for properties within your range. No disappointment later.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💪 Stronger Negotiation</h3>
            <p class="text-gray-600">Pre-approval letter strengthens your position with builders and sellers. They know you're serious and have financing ready. You can negotiate better prices and terms.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">⚡ Faster Purchase</h3>
            <p class="text-gray-600">With pre-approval, you can move quickly when you find the right property. Final loan approval is faster as initial verification is already done.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Confidence</h3>
            <p class="text-gray-600">Shop for properties with confidence knowing your loan is approved. No worry about loan rejection after property selection. Peace of mind during property search.</p>
          </div>
        </div>
      </div>

      <!-- Process -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">How to Get Pre-approval</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">1</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Check Eligibility</h4>
              <p class="text-sm text-gray-600">Use our free calculator to check your eligibility. Enter income, age, existing EMIs, and get instant estimate of loan amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">2</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Submit Documents</h4>
              <p class="text-sm text-gray-600">Submit basic documents - identity proof, income proof, bank statements. No property documents needed for pre-approval.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">3</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Get Pre-approval</h4>
              <p class="text-sm text-gray-600">Bank verifies your documents and credit profile. Get pre-approval letter in 24-48 hours showing eligible loan amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">4</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Shop for Property</h4>
              <p class="text-sm text-gray-600">Use pre-approval letter to shop for properties. Show it to builders/sellers to strengthen negotiation. Final approval after property selection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Know your budget - Get exact loan amount before property search",
    },
    {
      text: "Strengthen negotiation - Pre-approval letter shows you're serious buyer",
    },
    {
      text: "Faster purchase - Move quickly when you find right property",
    },
    {
      text: "Compare offers from 30+ banks - Get pre-approval from best lender",
    },
    {
      text: "Quick approval - Get pre-approval in 24-48 hours",
    },
    {
      text: "Expert guidance - Our managers help you get pre-approval and use it effectively",
    },
  ],

  faqs: [
    {
      question: "What is home loan pre-approval?",
      answer:
        "Home loan pre-approval (also called in-principle approval) is a preliminary approval from bank showing how much loan you're eligible for, before you select a property. It's based on your income, credit profile, and eligibility. Pre-approval letter helps you know your budget and strengthens negotiation with builders/sellers.",
    },
    {
      question: "How long is pre-approval valid?",
      answer:
        "Pre-approval is typically valid for 3-6 months, depending on the bank. During this period, you can shop for properties and use the pre-approval letter. If you don't find a property within validity period, you may need to renew pre-approval. Final loan approval happens after you select a property and submit property documents.",
    },
    {
      question: "What documents are needed for pre-approval?",
      answer:
        "For pre-approval, you need basic documents: Identity proof (Aadhaar, PAN), address proof, income proof (salary slips, Form 16, or ITR), bank statements (6 months), and photographs. No property documents are needed for pre-approval. Property documents are required only for final loan approval after property selection.",
    },
    {
      question: "Is pre-approval same as final loan approval?",
      answer:
        "No, pre-approval is preliminary approval based on your profile. Final loan approval happens after you select a property and bank verifies property documents, does property valuation, and completes all checks. Pre-approval gives you loan amount estimate, but final approval confirms loan for specific property.",
    },
    {
      question: "Can I get pre-approval from multiple banks?",
      answer:
        "Yes, you can get pre-approval from multiple banks to compare offers. However, multiple pre-approvals may result in multiple credit inquiries. It's better to get pre-approval from 2-3 banks you're most interested in. Compare offers through Credrace to find best bank before getting pre-approval.",
    },
    {
      question: "Does pre-approval guarantee final loan approval?",
      answer:
        "Pre-approval doesn't guarantee final approval, but it's a strong indicator. Final approval depends on property verification, valuation, legal checks, and your continued eligibility. If your profile remains same and property is approved, final approval is usually straightforward. Pre-approval significantly increases chances of final approval.",
    },
  ],

  ctaHeadline: "Ready to Get Pre-approval?",
  ctaSub:
    "Check your eligibility. Get pre-approval from 30+ banks. Know your loan amount and shop with confidence. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan Calculator Hyderabad", href: "/home-loan-calculator-hyderabad" },
  ],
};

export default function HomeLoanPreApprovalHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
