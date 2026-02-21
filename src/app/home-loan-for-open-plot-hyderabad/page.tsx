import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Open Plot in Hyderabad | Plot Home Loan | Credrace",
  description:
    "Home loan for open plot in Hyderabad. Plot home loan eligibility, LTV norms (60-70%), documentation, title verification. Compare offers from 30+ banks.",
  keywords: [
    "home loan for open plot hyderabad",
    "plot home loan hyderabad",
    "open plot loan hyderabad",
    "home loan plot hyderabad",
  ],
  openGraph: {
    title: "Home Loan for Open Plot Hyderabad | Credrace",
    description: "Home loan for open plot in Hyderabad. Plot home loan eligibility, LTV norms.",
    url: `${SITE_URL}/home-loan-for-open-plot-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Open Plot in Hyderabad | Plot Home Loan | Credrace",
  description:
    "Home loan for open plot in Hyderabad. Plot home loan eligibility, LTV norms (60-70%), documentation, title verification. Compare offers from 30+ banks.",
  url: "/home-loan-for-open-plot-hyderabad",
  keywords: [
    "home loan for open plot hyderabad",
    "plot home loan hyderabad",
    "open plot loan hyderabad",
  ],

  heroLabel: "Home Loan for Open Plot",
  heroHeadline: "Home Loan for Open Plot in Hyderabad",
  heroSub:
    "Get home loan for open plot in Hyderabad. Plot home loan eligibility, LTV norms (60-70%), documentation, title verification. Compare offers from 30+ banks. Expert guidance for plot loans.",
  stats: [
    { value: "60-70%", label: "LTV allowed" },
    { value: "Title", label: "Verification" },
    { value: "30+", label: "Banks compared" },
    { value: "Standard", label: "Process" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Getting a <strong>home loan for open plot in Hyderabad</strong> involves lower LTV (60-70%), thorough title verification, and specific documentation. Plot loans are for land purchase only, not construction. Understanding requirements helps you plan your purchase.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loans for open plots</strong> from 30+ banks in Hyderabad. Understand eligibility criteria, LTV norms, documentation requirements, title verification, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Plot Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Open Plot</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Lower LTV</h3>
            <p class="text-gray-600">Plot loans get lower LTV (60-70%) than constructed property loans (80-90%) due to higher risk. Higher down payment required (30-40%). Banks prefer lower LTV for land-only loans.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📋 Title Verification</h3>
            <p class="text-gray-600">Banks conduct thorough title verification: Check ownership, encumbrances, disputes, legal issues, survey numbers, boundaries. Title verification is critical for plot loans.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏠 Plot Valuation</h3>
            <p class="text-gray-600">Banks conduct plot valuation: Location, size, approved layout, infrastructure, market rates. Valuation may be more conservative than constructed property.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation</h3>
            <p class="text-gray-600">Additional documents needed: Plot sale deed, survey document, layout approval, property tax receipts, encumbrance certificate, approved layout plan. More documentation than constructed property.</p>
          </div>
        </div>
      </div>

      <!-- LTV for Plot -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">LTV for Open Plot</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Plot Value</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">LTV Allowed</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Down Payment</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Example (₹50 Lakh Plot)</th>
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
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹45 Lakh loan, ₹30 Lakh down</td>
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
      text: "Get loan for open plot - Understand eligibility and requirements",
    },
    {
      text: "Compare from 30+ banks - Find lenders with best plot loan terms",
    },
    {
      text: "Expert guidance - Our managers help with plot loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Title verification - Understand title requirements",
    },
    {
      text: "Plot valuation - Learn how valuation works for plots",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for open plot in Hyderabad?",
      answer:
        "Yes, you can get home loan for open plot in Hyderabad. Banks offer plot loans (land purchase loans) with some considerations: (1) Lower LTV - 60-70% LTV (vs 80-90% for constructed property) due to higher risk, (2) Title verification - Banks conduct thorough title verification (ownership, encumbrances, disputes, survey numbers), (3) Plot valuation - Banks conduct plot valuation (location, size, approved layout, infrastructure), (4) Documentation - Additional documents needed (plot sale deed, survey document, layout approval, encumbrance certificate). Plot loans are for land purchase only, not construction. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What is LTV for open plot home loan?",
      answer:
        "LTV (Loan-to-Value) for open plot home loan: (1) Up to ₹30 Lakh plot: 70% LTV (30% down payment), (2) ₹30-75 Lakh plot: 65% LTV (35% down payment), (3) Above ₹75 Lakh plot: 60% LTV (40% down payment). Lower LTV than constructed property (80-90%) due to higher risk. For example, ₹50 Lakh plot: ₹32.5 Lakh loan (65% LTV), ₹17.5 Lakh down payment. LTV is based on plot valuation (not sale price). Use our calculator to check exact LTV for your plot.",
    },
    {
      question: "What documents are needed for plot home loan?",
      answer:
        "Documents needed: (1) Personal documents - Identity proof, address proof, income documents, CIBIL report, (2) Plot documents - Plot sale deed (registered), Plot registration documents, Survey document, Layout approval (HMDA/GHMC), Property tax receipts, Encumbrance certificate, Approved layout plan, (3) Seller documents - Seller identity proof, Seller NOC, Seller title documents, (4) Technical documents - Plot valuation report (bank arranges), Plot inspection report. More documentation than constructed property. Ensure all documents are in order.",
    },
    {
      question: "Why is LTV lower for plot loans?",
      answer:
        "LTV is lower for plot loans due to: (1) Higher risk - Land-only loans have higher risk than constructed property loans, (2) No security - No building structure as security, only land, (3) Valuation risk - Plot valuation may have more variance than constructed property, (4) Resale risk - Plots may be harder to resell than constructed property. Banks mitigate risk by requiring higher down payment (lower LTV). However, plot loans allow you to purchase land and construct later with construction loan.",
    },
    {
      question: "Do all banks offer loans for open plots?",
      answer:
        "Most banks offer loans for open plots, but terms vary: (1) Public sector banks (SBI, PNB) - Offer loans, may have stricter requirements, (2) Private banks (HDFC, ICICI, Axis) - Offer loans, flexible terms, (3) HFCs (LIC HFL) - Offer loans, good for plot loans. However, all banks require: (1) Clear title (no encumbrances, disputes), (2) Approved layout, (3) Plot valuation, (4) Complete documentation. Some banks may have restrictions on plot location or size. Compare offers from 30+ banks through Credrace to find best terms.",
    },
    {
      question: "Can I get construction loan after plot loan?",
      answer:
        "Yes, you can get construction loan after plot loan. Process: (1) Complete plot loan - Pay off plot loan or use plot as security, (2) Apply for construction loan - Apply for construction loan with plot as security, (3) Combined loan - Some banks offer combined plot + construction loan, (4) Higher LTV - Construction loan may get higher LTV (80-90%) as plot + construction provides better security. However, you need to: (1) Have approved building plans, (2) Start construction within specified time (usually 2-3 years), (3) Meet construction loan eligibility. Some banks offer plot + construction loan together. Check with individual banks.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan for Open Plot?",
  ctaSub:
    "Check your eligibility for open plot. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Land Purchase Hyderabad", href: "/home-loan-for-land-purchase-hyderabad" },
    { label: "Home Loan for Plot Purchase Hyderabad", href: "/home-loan-plot-purchase-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function HomeLoanForOpenPlotHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
