import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Minimum Salary for Home Loan in Hyderabad | Salary Requirements | Credrace",
  description:
    "Minimum salary for home loan in Hyderabad. Know salary requirements by loan amount, employment type. Calculate eligibility. Compare offers from 30+ banks.",
  keywords: [
    "minimum salary for home loan hyderabad",
    "home loan salary requirement hyderabad",
    "minimum income for home loan hyderabad",
    "home loan salary criteria hyderabad",
  ],
  openGraph: {
    title: "Minimum Salary for Home Loan Hyderabad | Credrace",
    description: "Minimum salary for home loan in Hyderabad. Know salary requirements by loan amount.",
    url: `${SITE_URL}/minimum-salary-for-home-loan-hyderabad`,
  },
};

const pageData = {
  title: "Minimum Salary for Home Loan in Hyderabad | Salary Requirements | Credrace",
  description:
    "Minimum salary for home loan in Hyderabad. Know salary requirements by loan amount, employment type. Calculate eligibility.",
  url: "/minimum-salary-for-home-loan-hyderabad",
  keywords: [
    "minimum salary for home loan hyderabad",
    "home loan salary requirement hyderabad",
    "minimum income for home loan hyderabad",
  ],

  heroLabel: "Minimum Salary for Home Loan",
  heroHeadline: "Minimum Salary for Home Loan in Hyderabad",
  heroSub:
    "Know minimum salary requirements for home loan in Hyderabad. Understand salary requirements by loan amount, employment type, and lender policies. Calculate your eligibility. Compare offers from 30+ banks.",
  stats: [
    { value: "₹25K+", label: "Min salary" },
    { value: "By Amount", label: "Varies" },
    { value: "30+", label: "Banks compared" },
    { value: "Flexible", label: "Criteria" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      <strong>Minimum salary for home loan in Hyderabad</strong> varies by loan amount, employment type, and lender policies. Understanding these requirements helps you plan your home purchase and know if you qualify for a loan.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>understand minimum salary requirements</strong> for home loans in Hyderabad. Learn requirements by loan amount, employment type, and compare offers from 30+ banks to find lenders with flexible criteria.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Minimum Salary Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Minimum Salary Requirements</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 By Loan Amount</h3>
            <p class="text-gray-600">Minimum salary depends on loan amount. ₹30-50 Lakh loan: ₹50,000-75,000/month, ₹50 Lakh - ₹1 Cr: ₹1-1.5 Lakh/month, ₹1-2 Cr: ₹2-3 Lakh/month. Higher loan = Higher salary requirement.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💼 By Employment Type</h3>
            <p class="text-gray-600">Salaried: ₹25,000-30,000/month minimum, Government employees: ₹20,000-25,000/month, Private employees: ₹30,000-35,000/month, Self-employed: ₹2.5-3 Lakh/year minimum.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 FOIR Calculation</h3>
            <p class="text-gray-600">Banks use FOIR (Fixed Obligation to Income Ratio) to calculate minimum salary. Typically 40-60% of income for EMIs. For ₹50,000 EMI, you need ₹1-1.25 Lakh monthly salary (at 50% FOIR).</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Other Factors</h3>
            <p class="text-gray-600">Minimum salary also depends on: CIBIL score (higher score may allow lower salary), existing EMIs (lower EMIs = lower salary requirement), property value, lender policies.</p>
          </div>
        </div>
      </div>

      <!-- Salary by Loan Amount -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Minimum Salary by Loan Amount</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Loan Amount</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">EMI (approx)*</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">FOIR (50%)</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Minimum Salary Required</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹30-50 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹25,000-40,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">50%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹50,000-80,000/month</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹50 Lakh - ₹1 Cr</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹40,000-80,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">50%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹80,000-1.6 Lakh/month</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1-2 Cr</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹80,000-1.6 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">50%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.6-3.2 Lakh/month</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹2-5 Cr</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.6-4 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">50%</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹3.2-8 Lakh/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-xs text-gray-600">*At 8.25% interest rate, 20 years tenure. Actual salary requirement depends on existing EMIs, CIBIL score, and lender policies.</p>
          </div>
        </div>
      </div>

      <!-- Salary by Employment Type -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Minimum Salary by Employment Type</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💼 Salaried Employees</h3>
            <p class="text-sm text-gray-600 mb-3">Minimum salary: ₹25,000-30,000/month. Standard FOIR (50-60%). Salary slips and bank statements required.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Standard eligibility</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">🏛️ Government Employees</h3>
            <p class="text-sm text-gray-600 mb-3">Minimum salary: ₹20,000-25,000/month. Higher FOIR (60-70%). Lower salary requirement due to job security.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Lower minimum salary</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">🏢 Private Employees</h3>
            <p class="text-sm text-gray-600 mb-3">Minimum salary: ₹30,000-35,000/month. Standard FOIR (50-60%). May require longer employment (2+ years).</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Competitive rates</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💼 Self-Employed</h3>
            <p class="text-sm text-gray-600 mb-3">Minimum income: ₹2.5-3 Lakh/year. ITR-based income. Lower FOIR (40-50%). More documentation required.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Flexible criteria</p>
          </div>
        </div>
      </div>

      <!-- How to Calculate -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">How to Calculate Minimum Salary</h3>
        <div class="space-y-4">
          <div class="p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">Formula:</p>
            <p class="text-lg font-extrabold text-emerald-600 mb-2">Minimum Salary = (EMI / FOIR%) × 100</p>
            <p class="text-sm text-gray-600">For example: EMI = ₹50,000, FOIR = 50%, Minimum Salary = (₹50,000 / 50%) × 100 = ₹1 Lakh/month.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 mt-4">
            <div class="p-4 border border-gray-200 rounded-lg">
              <p class="text-sm font-bold text-gray-900 mb-2">Example 1:</p>
              <p class="text-sm text-gray-600 mb-2">Loan: ₹50 Lakh</p>
              <p class="text-sm text-gray-600 mb-2">EMI: ₹50,000 (approx)</p>
              <p class="text-sm text-gray-600 mb-2">FOIR: 50%</p>
              <p class="text-sm font-bold text-emerald-600">Minimum Salary: ₹1 Lakh/month</p>
            </div>
            <div class="p-4 border border-gray-200 rounded-lg">
              <p class="text-sm font-bold text-gray-900 mb-2">Example 2:</p>
              <p class="text-sm text-gray-600 mb-2">Loan: ₹1 Cr</p>
              <p class="text-sm text-gray-600 mb-2">EMI: ₹1 Lakh (approx)</p>
              <p class="text-sm text-gray-600 mb-2">FOIR: 50%</p>
              <p class="text-sm font-bold text-emerald-600">Minimum Salary: ₹2 Lakh/month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Understand requirements - Know minimum salary by loan amount and employment type",
    },
    {
      text: "Calculate eligibility - Use formula to calculate minimum salary needed",
    },
    {
      text: "Compare from 30+ banks - See lenders with flexible salary requirements",
    },
    {
      text: "Expert guidance - Our managers help you understand requirements",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Flexible options - Find lenders with lower minimum salary requirements",
    },
  ],

  faqs: [
    {
      question: "What is minimum salary for home loan in Hyderabad?",
      answer:
        "Minimum salary for home loan in Hyderabad varies by loan amount and employment type: (1) By loan amount - ₹30-50 Lakh loan: ₹50,000-80,000/month, ₹50 Lakh - ₹1 Cr: ₹1-1.5 Lakh/month, ₹1-2 Cr: ₹2-3 Lakh/month, (2) By employment type - Salaried: ₹25,000-30,000/month minimum, Government employees: ₹20,000-25,000/month, Private employees: ₹30,000-35,000/month, Self-employed: ₹2.5-3 Lakh/year minimum. Actual minimum salary depends on existing EMIs, CIBIL score, and lender policies. Use our calculator to check if your salary qualifies.",
    },
    {
      question: "How is minimum salary calculated for home loan?",
      answer:
        "Minimum salary is calculated using FOIR (Fixed Obligation to Income Ratio): Formula: Minimum Salary = (EMI / FOIR%) × 100. For example: EMI = ₹50,000, FOIR = 50%, Minimum Salary = (₹50,000 / 50%) × 100 = ₹1 Lakh/month. If you have existing EMIs, add them to home loan EMI: Minimum Salary = ((Home Loan EMI + Existing EMIs) / FOIR%) × 100. Banks typically allow 40-60% FOIR (50% standard). Higher FOIR = Lower minimum salary requirement. Use our calculator for exact calculation.",
    },
    {
      question: "Can I get home loan with ₹30,000 salary?",
      answer:
        "Yes, you can get home loan with ₹30,000 salary in Hyderabad, but loan amount will be limited. With ₹30,000 monthly salary and 50% FOIR, you can have ₹15,000 EMI capacity, which translates to ₹18-20 Lakh loan (at 8.25% for 20 years). If you have existing EMIs, available capacity reduces. For example, ₹5,000 existing EMIs = ₹10,000 available = ₹12-15 Lakh loan. However, you also need good CIBIL score (700+), stable employment (2+ years), and property value should support the loan. Use our calculator to check your exact eligibility.",
    },
    {
      question: "Do all banks have same minimum salary requirement?",
      answer:
        "No, minimum salary requirement varies by bank: (1) Public sector banks (SBI, PNB) - May have lower minimum salary (₹25,000/month), (2) Private banks (HDFC, ICICI, Axis) - May have higher minimum salary (₹30,000-35,000/month), (3) HFCs (LIC HFL) - Flexible, may have lower minimum salary. However, minimum salary also depends on: (1) Loan amount (higher loan = higher salary), (2) Employment type (government employees may get lower requirement), (3) CIBIL score (higher score may allow lower salary), (4) Existing EMIs. Compare offers from 30+ banks to find lenders with flexible salary requirements.",
    },
    {
      question: "What if my salary is below minimum requirement?",
      answer:
        "If your salary is below minimum requirement, you can: (1) Add co-applicant (spouse/parents) with good income - Combined income increases loan capacity, (2) Reduce existing EMIs - Close or reduce other loans to increase available capacity, (3) Improve CIBIL score - Higher score may allow lower salary requirement, (4) Wait for salary increase - Apply after salary increase, (5) Consider lower loan amount - Apply for smaller loan that matches your salary, (6) Compare banks - Some banks have flexible salary requirements. Use our calculator to see if you qualify with co-applicant.",
    },
    {
      question: "Does minimum salary include variable components?",
      answer:
        "Banks typically consider: (1) Fixed component (100% considered) - Base salary, (2) Variable component (50-70% considered) - Incentives, bonuses, based on consistency, (3) Average of last 6-12 months salary. Banks prefer stable, consistent income. If your salary has high variable component, minimum salary requirement may be calculated conservatively. For example, if you have ₹50,000 fixed + ₹50,000 variable, banks may consider ₹50,000 + (50-70% of ₹50,000) = ₹75,000-85,000 as monthly income. Use average salary of last 6-12 months for calculation.",
    },
  ],

  ctaHeadline: "Ready to Check Your Salary Eligibility?",
  ctaSub:
    "Calculate minimum salary required for your loan amount. Compare offers from 30+ banks. Get expert guidance. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Based on Salary Hyderabad", href: "/home-loan-based-on-salary-hyderabad" },
    { label: "How Much Home Loan Can I Get Hyderabad", href: "/how-much-home-loan-can-i-get-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Joint Home Loan Hyderabad", href: "/joint-home-loan-hyderabad" },
  ],
};

export default function MinimumSalaryForHomeLoanHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
