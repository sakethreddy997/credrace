import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Duplex House in Hyderabad | Duplex Home Loan | Credrace",
  description:
    "Home loan for duplex house in Hyderabad. Duplex home loan eligibility, LTV norms (75-80%), documentation, builder approval. Compare offers from 30+ banks.",
  keywords: [
    "home loan for duplex house hyderabad",
    "duplex home loan hyderabad",
    "duplex house loan hyderabad",
    "home loan duplex hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-for-duplex-house-hyderabad` },
  openGraph: {
    title: "Home Loan for Duplex House Hyderabad | Credrace",
    description: "Home loan for duplex house in Hyderabad. Duplex home loan eligibility, LTV norms.",
    url: `${SITE_URL}/home-loan-for-duplex-house-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Duplex House in Hyderabad | Duplex Home Loan | Credrace",
  description:
    "Home loan for duplex house in Hyderabad. Duplex home loan eligibility, LTV norms (75-80%), documentation, builder approval. Compare offers from 30+ banks.",
  url: "/home-loan-for-duplex-house-hyderabad",
  keywords: [
    "home loan for duplex house hyderabad",
    "duplex home loan hyderabad",
    "duplex house loan hyderabad",
  ],

  heroLabel: "Home Loan for Duplex House",
  heroHeadline: "Home Loan for Duplex House in Hyderabad",
  heroSub:
    "Get home loan for duplex house in Hyderabad. Duplex home loan eligibility, LTV norms (75-80%), documentation, builder approval. Compare offers from 30+ banks. Expert guidance for duplex house loans.",
  stats: [
    { value: "75-80%", label: "LTV allowed" },
    { value: "Builder", label: "Approval" },
    { value: "30+", label: "Banks compared" },
    { value: "Standard", label: "Process" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Getting a <strong>home loan for duplex house in Hyderabad</strong> involves builder approval, LTV norms (typically 75-80%), and specific documentation. Duplex houses in gated communities get better terms than independent duplexes. Understanding requirements helps you plan your purchase.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loans for duplex houses</strong> from 30+ banks in Hyderabad. Understand eligibility criteria, LTV norms, documentation requirements, builder approval, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Duplex Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Duplex House</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏘️ Gated Community Duplex</h3>
            <p class="text-gray-600">Duplex houses in gated communities get better terms: Higher LTV (80%), faster approval, builder approval easier. Banks prefer gated community duplexes due to better security and infrastructure.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 LTV Norms</h3>
            <p class="text-gray-600">LTV for duplex houses: Gated community: 80% LTV, Independent duplex: 75% LTV. Lower LTV than apartments due to higher property value. Down payment required accordingly (20-25%).</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📋 Builder Approval</h3>
            <p class="text-gray-600">Builder must be approved by bank: RERA registered, good track record, clear title. Gated community builders are usually pre-approved. Independent duplexes need individual approval.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation</h3>
            <p class="text-gray-600">Standard documents: Sale deed, property registration, builder-buyer agreement, RERA registration, approved plans, possession certificate. Similar to villa/apartment loans.</p>
          </div>
        </div>
      </div>

      <!-- Duplex Types Comparison -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Duplex Types & Loan Terms</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Duplex Type</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">LTV Allowed</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Approval Time</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Example (₹2 Cr Duplex)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Gated Community Duplex</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">80%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">7-15 days</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.6 Cr loan, ₹40 Lakh down</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Independent Duplex</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">75%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">15-30 days</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.5 Cr loan, ₹50 Lakh down</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Under Construction Duplex</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">75-80%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">15-30 days</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Stage-wise disbursement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Get loan for duplex - Understand eligibility and requirements",
    },
    {
      text: "Compare from 30+ banks - Find lenders with best duplex loan terms",
    },
    {
      text: "Expert guidance - Our managers help with duplex loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Builder approval - Understand builder requirements",
    },
    {
      text: "Flexible LTV - Up to 80% LTV for gated community duplexes",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for duplex house in Hyderabad?",
      answer:
        "Yes, you can get home loan for duplex house in Hyderabad. Banks offer loans for duplex houses with some considerations: (1) LTV norms - Gated community duplex: 80% LTV, Independent duplex: 75% LTV (lower than apartments due to higher value), (2) Builder approval - Builder must be RERA registered and approved by bank, (3) Property valuation - Banks conduct valuation, loan is based on valuation, (4) Documentation - Sale deed, property registration, builder-buyer agreement, RERA registration, approved plans. Gated community duplexes get better terms than independent duplexes. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What is LTV for duplex home loan?",
      answer:
        "LTV (Loan-to-Value) for duplex home loan: (1) Gated community duplex: 80% LTV (20% down payment), (2) Independent duplex: 75% LTV (25% down payment). Lower LTV than apartments (80-90%) due to higher property value. For example, ₹2 Cr gated community duplex: ₹1.6 Cr loan (80% LTV), ₹40 Lakh down payment. ₹2 Cr independent duplex: ₹1.5 Cr loan (75% LTV), ₹50 Lakh down payment. LTV is based on property valuation (not sale price). Use our calculator to check exact LTV for your duplex.",
    },
    {
      question: "What documents are needed for duplex home loan?",
      answer:
        "Documents needed: (1) Personal documents - Identity proof, address proof, income documents, CIBIL report, (2) Property documents - Sale deed (registered), Property registration documents, Builder-buyer agreement (for new duplexes), RERA registration certificate, Approved building plans, Possession certificate, Property tax receipts, (3) Builder documents - Builder NOC, Builder track record (for gated communities), (4) Society documents - NOC from society (if applicable). Similar to villa/apartment loans. Ensure all documents are in order.",
    },
    {
      question: "Is duplex loan different from villa loan?",
      answer:
        "Duplex loan is similar to villa loan: (1) LTV - Similar LTV (75-80% for both), (2) Builder approval - Similar builder approval requirements, (3) Documentation - Similar documents, (4) Process - Similar approval process. Main difference: (1) Property type - Duplex has two floors, villa may have different structure, (2) Valuation - May have slight valuation differences, (3) Gated community - Both get better terms in gated communities. Process and terms are very similar. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "Do all banks offer loans for duplex houses?",
      answer:
        "Most banks offer loans for duplex houses, but terms vary: (1) Public sector banks (SBI, PNB) - Offer loans, may have stricter builder approval, (2) Private banks (HDFC, ICICI, Axis) - Offer loans, flexible builder approval, better terms for gated communities, (3) HFCs (LIC HFL) - Offer loans, good for duplexes. Gated community duplexes get better terms (higher LTV, faster approval) than independent duplexes. Banks prefer gated communities due to better security, infrastructure, and builder track record. Compare offers from 30+ banks through Credrace to find best terms.",
    },
    {
      question: "Can I get loan for under construction duplex?",
      answer:
        "Yes, you can get loan for under construction duplex. Process is similar to under construction apartments/villas: (1) Stage-wise disbursement - Loan disbursed in stages as construction progresses (Foundation 20%, Plinth 15%, Superstructure 40%, Finishing 20%, Final 5%), (2) Builder approval - Builder must be RERA registered and approved by bank, (3) LTV norms - 75-80% LTV (similar to ready duplex), (4) Documentation - Additional documents needed (builder-buyer agreement, RERA registration, construction certificates). Gated community under construction duplexes get better terms. Compare offers from 30+ banks through Credrace.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan for Duplex House?",
  ctaSub:
    "Check your eligibility for duplex house. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Villa Hyderabad", href: "/home-loan-for-villa-hyderabad" },
    { label: "Home Loan for Gated Community Hyderabad", href: "/home-loan-for-gated-community-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function HomeLoanForDuplexHouseHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
