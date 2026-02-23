import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How Much Home Loan Can I Get in Hyderabad? | Calculate Loan Amount | Credrace",
  description:
    "Calculate how much home loan you can get in Hyderabad. Based on salary, income, age, CIBIL score, and existing EMIs. Get instant eligibility estimate. Compare offers from 30+ banks. Free calculator.",
  keywords: [
    "how much home loan can i get hyderabad",
    "home loan amount calculator hyderabad",
    "maximum home loan amount hyderabad",
    "home loan eligibility calculator hyderabad",
    "home loan based on salary hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/how-much-home-loan-can-i-get-hyderabad` },
  openGraph: {
    title: "How Much Home Loan Can I Get Hyderabad? | Credrace",
    description: "Calculate your home loan amount in Hyderabad. Based on salary, income, CIBIL score. Instant estimate.",
    url: `${SITE_URL}/how-much-home-loan-can-i-get-hyderabad`,
  },
};

const pageData = {
  title: "How Much Home Loan Can I Get in Hyderabad? | Calculate Loan Amount | Credrace",
  description:
    "Calculate how much home loan you can get in Hyderabad. Based on salary, income, age, CIBIL score, and existing EMIs. Get instant eligibility estimate.",
  url: "/how-much-home-loan-can-i-get-hyderabad",
  keywords: [
    "how much home loan can i get hyderabad",
    "home loan amount calculator hyderabad",
    "maximum home loan amount hyderabad",
  ],

  heroLabel: "Home Loan Amount Calculator",
  heroHeadline: "How Much Home Loan Can I Get in Hyderabad?",
  heroSub:
    "Calculate your eligible home loan amount in Hyderabad instantly. Based on your salary, income, age, CIBIL score, existing EMIs, and property value. Get personalized estimate from 30+ banks. Free calculator, no CIBIL impact.",
  stats: [
    { value: "2 Mins", label: "Calculate time" },
    { value: "30+", label: "Banks compared" },
    { value: "₹5 Cr", label: "Max loan amount" },
    { value: "0", label: "CIBIL impact" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Wondering <strong>"How much home loan can I get in Hyderabad?"</strong> Your eligible loan amount depends on multiple factors including your income, age, CIBIL score, existing EMIs, property value, and lender policies. Understanding these factors helps you plan your home purchase better.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>calculate your exact eligible loan amount</strong> from 30+ banks in Hyderabad. Get instant estimate, understand factors affecting loan amount, and compare offers to maximize your borrowing capacity.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Key Factors -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Factors That Determine Your Loan Amount</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Income & FOIR</h3>
            <p class="text-gray-600">Banks use FOIR (Fixed Obligation to Income Ratio) to calculate loan amount. Typically, total EMIs (existing + new) should not exceed 40-60% of your net monthly income. Higher income = Higher loan amount.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 CIBIL Score</h3>
            <p class="text-gray-600">CIBIL score 750+ gets best loan amounts and rates. Score 700-749 gets good amounts. Score 650-699 may get lower amounts. Higher score = Higher loan amount and better rates.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏠 Property Value & LTV</h3>
            <p class="text-gray-600">RBI LTV norms limit loan to 80-90% of property value (depending on loan amount). For ₹1 Cr property, max loan is ₹80-90 Lakh. Property value is key factor in loan amount.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">👤 Age & Tenure</h3>
            <p class="text-gray-600">Younger borrowers can get higher loan amounts as they have longer repayment period. Age at loan maturity should be within 65-70 years. Longer tenure = Higher loan capacity.</p>
          </div>
        </div>
      </div>

      <!-- Calculation Examples -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Loan Amount Calculation Examples</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Monthly Income</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Existing EMIs</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">FOIR (50%)</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Eligible Loan Amount*</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹50,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹0</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹25,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹30-35 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹10,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹50,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹50-60 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹2 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹20,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.2-1.5 Cr</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹3 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹30,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.5 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.8-2.2 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-xs text-gray-600">*At 8.25% interest rate, 20 years tenure. Actual amount depends on CIBIL score, property value, and lender policies.</p>
          </div>
        </div>
      </div>

      <!-- FOIR Calculation -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">How FOIR Affects Loan Amount</h3>
        <div class="space-y-4">
          <div class="p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">FOIR Formula:</p>
            <p class="text-lg font-extrabold text-emerald-600 mb-2">FOIR = (Total EMIs / Net Monthly Income) × 100</p>
            <p class="text-sm text-gray-600">Banks typically allow FOIR of 40-60%. Higher FOIR = Lower loan amount.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 mt-4">
            <div class="p-4 border border-gray-200 rounded-lg">
              <p class="text-sm font-bold text-gray-900 mb-2">Example 1:</p>
              <p class="text-sm text-gray-600 mb-2">Income: ₹1 Lakh/month</p>
              <p class="text-sm text-gray-600 mb-2">Existing EMIs: ₹10,000</p>
              <p class="text-sm text-gray-600 mb-2">FOIR Allowed: 50% = ₹50,000</p>
              <p class="text-sm font-bold text-emerald-600">Available for Home Loan: ₹40,000/month</p>
              <p class="text-xs text-gray-500 mt-2">Loan Amount: ₹50-60 Lakh</p>
            </div>
            <div class="p-4 border border-gray-200 rounded-lg">
              <p class="text-sm font-bold text-gray-900 mb-2">Example 2:</p>
              <p class="text-sm text-gray-600 mb-2">Income: ₹2 Lakh/month</p>
              <p class="text-sm text-gray-600 mb-2">Existing EMIs: ₹20,000</p>
              <p class="text-sm text-gray-600 mb-2">FOIR Allowed: 50% = ₹1 Lakh</p>
              <p class="text-sm font-bold text-emerald-600">Available for Home Loan: ₹80,000/month</p>
              <p class="text-xs text-gray-500 mt-2">Loan Amount: ₹1.2-1.5 Cr</p>
            </div>
          </div>
        </div>
      </div>

      <!-- How to Increase Loan Amount -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">How to Increase Your Loan Amount</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💼 Add Co-Applicant</h3>
            <p class="text-sm text-gray-600 mb-3">Add spouse or family member as co-applicant. Combined income increases loan capacity. Both applicants' income and CIBIL scores are considered.</p>
            <p class="text-xs font-semibold text-emerald-600">Increase: 50-100% more loan</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📉 Reduce Existing EMIs</h3>
            <p class="text-sm text-gray-600 mb-3">Close or reduce existing loans/credit cards. Lower existing EMIs means more capacity for home loan. Pay off high-interest debts first.</p>
            <p class="text-xs font-semibold text-emerald-600">Increase: 20-40% more loan</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📈 Improve CIBIL Score</h3>
            <p class="text-sm text-gray-600 mb-3">Maintain CIBIL score 750+ for best loan amounts. Pay EMIs on time, reduce credit utilization, clear dues. Higher score = Higher loan.</p>
            <p class="text-xs font-semibold text-emerald-600">Increase: 10-30% more loan</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💰 Increase Down Payment</h3>
            <p class="text-sm text-gray-600 mb-3">Pay higher down payment (30-40% instead of 10-20%). Lower loan amount but better rates and terms. Also reduces total interest.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Better rates & terms</p>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Calculate exact loan amount - Know how much you can borrow instantly",
    },
    {
      text: "Compare from 30+ banks - See loan amounts from all lenders",
    },
    {
      text: "Understand factors - Learn what affects your loan amount",
    },
    {
      text: "Free calculator - No registration, instant results",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Expert guidance - Our managers help you maximize loan amount",
    },
  ],

  faqs: [
    {
      question: "How much home loan can I get with ₹1 Lakh salary?",
      answer:
        "With ₹1 Lakh monthly salary and no existing EMIs, you can typically get ₹50-60 Lakh home loan (at 8.25% for 20 years). If you have existing EMIs of ₹10,000, available capacity reduces to ₹40,000/month, giving you ₹40-50 Lakh loan. Actual amount depends on CIBIL score, property value, age, and lender policies. Use our calculator for exact estimate.",
    },
    {
      question: "What is the maximum home loan amount in Hyderabad?",
      answer:
        "Maximum home loan amount in Hyderabad is typically ₹5 Crore, subject to eligibility. However, actual amount depends on: (1) Your income and FOIR (40-60% of income), (2) Property value and LTV (80-90% of property value), (3) CIBIL score and credit profile, (4) Age and tenure. For ₹2 Lakh monthly income with no existing EMIs, you can get ₹1.2-1.5 Cr loan. Use our calculator to know your exact amount.",
    },
    {
      question: "How is home loan amount calculated?",
      answer:
        "Home loan amount is calculated based on: (1) FOIR (Fixed Obligation to Income Ratio) - Total EMIs should be 40-60% of net monthly income, (2) Property value and LTV - Loan is 80-90% of property value (RBI norms), (3) CIBIL score - Higher score gets higher amounts, (4) Age and tenure - Longer tenure allows higher loan. Final amount is lower of FOIR-based calculation or LTV-based calculation. Use our calculator for exact amount.",
    },
    {
      question: "Can I get home loan if I have existing loan?",
      answer:
        "Yes, you can get home loan even with existing loans. However, existing EMIs reduce your loan capacity. Banks calculate total FOIR (existing EMIs + new home loan EMI) and ensure it doesn't exceed 40-60% of income. For example, if you have ₹20,000 existing EMIs and ₹1 Lakh income, available capacity is ₹20,000-40,000/month for home loan, giving you ₹25-50 Lakh loan. Use our calculator to see exact amount.",
    },
    {
      question: "How can I get higher home loan amount?",
      answer:
        "To get higher loan amount: (1) Add co-applicant with good income and CIBIL score (increases capacity by 50-100%), (2) Reduce existing EMIs by closing other loans, (3) Improve CIBIL score to 750+ (gets 10-30% more), (4) Increase income or show additional income sources, (5) Choose longer tenure (allows higher loan), (6) Consider properties in good locations (better LTV). Our managers help you maximize loan amount.",
    },
    {
      question: "What is FOIR and how does it affect loan amount?",
      answer:
        "FOIR (Fixed Obligation to Income Ratio) is the percentage of your income that goes towards EMIs. Formula: FOIR = (Total EMIs / Net Monthly Income) × 100. Banks typically allow FOIR of 40-60%. For ₹1 Lakh income with 50% FOIR, you can have ₹50,000 total EMIs. If you have ₹10,000 existing EMIs, you can get ₹40,000/month home loan EMI, which translates to ₹50-60 Lakh loan. Lower existing EMIs = Higher home loan capacity.",
    },
  ],

  ctaHeadline: "Ready to Know Your Loan Amount?",
  ctaSub:
    "Calculate your exact eligible loan amount. Compare offers from 30+ banks. Maximize your borrowing capacity. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Based on Salary Hyderabad", href: "/home-loan-based-on-salary-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Calculator Hyderabad", href: "/home-loan-calculator-hyderabad" },
    { label: "Joint Home Loan Hyderabad", href: "/joint-home-loan-hyderabad" },
  ],
};

export default function HowMuchHomeLoanCanIGetHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
