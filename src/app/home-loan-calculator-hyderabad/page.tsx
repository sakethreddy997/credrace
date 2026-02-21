import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Calculator Hyderabad | EMI Calculator | Interest Calculator | Credrace",
  description:
    "Free home loan calculator for Hyderabad. Calculate EMI, interest, total amount, eligibility. Compare loan offers from 30+ banks. Instant results, no registration required. Use Credrace calculator.",
  keywords: [
    "home loan calculator hyderabad",
    "home loan emi calculator hyderabad",
    "home loan interest calculator hyderabad",
    "housing loan calculator hyderabad",
  ],
  openGraph: {
    title: "Home Loan Calculator Hyderabad | Credrace",
    description: "Free home loan calculator for Hyderabad. Calculate EMI, interest, eligibility instantly.",
    url: `${SITE_URL}/home-loan-calculator-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Calculator Hyderabad | EMI Calculator | Interest Calculator | Credrace",
  description:
    "Free home loan calculator for Hyderabad. Calculate EMI, interest, total amount, eligibility. Compare loan offers from 30+ banks.",
  url: "/home-loan-calculator-hyderabad",
  keywords: [
    "home loan calculator hyderabad",
    "home loan emi calculator hyderabad",
    "home loan interest calculator hyderabad",
  ],

  heroLabel: "Home Loan Calculator",
  heroHeadline: "Home Loan Calculator for Hyderabad",
  heroSub:
    "Free home loan calculator for Hyderabad properties. Calculate EMI, total interest, total amount, and eligibility instantly. Compare loan offers from 30+ banks. No registration required. Use Credrace calculator.",
  stats: [
    { value: "Free", label: "Calculator" },
    { value: "Instant", label: "Results" },
    { value: "30+", label: "Banks compared" },
    { value: "0", label: "Registration" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Planning to buy a <strong>home in Hyderabad</strong>? Use our free <strong>home loan calculator</strong> to calculate your EMI, total interest, total amount payable, and eligible loan amount. Make informed decisions before applying for a home loan.
    </p>
    <p class="text-gray-600">
      At Credrace, we provide a <strong>comprehensive home loan calculator</strong> for Hyderabad properties. Calculate EMI for different loan amounts, interest rates, and tenures. Compare offers from 30+ banks and find the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- What You Can Calculate -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">What You Can Calculate</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 EMI Calculator</h3>
            <p class="text-gray-600">Calculate your monthly EMI (Equated Monthly Installment) based on loan amount, interest rate, and tenure. See how EMI changes with different rates and tenures.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Interest Calculator</h3>
            <p class="text-gray-600">Calculate total interest payable over loan tenure. See how much interest you'll pay and compare different loan options.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏠 Eligibility Calculator</h3>
            <p class="text-gray-600">Calculate your eligible loan amount based on income, existing EMIs, age, and other factors. Know how much you can borrow.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📈 Total Amount Calculator</h3>
            <p class="text-gray-600">Calculate total amount payable (principal + interest) over loan tenure. Understand the true cost of your home loan.</p>
          </div>
        </div>
      </div>

      <!-- How to Use -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">How to Use Home Loan Calculator</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">1</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Enter Loan Details</h4>
              <p class="text-sm text-gray-600">Enter loan amount, interest rate, and tenure. You can also enter property value and down payment to calculate loan amount.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">2</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Get Instant Results</h4>
              <p class="text-sm text-gray-600">See your EMI, total interest, and total amount payable instantly. No registration or sign-up required.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">3</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Compare Options</h4>
              <p class="text-sm text-gray-600">Try different interest rates and tenures to see how they affect your EMI. Compare offers from different banks.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">4</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Make Informed Decision</h4>
              <p class="text-sm text-gray-600">Use calculator results to choose the best loan option. Find the right balance between EMI and total interest.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Example Calculation -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Example Calculation</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <p class="text-sm text-gray-600 mb-1">Loan Amount</p>
            <p class="text-2xl font-extrabold text-emerald-600">₹50 Lakh</p>
          </div>
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <p class="text-sm text-gray-600 mb-1">Interest Rate</p>
            <p class="text-2xl font-extrabold text-emerald-600">8.25%</p>
          </div>
          <div class="text-center p-4 bg-gray-50 rounded-lg">
            <p class="text-sm text-gray-600 mb-1">Tenure</p>
            <p class="text-2xl font-extrabold text-emerald-600">20 Years</p>
          </div>
        </div>
        <div class="mt-6 grid md:grid-cols-3 gap-4">
          <div class="text-center p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm text-gray-600 mb-1">Monthly EMI</p>
            <p class="text-2xl font-extrabold text-emerald-600">₹42,500</p>
          </div>
          <div class="text-center p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm text-gray-600 mb-1">Total Interest</p>
            <p class="text-2xl font-extrabold text-emerald-600">₹52 Lakh</p>
          </div>
          <div class="text-center p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm text-gray-600 mb-1">Total Amount</p>
            <p class="text-2xl font-extrabold text-emerald-600">₹1.02 Cr</p>
          </div>
        </div>
      </div>

      <!-- Tips -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Tips for Using Home Loan Calculator</h3>
        <ul class="space-y-3 text-sm text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Compare Different Rates:</strong> Try rates from 8.25% to 9.75% to see impact on EMI and total interest.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Try Different Tenures:</strong> Longer tenure (30 years) = Lower EMI but higher interest. Shorter tenure (15 years) = Higher EMI but lower interest.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Consider Prepayment:</strong> Use calculator to see how prepayment can reduce total interest and loan tenure.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Check Affordability:</strong> Ensure EMI is not more than 40% of your monthly income for comfortable repayment.</span>
          </li>
        </ul>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Free calculator - Calculate EMI, interest, and eligibility instantly",
    },
    {
      text: "No registration - Use calculator without signing up",
    },
    {
      text: "Compare options - Try different rates and tenures to find best deal",
    },
    {
      text: "Instant results - Get calculations immediately",
    },
    {
      text: "Comprehensive - Calculate EMI, interest, total amount, and eligibility",
    },
    {
      text: "Expert guidance - Our managers help you interpret results and choose best option",
    },
  ],

  faqs: [
    {
      question: "How is home loan EMI calculated?",
      answer:
        "Home loan EMI is calculated using the formula: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1], where P = Principal (loan amount), R = Monthly interest rate (annual rate/12), N = Number of months (tenure x 12). Our calculator does this automatically - just enter loan amount, interest rate, and tenure.",
    },
    {
      question: "What factors affect home loan EMI?",
      answer:
        "Home loan EMI depends on three main factors: (1) Loan amount - Higher loan = Higher EMI, (2) Interest rate - Higher rate = Higher EMI, (3) Tenure - Longer tenure = Lower EMI but higher total interest. Use our calculator to see how each factor affects your EMI.",
    },
    {
      question: "Should I choose longer or shorter tenure?",
      answer:
        "Longer tenure (25-30 years) gives lower EMI but higher total interest. Shorter tenure (15-20 years) gives higher EMI but lower total interest. Choose based on your monthly cash flow - if you can afford higher EMI, go for shorter tenure to save on interest. Use calculator to compare both options.",
    },
    {
      question: "How much EMI can I afford?",
      answer:
        "As a rule of thumb, your EMI should not exceed 40% of your monthly income. For example, if your monthly income is ₹1 Lakh, your EMI should be maximum ₹40,000. However, this also depends on your existing EMIs and expenses. Use our eligibility calculator to know your exact affordable EMI.",
    },
    {
      question: "Can I reduce my EMI?",
      answer:
        "Yes, you can reduce EMI by: (1) Negotiating lower interest rate, (2) Increasing loan tenure, (3) Making partial prepayment to reduce principal, (4) Transferring loan to bank offering lower rate. Use our calculator to see impact of each option.",
    },
    {
      question: "How much interest will I pay over loan tenure?",
      answer:
        "Total interest depends on loan amount, interest rate, and tenure. For example, on ₹50 Lakh loan at 8.25% for 20 years, you'll pay approximately ₹52 Lakh in interest. Use our calculator to see exact interest for your loan details. You can reduce interest by choosing shorter tenure or making prepayments.",
    },
  ],

  ctaHeadline: "Ready to Calculate Your Home Loan?",
  ctaSub:
    "Use our free calculator to calculate EMI, interest, and eligibility. Compare offers from 30+ banks. Get the best home loan deal. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan EMI Calculator Hyderabad", href: "/home-loan-emi-calculator-hyderabad" },
  ],
};

export default function HomeLoanCalculatorHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
