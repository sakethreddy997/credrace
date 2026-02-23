import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Based on Salary in Hyderabad | Calculate Loan Amount | Credrace",
  description:
    "Calculate home loan amount based on your salary in Hyderabad. Know how much loan you can get with your monthly income. FOIR calculation, salary requirements, instant eligibility. Compare 30+ banks.",
  keywords: [
    "home loan based on salary hyderabad",
    "home loan salary calculator hyderabad",
    "home loan amount based on salary hyderabad",
    "home loan eligibility salary hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-based-on-salary-hyderabad` },
  openGraph: {
    title: "Home Loan Based on Salary Hyderabad | Credrace",
    description: "Calculate home loan amount based on salary in Hyderabad. Instant eligibility estimate.",
    url: `${SITE_URL}/home-loan-based-on-salary-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Based on Salary in Hyderabad | Calculate Loan Amount | Credrace",
  description:
    "Calculate home loan amount based on your salary in Hyderabad. Know how much loan you can get with your monthly income. FOIR calculation, salary requirements.",
  url: "/home-loan-based-on-salary-hyderabad",
  keywords: [
    "home loan based on salary hyderabad",
    "home loan salary calculator hyderabad",
    "home loan amount based on salary hyderabad",
  ],

  heroLabel: "Home Loan Based on Salary",
  heroHeadline: "Home Loan Based on Salary in Hyderabad",
  heroSub:
    "Calculate your home loan amount based on your salary in Hyderabad. Understand FOIR calculation, salary requirements, and how much loan you can get. Get instant estimate from 30+ banks. Free calculator, no CIBIL impact.",
  stats: [
    { value: "₹25K+", label: "Min salary" },
    { value: "40-60%", label: "FOIR allowed" },
    { value: "30+", label: "Banks compared" },
    { value: "Instant", label: "Calculation" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Your <strong>salary is the primary factor</strong> determining how much home loan you can get in Hyderabad. Banks use your net monthly income and FOIR (Fixed Obligation to Income Ratio) to calculate your eligible loan amount. Understanding this calculation helps you plan your home purchase.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>calculate your home loan amount based on salary</strong> from 30+ banks in Hyderabad. Get instant estimate, understand FOIR calculation, and see how salary affects your borrowing capacity.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Salary-Based Calculation -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">How Salary Determines Loan Amount</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Net Monthly Income</h3>
            <p class="text-gray-600">Banks consider your net monthly income (after deductions) for loan calculation. Higher salary = Higher loan capacity. Minimum salary requirement is typically ₹25,000-30,000/month.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 FOIR Calculation</h3>
            <p class="text-gray-600">Banks allow 40-60% of your net monthly income for total EMIs (existing + home loan). For ₹1 Lakh salary with 50% FOIR, you can have ₹50,000 total EMIs. If no existing EMIs, full ₹50,000 available for home loan.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📈 Salary Ranges</h3>
            <p class="text-gray-600">₹50K salary = ₹30-35 Lakh loan, ₹1 Lakh = ₹50-60 Lakh, ₹2 Lakh = ₹1.2-1.5 Cr, ₹3 Lakh = ₹1.8-2.2 Cr. Actual amount depends on existing EMIs, CIBIL score, and property value.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💼 Employment Type</h3>
            <p class="text-gray-600">Salaried employees get better loan terms than self-employed. Government employees may get higher loan amounts. Stable employment and consistent salary increases loan capacity.</p>
          </div>
        </div>
      </div>

      <!-- Salary vs Loan Amount Table -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Home Loan Amount Based on Salary</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Monthly Salary</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Existing EMIs</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Available EMI Capacity</th>
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
                  <td class="px-6 py-4 text-sm text-gray-900">₹75,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹5,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹32,500</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹40-45 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹10,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹40,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹50-60 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1.5 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹15,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹60,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹75-90 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹2 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹20,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹80,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1-1.2 Cr</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹3 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹30,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.2 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.5-1.8 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-xs text-gray-600">*At 8.25% interest rate, 20 years tenure, CIBIL 750+. Actual amount depends on credit score, property value, and lender policies.</p>
          </div>
        </div>
      </div>

      <!-- FOIR Explanation -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Understanding FOIR (Fixed Obligation to Income Ratio)</h3>
        <div class="space-y-4">
          <div class="p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">FOIR Formula:</p>
            <p class="text-lg font-extrabold text-emerald-600 mb-2">FOIR = (Total EMIs / Net Monthly Income) × 100</p>
            <p class="text-sm text-gray-600">Banks typically allow FOIR of 40-60% for home loans. Government employees may get up to 70%.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="p-4 border border-gray-200 rounded-lg text-center">
              <p class="text-2xl font-extrabold text-emerald-600 mb-1">40-50%</p>
              <p class="text-xs text-gray-600">Conservative FOIR</p>
              <p class="text-xs text-gray-500 mt-2">Lower risk, comfortable repayment</p>
            </div>
            <div class="p-4 border border-gray-200 rounded-lg text-center bg-emerald-50">
              <p class="text-2xl font-extrabold text-emerald-600 mb-1">50-60%</p>
              <p class="text-xs text-gray-600">Standard FOIR</p>
              <p class="text-xs text-gray-500 mt-2">Most common, balanced approach</p>
            </div>
            <div class="p-4 border border-gray-200 rounded-lg text-center">
              <p class="text-2xl font-extrabold text-emerald-600 mb-1">60-70%</p>
              <p class="text-xs text-gray-600">High FOIR</p>
              <p class="text-xs text-gray-500 mt-2">Government employees, strong profiles</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Minimum Salary Requirements -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Minimum Salary Requirements</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-3">By Loan Amount</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• ₹30-50 Lakh loan: ₹50,000-75,000/month</li>
              <li>• ₹50 Lakh - ₹1 Cr: ₹1-1.5 Lakh/month</li>
              <li>• ₹1-2 Cr loan: ₹2-3 Lakh/month</li>
              <li>• ₹2-5 Cr loan: ₹3-5 Lakh/month</li>
            </ul>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-3">By Employment Type</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Salaried: ₹25,000-30,000/month minimum</li>
              <li>• Government employees: ₹20,000-25,000/month</li>
              <li>• Private employees: ₹30,000-35,000/month</li>
              <li>• Self-employed: ₹2.5-3 Lakh/year minimum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Calculate loan amount based on salary - Know exact borrowing capacity",
    },
    {
      text: "Understand FOIR calculation - Learn how salary affects loan amount",
    },
    {
      text: "Compare from 30+ banks - See loan amounts from all lenders",
    },
    {
      text: "Free calculator - Instant estimate, no registration",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Expert guidance - Our managers help you maximize loan based on salary",
    },
  ],

  faqs: [
    {
      question: "How much home loan can I get with ₹1 Lakh salary?",
      answer:
        "With ₹1 Lakh monthly salary and no existing EMIs, you can typically get ₹50-60 Lakh home loan (at 8.25% for 20 years). Banks allow 40-60% FOIR, so ₹50,000/month available for EMIs. If you have ₹10,000 existing EMIs, available capacity is ₹40,000/month, giving you ₹40-50 Lakh loan. Actual amount also depends on CIBIL score (750+ gets best amounts), property value, and lender policies. Use our calculator for exact estimate.",
    },
    {
      question: "What is the minimum salary for home loan?",
      answer:
        "Minimum salary for home loan varies by lender and location. In Hyderabad: (1) Salaried employees: ₹25,000-30,000/month minimum, (2) Government employees: ₹20,000-25,000/month (may get lower requirement), (3) Private employees: ₹30,000-35,000/month, (4) Self-employed: ₹2.5-3 Lakh/year minimum. However, minimum salary depends on loan amount - for ₹30-50 Lakh loan, you need ₹50,000-75,000/month salary. Use our calculator to check if your salary qualifies.",
    },
    {
      question: "How is home loan calculated based on salary?",
      answer:
        "Home loan is calculated based on salary using FOIR (Fixed Obligation to Income Ratio): (1) Calculate net monthly income (after deductions), (2) Determine FOIR capacity (40-60% of income), (3) Subtract existing EMIs to get available capacity, (4) Calculate loan amount that gives EMI equal to available capacity. Formula: Available EMI = (Net Income × FOIR%) - Existing EMIs. Then loan amount = EMI × [(1+R)^N - 1] / [R × (1+R)^N]. Use our calculator for exact calculation.",
    },
    {
      question: "Can I get home loan with ₹50,000 salary?",
      answer:
        "Yes, you can get home loan with ₹50,000 salary in Hyderabad. With ₹50,000 monthly salary and no existing EMIs, you can typically get ₹30-35 Lakh home loan (at 8.25% for 20 years). If you have ₹5,000 existing EMIs, available capacity is ₹20,000/month, giving you ₹25-30 Lakh loan. However, you also need good CIBIL score (700+), stable employment (2+ years), and property value should support the loan. Use our calculator to check your exact eligibility.",
    },
    {
      question: "Does salary increase affect home loan amount?",
      answer:
        "Yes, salary increase directly increases your home loan capacity. If your salary increases from ₹1 Lakh to ₹1.5 Lakh (50% increase), your loan capacity also increases by approximately 50% (from ₹50-60 Lakh to ₹75-90 Lakh, assuming no existing EMIs). Banks consider current salary for loan calculation. If you expect salary increase soon, you can mention it to bank, but loan is primarily based on current salary. Higher salary = Higher FOIR capacity = Higher loan amount.",
    },
    {
      question: "What if my salary is variable or includes incentives?",
      answer:
        "For variable salary or salary with incentives, banks typically consider: (1) Fixed component (100% considered), (2) Variable/incentive component (50-70% considered, based on consistency), (3) Average of last 6-12 months salary. Banks prefer stable, consistent income. If your salary has high variable component, loan amount may be calculated conservatively. Government employees with DA (Dearness Allowance) get full salary considered. Use our calculator with your average salary to get estimate.",
    },
  ],

  ctaHeadline: "Ready to Calculate Your Loan Amount?",
  ctaSub:
    "Calculate home loan amount based on your salary. Compare offers from 30+ banks. Get instant estimate. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "How Much Home Loan Can I Get Hyderabad", href: "/how-much-home-loan-can-i-get-hyderabad" },
    { label: "Minimum Salary for Home Loan Hyderabad", href: "/minimum-salary-for-home-loan-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Calculator Hyderabad", href: "/home-loan-calculator-hyderabad" },
  ],
};

export default function HomeLoanBasedOnSalaryHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
