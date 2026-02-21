import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Eligibility with Existing Loan in Hyderabad | Multiple Loans | Credrace",
  description:
    "Home loan eligibility with existing loan in Hyderabad. Get home loan even if you have car loan, personal loan, or other loans. FOIR calculation, eligibility tips. Compare offers from 30+ banks.",
  keywords: [
    "home loan eligibility with existing loan hyderabad",
    "home loan with existing loan hyderabad",
    "home loan multiple loans hyderabad",
    "home loan with car loan hyderabad",
  ],
  openGraph: {
    title: "Home Loan Eligibility with Existing Loan Hyderabad | Credrace",
    description: "Home loan eligibility with existing loan in Hyderabad. Get home loan even with other loans.",
    url: `${SITE_URL}/home-loan-eligibility-with-existing-loan-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Eligibility with Existing Loan in Hyderabad | Multiple Loans | Credrace",
  description:
    "Home loan eligibility with existing loan in Hyderabad. Get home loan even if you have car loan, personal loan, or other loans. FOIR calculation, eligibility tips.",
  url: "/home-loan-eligibility-with-existing-loan-hyderabad",
  keywords: [
    "home loan eligibility with existing loan hyderabad",
    "home loan with existing loan hyderabad",
    "home loan multiple loans hyderabad",
  ],

  heroLabel: "Home Loan with Existing Loan",
  heroHeadline: "Home Loan Eligibility with Existing Loan in Hyderabad",
  heroSub:
    "Get home loan in Hyderabad even if you have existing loans (car loan, personal loan, etc.). Understand FOIR calculation, how existing EMIs affect eligibility, and tips to increase loan capacity. Compare offers from 30+ banks.",
  stats: [
    { value: "Yes", label: "Possible" },
    { value: "FOIR", label: "Based" },
    { value: "30+", label: "Banks compared" },
    { value: "Tips", label: "Available" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      You can <strong>get home loan in Hyderabad even with existing loans</strong> (car loan, personal loan, etc.). Banks calculate your total FOIR (Fixed Obligation to Income Ratio) including existing EMIs and new home loan EMI. Understanding this calculation helps you know your eligibility and maximize loan capacity.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loan with existing loans</strong> from 30+ banks in Hyderabad. Understand FOIR calculation, how existing EMIs affect eligibility, tips to increase loan capacity, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Existing Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan with Existing Loans</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Yes, It's Possible</h3>
            <p class="text-gray-600">You can get home loan even with existing loans. Banks consider total FOIR (existing EMIs + new home loan EMI). As long as total FOIR is within 40-60%, loan is approved.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 FOIR Calculation</h3>
            <p class="text-gray-600">Banks calculate: Total EMIs (existing + new) should be 40-60% of net monthly income. For ₹1 Lakh income with ₹20,000 existing EMIs, available capacity is ₹20,000-40,000/month for home loan.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Lower Loan Amount</h3>
            <p class="text-gray-600">Existing EMIs reduce your home loan capacity. Higher existing EMIs = Lower home loan amount. For example, ₹1 Lakh income with ₹10,000 existing EMIs = ₹40,000 available = ₹50-60 Lakh loan (vs ₹70-85 Lakh without existing EMIs).</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📈 Tips</h3>
            <p class="text-gray-600">To increase loan capacity: (1) Close or reduce existing loans, (2) Add co-applicant, (3) Improve CIBIL score, (4) Increase income. These strategies help maximize home loan amount.</p>
          </div>
        </div>
      </div>

      <!-- Loan Amount Calculation -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Loan Amount with Existing Loans</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Monthly Income</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Existing EMIs</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Available for Home Loan</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Eligible Loan Amount*</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹0</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹50,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹60-70 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹10,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹40,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹50-60 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹20,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹30,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹35-45 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹2 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹30,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹70,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹85 Lakh - ₹1 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-xs text-gray-600">*At 8.25% interest rate, 20 years tenure, CIBIL 750+, 50% FOIR. Available capacity = (Income × FOIR%) - Existing EMIs.</p>
          </div>
        </div>
      </div>

      <!-- Tips to Increase Capacity -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Tips to Increase Loan Capacity</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📉 Close Existing Loans</h3>
            <p class="text-sm text-gray-600 mb-3">Close or reduce existing loans before applying. Lower existing EMIs = More capacity for home loan. Pay off high-interest debts first.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: 20-40% more loan</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💼 Add Co-Applicant</h3>
            <p class="text-sm text-gray-600 mb-3">Add spouse or family member as co-applicant. Combined income increases loan capacity significantly, even with existing EMIs.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: 50-100% more loan</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📈 Improve CIBIL Score</h3>
            <p class="text-sm text-gray-600 mb-3">Maintain CIBIL score 750+ for best loan amounts and rates. Pay EMIs on time, reduce credit utilization, clear dues.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Higher loan, better rates</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💰 Increase Income</h3>
            <p class="text-sm text-gray-600 mb-3">Show additional income sources (rental income, investments, part-time work). Higher income = Higher FOIR capacity = Higher loan amount.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Higher loan capacity</p>
          </div>
        </div>
      </div>

      <!-- FOIR Explanation -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Understanding FOIR with Existing Loans</h3>
        <div class="space-y-4">
          <div class="p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">FOIR Formula with Existing Loans:</p>
            <p class="text-lg font-extrabold text-emerald-600 mb-2">Total FOIR = ((Existing EMIs + Home Loan EMI) / Net Income) × 100</p>
            <p class="text-sm text-gray-600">Banks ensure total FOIR is within 40-60%. Available capacity for home loan = (Income × FOIR%) - Existing EMIs.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 mt-4">
            <div class="p-4 border border-gray-200 rounded-lg">
              <p class="text-sm font-bold text-gray-900 mb-2">Example 1:</p>
              <p class="text-sm text-gray-600 mb-2">Income: ₹1 Lakh/month</p>
              <p class="text-sm text-gray-600 mb-2">Existing EMIs: ₹10,000</p>
              <p class="text-sm text-gray-600 mb-2">FOIR Allowed: 50% = ₹50,000</p>
              <p class="text-sm font-bold text-emerald-600">Available: ₹40,000/month</p>
              <p class="text-xs text-gray-500 mt-2">Loan Amount: ₹50-60 Lakh</p>
            </div>
            <div class="p-4 border border-gray-200 rounded-lg">
              <p class="text-sm font-bold text-gray-900 mb-2">Example 2:</p>
              <p class="text-sm text-gray-600 mb-2">Income: ₹2 Lakh/month</p>
              <p class="text-sm text-gray-600 mb-2">Existing EMIs: ₹30,000</p>
              <p class="text-sm text-gray-600 mb-2">FOIR Allowed: 50% = ₹1 Lakh</p>
              <p class="text-sm font-bold text-emerald-600">Available: ₹70,000/month</p>
              <p class="text-xs text-gray-500 mt-2">Loan Amount: ₹85 Lakh - ₹1 Cr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Get home loan with existing loans - Understand how existing EMIs affect eligibility",
    },
    {
      text: "FOIR calculation - Learn how banks calculate loan capacity with existing loans",
    },
    {
      text: "Tips to increase capacity - Strategies to maximize loan amount",
    },
    {
      text: "Compare from 30+ banks - See offers from all lenders",
    },
    {
      text: "Expert guidance - Our managers help you maximize loan capacity",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
  ],

  faqs: [
    {
      question: "Can I get home loan if I have existing loan?",
      answer:
        "Yes, you can get home loan in Hyderabad even with existing loans (car loan, personal loan, etc.). Banks calculate your total FOIR (Fixed Obligation to Income Ratio) including existing EMIs and new home loan EMI. As long as total FOIR is within 40-60%, loan is approved. For example, ₹1 Lakh income with ₹10,000 existing EMIs = ₹40,000 available capacity (50% FOIR) = ₹50-60 Lakh home loan. However, existing EMIs reduce your home loan capacity. Higher existing EMIs = Lower home loan amount. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "How do existing EMIs affect home loan eligibility?",
      answer:
        "Existing EMIs reduce your home loan capacity. Banks calculate: Available capacity for home loan = (Income × FOIR%) - Existing EMIs. For example: ₹1 Lakh income, 50% FOIR = ₹50,000 total EMI capacity. If you have ₹10,000 existing EMIs, available capacity is ₹40,000/month for home loan = ₹50-60 Lakh loan. If you have ₹20,000 existing EMIs, available capacity is ₹30,000/month = ₹35-45 Lakh loan. Lower existing EMIs = Higher home loan capacity. Close or reduce existing loans to increase home loan amount.",
    },
    {
      question: "What is maximum FOIR with existing loans?",
      answer:
        "Maximum FOIR (Fixed Obligation to Income Ratio) with existing loans is typically 40-60% (same as without existing loans). Banks ensure total EMIs (existing + new home loan) don't exceed 40-60% of income. For example: ₹1 Lakh income, 50% FOIR = ₹50,000 total EMI capacity. If you have ₹10,000 existing EMIs, you can get ₹40,000/month home loan EMI. If you have ₹20,000 existing EMIs, you can get ₹30,000/month home loan EMI. Some banks may allow higher FOIR (up to 70%) for government employees or strong profiles.",
    },
    {
      question: "Should I close existing loan before applying for home loan?",
      answer:
        "Closing existing loan before applying for home loan can help increase loan capacity, but it's not mandatory. Benefits of closing: (1) Higher home loan capacity - No existing EMIs = Full FOIR capacity available, (2) Better CIBIL score - Closing loans improves credit utilization, (3) Lower total debt - Reduces financial burden. However, closing may have costs (prepayment charges, loss of tax benefits). Consider: (1) Prepayment charges vs benefit, (2) Remaining tenure of existing loan, (3) Interest rate difference. If existing loan has high interest rate or small remaining amount, closing may be beneficial.",
    },
    {
      question: "Can I get home loan with multiple existing loans?",
      answer:
        "Yes, you can get home loan with multiple existing loans (car loan, personal loan, credit card EMIs, etc.). Banks consider total existing EMIs (sum of all EMIs) for FOIR calculation. For example: ₹1 Lakh income, ₹5,000 car loan EMI + ₹5,000 personal loan EMI = ₹10,000 total existing EMIs. Available capacity = ₹40,000/month for home loan = ₹50-60 Lakh loan. However, multiple loans may affect: (1) CIBIL score (if not managed well), (2) Loan approval (if total FOIR is too high), (3) Interest rates (if CIBIL is affected). Maintain good CIBIL score and timely EMI payments.",
    },
    {
      question: "How can I increase home loan amount with existing loans?",
      answer:
        "To increase home loan amount with existing loans: (1) Close or reduce existing loans - Lower existing EMIs = More capacity for home loan (20-40% increase), (2) Add co-applicant - Combined income increases loan capacity (50-100% increase), (3) Improve CIBIL score - Higher score gets better rates and amounts (10-30% increase), (4) Increase income - Show additional income sources (rental income, investments), (5) Wait for existing loans to reduce - As existing loans reduce, capacity increases. Use our calculator to see exact increase with these strategies.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan with Existing Loans?",
  ctaSub:
    "Calculate your loan capacity with existing loans. Compare offers from 30+ banks. Get expert guidance to maximize loan amount. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan with Personal Loan Running Hyderabad", href: "/home-loan-with-personal-loan-running-hyderabad" },
    { label: "How Much Home Loan Can I Get Hyderabad", href: "/how-much-home-loan-can-i-get-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Based on Salary Hyderabad", href: "/home-loan-based-on-salary-hyderabad" },
  ],
};

export default function HomeLoanEligibilityWithExistingLoanHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
