import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Under-construction Property in Hyderabad | Best Rates | Credrace",
  description:
    "Get home loan for under-construction property in Hyderabad. Staged disbursement based on construction progress. Compare rates from 30+ banks. Interest rates starting 8.25%, loan up to ₹5 Cr.",
  keywords: [
    "home loan under construction property hyderabad",
    "home loan under construction hyderabad",
    "home loan incomplete property hyderabad",
    "home loan new construction hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-under-construction-hyderabad` },
  openGraph: {
    title: "Home Loan for Under-construction Property Hyderabad | Credrace",
    description: "Home loan for under-construction property in Hyderabad. Staged disbursement. Compare 30+ banks.",
    url: `${SITE_URL}/home-loan-under-construction-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Under-construction Property in Hyderabad | Best Rates | Credrace",
  description:
    "Get home loan for under-construction property in Hyderabad. Staged disbursement based on construction progress. Compare rates from 30+ banks.",
  url: "/home-loan-under-construction-hyderabad",
  keywords: [
    "home loan under construction property hyderabad",
    "home loan under construction hyderabad",
    "home loan incomplete property hyderabad",
  ],

  heroLabel: "Home Loan for Under-construction Property",
  heroHeadline: "Home Loan for Under-construction Property in Hyderabad",
  heroSub:
    "Get home loan for under-construction property in Hyderabad. Staged disbursement based on construction progress. Compare offers from 30+ banks. Interest rates starting 8.25%, loan up to ₹5 Cr. Interest during construction period.",
  stats: [
    { value: "8.25%", label: "Starting interest rate" },
    { value: "₹5 Cr", label: "Maximum loan amount" },
    { value: "Staged", label: "Disbursement" },
    { value: "30+", label: "Banks compared" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Planning to buy an <strong>under-construction property in Hyderabad</strong>? You can get a home loan for under-construction properties. These loans work differently - disbursement happens in stages based on construction progress, and you pay interest during construction period.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>compare home loan offers from 30+ banks</strong> for under-construction properties in Hyderabad. Get the best rates, understand disbursement process, and apply online with dedicated support.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Under-construction Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Understanding Under-construction Property Loans</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏗️ Staged Disbursement</h3>
            <p class="text-gray-600">Loan is disbursed in stages based on construction progress: Foundation (20-25%), Superstructure (30-40%), Roofing (20-25%), Finishing (10-15%). Each stage requires bank inspection.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Interest During Construction</h3>
            <p class="text-gray-600">You pay interest only on disbursed amount during construction, not full EMI. Interest is charged from date of each disbursement. Principal repayment starts after completion.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 LTV Ratio</h3>
            <p class="text-gray-600">Under-construction loans typically offer 75-80% LTV of agreement value. You need to pay 20-25% from your own funds. LTV may be higher for reputed builders.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Builder Approval</h3>
            <p class="text-gray-600">Banks approve builders and projects. Only approved builders/projects are eligible. Check if your builder is approved by the bank before applying.</p>
          </div>
        </div>
      </div>

      <!-- Disbursement Stages -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Disbursement Stages</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">1</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Foundation (20-25%)</h4>
              <p class="text-sm text-gray-600">First disbursement after foundation completion. Bank inspects foundation and releases 20-25% of loan amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">2</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Superstructure (30-40%)</h4>
              <p class="text-sm text-gray-600">Second disbursement after walls and structure completion. Bank inspects and releases 30-40% of loan amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">3</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Roofing (20-25%)</h4>
              <p class="text-sm text-gray-600">Third disbursement after roof completion. Bank inspects and releases 20-25% of loan amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">4</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Finishing (10-15%)</h4>
              <p class="text-sm text-gray-600">Final disbursement after completion of finishing work. Bank inspects and releases remaining 10-15% of loan amount.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Important Points -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Important Points to Remember</h3>
        <ul class="space-y-3 text-sm text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Builder Approval:</strong> Ensure builder and project are approved by bank. Only approved builders/projects get loans.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Construction Timeline:</strong> Check builder's track record and completion timeline. Delays can affect disbursement and increase interest cost.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Interest During Construction:</strong> You pay interest on disbursed amount during construction. Factor this into your budget.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Property Documents:</strong> Ensure builder has all approvals (RERA, building plan, etc.). Incomplete approvals can delay loan.</span>
          </li>
        </ul>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Compare under-construction loan offers from 30+ banks - Get the best deal",
    },
    {
      text: "Staged disbursement - Pay interest only on disbursed amount",
    },
    {
      text: "Competitive rates - Starting from 8.25% per annum",
    },
    {
      text: "Flexible terms - Up to 30 years tenure after completion",
    },
    {
      text: "Expert guidance - Our managers help you understand disbursement process",
    },
    {
      text: "Builder verification - We help ensure builder and project are approved",
    },
  ],

  faqs: [
    {
      question: "How does home loan work for under-construction property?",
      answer:
        "Home loan for under-construction property works with staged disbursement: (1) Loan is sanctioned based on agreement value, (2) Disbursement happens in stages (Foundation, Superstructure, Roofing, Finishing) based on construction progress, (3) You pay interest only on disbursed amount during construction, (4) Principal repayment (full EMI) starts after construction completion. Each stage requires bank inspection before disbursement.",
    },
    {
      question: "What is the interest rate for under-construction property loan?",
      answer:
        "Interest rates for under-construction property loans are similar to regular home loans, starting from 8.25% per annum for prime borrowers with CIBIL score 750+. Rates range from 8.25% to 9.75% depending on your credit score, income, builder reputation, and lender. During construction, you pay interest only on disbursed amount. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "When do I start paying EMI for under-construction property?",
      answer:
        "During construction period, you pay only interest on disbursed amount (not full EMI). Principal repayment (full EMI) starts after construction completion and you get possession. Some banks offer moratorium period (interest-only) during construction. Interest is charged from date of each disbursement. Check with your bank for specific terms.",
    },
    {
      question: "What documents are required for under-construction property loan?",
      answer:
        "Documents required: Identity proof (Aadhaar, PAN), address proof, income proof (salary slips, Form 16, or ITR), property documents (sale agreement, allotment letter, building plan approval, RERA registration, NOC from builder), bank statements, and photographs. Builder should have all approvals and RERA registration.",
    },
    {
      question: "How is loan disbursed for under-construction property?",
      answer:
        "Loan is disbursed in stages: (1) Foundation (20-25%) after foundation completion, (2) Superstructure (30-40%) after walls completion, (3) Roofing (20-25%) after roof completion, (4) Finishing (10-15%) after completion. Bank inspects each stage before releasing funds. Disbursement is directly to builder's account as per agreement. You pay interest on each disbursed amount.",
    },
    {
      question: "What if builder delays construction?",
      answer:
        "If builder delays construction, you continue paying interest on already disbursed amount. Delays don't stop interest payments. However, banks may pause further disbursements until construction resumes. Check builder's track record and RERA registration before buying. Ensure sale agreement has penalty clauses for delays. Some banks may offer interest subvention schemes with approved builders.",
    },
  ],

  ctaHeadline: "Ready to Buy Under-construction Property?",
  ctaSub:
    "Check your eligibility. Compare under-construction property loan offers from 30+ banks. Get the best rate and terms. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for Resale Property Hyderabad", href: "/home-loan-resale-property-hyderabad" },
    { label: "Home Loan for Construction Hyderabad", href: "/home-loan-construction-hyderabad" },
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
  ],
};

export default function HomeLoanUnderConstructionHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
