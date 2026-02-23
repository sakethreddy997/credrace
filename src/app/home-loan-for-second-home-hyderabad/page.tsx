import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Second Home in Hyderabad | Second Home Loan | Credrace",
  description:
    "Home loan for second home in Hyderabad. Second home loan eligibility, LTV norms (70-75%), documentation, tax benefits. Compare offers from 30+ banks.",
  keywords: [
    "home loan for second home hyderabad",
    "second home loan hyderabad",
    "second home loan hyderabad",
    "home loan second property hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-for-second-home-hyderabad` },
  openGraph: {
    title: "Home Loan for Second Home Hyderabad | Credrace",
    description: "Home loan for second home in Hyderabad. Second home loan eligibility, LTV norms.",
    url: `${SITE_URL}/home-loan-for-second-home-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Second Home in Hyderabad | Second Home Loan | Credrace",
  description:
    "Home loan for second home in Hyderabad. Second home loan eligibility, LTV norms (70-75%), documentation, tax benefits. Compare offers from 30+ banks.",
  url: "/home-loan-for-second-home-hyderabad",
  keywords: [
    "home loan for second home hyderabad",
    "second home loan hyderabad",
    "second home loan hyderabad",
  ],

  heroLabel: "Home Loan for Second Home",
  heroHeadline: "Home Loan for Second Home in Hyderabad",
  heroSub:
    "Get home loan for second home in Hyderabad. Second home loan eligibility, LTV norms (70-75%), documentation, tax benefits (if let-out). Compare offers from 30+ banks. Expert guidance for second home loans.",
  stats: [
    { value: "70-75%", label: "LTV allowed" },
    { value: "Tax", label: "Benefits" },
    { value: "30+", label: "Banks compared" },
    { value: "Standard", label: "Process" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Getting a <strong>home loan for second home in Hyderabad</strong> involves lower LTV (70-75%), existing home loan consideration, and specific documentation. Second home loans are for investment or vacation homes. Understanding requirements helps you plan your purchase.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loans for second homes</strong> from 30+ banks in Hyderabad. Understand eligibility criteria, LTV norms, documentation requirements, tax benefits, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Second Home Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Second Home</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Lower LTV</h3>
            <p class="text-gray-600">Second home loans get lower LTV (70-75%) than first home loans (80-90%) due to higher risk. Higher down payment required (25-30%). Banks prefer lower LTV for second homes.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Existing Loan Consideration</h3>
            <p class="text-gray-600">Banks consider existing home loan EMI in FOIR calculation. If you have existing home loan, available capacity reduces. Total FOIR (existing + new) should be within 40-60%.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📋 Documentation</h3>
            <p class="text-gray-600">Additional documents needed: First home loan details, existing property documents, rental income proof (if first home is rented), property tax receipts. More documentation than first home.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Tax Benefits</h3>
            <p class="text-gray-600">Tax benefits for second home: If let-out, full interest is deductible (no ₹2 Lakh limit). If self-occupied, interest deduction up to ₹2 Lakh. Principal repayment deduction up to ₹1.5 Lakh under Section 80C.</p>
          </div>
        </div>
      </div>

      <!-- LTV Comparison -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">LTV: First Home vs Second Home</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Loan Amount</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">First Home LTV</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Second Home LTV</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Example (₹1 Cr Property)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Up to ₹30 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">90%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">75%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹27 Lakh vs ₹22.5 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹30-75 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">80%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">70%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹60 Lakh vs ₹52.5 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Above ₹75 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">75%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">70%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹75 Lakh vs ₹70 Lakh</td>
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
      text: "Get loan for second home - Understand eligibility and requirements",
    },
    {
      text: "Compare from 30+ banks - Find lenders with best second home loan terms",
    },
    {
      text: "Expert guidance - Our managers help with second home loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Tax benefits - Understand tax benefits for second home",
    },
    {
      text: "Existing loan consideration - Learn how existing loan affects eligibility",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for second home in Hyderabad?",
      answer:
        "Yes, you can get home loan for second home in Hyderabad. Banks offer second home loans with some considerations: (1) Lower LTV - 70-75% LTV (vs 80-90% for first home) due to higher risk, (2) Existing loan consideration - Banks consider existing home loan EMI in FOIR calculation, available capacity reduces, (3) Documentation - Additional documents needed (first home loan details, existing property documents, rental income proof if first home is rented), (4) Tax benefits - If let-out, full interest is deductible, if self-occupied, interest deduction up to ₹2 Lakh. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What is LTV for second home loan?",
      answer:
        "LTV (Loan-to-Value) for second home loan: (1) Up to ₹30 Lakh loan: 75% LTV (25% down payment), (2) ₹30-75 Lakh loan: 70% LTV (30% down payment), (3) Above ₹75 Lakh loan: 70% LTV (30% down payment). Lower LTV than first home (80-90%) due to higher risk. For example, ₹1 Cr second home: ₹70 Lakh loan (70% LTV), ₹30 Lakh down payment (vs ₹75-80 Lakh loan for first home). LTV is based on property valuation (not sale price). Use our calculator to check exact LTV for your second home.",
    },
    {
      question: "How does existing home loan affect second home loan?",
      answer:
        "Existing home loan affects second home loan: (1) FOIR calculation - Banks consider existing home loan EMI in total FOIR, available capacity for second home reduces, (2) Example - ₹1 Lakh income, ₹30,000 existing home loan EMI, 50% FOIR = ₹50,000 total capacity, available for second home = ₹20,000/month = ₹25-30 Lakh loan (vs ₹50-60 Lakh if no existing loan), (3) Combined FOIR - Total FOIR (existing + new) should be within 40-60%, (4) Income requirement - Higher income needed if you have existing loan. Lower existing EMI = Higher second home loan capacity. Use our calculator to check exact capacity with existing loan.",
    },
    {
      question: "What documents are needed for second home loan?",
      answer:
        "Documents needed: (1) Personal documents - Identity proof, address proof, income documents, CIBIL report, (2) Second home documents - Sale deed (registered), Property registration documents, Property tax receipts, (3) First home documents - First home loan details, First home property documents, First home loan statements, (4) Rental income documents - If first home is rented, rental agreement, rent receipts, bank statements showing rent credits, (5) Property tax receipts - Both properties' tax receipts. More documentation than first home. Ensure all documents are in order.",
    },
    {
      question: "What are tax benefits for second home?",
      answer:
        "Tax benefits for second home: (1) If let-out (rented) - Full interest is deductible (no ₹2 Lakh limit), rental income is taxable, (2) If self-occupied - Interest deduction up to ₹2 Lakh (Section 24), principal repayment deduction up to ₹1.5 Lakh (Section 80C), (3) Both homes - If both homes are self-occupied, you can claim interest deduction for one home only (₹2 Lakh limit applies to one home), (4) Principal repayment - Both homes' principal repayment can be claimed (₹1.5 Lakh each, total ₹3 Lakh). Tax benefits depend on whether second home is let-out or self-occupied. Consult tax advisor for details.",
    },
    {
      question: "Do all banks offer loans for second homes?",
      answer:
        "Yes, most banks offer loans for second homes, but terms vary: (1) Public sector banks (SBI, PNB) - Offer loans, may have stricter requirements, (2) Private banks (HDFC, ICICI, Axis) - Offer loans, flexible terms, (3) HFCs (LIC HFL) - Offer loans, good for second homes. However, all banks require: (1) Lower LTV (70-75% vs 80-90% for first home), (2) Existing loan consideration (FOIR calculation includes existing loan), (3) Complete documentation (both properties). Second home loans have stricter requirements than first home loans. Compare offers from 30+ banks through Credrace to find best terms.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan for Second Home?",
  ctaSub:
    "Check your eligibility for second home. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Rental Property Hyderabad", href: "/home-loan-for-rental-property-hyderabad" },
    { label: "Home Loan Eligibility with Existing Loan Hyderabad", href: "/home-loan-eligibility-with-existing-loan-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function HomeLoanForSecondHomeHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
