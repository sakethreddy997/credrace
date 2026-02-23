import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan with Personal Loan Running in Hyderabad | Personal Loan + Home Loan | Credrace",
  description:
    "Home loan with personal loan running in Hyderabad. Get home loan even if you have active personal loan. FOIR calculation, eligibility tips. Compare offers from 30+ banks.",
  keywords: [
    "home loan with personal loan running hyderabad",
    "home loan with personal loan hyderabad",
    "home loan personal loan together hyderabad",
    "home loan active personal loan hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-with-personal-loan-running-hyderabad` },
  openGraph: {
    title: "Home Loan with Personal Loan Running Hyderabad | Credrace",
    description: "Home loan with personal loan running in Hyderabad. Get home loan even with active personal loan.",
    url: `${SITE_URL}/home-loan-with-personal-loan-running-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan with Personal Loan Running in Hyderabad | Personal Loan + Home Loan | Credrace",
  description:
    "Home loan with personal loan running in Hyderabad. Get home loan even if you have active personal loan. FOIR calculation, eligibility tips.",
  url: "/home-loan-with-personal-loan-running-hyderabad",
  keywords: [
    "home loan with personal loan running hyderabad",
    "home loan with personal loan hyderabad",
    "home loan personal loan together hyderabad",
  ],

  heroLabel: "Home Loan with Personal Loan",
  heroHeadline: "Home Loan with Personal Loan Running in Hyderabad",
  heroSub:
    "Get home loan in Hyderabad even if you have active personal loan. Understand FOIR calculation, how personal loan EMI affects eligibility, and tips to increase loan capacity. Compare offers from 30+ banks.",
  stats: [
    { value: "Yes", label: "Possible" },
    { value: "FOIR", label: "Based" },
    { value: "30+", label: "Banks compared" },
    { value: "Tips", label: "Available" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      You can <strong>get home loan in Hyderabad even with active personal loan</strong>. Banks calculate your total FOIR (Fixed Obligation to Income Ratio) including personal loan EMI and new home loan EMI. Understanding this calculation helps you know your eligibility and maximize loan capacity.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get home loan with personal loan running</strong> from 30+ banks in Hyderabad. Understand FOIR calculation, how personal loan EMI affects eligibility, tips to increase loan capacity, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Personal Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan with Personal Loan Running</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Yes, It's Possible</h3>
            <p class="text-gray-600">You can get home loan even with active personal loan. Banks consider total FOIR (personal loan EMI + new home loan EMI). As long as total FOIR is within 40-60%, loan is approved.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 FOIR Calculation</h3>
            <p class="text-gray-600">Banks calculate: Total EMIs (personal loan + home loan) should be 40-60% of net monthly income. For ₹1 Lakh income with ₹15,000 personal loan EMI, available capacity is ₹35,000/month for home loan.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Lower Loan Amount</h3>
            <p class="text-gray-600">Personal loan EMI reduces your home loan capacity. Higher personal loan EMI = Lower home loan amount. For example, ₹1 Lakh income with ₹10,000 personal loan EMI = ₹40,000 available = ₹50-60 Lakh loan (vs ₹70-85 Lakh without personal loan).</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📈 Tips to Increase</h3>
            <p class="text-gray-600">To increase loan capacity: (1) Close or reduce personal loan, (2) Add co-applicant, (3) Improve CIBIL score, (4) Increase income. These strategies help maximize home loan amount.</p>
          </div>
        </div>
      </div>

      <!-- Loan Amount Calculation -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Loan Amount with Personal Loan Running</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Monthly Income</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Personal Loan EMI</th>
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
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹25,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹75,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹90 Lakh - ₹1.1 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-xs text-gray-600">*At 8.25% interest rate, 20 years tenure, CIBIL 750+, 50% FOIR. Available capacity = (Income × FOIR%) - Personal Loan EMI.</p>
          </div>
        </div>
      </div>

      <!-- Tips to Increase Capacity -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Tips to Increase Loan Capacity</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📉 Close Personal Loan</h3>
            <p class="text-sm text-gray-600 mb-3">Close or reduce personal loan before applying. Lower personal loan EMI = More capacity for home loan. Personal loans have high interest rates, closing saves money.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: 20-40% more loan</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💼 Add Co-Applicant</h3>
            <p class="text-sm text-gray-600 mb-3">Add spouse or family member as co-applicant. Combined income increases loan capacity significantly, even with personal loan running.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: 50-100% more loan</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📈 Improve CIBIL Score</h3>
            <p class="text-sm text-gray-600 mb-3">Maintain CIBIL score 750+ for best loan amounts and rates. Pay personal loan EMIs on time, reduce credit utilization, clear dues.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Higher loan, better rates</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💰 Increase Income</h3>
            <p class="text-sm text-gray-600 mb-3">Show additional income sources (rental income, investments, part-time work). Higher income = Higher FOIR capacity = Higher loan amount.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Higher loan capacity</p>
          </div>
        </div>
      </div>

      <!-- Should You Close Personal Loan -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Should You Close Personal Loan Before Home Loan?</h3>
        <div class="space-y-4">
          <div class="p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">✅ Benefits of Closing Personal Loan:</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Higher home loan capacity - No personal loan EMI = Full FOIR capacity available</li>
              <li>• Better CIBIL score - Closing personal loan improves credit utilization</li>
              <li>• Lower total interest - Personal loans have high interest rates (12-24%)</li>
              <li>• Lower financial burden - One less EMI to manage</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">⚠️ Considerations:</p>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Prepayment charges - Check prepayment charges on personal loan</li>
              <li>• Remaining tenure - If personal loan is almost over, closing may not be necessary</li>
              <li>• Funds availability - Need funds to close personal loan</li>
              <li>• Tax benefits - Personal loans don't have tax benefits, so no loss</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Get home loan with personal loan - Understand how personal loan EMI affects eligibility",
    },
    {
      text: "FOIR calculation - Learn how banks calculate loan capacity with personal loan",
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
      question: "Can I get home loan if I have personal loan running?",
      answer:
        "Yes, you can get home loan in Hyderabad even with active personal loan. Banks calculate your total FOIR (Fixed Obligation to Income Ratio) including personal loan EMI and new home loan EMI. As long as total FOIR is within 40-60%, loan is approved. For example, ₹1 Lakh income with ₹10,000 personal loan EMI = ₹40,000 available capacity (50% FOIR) = ₹50-60 Lakh home loan. However, personal loan EMI reduces your home loan capacity. Higher personal loan EMI = Lower home loan amount. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "How does personal loan EMI affect home loan eligibility?",
      answer:
        "Personal loan EMI reduces your home loan capacity. Banks calculate: Available capacity for home loan = (Income × FOIR%) - Personal Loan EMI. For example: ₹1 Lakh income, 50% FOIR = ₹50,000 total EMI capacity. If you have ₹10,000 personal loan EMI, available capacity is ₹40,000/month for home loan = ₹50-60 Lakh loan. If you have ₹20,000 personal loan EMI, available capacity is ₹30,000/month = ₹35-45 Lakh loan. Lower personal loan EMI = Higher home loan capacity. Close or reduce personal loan to increase home loan amount.",
    },
    {
      question: "Should I close personal loan before applying for home loan?",
      answer:
        "Closing personal loan before applying for home loan can help increase loan capacity, but it's not mandatory. Benefits of closing: (1) Higher home loan capacity - No personal loan EMI = Full FOIR capacity available (20-40% increase), (2) Better CIBIL score - Closing personal loan improves credit utilization, (3) Lower total interest - Personal loans have high interest rates (12-24%), closing saves money, (4) Lower financial burden - One less EMI to manage. However, consider: (1) Prepayment charges - Check prepayment charges on personal loan, (2) Remaining tenure - If personal loan is almost over, closing may not be necessary, (3) Funds availability - Need funds to close personal loan. If personal loan has high interest rate or small remaining amount, closing may be beneficial.",
    },
    {
      question: "What is maximum FOIR with personal loan running?",
      answer:
        "Maximum FOIR (Fixed Obligation to Income Ratio) with personal loan running is typically 40-60% (same as without personal loan). Banks ensure total EMIs (personal loan + new home loan) don't exceed 40-60% of income. For example: ₹1 Lakh income, 50% FOIR = ₹50,000 total EMI capacity. If you have ₹10,000 personal loan EMI, you can get ₹40,000/month home loan EMI. If you have ₹20,000 personal loan EMI, you can get ₹30,000/month home loan EMI. Some banks may allow higher FOIR (up to 70%) for government employees or strong profiles.",
    },
    {
      question: "Can I get home loan with multiple personal loans?",
      answer:
        "Yes, you can get home loan with multiple personal loans. Banks consider total personal loan EMIs (sum of all personal loan EMIs) for FOIR calculation. For example: ₹1 Lakh income, ₹5,000 personal loan 1 EMI + ₹5,000 personal loan 2 EMI = ₹10,000 total personal loan EMIs. Available capacity = ₹40,000/month for home loan = ₹50-60 Lakh loan. However, multiple personal loans may affect: (1) CIBIL score (if not managed well), (2) Loan approval (if total FOIR is too high), (3) Interest rates (if CIBIL is affected). Maintain good CIBIL score and timely EMI payments. Consider consolidating or closing some personal loans.",
    },
    {
      question: "How can I increase home loan amount with personal loan running?",
      answer:
        "To increase home loan amount with personal loan running: (1) Close or reduce personal loan - Lower personal loan EMI = More capacity for home loan (20-40% increase), (2) Add co-applicant - Combined income increases loan capacity (50-100% increase), (3) Improve CIBIL score - Higher score gets better rates and amounts (10-30% increase), (4) Increase income - Show additional income sources (rental income, investments), (5) Wait for personal loan to reduce - As personal loan reduces, capacity increases. Use our calculator to see exact increase with these strategies.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan with Personal Loan Running?",
  ctaSub:
    "Calculate your loan capacity with personal loan. Compare offers from 30+ banks. Get expert guidance to maximize loan amount. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Eligibility with Existing Loan Hyderabad", href: "/home-loan-eligibility-with-existing-loan-hyderabad" },
    { label: "How Much Home Loan Can I Get Hyderabad", href: "/how-much-home-loan-can-i-get-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Based on Salary Hyderabad", href: "/home-loan-based-on-salary-hyderabad" },
  ],
};

export default function HomeLoanWithPersonalLoanRunningHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
