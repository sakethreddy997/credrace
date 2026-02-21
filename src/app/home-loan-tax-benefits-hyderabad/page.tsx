import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Tax Benefits in Hyderabad | Section 80C & 24(b) | Save Tax | Credrace",
  description:
    "Home loan tax benefits in Hyderabad. Save tax under Section 80C (principal) and Section 24(b) (interest). Maximum ₹2 Lakh tax deduction per year. Understand tax benefits and save money.",
  keywords: [
    "home loan tax benefits hyderabad",
    "home loan tax deduction hyderabad",
    "section 80c home loan hyderabad",
    "section 24b home loan hyderabad",
  ],
  openGraph: {
    title: "Home Loan Tax Benefits Hyderabad | Credrace",
    description: "Home loan tax benefits in Hyderabad. Save up to ₹2 Lakh per year in taxes.",
    url: `${SITE_URL}/home-loan-tax-benefits-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Tax Benefits in Hyderabad | Section 80C & 24(b) | Save Tax | Credrace",
  description:
    "Home loan tax benefits in Hyderabad. Save tax under Section 80C (principal) and Section 24(b) (interest). Maximum ₹2 Lakh tax deduction per year.",
  url: "/home-loan-tax-benefits-hyderabad",
  keywords: [
    "home loan tax benefits hyderabad",
    "home loan tax deduction hyderabad",
    "section 80c home loan hyderabad",
  ],

  heroLabel: "Home Loan Tax Benefits",
  heroHeadline: "Home Loan Tax Benefits in Hyderabad",
  heroSub:
    "Save tax on your home loan in Hyderabad. Claim deductions under Section 80C (principal repayment) and Section 24(b) (interest payment). Maximum ₹2 Lakh tax deduction per year. Understand all tax benefits and save money.",
  stats: [
    { value: "₹2 Lakh", label: "Max deduction/year" },
    { value: "Section 80C", label: "Principal repayment" },
    { value: "Section 24(b)", label: "Interest payment" },
    { value: "Save", label: "Up to ₹50,000/year" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Taking a <strong>home loan in Hyderabad</strong>? You can save significant tax through home loan tax benefits. The Income Tax Act provides deductions on both principal repayment and interest payment, helping you reduce your tax liability.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>understand all home loan tax benefits</strong> in Hyderabad. Learn about Section 80C, Section 24(b), and other tax-saving opportunities. Maximize your tax savings and reduce your effective home loan cost.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Tax Benefits Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan Tax Benefits</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📋 Section 80C - Principal Repayment</h3>
            <p class="text-gray-600">Deduction up to ₹1.5 Lakh per year on principal repayment. This is part of overall ₹1.5 Lakh limit under Section 80C (includes PPF, ELSS, etc.).</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Section 24(b) - Interest Payment</h3>
            <p class="text-gray-600">Deduction up to ₹2 Lakh per year on interest payment for self-occupied property. For let-out property, entire interest is deductible (no limit).</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏠 Section 80EE - First-Time Homebuyers</h3>
            <p class="text-gray-600">Additional deduction of ₹50,000 on interest payment for first-time homebuyers (subject to conditions). This is over and above Section 24(b) limit.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Total Tax Savings</h3>
            <p class="text-gray-600">Maximum tax savings of ₹50,000-75,000 per year (depending on tax slab) through home loan deductions. This reduces your effective home loan cost significantly.</p>
          </div>
        </div>
      </div>

      <!-- Detailed Benefits -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Detailed Tax Benefits</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-3">Section 80C - Principal Repayment</h3>
            <ul class="space-y-2 text-sm text-gray-600 mb-4">
              <li>• Deduction up to ₹1.5 Lakh per year</li>
              <li>• Applies to principal portion of EMI</li>
              <li>• Part of overall ₹1.5 Lakh limit (includes PPF, ELSS, etc.)</li>
              <li>• Available throughout loan tenure</li>
            </ul>
            <p class="text-xs font-semibold text-emerald-600">Example: ₹1.5 Lakh principal = ₹15,000-45,000 tax savings (10-30% slab)</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-3">Section 24(b) - Interest Payment</h3>
            <ul class="space-y-2 text-sm text-gray-600 mb-4">
              <li>• Deduction up to ₹2 Lakh per year (self-occupied)</li>
              <li>• No limit for let-out property</li>
              <li>• Applies to interest portion of EMI</li>
              <li>• Available throughout loan tenure</li>
            </ul>
            <p class="text-xs font-semibold text-emerald-600">Example: ₹2 Lakh interest = ₹20,000-60,000 tax savings (10-30% slab)</p>
          </div>
        </div>
      </div>

      <!-- Conditions -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Conditions for Tax Benefits</h3>
        <ul class="space-y-3 text-sm text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Property Ownership:</strong> You must be the owner or co-owner of the property to claim tax benefits.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Loan Purpose:</strong> Loan must be for purchase, construction, or renovation of residential property.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Construction Period:</strong> For under-construction property, interest deduction is available in 5 equal installments after construction completion.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Self-Occupied:</strong> For Section 24(b) ₹2 Lakh limit, property should be self-occupied. Let-out property has no limit.</span>
          </li>
        </ul>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Save up to ₹2 Lakh per year - Maximum tax deduction on home loan",
    },
    {
      text: "Reduce effective cost - Tax savings reduce your actual home loan cost",
    },
    {
      text: "Multiple deductions - Section 80C, Section 24(b), and Section 80EE",
    },
    {
      text: "Long-term savings - Tax benefits available throughout loan tenure",
    },
    {
      text: "Expert guidance - Our managers help you understand and claim all tax benefits",
    },
    {
      text: "Documentation help - We assist with tax certificate and Form 16 requirements",
    },
  ],

  faqs: [
    {
      question: "How much tax can I save on home loan?",
      answer:
        "You can save up to ₹50,000-75,000 per year in taxes through home loan deductions: (1) Section 80C - Up to ₹1.5 Lakh principal (saves ₹15,000-45,000), (2) Section 24(b) - Up to ₹2 Lakh interest (saves ₹20,000-60,000), (3) Section 80EE - Additional ₹50,000 interest for first-time buyers (saves ₹5,000-15,000). Total savings depend on your tax slab.",
    },
    {
      question: "What is Section 80C deduction for home loan?",
      answer:
        "Section 80C allows deduction up to ₹1.5 Lakh per year on principal repayment of home loan. This is part of overall ₹1.5 Lakh limit under Section 80C (includes PPF, ELSS, life insurance, etc.). You can claim this deduction throughout your loan tenure. Tax savings: ₹15,000-45,000 per year (10-30% tax slab).",
    },
    {
      question: "What is Section 24(b) deduction for home loan?",
      answer:
        "Section 24(b) allows deduction up to ₹2 Lakh per year on interest payment for self-occupied property. For let-out property, entire interest is deductible (no limit). You can claim this deduction throughout your loan tenure. Tax savings: ₹20,000-60,000 per year (10-30% tax slab).",
    },
    {
      question: "Can I claim tax benefits if property is under construction?",
      answer:
        "Yes, but with conditions: (1) Section 80C (principal) - Available only after construction completion, (2) Section 24(b) (interest) - Available during construction but deduction is spread over 5 equal installments starting from year of completion. Pre-construction interest can be claimed in 5 installments after completion.",
    },
    {
      question: "What documents are needed to claim home loan tax benefits?",
      answer:
        "To claim tax benefits, you need: (1) Home loan statement showing principal and interest paid, (2) Property registration documents, (3) Loan agreement, (4) Form 16 (if salaried) or ITR acknowledgment. Bank provides annual statement showing principal and interest components. Keep all documents for ITR filing.",
    },
    {
      question: "Can both husband and wife claim tax benefits on same home loan?",
      answer:
        "Yes, if both are co-owners and co-applicants, both can claim tax benefits proportionally. For example, if loan is 50-50, each can claim 50% of principal (Section 80C) and 50% of interest (Section 24(b)). Both can claim up to ₹2 Lakh interest deduction each if property is self-occupied. Consult tax advisor for your specific situation.",
    },
  ],

  ctaHeadline: "Ready to Save Tax on Your Home Loan?",
  ctaSub:
    "Understand all tax benefits. Claim maximum deductions. Reduce your effective home loan cost. Get expert guidance on tax planning.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Home Loan Calculator Hyderabad", href: "/home-loan-calculator-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
  ],
};

export default function HomeLoanTaxBenefitsHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
