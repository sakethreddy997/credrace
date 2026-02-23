import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Apartment in Hyderabad | Apartment Home Loan | Credrace",
  description:
    "Home loan for apartment in Hyderabad. Apartment home loan eligibility, LTV norms (80-90%), documentation, builder approval. Compare offers from 30+ banks.",
  keywords: [
    "home loan for apartment hyderabad",
    "apartment home loan hyderabad",
    "apartment loan hyderabad",
    "home loan apartment hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-for-apartment-hyderabad` },
  openGraph: {
    title: "Home Loan for Apartment Hyderabad | Credrace",
    description: "Home loan for apartment in Hyderabad. Apartment home loan eligibility, LTV norms.",
    url: `${SITE_URL}/home-loan-for-apartment-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Apartment in Hyderabad | Apartment Home Loan | Credrace",
  description:
    "Home loan for apartment in Hyderabad. Apartment home loan eligibility, LTV norms (80-90%), documentation, builder approval. Compare offers from 30+ banks.",
  url: "/home-loan-for-apartment-hyderabad",
  keywords: [
    "home loan for apartment hyderabad",
    "apartment home loan hyderabad",
    "apartment loan hyderabad",
  ],

  heroLabel: "Home Loan for Apartment",
  heroHeadline: "Home Loan for Apartment in Hyderabad",
  heroSub:
    "Get home loan for apartment in Hyderabad. Apartment home loan eligibility, LTV norms (80-90%), documentation, builder approval. Compare offers from 30+ banks. Expert guidance for apartment loans.",
  stats: [
    { value: "80-90%", label: "LTV allowed" },
    { value: "Standard", label: "Process" },
    { value: "30+", label: "Banks compared" },
    { value: "Faster", label: "Approval" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Getting a <strong>home loan for apartment in Hyderabad</strong> is the most common type of home loan. Banks offer favorable terms for apartments: Higher LTV (80-90%), faster approval, standard documentation. Understanding requirements helps you plan your purchase.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loans for apartments</strong> from 30+ banks in Hyderabad. Understand eligibility criteria, LTV norms, documentation requirements, builder approval, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Apartment Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Apartment</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Higher LTV</h3>
            <p class="text-gray-600">Apartments get higher LTV (80-90%) than villas/independent houses. Up to ₹30 Lakh: 90% LTV, ₹30-75 Lakh: 80% LTV, Above ₹75 Lakh: 75% LTV. Lower down payment required.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">⚡ Faster Approval</h3>
            <p class="text-gray-600">Apartment loans get faster approval (7-15 days) due to standardized process. Banks have experience with apartments, making approval smoother than other property types.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📋 Builder Approval</h3>
            <p class="text-gray-600">Builder must be RERA registered and approved by bank. Established builders in gated communities are usually pre-approved. New builders may need individual approval.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Standard Documentation</h3>
            <p class="text-gray-600">Standard documents: Sale deed, property registration, builder-buyer agreement, RERA registration, approved plans, possession certificate, NOC from society.</p>
          </div>
        </div>
      </div>

      <!-- LTV by Loan Amount -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">LTV for Apartment by Loan Amount</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Loan Amount</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">LTV Allowed</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Down Payment</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Example (₹1 Cr Apartment)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Up to ₹30 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">90%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">10%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹27 Lakh loan, ₹3 Lakh down</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹30-75 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">80%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">20%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹60 Lakh loan, ₹15 Lakh down</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Above ₹75 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">75%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">25%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹75 Lakh loan, ₹25 Lakh down</td>
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
      text: "Higher LTV - Get up to 90% LTV for apartments",
    },
    {
      text: "Faster approval - 7-15 days processing",
    },
    {
      text: "Compare from 30+ banks - See offers from all lenders",
    },
    {
      text: "Expert guidance - Our managers help with apartment loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Standard process - Well-established process for apartments",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for apartment in Hyderabad?",
      answer:
        "Yes, you can get home loan for apartment in Hyderabad. Apartments are the most common property type for home loans. Banks offer favorable terms: (1) Higher LTV - Up to 90% LTV for loans up to ₹30 Lakh, 80% for ₹30-75 Lakh, 75% for above ₹75 Lakh, (2) Faster approval - 7-15 days processing due to standardized process, (3) Builder approval - Builder must be RERA registered, (4) Standard documentation - Sale deed, property registration, builder-buyer agreement, RERA registration, approved plans, possession certificate. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What is LTV for apartment home loan?",
      answer:
        "LTV (Loan-to-Value) for apartment home loan: (1) Up to ₹30 Lakh loan: 90% LTV (10% down payment), (2) ₹30-75 Lakh loan: 80% LTV (20% down payment), (3) Above ₹75 Lakh loan: 75% LTV (25% down payment). Higher LTV than villas/independent houses due to lower property value. For example, ₹1 Cr apartment: ₹75 Lakh loan (75% LTV), ₹25 Lakh down payment. LTV is based on property valuation (not sale price). Use our calculator to check exact LTV for your apartment.",
    },
    {
      question: "What documents are needed for apartment home loan?",
      answer:
        "Documents needed: (1) Personal documents - Identity proof, address proof, income documents, CIBIL report, (2) Property documents - Sale deed (registered), Property registration documents, Builder-buyer agreement (for new apartments), RERA registration certificate, Approved building plans, Possession certificate, Property tax receipts, (3) Society documents - NOC from society, Society registration certificate, (4) Builder documents - Builder NOC (for new apartments), Builder track record. Ensure all documents are in order.",
    },
    {
      question: "Do all banks offer loans for apartments?",
      answer:
        "Yes, all banks offer loans for apartments. Apartments are the most common property type and all banks have standardized processes: (1) Public sector banks (SBI, PNB) - Offer loans, competitive rates, (2) Private banks (HDFC, ICICI, Axis) - Offer loans, faster processing, flexible terms, (3) HFCs (LIC HFL) - Offer loans, good rates. All banks follow similar process: Application, valuation, legal verification, approval, disbursement. Compare offers from 30+ banks through Credrace to find best rates and terms.",
    },
    {
      question: "Can I get loan for under construction apartment?",
      answer:
        "Yes, you can get loan for under construction apartment. Process involves stage-wise disbursement: (1) Foundation complete (20%), (2) Plinth complete (15%), (3) Superstructure 50% (20%), (4) Superstructure 100% (20%), (5) Finishing complete (20%), (6) Final/Possession (5%). Builder must be RERA registered. LTV is similar to ready apartment (80-90% depending on loan amount). Additional documents: Builder-buyer agreement, RERA registration, construction certificates. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "Is apartment loan different from other property loans?",
      answer:
        "Apartment loan is similar to other property loans, but with some advantages: (1) Higher LTV - 80-90% vs 75-80% for villas/independent houses, (2) Faster approval - 7-15 days vs 15-30 days for other properties, (3) Standardized process - Banks have more experience with apartments, (4) Builder approval - Easier for established builders in gated communities. Process is similar: Application, valuation, legal verification, approval, disbursement. Apartments are preferred by banks due to lower risk and standardized valuation.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan for Apartment?",
  ctaSub:
    "Check your eligibility for apartment. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Villa Hyderabad", href: "/home-loan-for-villa-hyderabad" },
    { label: "Home Loan for Gated Community Hyderabad", href: "/home-loan-for-gated-community-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function HomeLoanForApartmentHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
