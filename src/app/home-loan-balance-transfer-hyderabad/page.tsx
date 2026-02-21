import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Balance Transfer in Hyderabad | Lower Interest Rates | Save Lakhs | Credrace",
  description:
    "Transfer your existing home loan to a lower interest rate in Hyderabad. Save lakhs on interest. Compare balance transfer offers from 30+ banks. No prepayment charges. Apply online with Credrace.",
  keywords: [
    "home loan balance transfer hyderabad",
    "home loan transfer hyderabad",
    "home loan refinancing hyderabad",
    "balance transfer home loan hyderabad",
  ],
  openGraph: {
    title: "Home Loan Balance Transfer Hyderabad | Credrace",
    description: "Transfer home loan to lower rate in Hyderabad. Save lakhs. Compare 30+ banks.",
    url: `${SITE_URL}/home-loan-balance-transfer-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Balance Transfer in Hyderabad | Lower Interest Rates | Save Lakhs | Credrace",
  description:
    "Transfer your existing home loan to a lower interest rate in Hyderabad. Save lakhs on interest. Compare balance transfer offers from 30+ banks.",
  url: "/home-loan-balance-transfer-hyderabad",
  keywords: [
    "home loan balance transfer hyderabad",
    "home loan transfer hyderabad",
    "home loan refinancing hyderabad",
  ],

  heroLabel: "Home Loan Balance Transfer",
  heroHeadline: "Home Loan Balance Transfer in Hyderabad",
  heroSub:
    "Transfer your existing home loan to a lower interest rate and save lakhs. Compare balance transfer offers from 30+ banks in Hyderabad. No prepayment charges on floating rate loans. Apply online with Credrace.",
  stats: [
    { value: "Save", label: "Up to ₹5 Lakh" },
    { value: "30+", label: "Banks compared" },
    { value: "0%", label: "Prepayment charges" },
    { value: "5-7 days", label: "Transfer time" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Already have a <strong>home loan in Hyderabad</strong> but paying a high interest rate? You can transfer your existing home loan to another bank offering a lower rate and save lakhs over the loan tenure. This is called <strong>home loan balance transfer</strong> or refinancing.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>compare balance transfer offers from 30+ banks</strong> in Hyderabad. Find the best rate, calculate your savings, and transfer your loan seamlessly. No prepayment charges on floating rate loans as per RBI guidelines.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Why Balance Transfer -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Why Transfer Your Home Loan?</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Save Lakhs</h3>
            <p class="text-gray-600">Even a 0.5% reduction in interest rate can save you ₹2-5 Lakh over 20 years on a ₹50 Lakh loan. Transfer to a lower rate and reduce your EMI or loan tenure.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📉 Lower EMI</h3>
            <p class="text-gray-600">Transfer to a lower rate and reduce your monthly EMI, improving your cash flow. Or keep the same EMI and reduce your loan tenure.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🔄 Better Terms</h3>
            <p class="text-gray-600">Get better terms, lower processing fees, or flexible repayment options. Some banks offer special rates for balance transfers.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ No Prepayment Charges</h3>
            <p class="text-gray-600">RBI guidelines allow zero prepayment charges on floating rate home loans. Transfer without any penalty on your existing loan.</p>
          </div>
        </div>
      </div>

      <!-- Process -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">How to Transfer Your Home Loan</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">1</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Check Current Rate</h4>
              <p class="text-sm text-gray-600">Know your current interest rate and outstanding loan amount. Check if you're on floating or fixed rate.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">2</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Compare Offers</h4>
              <p class="text-sm text-gray-600">Compare balance transfer offers from 30+ banks. See interest rates, processing fees, and calculate your savings.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">3</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Choose Best Offer</h4>
              <p class="text-sm text-gray-600">Select the bank offering the lowest rate and best terms. Calculate total savings including processing fees.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">4</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Apply for Transfer</h4>
              <p class="text-sm text-gray-600">Submit balance transfer application with required documents. New bank will process and disburse to close your old loan.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">5</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Loan Transferred</h4>
              <p class="text-sm text-gray-600">New bank pays off your old loan. You start paying EMI to the new bank at the lower rate. Process takes 5-7 days.</p>
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
            <span><strong class="text-gray-900">Floating Rate Loans:</strong> No prepayment charges as per RBI guidelines. You can transfer anytime.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Fixed Rate Loans:</strong> May have prepayment charges. Check with your current bank before transferring.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Processing Fee:</strong> New bank may charge processing fee (0.5-1% of loan amount). Factor this into savings calculation.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Minimum Savings:</strong> Transfer only if you can save at least ₹50,000-1 Lakh over the loan tenure after accounting for processing fees.</span>
          </li>
        </ul>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Compare balance transfer offers from 30+ banks - Find the lowest rate",
    },
    {
      text: "Save lakhs - Even 0.5% rate reduction can save ₹2-5 Lakh over 20 years",
    },
    {
      text: "No prepayment charges - Zero penalty on floating rate loans as per RBI",
    },
    {
      text: "Quick transfer - Complete the process in 5-7 days",
    },
    {
      text: "Expert guidance - Our managers help you calculate savings and choose best offer",
    },
    {
      text: "Seamless process - New bank handles all paperwork and loan closure",
    },
  ],

  faqs: [
    {
      question: "What is home loan balance transfer?",
      answer:
        "Home loan balance transfer is the process of transferring your existing home loan from one bank to another bank offering a lower interest rate. The new bank pays off your old loan, and you start paying EMI to the new bank at the lower rate. This helps you save on interest payments.",
    },
    {
      question: "Are there any charges for home loan balance transfer?",
      answer:
        "For floating rate home loans, there are no prepayment charges as per RBI guidelines. However, the new bank may charge a processing fee (typically 0.5-1% of loan amount). For fixed rate loans, your current bank may charge prepayment penalty. Always check with both banks before transferring.",
    },
    {
      question: "How much can I save by transferring my home loan?",
      answer:
        "Savings depend on the interest rate difference and remaining loan tenure. For example, on a ₹50 Lakh loan with 20 years remaining, a 0.5% rate reduction can save you ₹2-3 Lakh. A 1% reduction can save ₹4-5 Lakh. Use our calculator to estimate your exact savings.",
    },
    {
      question: "When should I transfer my home loan?",
      answer:
        "You should consider transferring if: (1) Current rate is 0.5% or more higher than market rates, (2) You have at least 5-10 years of loan tenure remaining, (3) You can save at least ₹50,000-1 Lakh after processing fees, (4) Your current loan is on floating rate (no prepayment charges).",
    },
    {
      question: "How long does home loan balance transfer take?",
      answer:
        "Home loan balance transfer typically takes 5-7 working days when you apply through Credrace. The process includes eligibility check, document verification, property valuation (if required), approval, and disbursement to close your old loan.",
    },
    {
      question: "What documents are required for home loan balance transfer?",
      answer:
        "You need identity proof, address proof, income proof (salary slips, Form 16, or ITR), property documents, statement of account from current bank showing outstanding loan, and NOC from current bank. The new bank will also verify your property and credit profile.",
    },
  ],

  ctaHeadline: "Ready to Transfer Your Home Loan?",
  ctaSub:
    "Compare balance transfer offers from 30+ banks. Calculate your savings. Transfer to a lower rate and save lakhs. Zero CIBIL impact on comparison.",
  ctaButtonText: "Check Balance Transfer Offers",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan Refinancing Hyderabad", href: "/home-loan-refinancing-hyderabad" },
    { label: "Home Loan Prepayment Hyderabad", href: "/home-loan-prepayment-hyderabad" },
  ],
};

export default function HomeLoanBalanceTransferHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
