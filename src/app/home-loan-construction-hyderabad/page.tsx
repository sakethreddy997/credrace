import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Construction in Hyderabad | Construction Loan | Best Rates | Credrace",
  description:
    "Get home loan for construction in Hyderabad. Special construction loans available. Compare rates from 30+ banks. Interest rates starting 8.25%, loan up to ₹5 Cr. Disbursement in stages.",
  keywords: [
    "home loan for construction hyderabad",
    "construction loan hyderabad",
    "home construction loan hyderabad",
    "home loan build house hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-construction-hyderabad` },
  openGraph: {
    title: "Home Loan for Construction Hyderabad | Credrace",
    description: "Home loan for construction in Hyderabad. Special construction loans. Compare 30+ banks.",
    url: `${SITE_URL}/home-loan-construction-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Construction in Hyderabad | Construction Loan | Best Rates | Credrace",
  description:
    "Get home loan for construction in Hyderabad. Special construction loans available. Compare rates from 30+ banks. Interest rates starting 8.25%.",
  url: "/home-loan-construction-hyderabad",
  keywords: [
    "home loan for construction hyderabad",
    "construction loan hyderabad",
    "home construction loan hyderabad",
  ],

  heroLabel: "Home Loan for Construction",
  heroHeadline: "Home Loan for Construction in Hyderabad",
  heroSub:
    "Get home loan for construction in Hyderabad. Special construction loans available with competitive rates. Compare offers from 30+ banks. Interest rates starting 8.25%, loan up to ₹5 Cr. Disbursement in stages based on construction progress.",
  stats: [
    { value: "8.25%", label: "Starting interest rate" },
    { value: "₹5 Cr", label: "Maximum loan amount" },
    { value: "Staged", label: "Disbursement" },
    { value: "30+", label: "Banks compared" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Planning to <strong>construct your own house in Hyderabad</strong>? You can get a home loan specifically for construction. Construction loans work differently than regular home loans - disbursement happens in stages based on construction progress.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>compare construction loan offers from 30+ banks</strong> in Hyderabad. Get the best rates, understand disbursement process, and apply online with dedicated support.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Construction Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Understanding Construction Loans</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏗️ What is Construction Loan?</h3>
            <p class="text-gray-600">Construction loan is a home loan variant for building a house on your own plot. Disbursement happens in stages (typically 4-6 stages) based on construction progress, not as lump sum.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Staged Disbursement</h3>
            <p class="text-gray-600">Loan is disbursed in stages: Foundation (20-25%), Superstructure (30-40%), Roofing (20-25%), Finishing (10-15%). Each stage requires inspection and approval.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Interest During Construction</h3>
            <p class="text-gray-600">Interest is charged only on disbursed amount, not entire loan. You pay interest during construction period. Principal repayment starts after construction completion.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📈 LTV Ratio</h3>
            <p class="text-gray-600">Construction loans typically offer 75-80% LTV of total project cost (land + construction). You need to pay 20-25% from your own funds.</p>
          </div>
        </div>
      </div>

      <!-- Disbursement Process -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Construction Loan Disbursement Process</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">1</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Loan Sanction</h4>
              <p class="text-sm text-gray-600">Bank sanctions loan amount based on project cost and your eligibility. You get sanction letter with approved amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">2</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Foundation Stage (20-25%)</h4>
              <p class="text-sm text-gray-600">First disbursement after foundation completion. Bank inspects and releases 20-25% of loan amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">3</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Superstructure Stage (30-40%)</h4>
              <p class="text-sm text-gray-600">Second disbursement after walls and structure completion. Bank inspects and releases 30-40% of loan amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">4</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Roofing Stage (20-25%)</h4>
              <p class="text-sm text-gray-600">Third disbursement after roof completion. Bank inspects and releases 20-25% of loan amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">5</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Finishing Stage (10-15%)</h4>
              <p class="text-sm text-gray-600">Final disbursement after completion of finishing work. Bank inspects and releases remaining 10-15% of loan amount.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Documents -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Documents Required</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Plot & Construction</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Plot title deed</li>
              <li>• Approved building plan</li>
              <li>• Construction estimate</li>
              <li>• NOC from authorities</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Personal & Income</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Identity & address proof</li>
              <li>• Income proof (salary slips, ITR)</li>
              <li>• Bank statements</li>
              <li>• Architect certificate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Compare construction loan offers from 30+ banks - Get the best deal",
    },
    {
      text: "Staged disbursement - Pay interest only on disbursed amount",
    },
    {
      text: "Competitive rates - Starting from 8.25% per annum",
    },
    {
      text: "Flexible terms - Up to 30 years tenure after construction",
    },
    {
      text: "Expert guidance - Our managers help you understand disbursement process",
    },
    {
      text: "Dedicated support - Personal manager guides you through entire process",
    },
  ],

  faqs: [
    {
      question: "How does construction loan disbursement work?",
      answer:
        "Construction loan is disbursed in stages based on construction progress: (1) Foundation (20-25%), (2) Superstructure (30-40%), (3) Roofing (20-25%), (4) Finishing (10-15%). Bank inspects each stage before releasing funds. Interest is charged only on disbursed amount, not entire loan. Principal repayment starts after construction completion.",
    },
    {
      question: "What is the interest rate for construction loan?",
      answer:
        "Construction loan interest rates start from 8.25% per annum for prime borrowers with CIBIL score 750+. Rates range from 8.25% to 9.75% depending on your credit score, income, project cost, and lender. Rates are similar to regular home loans. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "How much loan can I get for construction?",
      answer:
        "You can get 75-80% of total project cost (land + construction) as loan, subject to eligibility. For example, if total project cost is ₹1 Crore (₹30 Lakh land + ₹70 Lakh construction), you can get ₹75-80 Lakh as loan and need to pay ₹20-25 Lakh from your own funds. Loan amount depends on your income, existing obligations, and project cost.",
    },
    {
      question: "When do I start paying EMI for construction loan?",
      answer:
        "During construction period, you pay only interest on disbursed amount (not full EMI). Principal repayment (full EMI) starts after construction completion and loan conversion to regular home loan. Some banks offer moratorium period (interest-only) during construction. Check with your bank for specific terms.",
    },
    {
      question: "What documents are required for construction loan?",
      answer:
        "Documents required: Plot title deed, approved building plan from local authorities, construction estimate from architect/engineer, NOC from authorities, identity proof (Aadhaar, PAN), address proof, income proof (salary slips, Form 16, or ITR), bank statements, and photographs. Plot should have clear title and approved layout.",
    },
    {
      question: "Can I get construction loan if I already have plot loan?",
      answer:
        "Yes, you can convert plot loan to construction loan or get additional loan for construction. Many banks allow this conversion. You can get additional loan for construction (up to approved amount) and convert entire loan into construction loan. This allows you to get higher LTV on total project cost. Check with your bank for specific conversion terms.",
    },
  ],

  ctaHeadline: "Ready to Build Your Dream Home?",
  ctaSub:
    "Check your eligibility. Compare construction loan offers from 30+ banks. Get the best rate and terms. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Plot Purchase Hyderabad", href: "/home-loan-plot-purchase-hyderabad" },
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
  ],
};

export default function HomeLoanConstructionHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
