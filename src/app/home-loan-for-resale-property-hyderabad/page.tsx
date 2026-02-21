import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Resale Property in Hyderabad | Resale Home Loan | Credrace",
  description:
    "Home loan for resale property in Hyderabad. Property age limits, valuation, documentation, seller verification. Compare offers from 30+ banks.",
  keywords: [
    "home loan for resale property hyderabad",
    "resale home loan hyderabad",
    "second hand property home loan hyderabad",
    "resale property loan hyderabad",
  ],
  openGraph: {
    title: "Home Loan for Resale Property Hyderabad | Credrace",
    description: "Home loan for resale property in Hyderabad. Property age limits, valuation, documentation.",
    url: `${SITE_URL}/home-loan-for-resale-property-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Resale Property in Hyderabad | Resale Home Loan | Credrace",
  description:
    "Home loan for resale property in Hyderabad. Property age limits, valuation, documentation, seller verification. Compare offers from 30+ banks.",
  url: "/home-loan-for-resale-property-hyderabad",
  keywords: [
    "home loan for resale property hyderabad",
    "resale home loan hyderabad",
    "second hand property home loan hyderabad",
  ],

  heroLabel: "Home Loan for Resale Property",
  heroHeadline: "Home Loan for Resale Property in Hyderabad",
  heroSub:
    "Get home loan for resale property in Hyderabad. Property age limits (typically 20-30 years), property valuation, seller verification, documentation. Compare offers from 30+ banks. Expert guidance for resale properties.",
  stats: [
    { value: "20-30", label: "Years max age" },
    { value: "Valuation", label: "Required" },
    { value: "30+", label: "Banks compared" },
    { value: "Standard", label: "Process" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Getting a <strong>home loan for resale property in Hyderabad</strong> involves property age limits, valuation, and seller verification. Banks typically accept properties up to 20-30 years old, with lower LTV for older properties. Understanding requirements helps you plan your purchase.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loans for resale properties</strong> from 30+ banks in Hyderabad. Understand property age limits, valuation process, documentation requirements, seller verification, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Resale Property Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Resale Property</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">⏰ Property Age Limits</h3>
            <p class="text-gray-600">Banks typically accept properties up to 20-30 years old. Older properties may get lower LTV or may be rejected. Property age is calculated from construction completion date.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Property Valuation</h3>
            <p class="text-gray-600">Banks conduct property valuation to determine loan amount. Older properties get lower valuation. Loan is 70-80% of valuation (lower than new properties). Valuation considers age, condition, location.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📋 Seller Verification</h3>
            <p class="text-gray-600">Banks verify seller's title, outstanding loans on property, NOC from previous lender (if any). Seller must have clear title and no encumbrances. Seller verification is crucial.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation</h3>
            <p class="text-gray-600">Additional documents needed: Previous sale deed, property history, seller NOC, outstanding loan clearance (if any), property tax receipts. More documentation than new properties.</p>
          </div>
        </div>
      </div>

      <!-- Property Age vs LTV -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Property Age vs LTV</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Property Age</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">LTV Allowed</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Down Payment</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Example (₹1 Cr Property)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">0-5 years</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">80-90%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">10-20%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹75-80 Lakh loan</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">5-10 years</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">75-80%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">20-25%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹70-75 Lakh loan</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">10-20 years</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">70-75%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">25-30%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹65-70 Lakh loan</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">20-30 years</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">60-70%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">30-40%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹55-65 Lakh loan</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Above 30 years</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">50-60%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">40-50%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">May be rejected</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Important Points -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Important Points for Resale Property</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">✅ Check Property Age</h3>
            <p class="text-sm text-gray-600 mb-3">Verify property age before applying. Properties above 30 years may be rejected. Check construction completion date, property documents to confirm age.</p>
            <p class="text-xs font-semibold text-emerald-600">Impact: Affects loan approval</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💰 Verify Seller Title</h3>
            <p class="text-sm text-gray-600 mb-3">Ensure seller has clear title, no outstanding loans, no encumbrances. Get seller NOC, verify previous sale deed, check property history.</p>
            <p class="text-xs font-semibold text-emerald-600">Impact: Essential for approval</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📋 Check Outstanding Loans</h3>
            <p class="text-sm text-gray-600 mb-3">Verify if property has outstanding home loan. Seller must clear loan before sale or transfer loan. Get NOC from previous lender if loan was cleared.</p>
            <p class="text-xs font-semibold text-emerald-600">Impact: Affects loan approval</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">🏠 Property Condition</h3>
            <p class="text-sm text-gray-600 mb-3">Property condition affects valuation. Well-maintained properties get better valuation. Check property condition, repairs needed, maintenance history.</p>
            <p class="text-xs font-semibold text-emerald-600">Impact: Affects loan amount</p>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Get loan for resale property - Understand age limits and requirements",
    },
    {
      text: "Compare from 30+ banks - Find lenders with flexible age limits",
    },
    {
      text: "Expert guidance - Our managers help with resale property loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Seller verification - Understand seller requirements",
    },
    {
      text: "Property valuation - Learn how age affects loan amount",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for resale property in Hyderabad?",
      answer:
        "Yes, you can get home loan for resale property in Hyderabad. Banks offer loans for resale properties with some conditions: (1) Property age limits - Typically up to 20-30 years old (some banks accept up to 40 years), (2) Property valuation - Banks conduct valuation, older properties get lower valuation, (3) LTV norms - Lower LTV for older properties (60-80% vs 80-90% for new), (4) Seller verification - Banks verify seller's title, outstanding loans, NOC from previous lender, (5) Documentation - Additional documents needed (previous sale deed, property history, seller NOC). Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What is maximum property age for resale home loan?",
      answer:
        "Maximum property age for resale home loan varies by bank: (1) Most banks: 20-30 years old, (2) Some banks: Up to 40 years old (with lower LTV), (3) Very few banks: Above 40 years (may be rejected). Property age is calculated from construction completion date. However, age limit also depends on: (1) Property condition (well-maintained properties may get exception), (2) Location (prime locations may get exception), (3) Property type (apartments vs independent houses). Generally, properties above 30 years face challenges. Check with individual banks for their age limits.",
    },
    {
      question: "What is LTV for resale property?",
      answer:
        "LTV (Loan-to-Value) for resale property depends on property age: (1) 0-5 years: 80-90% LTV (similar to new property), (2) 5-10 years: 75-80% LTV, (3) 10-20 years: 70-75% LTV, (4) 20-30 years: 60-70% LTV, (5) Above 30 years: 50-60% LTV (may be rejected). LTV is based on property valuation (not sale price). Older properties get lower LTV due to depreciation. For example, ₹1 Cr resale property (15 years old): ₹65-70 Lakh loan (70% LTV), ₹30-35 Lakh down payment. Use our calculator to check exact LTV.",
    },
    {
      question: "What documents are needed for resale property home loan?",
      answer:
        "Documents needed: (1) Personal documents - Identity proof, address proof, income documents, CIBIL report, (2) Property documents - Current sale deed (registered), Previous sale deed (chain of title), Property registration documents, Possession certificate, Property tax receipts, NOC from society (if applicable), (3) Seller documents - Seller identity proof, Seller NOC, Seller title documents, Outstanding loan clearance certificate (if property had loan), NOC from previous lender (if loan was cleared), (4) Property history - Property age certificate, Construction completion certificate. More documentation than new properties. Ensure all documents are in order.",
    },
    {
      question: "What if resale property has outstanding loan?",
      answer:
        "If resale property has outstanding loan: (1) Seller must clear loan before sale - Seller pays outstanding amount, gets loan closure certificate, (2) Loan transfer - Some banks allow loan transfer to buyer (subject to eligibility), (3) NOC from lender - Get NOC from previous lender confirming loan closure, (4) Bank verification - Bank verifies loan closure before approving new loan. Outstanding loan on property creates encumbrance, which must be cleared before new loan. Ensure seller clears loan and provides closure certificate. Don't proceed without loan closure.",
    },
    {
      question: "Do all banks offer loans for resale property?",
      answer:
        "Most banks offer loans for resale property, but age limits vary: (1) Public sector banks (SBI, PNB) - Offer loans, may have stricter age limits (20-25 years), (2) Private banks (HDFC, ICICI, Axis) - Offer loans, flexible age limits (up to 30-40 years), (3) HFCs (LIC HFL) - Offer loans, good for resale properties. However, all banks consider: (1) Property age (older = lower LTV or rejection), (2) Property condition (well-maintained = better terms), (3) Location (prime location = better terms), (4) Seller title (clear title required). Compare offers from 30+ banks through Credrace to find best terms for your resale property.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan for Resale Property?",
  ctaSub:
    "Check your eligibility for resale property. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Ready to Move Property Hyderabad", href: "/home-loan-for-ready-to-move-property-hyderabad" },
    { label: "Home Loan for Under Construction Property Hyderabad", href: "/home-loan-for-under-construction-property-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function HomeLoanForResalePropertyHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
