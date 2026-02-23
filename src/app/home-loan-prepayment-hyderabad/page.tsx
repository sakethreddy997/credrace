import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Prepayment in Hyderabad | Save Interest | No Charges | Credrace",
  description:
    "Prepay your home loan in Hyderabad and save lakhs on interest. No prepayment charges on floating rate loans. Reduce loan tenure or EMI. Calculate savings. Apply online with Credrace.",
  keywords: [
    "home loan prepayment hyderabad",
    "home loan partial prepayment hyderabad",
    "home loan prepayment charges hyderabad",
    "prepay home loan hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-prepayment-hyderabad` },
  openGraph: {
    title: "Home Loan Prepayment Hyderabad | Credrace",
    description: "Prepay home loan in Hyderabad. Save lakhs on interest. No charges on floating rate.",
    url: `${SITE_URL}/home-loan-prepayment-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Prepayment in Hyderabad | Save Interest | No Charges | Credrace",
  description:
    "Prepay your home loan in Hyderabad and save lakhs on interest. No prepayment charges on floating rate loans. Reduce loan tenure or EMI.",
  url: "/home-loan-prepayment-hyderabad",
  keywords: [
    "home loan prepayment hyderabad",
    "home loan partial prepayment hyderabad",
    "home loan prepayment charges hyderabad",
  ],

  heroLabel: "Home Loan Prepayment",
  heroHeadline: "Home Loan Prepayment in Hyderabad",
  heroSub:
    "Prepay your home loan and save lakhs on interest. No prepayment charges on floating rate loans as per RBI guidelines. Reduce your loan tenure or EMI. Calculate your savings and prepay smartly.",
  stats: [
    { value: "0%", label: "Prepayment charges" },
    { value: "Save", label: "Lakhs on interest" },
    { value: "Reduce", label: "Loan tenure" },
    { value: "Flexible", label: "Options" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Have extra funds and want to <strong>prepay your home loan in Hyderabad</strong>? Prepayment can help you save lakhs on interest and reduce your loan tenure. Best part - there are no prepayment charges on floating rate home loans as per RBI guidelines.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>understand home loan prepayment options</strong> in Hyderabad. Calculate your savings, choose between reducing tenure or EMI, and prepay smartly to save maximum interest.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Benefits of Prepayment -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Benefits of Home Loan Prepayment</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Save Lakhs on Interest</h3>
            <p class="text-gray-600">Prepayment reduces principal, which reduces total interest payable. For example, prepaying ₹5 Lakh on ₹50 Lakh loan can save ₹8-10 Lakh in interest over remaining tenure.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">⏰ Reduce Loan Tenure</h3>
            <p class="text-gray-600">Prepayment reduces loan tenure while keeping EMI same. You become debt-free faster and save on interest. For example, ₹5 Lakh prepayment can reduce tenure by 2-3 years.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📉 Reduce EMI (Optional)</h3>
            <p class="text-gray-600">You can also choose to reduce EMI while keeping tenure same. This improves your monthly cash flow while still saving on interest.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ No Prepayment Charges</h3>
            <p class="text-gray-600">RBI guidelines allow zero prepayment charges on floating rate home loans. You can prepay anytime without any penalty. Fixed rate loans may have charges - check with your bank.</p>
          </div>
        </div>
      </div>

      <!-- Prepayment Options -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Prepayment Options</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📉 Reduce Tenure (Recommended)</h3>
            <p class="text-sm text-gray-600 mb-3">Keep EMI same, reduce loan tenure. You become debt-free faster and save maximum interest. Best option if you can afford current EMI.</p>
            <p class="text-xs font-semibold text-emerald-600">Best for: Maximum interest savings</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💰 Reduce EMI</h3>
            <p class="text-sm text-gray-600 mb-3">Keep tenure same, reduce monthly EMI. Improves cash flow while still saving interest. Good option if you need lower monthly payment.</p>
            <p class="text-xs font-semibold text-emerald-600">Best for: Better cash flow</p>
          </div>
        </div>
      </div>

      <!-- When to Prepay -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">When Should You Prepay?</h3>
        <ul class="space-y-3 text-sm text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Early in Loan Tenure:</strong> Prepaying early saves more interest as principal is higher. Best time to prepay is in first 5-10 years.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">When You Have Surplus Funds:</strong> If you have extra money earning less than home loan interest rate, prepay to save more.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Before Interest Rate Hike:</strong> If you expect interest rates to increase, prepay to reduce principal and future interest burden.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">After Tax Benefits End:</strong> Once you've claimed maximum tax benefits, prepay to reduce interest cost.</span>
          </li>
        </ul>
      </div>

      <!-- Prepayment Charges -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Prepayment Charges</h3>
        <div class="space-y-3 text-sm text-gray-600">
          <div class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <div>
              <strong class="text-gray-900">Floating Rate Loans:</strong> Zero prepayment charges as per RBI guidelines. You can prepay anytime without penalty.
            </div>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-amber-500 font-bold mt-0.5">⚠</span>
            <div>
              <strong class="text-gray-900">Fixed Rate Loans:</strong> May have prepayment charges (typically 2-4% of prepaid amount). Check with your bank before prepaying.
            </div>
          </div>
          <div class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <div>
              <strong class="text-gray-900">Partial Prepayment:</strong> Most banks allow partial prepayment (minimum ₹25,000-50,000) without charges on floating rate loans.
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Save lakhs on interest - Prepayment reduces total interest payable significantly",
    },
    {
      text: "No prepayment charges - Zero penalty on floating rate loans as per RBI",
    },
    {
      text: "Reduce loan tenure - Become debt-free faster",
    },
    {
      text: "Flexible options - Choose to reduce tenure or EMI",
    },
    {
      text: "Calculate savings - Use our calculator to see exact savings",
    },
    {
      text: "Expert guidance - Our managers help you decide when and how much to prepay",
    },
  ],

  faqs: [
    {
      question: "Are there prepayment charges on home loan?",
      answer:
        "For floating rate home loans, there are no prepayment charges as per RBI guidelines. You can prepay anytime without penalty. For fixed rate home loans, banks may charge prepayment penalty (typically 2-4% of prepaid amount). Always check with your bank before prepaying, especially for fixed rate loans.",
    },
    {
      question: "How much can I save by prepaying home loan?",
      answer:
        "Savings depend on prepayment amount, remaining tenure, and interest rate. For example, prepaying ₹5 Lakh on ₹50 Lakh loan (20 years remaining, 8.25% rate) can save ₹8-10 Lakh in interest and reduce tenure by 2-3 years. Prepaying early in loan tenure saves more as principal is higher. Use our calculator to see exact savings.",
    },
    {
      question: "Should I prepay home loan or invest the money?",
      answer:
        "Prepay if: (1) Home loan interest rate is higher than investment returns, (2) You're in high tax bracket (prepayment saves guaranteed interest), (3) You want to be debt-free faster. Invest if: (1) Investment returns are higher than loan rate, (2) You need liquidity, (3) You can claim tax benefits. Generally, if loan rate is 8%+, prepayment is better than most fixed deposits.",
    },
    {
      question: "Can I prepay home loan partially?",
      answer:
        "Yes, most banks allow partial prepayment on floating rate home loans. Minimum prepayment amount is typically ₹25,000-50,000. You can prepay multiple times during loan tenure. Each prepayment reduces principal and saves interest. No charges on partial prepayment for floating rate loans.",
    },
    {
      question: "Should I reduce tenure or EMI after prepayment?",
      answer:
        "Reduce tenure (keep EMI same) if: You can afford current EMI and want maximum interest savings. Reduce EMI (keep tenure same) if: You need better cash flow or want to invest the EMI difference elsewhere. Generally, reducing tenure saves more interest, but reducing EMI improves cash flow. Choose based on your financial goals.",
    },
    {
      question: "When is the best time to prepay home loan?",
      answer:
        "Best time to prepay is: (1) Early in loan tenure (first 5-10 years) when principal is higher, (2) When you have surplus funds earning less than loan rate, (3) Before expected interest rate hikes, (4) After claiming maximum tax benefits. Prepaying early saves maximum interest as you're reducing principal when it's highest.",
    },
  ],

  ctaHeadline: "Ready to Prepay Your Home Loan?",
  ctaSub:
    "Calculate your savings. Understand prepayment options. Reduce loan tenure and save lakhs on interest. Get expert guidance.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Balance Transfer Hyderabad", href: "/home-loan-balance-transfer-hyderabad" },
    { label: "Home Loan Calculator Hyderabad", href: "/home-loan-calculator-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
  ],
};

export default function HomeLoanPrepaymentHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
