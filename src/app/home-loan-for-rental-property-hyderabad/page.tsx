import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Rental Property in Hyderabad | Rental Property Home Loan | Credrace",
  description:
    "Home loan for rental property in Hyderabad. Rental property home loan eligibility, LTV norms (70-75%), rental income consideration, tax benefits. Compare offers from 30+ banks.",
  keywords: [
    "home loan for rental property hyderabad",
    "rental property home loan hyderabad",
    "rental property loan hyderabad",
    "home loan rental property hyderabad",
  ],
  openGraph: {
    title: "Home Loan for Rental Property Hyderabad | Credrace",
    description: "Home loan for rental property in Hyderabad. Rental property home loan eligibility, LTV norms.",
    url: `${SITE_URL}/home-loan-for-rental-property-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Rental Property in Hyderabad | Rental Property Home Loan | Credrace",
  description:
    "Home loan for rental property in Hyderabad. Rental property home loan eligibility, LTV norms (70-75%), rental income consideration, tax benefits. Compare offers from 30+ banks.",
  url: "/home-loan-for-rental-property-hyderabad",
  keywords: [
    "home loan for rental property hyderabad",
    "rental property home loan hyderabad",
    "rental property loan hyderabad",
  ],

  heroLabel: "Home Loan for Rental Property",
  heroHeadline: "Home Loan for Rental Property in Hyderabad",
  heroSub:
    "Get home loan for rental property in Hyderabad. Rental property home loan eligibility, LTV norms (70-75%), rental income consideration, tax benefits (full interest deduction). Compare offers from 30+ banks.",
  stats: [
    { value: "70-75%", label: "LTV allowed" },
    { value: "Rental", label: "Income considered" },
    { value: "30+", label: "Banks compared" },
    { value: "Tax", label: "Benefits" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Getting a <strong>home loan for rental property in Hyderabad</strong> involves lower LTV (70-75%), rental income consideration, and specific documentation. Rental property loans are for investment purposes. Understanding requirements helps you plan your investment.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loans for rental properties</strong> from 30+ banks in Hyderabad. Understand eligibility criteria, LTV norms, documentation requirements, rental income consideration, tax benefits, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Rental Property Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Rental Property</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Lower LTV</h3>
            <p class="text-gray-600">Rental property loans get lower LTV (70-75%) than self-occupied loans (80-90%) due to investment purpose. Higher down payment required (25-30%). Banks prefer lower LTV for rental properties.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Rental Income Consideration</h3>
            <p class="text-gray-600">Banks consider expected rental income: 70-80% of expected rent considered as additional income. Rental income helps increase loan eligibility. Existing rental agreements help.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Tax Benefits</h3>
            <p class="text-gray-600">Tax benefits for rental property: Full interest is deductible (no ₹2 Lakh limit), rental income is taxable, principal repayment deduction up to ₹1.5 Lakh under Section 80C. Better tax benefits than self-occupied.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation</h3>
            <p class="text-gray-600">Additional documents needed: Rental agreement (if property is already rented), expected rental income certificate, property location details, rental market analysis. More documentation than self-occupied.</p>
          </div>
        </div>
      </div>

      <!-- LTV Comparison -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">LTV: Self-Occupied vs Rental Property</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Loan Amount</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Self-Occupied LTV</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Rental Property LTV</th>
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
      text: "Get loan for rental property - Understand eligibility and requirements",
    },
    {
      text: "Compare from 30+ banks - Find lenders with best rental property loan terms",
    },
    {
      text: "Expert guidance - Our managers help with rental property loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Tax benefits - Full interest deduction for rental property",
    },
    {
      text: "Rental income - Understand how rental income affects eligibility",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for rental property in Hyderabad?",
      answer:
        "Yes, you can get home loan for rental property in Hyderabad. Banks offer rental property loans with some considerations: (1) Lower LTV - 70-75% LTV (vs 80-90% for self-occupied) due to investment purpose, (2) Rental income consideration - Banks consider expected rental income (70-80% of expected rent) as additional income, helps increase loan eligibility, (3) Tax benefits - Full interest is deductible (no ₹2 Lakh limit), rental income is taxable, (4) Documentation - Additional documents needed (rental agreement if already rented, expected rental income certificate, rental market analysis). Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What is LTV for rental property home loan?",
      answer:
        "LTV (Loan-to-Value) for rental property home loan: (1) Up to ₹30 Lakh loan: 75% LTV (25% down payment), (2) ₹30-75 Lakh loan: 70% LTV (30% down payment), (3) Above ₹75 Lakh loan: 70% LTV (30% down payment). Lower LTV than self-occupied property (80-90%) due to investment purpose. For example, ₹1 Cr rental property: ₹70 Lakh loan (70% LTV), ₹30 Lakh down payment (vs ₹75-80 Lakh loan for self-occupied). LTV is based on property valuation (not sale price). Use our calculator to check exact LTV for your rental property.",
    },
    {
      question: "How is rental income considered for rental property loan?",
      answer:
        "Rental income for rental property loan: (1) Expected rental income - Banks consider 70-80% of expected rent as additional income, (2) Existing rental - If property is already rented, banks consider actual rent (70-80% of rent), (3) Rental agreement - Valid rental agreement helps (registered preferred), (4) Market analysis - Banks may conduct rental market analysis to determine expected rent, (5) Loan eligibility - Rental income increases loan capacity. For example, ₹1 Lakh expected monthly rent: ₹70,000-80,000 considered as income, increases loan capacity. Rental income helps offset lower LTV for rental properties.",
    },
    {
      question: "What are tax benefits for rental property?",
      answer:
        "Tax benefits for rental property: (1) Interest deduction - Full interest is deductible (no ₹2 Lakh limit), unlike self-occupied property (₹2 Lakh limit), (2) Rental income - Rental income is taxable as income from house property, (3) Principal repayment - Principal repayment deduction up to ₹1.5 Lakh under Section 80C, (4) Net deduction - Interest minus rental income = Net deduction (if interest > rental income, net deduction is available). Better tax benefits than self-occupied property. Consult tax advisor for details.",
    },
    {
      question: "What documents are needed for rental property home loan?",
      answer:
        "Documents needed: (1) Personal documents - Identity proof, address proof, income documents, CIBIL report, (2) Property documents - Sale deed (registered), Property registration documents, Property tax receipts, (3) Rental documents - Rental agreement (if property is already rented), Rent receipts (if rented), Expected rental income certificate, Rental market analysis, (4) Property location details - Location details, rental market information. More documentation than self-occupied property. Ensure all documents are in order.",
    },
    {
      question: "Do all banks offer loans for rental property?",
      answer:
        "Yes, most banks offer loans for rental property, but terms vary: (1) Public sector banks (SBI, PNB) - Offer loans, may have stricter requirements, (2) Private banks (HDFC, ICICI, Axis) - Offer loans, flexible terms, (3) HFCs (LIC HFL) - Offer loans, good for rental properties. However, all banks require: (1) Lower LTV (70-75% vs 80-90% for self-occupied), (2) Rental income consideration (expected or actual), (3) Complete documentation. Rental property loans have stricter requirements than self-occupied loans. Compare offers from 30+ banks through Credrace to find best terms.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan for Rental Property?",
  ctaSub:
    "Check your eligibility for rental property. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Second Home Hyderabad", href: "/home-loan-for-second-home-hyderabad" },
    { label: "Home Loan Based on Rent Income Hyderabad", href: "/home-loan-based-on-rent-income-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function HomeLoanForRentalPropertyHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
