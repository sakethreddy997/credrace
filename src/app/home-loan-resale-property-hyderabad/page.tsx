import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Resale Property in Hyderabad | Second Hand Home Loan | Credrace",
  description:
    "Get home loan for resale property in Hyderabad. Home loans available for second-hand homes. Compare rates from 30+ banks. Interest rates starting 8.25%, loan up to ₹5 Cr. Lower LTV but flexible terms.",
  keywords: [
    "home loan resale property hyderabad",
    "home loan second hand property hyderabad",
    "home loan resale home hyderabad",
    "home loan used property hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-resale-property-hyderabad` },
  openGraph: {
    title: "Home Loan for Resale Property Hyderabad | Credrace",
    description: "Home loan for resale property in Hyderabad. Second-hand home loans. Compare 30+ banks.",
    url: `${SITE_URL}/home-loan-resale-property-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Resale Property in Hyderabad | Second Hand Home Loan | Credrace",
  description:
    "Get home loan for resale property in Hyderabad. Home loans available for second-hand homes. Compare rates from 30+ banks. Interest rates starting 8.25%.",
  url: "/home-loan-resale-property-hyderabad",
  keywords: [
    "home loan resale property hyderabad",
    "home loan second hand property hyderabad",
    "home loan resale home hyderabad",
  ],

  heroLabel: "Home Loan for Resale Property",
  heroHeadline: "Home Loan for Resale Property in Hyderabad",
  heroSub:
    "Get home loan for resale property (second-hand home) in Hyderabad. Home loans available for resale properties with competitive rates. Compare offers from 30+ banks. Interest rates starting 8.25%, loan up to ₹5 Cr. Lower LTV but flexible terms.",
  stats: [
    { value: "8.25%", label: "Starting interest rate" },
    { value: "₹5 Cr", label: "Maximum loan amount" },
    { value: "70-80%", label: "LTV ratio" },
    { value: "30+", label: "Banks compared" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Planning to buy a <strong>resale property (second-hand home) in Hyderabad</strong>? You can get a home loan for resale properties. Resale property loans work similarly to regular home loans but may have slightly different terms like lower LTV ratio.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>compare home loan offers from 30+ banks</strong> for resale properties in Hyderabad. Get the best rates, understand LTV limits, and apply online with dedicated support.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Resale Property Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Understanding Resale Property Loans</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏠 What is Resale Property?</h3>
            <p class="text-gray-600">Resale property is a property that has been previously owned and is being sold by the owner (not builder). It's also called second-hand property or used property.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Lower LTV Ratio</h3>
            <p class="text-gray-600">Resale property loans typically offer 70-80% LTV compared to 80-90% for new properties. You need to pay 20-30% down payment. Lower LTV due to property age and condition.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Competitive Rates</h3>
            <p class="text-gray-600">Interest rates are similar to regular home loans, starting from 8.25% per annum. Rates depend on your credit profile, income, property age, and location.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🔍 Property Valuation</h3>
            <p class="text-gray-600">Banks conduct detailed property valuation and inspection for resale properties. Property age, condition, location, and legal status are verified before approval.</p>
          </div>
        </div>
      </div>

      <!-- Important Considerations -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Important Considerations for Resale Property</h3>
        <ul class="space-y-3 text-sm text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Property Age:</strong> Banks prefer properties less than 20-30 years old. Very old properties may have lower LTV or higher rates.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Clear Title:</strong> Property should have clear title, no disputes, and all necessary approvals. Legal verification is crucial.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Property Condition:</strong> Well-maintained properties get better valuation and loan terms. Banks inspect property condition.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Location:</strong> Properties in good locations (approved layouts, good connectivity) get better loan terms and higher LTV.</span>
          </li>
        </ul>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Compare resale property loan offers from 30+ banks - Get the best deal",
    },
    {
      text: "Competitive rates - Starting from 8.25% per annum",
    },
    {
      text: "Flexible terms - Up to 30 years tenure",
    },
    {
      text: "Expert guidance - Our managers help you understand resale property loan terms",
    },
    {
      text: "Property verification - We help ensure property has clear title and approvals",
    },
    {
      text: "Dedicated support - Personal manager guides you through entire process",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for resale property?",
      answer:
        "Yes, you can get home loan for resale property (second-hand home) in Hyderabad. Most banks offer loans for resale properties with similar interest rates as new properties. However, LTV ratio may be lower (70-80% vs 80-90% for new properties), and banks conduct detailed property valuation and legal verification.",
    },
    {
      question: "What is the LTV ratio for resale property loan?",
      answer:
        "Resale property loans typically offer 70-80% LTV (Loan-to-Value) compared to 80-90% for new properties. For example, for ₹1 Crore resale property, you can get ₹70-80 Lakh as loan and need to pay ₹20-30 Lakh as down payment. LTV depends on property age, condition, location, and bank policy.",
    },
    {
      question: "What is the interest rate for resale property loan?",
      answer:
        "Interest rates for resale property loans are similar to regular home loans, starting from 8.25% per annum for prime borrowers with CIBIL score 750+. Rates range from 8.25% to 9.75% depending on your credit score, income, property age, condition, and lender. Very old properties may have slightly higher rates. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What documents are required for resale property loan?",
      answer:
        "Documents required: Identity proof (Aadhaar, PAN), address proof, income proof (salary slips, Form 16, or ITR), property documents (sale agreement, title deed, previous sale deeds, encumbrance certificate, property tax receipts), NOC from society/builder, bank statements, and photographs. Property should have clear title and all approvals.",
    },
    {
      question: "How is resale property valued for loan?",
      answer:
        "Banks value resale property based on: (1) Market value assessment by bank's valuer, (2) Property age and condition, (3) Location and connectivity, (4) Recent sale prices in area, (5) Property size and amenities. Bank's valuer inspects property and provides valuation report. Loan amount is based on lower of sale price or bank valuation.",
    },
    {
      question: "Are there any restrictions on resale property age?",
      answer:
        "Most banks prefer resale properties less than 20-30 years old. Very old properties (30+ years) may have lower LTV (60-70%), higher interest rates, or may not be eligible. However, well-maintained old properties in good locations may still get loans. Check with bank for specific age restrictions.",
    },
  ],

  ctaHeadline: "Ready to Buy Resale Property?",
  ctaSub:
    "Check your eligibility. Compare resale property loan offers from 30+ banks. Get the best rate and terms. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Home Loan for Under-construction Property Hyderabad", href: "/home-loan-under-construction-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
  ],
};

export default function HomeLoanResalePropertyHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
