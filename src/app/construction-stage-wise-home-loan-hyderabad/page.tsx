import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Construction Stage-wise Home Loan in Hyderabad | Stage Disbursement | Credrace",
  description:
    "Construction stage-wise home loan in Hyderabad. Stage-wise disbursement schedule, verification process, documentation. Compare offers from 30+ banks.",
  keywords: [
    "construction stage wise home loan hyderabad",
    "stage wise home loan hyderabad",
    "home loan stage disbursement hyderabad",
    "construction loan stages hyderabad",
  ],
  openGraph: {
    title: "Construction Stage-wise Home Loan Hyderabad | Credrace",
    description: "Construction stage-wise home loan in Hyderabad. Stage-wise disbursement schedule.",
    url: `${SITE_URL}/construction-stage-wise-home-loan-hyderabad`,
  },
};

const pageData = {
  title: "Construction Stage-wise Home Loan in Hyderabad | Stage Disbursement | Credrace",
  description:
    "Construction stage-wise home loan in Hyderabad. Stage-wise disbursement schedule, verification process, documentation. Compare offers from 30+ banks.",
  url: "/construction-stage-wise-home-loan-hyderabad",
  keywords: [
    "construction stage wise home loan hyderabad",
    "stage wise home loan hyderabad",
    "home loan stage disbursement hyderabad",
  ],

  heroLabel: "Construction Stage-wise Home Loan",
  heroHeadline: "Construction Stage-wise Home Loan in Hyderabad",
  heroSub:
    "Understand construction stage-wise home loan disbursement in Hyderabad. Stage-wise disbursement schedule, verification process, documentation requirements. Compare offers from 30+ banks. Expert guidance for stage-wise loans.",
  stats: [
    { value: "6", label: "Stages" },
    { value: "Verified", label: "Progress" },
    { value: "30+", label: "Banks compared" },
    { value: "Stage-wise", label: "Disbursement" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      <strong>Construction stage-wise home loan in Hyderabad</strong> involves disbursing loan in stages as construction progresses. Banks disburse loan based on construction completion milestones, typically 6 stages. Understanding the process helps you plan your construction and payments.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>understand stage-wise home loan disbursement</strong> from 30+ banks in Hyderabad. Learn disbursement schedule, verification process, documentation requirements, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Stage-wise Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Construction Stage-wise Disbursement</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏗️ 6 Stages</h3>
            <p class="text-gray-600">Loan is disbursed in 6 stages: Foundation (20%), Plinth (15%), Superstructure 50% (20%), Superstructure 100% (20%), Finishing (20%), Final (5%). Each stage requires bank verification.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Verification Process</h3>
            <p class="text-gray-600">Bank verifies construction progress at each stage: Physical inspection, construction certificates, builder reports. Disbursement happens only after verification. Verification takes 3-5 days per stage.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Interest Payment</h3>
            <p class="text-gray-600">You pay interest only on disbursed amount, not full loan. For example, if ₹20 Lakh is disbursed out of ₹1 Cr loan, you pay interest only on ₹20 Lakh. This reduces interest burden during construction.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation</h3>
            <p class="text-gray-600">Each stage requires: Construction progress certificate, builder report, bank inspection report, photographs. Builder must provide certificates at each stage for disbursement.</p>
          </div>
        </div>
      </div>

      <!-- Detailed Stage Schedule -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Detailed Stage-wise Disbursement Schedule</h2>
        <div class="space-y-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span class="text-emerald-600 font-bold text-sm">1</span>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Foundation Complete (20%)</h3>
                <p class="text-sm text-gray-600 mb-2">Bank verifies foundation completion through inspection. Builder provides foundation completion certificate. Bank disburses 20% of loan amount.</p>
                <p class="text-xs text-gray-500">Verification: Foundation inspection, completion certificate</p>
              </div>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span class="text-emerald-600 font-bold text-sm">2</span>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Plinth Complete (15%)</h3>
                <p class="text-sm text-gray-600 mb-2">Bank verifies plinth completion through inspection. Builder provides plinth completion certificate. Bank disburses 15% of loan amount.</p>
                <p class="text-xs text-gray-500">Verification: Plinth inspection, completion certificate</p>
              </div>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span class="text-emerald-600 font-bold text-sm">3</span>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Superstructure 50% (20%)</h3>
                <p class="text-sm text-gray-600 mb-2">Bank verifies 50% superstructure completion through inspection. Builder provides progress certificate. Bank disburses 20% of loan amount.</p>
                <p class="text-xs text-gray-500">Verification: Construction progress inspection, progress certificate</p>
              </div>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span class="text-emerald-600 font-bold text-sm">4</span>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Superstructure 100% (20%)</h3>
                <p class="text-sm text-gray-600 mb-2">Bank verifies full superstructure completion through inspection. Builder provides completion certificate. Bank disburses 20% of loan amount.</p>
                <p class="text-xs text-gray-500">Verification: Superstructure completion inspection, completion certificate</p>
              </div>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span class="text-emerald-600 font-bold text-sm">5</span>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Finishing Complete (20%)</h3>
                <p class="text-sm text-gray-600 mb-2">Bank verifies finishing completion through inspection. Builder provides finishing completion certificate. Bank disburses 20% of loan amount.</p>
                <p class="text-xs text-gray-500">Verification: Finishing inspection, completion certificate</p>
              </div>
            </div>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span class="text-emerald-600 font-bold text-sm">6</span>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Final/Possession (5%)</h3>
                <p class="text-sm text-gray-600 mb-2">Bank verifies possession through inspection. Builder provides possession certificate. Bank disburses remaining 5% of loan amount.</p>
                <p class="text-xs text-gray-500">Verification: Possession inspection, possession certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interest Calculation -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Interest Payment During Construction</h3>
        <div class="space-y-4">
          <div class="p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">Key Point: Interest Only on Disbursed Amount</p>
            <p class="text-sm text-gray-600 mb-2">You pay interest only on amount disbursed, not full loan. For example:</p>
            <ul class="text-sm text-gray-600 space-y-1 ml-4">
              <li>• ₹1 Cr loan approved</li>
              <li>• Foundation complete: ₹20 Lakh disbursed → Interest on ₹20 Lakh only</li>
              <li>• Plinth complete: ₹15 Lakh more disbursed → Interest on ₹35 Lakh total</li>
              <li>• And so on...</li>
            </ul>
            <p class="text-xs text-gray-500 mt-2">This reduces interest burden during construction period.</p>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Understand stage-wise disbursement - Learn how loan is disbursed in stages",
    },
    {
      text: "Interest on disbursed amount - Pay interest only on amount disbursed",
    },
    {
      text: "Compare from 30+ banks - See stage-wise disbursement schedules",
    },
    {
      text: "Expert guidance - Our managers help with stage-wise loans",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Verification process - Understand verification at each stage",
    },
  ],

  faqs: [
    {
      question: "How does construction stage-wise home loan work?",
      answer:
        "Construction stage-wise home loan works as follows: (1) Loan approval - Bank approves full loan amount based on property value and eligibility, (2) Stage-wise disbursement - Loan is disbursed in 6 stages as construction progresses: Foundation (20%), Plinth (15%), Superstructure 50% (20%), Superstructure 100% (20%), Finishing (20%), Final (5%), (3) Verification - Bank verifies construction progress at each stage through inspection, (4) Disbursement - Bank disburses stage amount only after verification, (5) Interest payment - You pay interest only on disbursed amount, not full loan. This reduces interest burden during construction. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "What are the stages of construction loan disbursement?",
      answer:
        "Stages of construction loan disbursement: (1) Foundation complete (20%) - Foundation inspection, completion certificate, (2) Plinth complete (15%) - Plinth inspection, completion certificate, (3) Superstructure 50% (20%) - Construction progress inspection, progress certificate, (4) Superstructure 100% (20%) - Superstructure completion inspection, completion certificate, (5) Finishing complete (20%) - Finishing inspection, completion certificate, (6) Final/Possession (5%) - Possession inspection, possession certificate. Each stage requires bank verification before disbursement. Verification takes 3-5 days per stage.",
    },
    {
      question: "How is interest calculated for stage-wise loan?",
      answer:
        "Interest for stage-wise loan is calculated only on disbursed amount, not full loan: (1) Foundation complete - ₹20 Lakh disbursed → Interest on ₹20 Lakh only, (2) Plinth complete - ₹15 Lakh more disbursed → Interest on ₹35 Lakh total, (3) Superstructure 50% - ₹20 Lakh more disbursed → Interest on ₹55 Lakh total, (4) And so on. This reduces interest burden during construction. For example, ₹1 Cr loan at 8.25%: If ₹20 Lakh is disbursed, interest is ₹13,750/month (on ₹20 Lakh), not ₹68,750/month (on ₹1 Cr). Interest increases as more amount is disbursed.",
    },
    {
      question: "What documents are needed for each stage?",
      answer:
        "Documents needed for each stage: (1) Construction progress certificate - Builder provides certificate showing stage completion, (2) Builder report - Builder provides report on construction progress, (3) Bank inspection report - Bank's inspection report verifying stage completion, (4) Photographs - Construction photographs showing stage completion, (5) Builder NOC - Builder NOC for disbursement (if required). Builder must provide certificates at each stage for disbursement. Bank verifies documents and conducts physical inspection before disbursing.",
    },
    {
      question: "What if construction is delayed?",
      answer:
        "If construction is delayed: (1) Loan disbursement pauses - Bank doesn't disburse until construction progresses to next stage, (2) Interest on disbursed amount - You pay interest only on disbursed amount, not full loan, (3) Timeline extension - Some banks may extend loan timeline if delay is reasonable, (4) Builder liability - Builder is responsible for delays per agreement, (5) RERA protection - RERA protects buyers from builder delays. However, delays don't affect your loan eligibility. You only pay interest on disbursed amount. If delay is excessive, you may need to renegotiate with builder.",
    },
    {
      question: "Do all banks follow same stage-wise schedule?",
      answer:
        "Most banks follow similar stage-wise schedule, but percentages may vary slightly: (1) Foundation (15-20%), (2) Plinth (10-15%), (3) Superstructure (40-50% total, split into stages), (4) Finishing (15-20%), (5) Final (5-10%). Some banks may have more stages (7-8 stages) or different percentages. However, total disbursement is 100% across all stages. Check with individual banks for their specific schedule. Compare offers from 30+ banks through Credrace to find best stage-wise schedule.",
    },
  ],

  ctaHeadline: "Ready to Get Stage-wise Home Loan?",
  ctaSub:
    "Check your eligibility for under construction property. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Under Construction Property Hyderabad", href: "/home-loan-for-under-construction-property-hyderabad" },
    { label: "Home Loan for Ready to Move Property Hyderabad", href: "/home-loan-for-ready-to-move-property-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Documents Hyderabad", href: "/home-loan-documents-hyderabad" },
  ],
};

export default function ConstructionStageWiseHomeLoanHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
