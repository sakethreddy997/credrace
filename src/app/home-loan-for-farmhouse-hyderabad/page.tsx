import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Farmhouse in Hyderabad | Farmhouse Home Loan | Credrace",
  description:
    "Home loan for farmhouse in Hyderabad. Farmhouse home loan eligibility, LTV norms (60-70%), documentation, location restrictions. Compare offers from 30+ banks.",
  keywords: [
    "home loan for farmhouse hyderabad",
    "farmhouse home loan hyderabad",
    "farmhouse loan hyderabad",
    "home loan farmhouse hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-for-farmhouse-hyderabad` },
  openGraph: {
    title: "Home Loan for Farmhouse Hyderabad | Credrace",
    description: "Home loan for farmhouse in Hyderabad. Farmhouse home loan eligibility, LTV norms.",
    url: `${SITE_URL}/home-loan-for-farmhouse-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Farmhouse in Hyderabad | Farmhouse Home Loan | Credrace",
  description:
    "Home loan for farmhouse in Hyderabad. Farmhouse home loan eligibility, LTV norms (60-70%), documentation, location restrictions. Compare offers from 30+ banks.",
  url: "/home-loan-for-farmhouse-hyderabad",
  keywords: [
    "home loan for farmhouse hyderabad",
    "farmhouse home loan hyderabad",
    "farmhouse loan hyderabad",
  ],

  heroLabel: "Home Loan for Farmhouse",
  heroHeadline: "Home Loan for Farmhouse in Hyderabad",
  heroSub:
    "Get home loan for farmhouse in Hyderabad. Farmhouse home loan eligibility, LTV norms (60-70%), documentation, location restrictions. Compare offers from 30+ banks. Expert guidance for farmhouse loans.",
  stats: [
    { value: "60-70%", label: "LTV allowed" },
    { value: "Location", label: "Restrictions" },
    { value: "30+", label: "Banks compared" },
    { value: "Limited", label: "Lenders" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Getting a <strong>home loan for farmhouse in Hyderabad</strong> involves lower LTV (60-70%), location restrictions, and specific documentation. Farmhouse loans are more restrictive than residential loans due to location and usage. Understanding requirements helps you plan your purchase.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loans for farmhouses</strong> from 30+ banks in Hyderabad. Understand eligibility criteria, LTV norms, documentation requirements, location restrictions, and compare offers to find lenders willing to finance farmhouses.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Farmhouse Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Farmhouse</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Lower LTV</h3>
            <p class="text-gray-600">Farmhouse loans get lower LTV (60-70%) than residential loans (80-90%) due to location risk and limited resale market. Higher down payment required (30-40%).</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📍 Location Restrictions</h3>
            <p class="text-gray-600">Banks have location restrictions: Farmhouses in approved areas, within city limits or approved layouts. Remote locations may be rejected. Location is critical factor.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📋 Usage Restrictions</h3>
            <p class="text-gray-600">Farmhouses must be for residential use, not agricultural. Agricultural land is not eligible. Property must have residential building, not just land.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation</h3>
            <p class="text-gray-600">Additional documents needed: Location approval, land use certificate, residential building certificate, property tax receipts, encumbrance certificate. More documentation than regular residential.</p>
          </div>
        </div>
      </div>

      <!-- LTV for Farmhouse -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">LTV for Farmhouse</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Property Value</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">LTV Allowed</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Down Payment</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Example (₹1 Cr Farmhouse)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Up to ₹50 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">70%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">30%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹35 Lakh loan, ₹15 Lakh down</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹50 Lakh - ₹1 Cr</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">65%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">35%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹65 Lakh loan, ₹35 Lakh down</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Above ₹1 Cr</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">60%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">40%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹60 Lakh loan, ₹40 Lakh down</td>
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
      text: "Get loan for farmhouse - Understand eligibility and requirements",
    },
    {
      text: "Compare from 30+ banks - Find lenders willing to finance farmhouses",
    },
    {
      text: "Expert guidance - Our managers help with farmhouse loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Location restrictions - Understand location requirements",
    },
    {
      text: "Property valuation - Learn how valuation works for farmhouses",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for farmhouse in Hyderabad?",
      answer:
        "Yes, you can get home loan for farmhouse in Hyderabad, but with restrictions: (1) Lower LTV - 60-70% LTV (vs 80-90% for residential) due to location risk, (2) Location restrictions - Farmhouses in approved areas, within city limits or approved layouts, remote locations may be rejected, (3) Usage restrictions - Must be for residential use, not agricultural, property must have residential building, (4) Limited lenders - Not all banks offer farmhouse loans, some banks have restrictions, (5) Documentation - Additional documents needed (location approval, land use certificate, residential building certificate). Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What is LTV for farmhouse home loan?",
      answer:
        "LTV (Loan-to-Value) for farmhouse home loan: (1) Up to ₹50 Lakh property: 70% LTV (30% down payment), (2) ₹50 Lakh - ₹1 Cr property: 65% LTV (35% down payment), (3) Above ₹1 Cr property: 60% LTV (40% down payment). Lower LTV than residential property (80-90%) due to location risk and limited resale market. For example, ₹1 Cr farmhouse: ₹60-65 Lakh loan (60-65% LTV), ₹35-40 Lakh down payment. LTV is based on property valuation (not sale price). Use our calculator to check exact LTV for your farmhouse.",
    },
    {
      question: "What location restrictions apply to farmhouse loans?",
      answer:
        "Location restrictions for farmhouse loans: (1) Approved areas - Farmhouses in approved areas, within city limits or approved layouts, (2) Remote locations - Remote locations may be rejected, banks prefer accessible locations, (3) Infrastructure - Location must have basic infrastructure (roads, electricity, water), (4) Approved layouts - Farmhouses in approved layouts get better terms, (5) City limits - Some banks prefer farmhouses within city limits or approved extensions. Location is critical factor. Remote or inaccessible locations may face rejection. Check with individual banks for their location criteria.",
    },
    {
      question: "Do all banks offer loans for farmhouses?",
      answer:
        "No, not all banks offer loans for farmhouses. Banks by farmhouse loans: (1) Public sector banks (SBI, PNB) - May have restrictions, stricter location criteria, (2) Private banks (HDFC, ICICI, Axis) - Some offer loans, flexible location criteria, (3) HFCs (LIC HFL) - May offer loans, good for farmhouses. However, all banks require: (1) Approved location, (2) Residential use (not agricultural), (3) Residential building on property, (4) Complete documentation. Some banks may have restrictions on farmhouse location or size. Compare offers from 30+ banks through Credrace to find lenders willing to finance farmhouses.",
    },
    {
      question: "What documents are needed for farmhouse home loan?",
      answer:
        "Documents needed: (1) Personal documents - Identity proof, address proof, income documents, CIBIL report, (2) Property documents - Farmhouse sale deed (registered), Property registration documents, Location approval certificate, Land use certificate (residential use), Residential building certificate, Property tax receipts, Encumbrance certificate, (3) Seller documents - Seller identity proof, Seller NOC, Seller title documents, (4) Technical documents - Property valuation report (bank arranges), Property inspection report. More documentation than regular residential property. Ensure all documents are in order.",
    },
    {
      question: "Can I get loan for agricultural land as farmhouse?",
      answer:
        "No, you cannot get loan for agricultural land as farmhouse. Banks require: (1) Residential use - Property must be for residential use, not agricultural, (2) Residential building - Property must have residential building, not just land, (3) Land use certificate - Land use certificate must show residential use, not agricultural. Agricultural land is not eligible for home loan. However, if agricultural land is converted to residential use (with proper approvals), it may be eligible. Check with individual banks for their criteria. Generally, farmhouse loans are for residential farmhouses, not agricultural land.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan for Farmhouse?",
  ctaSub:
    "Check your eligibility for farmhouse. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Land Purchase Hyderabad", href: "/home-loan-for-land-purchase-hyderabad" },
    { label: "Home Loan for Open Plot Hyderabad", href: "/home-loan-for-open-plot-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function HomeLoanForFarmhouseHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
