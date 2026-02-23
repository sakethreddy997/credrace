import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Land Purchase in Hyderabad | Land Purchase Home Loan | Credrace",
  description:
    "Home loan for land purchase in Hyderabad. Land purchase home loan eligibility, LTV norms (60-70%), documentation, construction timeline. Compare offers from 30+ banks.",
  keywords: [
    "home loan for land purchase hyderabad",
    "land purchase home loan hyderabad",
    "land loan hyderabad",
    "home loan land purchase hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-for-land-purchase-hyderabad` },
  openGraph: {
    title: "Home Loan for Land Purchase Hyderabad | Credrace",
    description: "Home loan for land purchase in Hyderabad. Land purchase home loan eligibility, LTV norms.",
    url: `${SITE_URL}/home-loan-for-land-purchase-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Land Purchase in Hyderabad | Land Purchase Home Loan | Credrace",
  description:
    "Home loan for land purchase in Hyderabad. Land purchase home loan eligibility, LTV norms (60-70%), documentation, construction timeline. Compare offers from 30+ banks.",
  url: "/home-loan-for-land-purchase-hyderabad",
  keywords: [
    "home loan for land purchase hyderabad",
    "land purchase home loan hyderabad",
    "land loan hyderabad",
  ],

  heroLabel: "Home Loan for Land Purchase",
  heroHeadline: "Home Loan for Land Purchase in Hyderabad",
  heroSub:
    "Get home loan for land purchase in Hyderabad. Land purchase home loan eligibility, LTV norms (60-70%), documentation, construction timeline requirements. Compare offers from 30+ banks. Expert guidance for land purchase loans.",
  stats: [
    { value: "60-70%", label: "LTV allowed" },
    { value: "Construction", label: "Timeline" },
    { value: "30+", label: "Banks compared" },
    { value: "Standard", label: "Process" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Getting a <strong>home loan for land purchase in Hyderabad</strong> involves lower LTV (60-70%), construction timeline requirements, and specific documentation. Land purchase loans are for buying plot/land with intention to construct. Understanding requirements helps you plan your purchase.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loans for land purchase</strong> from 30+ banks in Hyderabad. Understand eligibility criteria, LTV norms, documentation requirements, construction timeline, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Land Purchase Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Land Purchase</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Lower LTV</h3>
            <p class="text-gray-600">Land purchase loans get lower LTV (60-70%) than constructed property loans (80-90%) due to higher risk. Higher down payment required (30-40%). Banks prefer lower LTV for land-only loans.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏗️ Construction Timeline</h3>
            <p class="text-gray-600">Banks require construction to start within 2-3 years of land purchase. You need to show construction intent and approved building plans. Construction timeline is mandatory.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📋 Approved Layout</h3>
            <p class="text-gray-600">Land must be in approved layout (HMDA/GHMC approved). Unapproved layouts may be rejected. Approved layout ensures legal status and infrastructure.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation</h3>
            <p class="text-gray-600">Additional documents needed: Plot sale deed, survey document, layout approval, approved building plans (for construction intent), property tax receipts, encumbrance certificate. More documentation than constructed property.</p>
          </div>
        </div>
      </div>

      <!-- LTV for Land -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">LTV for Land Purchase</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Land Value</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">LTV Allowed</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Down Payment</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Example (₹50 Lakh Land)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Up to ₹30 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">70%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">30%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹21 Lakh loan, ₹9 Lakh down</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹30-75 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">65%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">35%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹32.5 Lakh loan, ₹17.5 Lakh down</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Above ₹75 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">60%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">40%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹30 Lakh loan, ₹20 Lakh down</td>
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
      text: "Get loan for land purchase - Understand eligibility and requirements",
    },
    {
      text: "Compare from 30+ banks - Find lenders with best land purchase loan terms",
    },
    {
      text: "Expert guidance - Our managers help with land purchase loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Construction timeline - Understand construction requirements",
    },
    {
      text: "Approved layout - Learn about layout approval requirements",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for land purchase in Hyderabad?",
      answer:
        "Yes, you can get home loan for land purchase in Hyderabad. Banks offer land purchase loans with some considerations: (1) Lower LTV - 60-70% LTV (vs 80-90% for constructed property) due to higher risk, (2) Construction timeline - Banks require construction to start within 2-3 years of land purchase, you need to show construction intent and approved building plans, (3) Approved layout - Land must be in approved layout (HMDA/GHMC approved), unapproved layouts may be rejected, (4) Documentation - Additional documents needed (plot sale deed, survey document, layout approval, approved building plans). Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What is LTV for land purchase home loan?",
      answer:
        "LTV (Loan-to-Value) for land purchase home loan: (1) Up to ₹30 Lakh land: 70% LTV (30% down payment), (2) ₹30-75 Lakh land: 65% LTV (35% down payment), (3) Above ₹75 Lakh land: 60% LTV (40% down payment). Lower LTV than constructed property (80-90%) due to higher risk. For example, ₹50 Lakh land: ₹32.5 Lakh loan (65% LTV), ₹17.5 Lakh down payment. LTV is based on land valuation (not sale price). Use our calculator to check exact LTV for your land.",
    },
    {
      question: "What is construction timeline requirement for land purchase loan?",
      answer:
        "Construction timeline requirement for land purchase loan: (1) Construction must start within 2-3 years of land purchase (varies by bank), (2) Construction intent - You need to show construction intent and approved building plans, (3) Building plans - Approved building plans (GHMC/HMDA) required, (4) Construction loan - After land purchase, you can apply for construction loan, (5) Combined loan - Some banks offer combined land + construction loan. If you don't start construction within timeline, bank may charge penalty or recall loan. Ensure you have construction plans before applying for land purchase loan.",
    },
    {
      question: "What documents are needed for land purchase home loan?",
      answer:
        "Documents needed: (1) Personal documents - Identity proof, address proof, income documents, CIBIL report, (2) Land documents - Plot sale deed (registered), Plot registration documents, Survey document, Layout approval (HMDA/GHMC), Property tax receipts, Encumbrance certificate, Approved layout plan, (3) Construction documents - Approved building plans (GHMC/HMDA) showing construction intent, Construction timeline, (4) Seller documents - Seller identity proof, Seller NOC, Seller title documents. More documentation than constructed property. Ensure all documents are in order.",
    },
    {
      question: "Do all banks offer loans for land purchase?",
      answer:
        "Most banks offer loans for land purchase, but terms vary: (1) Public sector banks (SBI, PNB) - Offer loans, may have stricter requirements, (2) Private banks (HDFC, ICICI, Axis) - Offer loans, flexible terms, (3) HFCs (LIC HFL) - Offer loans, good for land purchase. However, all banks require: (1) Approved layout (HMDA/GHMC approved), (2) Construction intent (approved building plans), (3) Construction timeline (2-3 years), (4) Complete documentation. Some banks may have restrictions on land location or size. Compare offers from 30+ banks through Credrace to find best terms.",
    },
    {
      question: "Can I get construction loan after land purchase loan?",
      answer:
        "Yes, you can get construction loan after land purchase loan. Process: (1) Complete land purchase - Pay off land purchase loan or use land as security, (2) Apply for construction loan - Apply for construction loan with land as security, (3) Combined loan - Some banks offer combined land + construction loan, (4) Higher LTV - Construction loan may get higher LTV (80-90%) as land + construction provides better security. However, you need to: (1) Have approved building plans, (2) Start construction within specified time (usually 2-3 years from land purchase), (3) Meet construction loan eligibility. Some banks offer plot + construction loan together. Check with individual banks.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan for Land Purchase?",
  ctaSub:
    "Check your eligibility for land purchase. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Open Plot Hyderabad", href: "/home-loan-for-open-plot-hyderabad" },
    { label: "Home Loan for Plot Purchase Hyderabad", href: "/home-loan-plot-purchase-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function HomeLoanForLandPurchaseHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
