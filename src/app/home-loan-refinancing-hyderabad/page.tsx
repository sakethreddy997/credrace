import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Refinancing in Hyderabad | Lower Rates | Save Lakhs | Credrace",
  description:
    "Refinance your home loan in Hyderabad to get lower interest rates. Save lakhs on interest. Compare refinancing offers from 30+ banks. No prepayment charges on floating rate. Apply online with Credrace.",
  keywords: [
    "home loan refinancing hyderabad",
    "home loan refinance hyderabad",
    "refinance home loan hyderabad",
    "home loan refinance rates hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-refinancing-hyderabad` },
  openGraph: {
    title: "Home Loan Refinancing Hyderabad | Credrace",
    description: "Refinance home loan in Hyderabad. Get lower rates, save lakhs. Compare 30+ banks.",
    url: `${SITE_URL}/home-loan-refinancing-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Refinancing in Hyderabad | Lower Rates | Save Lakhs | Credrace",
  description:
    "Refinance your home loan in Hyderabad to get lower interest rates. Save lakhs on interest. Compare refinancing offers from 30+ banks.",
  url: "/home-loan-refinancing-hyderabad",
  keywords: [
    "home loan refinancing hyderabad",
    "home loan refinance hyderabad",
    "refinance home loan hyderabad",
  ],

  heroLabel: "Home Loan Refinancing",
  heroHeadline: "Home Loan Refinancing in Hyderabad",
  heroSub:
    "Refinance your existing home loan in Hyderabad to get lower interest rates and save lakhs. Compare refinancing offers from 30+ banks. No prepayment charges on floating rate loans. Apply online with Credrace.",
  stats: [
    { value: "Save", label: "Up to ₹5 Lakh" },
    { value: "30+", label: "Banks compared" },
    { value: "0%", label: "Prepayment charges" },
    { value: "5-7 days", label: "Refinancing time" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Paying a high interest rate on your <strong>home loan in Hyderabad</strong>? Refinance your loan to get a lower rate and save lakhs on interest. Home loan refinancing (also called balance transfer) allows you to transfer your existing loan to another bank offering better rates.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>compare refinancing offers from 30+ banks</strong> in Hyderabad. Find the best rate, calculate your savings, and refinance seamlessly. No prepayment charges on floating rate loans as per RBI guidelines.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Why Refinance -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Why Refinance Your Home Loan?</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Save Lakhs</h3>
            <p class="text-gray-600">Even 0.5% rate reduction can save ₹2-5 Lakh over 20 years on ₹50 Lakh loan. Refinance to lower rate and reduce total interest payable significantly.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📉 Lower EMI</h3>
            <p class="text-gray-600">Refinance to lower rate and reduce your monthly EMI, improving cash flow. Or keep same EMI and reduce loan tenure to become debt-free faster.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🔄 Better Terms</h3>
            <p class="text-gray-600">Get better terms, lower processing fees, or flexible repayment options. Some banks offer special rates for refinancing.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ No Prepayment Charges</h3>
            <p class="text-gray-600">RBI guidelines allow zero prepayment charges on floating rate home loans. Refinance without any penalty on your existing loan.</p>
          </div>
        </div>
      </div>

      <!-- When to Refinance -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">When Should You Refinance?</h3>
        <ul class="space-y-3 text-sm text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Rate Difference:</strong> If current rate is 0.5% or more higher than available rates, refinancing makes sense.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Remaining Tenure:</strong> If you have at least 5-10 years remaining, refinancing can save significant amount.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Savings After Fees:</strong> Refinance only if you can save at least ₹50,000-1 Lakh after accounting for processing fees.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Floating Rate Loan:</strong> Refinancing is easier for floating rate loans (no prepayment charges). Fixed rate loans may have charges.</span>
          </li>
        </ul>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Save lakhs on interest - Refinance to lower rate and reduce total interest",
    },
    {
      text: "No prepayment charges - Zero penalty on floating rate loans as per RBI",
    },
    {
      text: "Lower EMI - Reduce monthly payment or loan tenure",
    },
    {
      text: "Compare offers from 30+ banks - Find the best refinancing deal",
    },
    {
      text: "Quick process - Complete refinancing in 5-7 days",
    },
    {
      text: "Expert guidance - Our managers help you calculate savings and choose best offer",
    },
  ],

  faqs: [
    {
      question: "What is home loan refinancing?",
      answer:
        "Home loan refinancing (also called balance transfer) is the process of transferring your existing home loan from one bank to another bank offering a lower interest rate. The new bank pays off your old loan, and you start paying EMI to the new bank at the lower rate. This helps you save on interest payments over remaining loan tenure.",
    },
    {
      question: "Are there charges for home loan refinancing?",
      answer:
        "For floating rate home loans, there are no prepayment charges as per RBI guidelines. However, the new bank may charge a processing fee (typically 0.5-1% of loan amount). For fixed rate loans, your current bank may charge prepayment penalty (typically 2-4% of outstanding amount). Always check with both banks before refinancing.",
    },
    {
      question: "How much can I save by refinancing home loan?",
      answer:
        "Savings depend on interest rate difference and remaining loan tenure. For example, on ₹50 Lakh loan with 20 years remaining: 0.5% rate reduction saves ₹2-3 Lakh, 1% rate reduction saves ₹4-5 Lakh, 1.5% rate reduction saves ₹6-8 Lakh. Use our calculator to estimate your exact savings after accounting for processing fees.",
    },
    {
      question: "When should I refinance my home loan?",
      answer:
        "You should consider refinancing if: (1) Current rate is 0.5% or more higher than available rates, (2) You have at least 5-10 years of loan tenure remaining, (3) You can save at least ₹50,000-1 Lakh after processing fees, (4) Your current loan is on floating rate (no prepayment charges). Refinancing early in loan tenure saves more.",
    },
    {
      question: "How long does home loan refinancing take?",
      answer:
        "Home loan refinancing typically takes 5-7 working days when you apply through Credrace. The process includes eligibility check, document verification, property valuation (if required), approval, and disbursement to close your old loan. New bank handles all paperwork and loan closure.",
    },
    {
      question: "What documents are required for refinancing?",
      answer:
        "Documents required: Identity proof, address proof, income proof (salary slips, Form 16, or ITR), property documents, statement of account from current bank showing outstanding loan, NOC from current bank, and photographs. New bank will also verify your property and credit profile. New bank may require fresh property valuation.",
    },
  ],

  ctaHeadline: "Ready to Refinance Your Home Loan?",
  ctaSub:
    "Compare refinancing offers from 30+ banks. Calculate your savings. Refinance to lower rate and save lakhs. Zero CIBIL impact on comparison.",
  ctaButtonText: "Check Refinancing Offers",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Balance Transfer Hyderabad", href: "/home-loan-balance-transfer-hyderabad" },
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan Prepayment Hyderabad", href: "/home-loan-prepayment-hyderabad" },
  ],
};

export default function HomeLoanRefinancingHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
