import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Under Construction Property in Hyderabad | Under Construction Home Loan | Credrace",
  description:
    "Home loan for under construction property in Hyderabad. Stage-wise disbursement, builder approval, documentation, LTV norms. Compare offers from 30+ banks.",
  keywords: [
    "home loan for under construction property hyderabad",
    "under construction home loan hyderabad",
    "home loan under construction hyderabad",
    "construction home loan hyderabad",
  ],
  openGraph: {
    title: "Home Loan for Under Construction Property Hyderabad | Credrace",
    description: "Home loan for under construction property in Hyderabad. Stage-wise disbursement, builder approval.",
    url: `${SITE_URL}/home-loan-for-under-construction-property-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Under Construction Property in Hyderabad | Under Construction Home Loan | Credrace",
  description:
    "Home loan for under construction property in Hyderabad. Stage-wise disbursement, builder approval, documentation, LTV norms. Compare offers from 30+ banks.",
  url: "/home-loan-for-under-construction-property-hyderabad",
  keywords: [
    "home loan for under construction property hyderabad",
    "under construction home loan hyderabad",
    "home loan under construction hyderabad",
  ],

  heroLabel: "Home Loan for Under Construction Property",
  heroHeadline: "Home Loan for Under Construction Property in Hyderabad",
  heroSub:
    "Get home loan for under construction property in Hyderabad. Stage-wise disbursement, builder approval, documentation requirements, LTV norms (80-90%). Compare offers from 30+ banks. Expert guidance for under construction properties.",
  stats: [
    { value: "80-90%", label: "LTV allowed" },
    { value: "Stage-wise", label: "Disbursement" },
    { value: "30+", label: "Banks compared" },
    { value: "Builder", label: "Approval" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Getting a <strong>home loan for under construction property in Hyderabad</strong> involves stage-wise disbursement, builder approval, and specific documentation. Banks disburse loan in stages as construction progresses, typically 80-90% LTV. Understanding the process helps you plan your purchase.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loans for under construction properties</strong> from 30+ banks in Hyderabad. Understand stage-wise disbursement, builder approval requirements, documentation, LTV norms, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Under Construction Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Under Construction Property</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏗️ Stage-wise Disbursement</h3>
            <p class="text-gray-600">Banks disburse loan in stages as construction progresses: Foundation (20%), Plinth (15%), Superstructure (40%), Finishing (20%), Final (5%). Disbursement depends on construction progress verified by bank.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📋 Builder Approval</h3>
            <p class="text-gray-600">Banks require builder to be approved/registered. Builder must have: RERA registration, clear title, approved plans, construction license. Banks verify builder credentials before approving loan.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 LTV Norms</h3>
            <p class="text-gray-600">LTV (Loan-to-Value) for under construction: Up to ₹30 Lakh: 90% LTV, ₹30-75 Lakh: 80% LTV, Above ₹75 Lakh: 75% LTV. Higher LTV for lower loan amounts. Down payment required accordingly.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation</h3>
            <p class="text-gray-600">Additional documents needed: Builder-buyer agreement, RERA registration, approved building plans, construction progress certificates, builder NOC. More documentation than ready property.</p>
          </div>
        </div>
      </div>

      <!-- Stage-wise Disbursement -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Stage-wise Disbursement Schedule</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Construction Stage</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Disbursement %</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Verification Required</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Example (₹1 Cr Loan)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Foundation Complete</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">20%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Foundation inspection</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹20 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Plinth Complete</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">15%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Plinth inspection</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹15 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Superstructure (50%)</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">20%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Construction progress</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹20 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Superstructure (100%)</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">20%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Superstructure completion</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹20 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Finishing Complete</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">20%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Finishing inspection</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹20 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Final (Possession)</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">5%</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Possession certificate</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹5 Lakh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Builder Requirements -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Builder Approval Requirements</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📋 RERA Registration</h3>
            <p class="text-sm text-gray-600 mb-3">Builder must be RERA registered. RERA registration ensures project is approved and builder is legitimate. Banks verify RERA registration before approving loan.</p>
            <p class="text-xs font-semibold text-emerald-600">Required: Mandatory</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">🏗️ Approved Building Plans</h3>
            <p class="text-sm text-gray-600 mb-3">Building plans must be approved by local authority (GHMC/HMDA). Banks verify plan approval before disbursing loan. Unapproved plans lead to rejection.</p>
            <p class="text-xs font-semibold text-emerald-600">Required: Mandatory</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📄 Builder-Buyer Agreement</h3>
            <p class="text-sm text-gray-600 mb-3">Registered builder-buyer agreement required. Agreement should specify construction timeline, payment schedule, possession date. Banks verify agreement before approval.</p>
            <p class="text-xs font-semibold text-emerald-600">Required: Mandatory</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">✅ Builder Track Record</h3>
            <p class="text-sm text-gray-600 mb-3">Banks prefer builders with good track record (completed projects, timely delivery). Established builders get faster approval. New builders may face scrutiny.</p>
            <p class="text-xs font-semibold text-emerald-600">Required: Preferred</p>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Stage-wise disbursement - Pay only as construction progresses",
    },
    {
      text: "Builder approval - Verified RERA registered builders",
    },
    {
      text: "Compare from 30+ banks - See offers from all lenders",
    },
    {
      text: "Expert guidance - Our managers help with under construction loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Flexible LTV - Up to 90% LTV for lower loan amounts",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan for under construction property in Hyderabad?",
      answer:
        "Yes, you can get home loan for under construction property in Hyderabad. Banks offer stage-wise disbursement loans for under construction properties. Process: (1) Builder must be RERA registered and approved by bank, (2) Loan is disbursed in stages as construction progresses (Foundation 20%, Plinth 15%, Superstructure 40%, Finishing 20%, Final 5%), (3) LTV norms: Up to ₹30 Lakh: 90% LTV, ₹30-75 Lakh: 80% LTV, Above ₹75 Lakh: 75% LTV, (4) Additional documents: Builder-buyer agreement, RERA registration, approved plans, construction certificates. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "How does stage-wise disbursement work?",
      answer:
        "Stage-wise disbursement works as follows: (1) Foundation complete (20%) - Bank verifies foundation completion, disburses 20% of loan, (2) Plinth complete (15%) - Bank verifies plinth completion, disburses 15% of loan, (3) Superstructure 50% (20%) - Bank verifies 50% construction, disburses 20% of loan, (4) Superstructure 100% (20%) - Bank verifies full superstructure, disburses 20% of loan, (5) Finishing complete (20%) - Bank verifies finishing, disburses 20% of loan, (6) Final/Possession (5%) - Bank verifies possession, disburses remaining 5%. Each stage requires bank inspection and verification. Disbursement happens only after verification.",
    },
    {
      question: "What documents are needed for under construction home loan?",
      answer:
        "Documents needed: (1) Personal documents - Identity proof, address proof, income documents, CIBIL report, (2) Property documents - Builder-buyer agreement (registered), RERA registration certificate, Approved building plans (GHMC/HMDA), Construction license, Property title documents, (3) Builder documents - Builder NOC, Builder track record, Builder financials (if required), (4) Construction documents - Construction progress certificates, Stage-wise completion certificates. More documents than ready property. Ensure all documents are in order.",
    },
    {
      question: "What is LTV for under construction property?",
      answer:
        "LTV (Loan-to-Value) for under construction property: (1) Up to ₹30 Lakh loan: 90% LTV (10% down payment), (2) ₹30-75 Lakh loan: 80% LTV (20% down payment), (3) Above ₹75 Lakh loan: 75% LTV (25% down payment). LTV is based on property value or agreement value (whichever is lower). For example, ₹1 Cr property: ₹75 Lakh loan (75% LTV), ₹25 Lakh down payment. Higher LTV for lower loan amounts. Use our calculator to check exact LTV for your property.",
    },
    {
      question: "Do all banks offer loans for under construction property?",
      answer:
        "Most banks offer loans for under construction property, but requirements vary: (1) Public sector banks (SBI, PNB) - Offer loans, may have stricter builder approval, (2) Private banks (HDFC, ICICI, Axis) - Offer loans, flexible builder approval, (3) HFCs (LIC HFL) - Offer loans, good for under construction. However, all banks require: (1) Builder RERA registration, (2) Approved building plans, (3) Builder-buyer agreement, (4) Builder approval. Some banks may have builder panel (pre-approved builders). Compare offers from 30+ banks through Credrace to find best terms.",
    },
    {
      question: "What if builder delays construction?",
      answer:
        "If builder delays construction: (1) Loan disbursement pauses - Bank doesn't disburse until construction progresses, (2) Interest on disbursed amount - You pay interest only on disbursed amount, not full loan, (3) Timeline extension - Some banks may extend loan timeline if delay is reasonable, (4) Builder liability - Builder is responsible for delays per agreement, (5) RERA protection - RERA protects buyers from builder delays. However, delays don't affect your loan eligibility. You only pay interest on disbursed amount. If delay is excessive, you may need to renegotiate with builder. Check builder track record before buying.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan for Under Construction Property?",
  ctaSub:
    "Check your eligibility for under construction property. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Construction Stage-wise Home Loan Hyderabad", href: "/construction-stage-wise-home-loan-hyderabad" },
    { label: "Home Loan for Ready to Move Property Hyderabad", href: "/home-loan-for-ready-to-move-property-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function HomeLoanForUnderConstructionPropertyHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
