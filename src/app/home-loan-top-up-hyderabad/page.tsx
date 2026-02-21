import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Top-up in Hyderabad | Additional Loan | Best Rates | Credrace",
  description:
    "Get home loan top-up in Hyderabad. Additional loan over existing home loan. Compare top-up offers from 30+ banks. Interest rates starting 8.25%, quick approval. Use for renovation, other needs.",
  keywords: [
    "home loan top up hyderabad",
    "home loan top-up hyderabad",
    "additional home loan hyderabad",
    "home loan top up loan hyderabad",
  ],
  openGraph: {
    title: "Home Loan Top-up Hyderabad | Credrace",
    description: "Home loan top-up in Hyderabad. Additional loan over existing loan. Compare 30+ banks.",
    url: `${SITE_URL}/home-loan-top-up-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Top-up in Hyderabad | Additional Loan | Best Rates | Credrace",
  description:
    "Get home loan top-up in Hyderabad. Additional loan over existing home loan. Compare top-up offers from 30+ banks. Interest rates starting 8.25%.",
  url: "/home-loan-top-up-hyderabad",
  keywords: [
    "home loan top up hyderabad",
    "home loan top-up hyderabad",
    "additional home loan hyderabad",
  ],

  heroLabel: "Home Loan Top-up",
  heroHeadline: "Home Loan Top-up in Hyderabad",
  heroSub:
    "Get additional loan over your existing home loan in Hyderabad. Home loan top-up allows you to borrow more against your property. Compare top-up offers from 30+ banks. Interest rates starting 8.25%, quick approval. Use for renovation, other needs.",
  stats: [
    { value: "8.25%", label: "Starting interest rate" },
    { value: "₹50 L", label: "Max top-up amount" },
    { value: "Quick", label: "Approval" },
    { value: "30+", label: "Banks compared" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Already have a <strong>home loan in Hyderabad</strong> and need additional funds? Get a <strong>home loan top-up</strong> - an additional loan over your existing home loan. Top-up loans are easier to get, have competitive rates, and can be used for any purpose.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>compare home loan top-up offers from 30+ banks</strong> in Hyderabad. Get the best rates, understand eligibility, and apply online with dedicated support.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Top-up Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Understanding Home Loan Top-up</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 What is Top-up Loan?</h3>
            <p class="text-gray-600">Top-up loan is additional loan over your existing home loan, secured against the same property. It's easier to get than a fresh loan as property is already mortgaged.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Loan Amount</h3>
            <p class="text-gray-600">Top-up amount depends on property value, existing loan, and your eligibility. Typically, you can get 10-20% of property value or ₹10-50 Lakh, whichever is lower.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏠 Usage Flexibility</h3>
            <p class="text-gray-600">Top-up loan can be used for any purpose - home renovation, child education, medical expenses, business, debt consolidation, or any other need. No end-use restrictions.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">⚡ Quick Approval</h3>
            <p class="text-gray-600">Top-up loans have faster approval (3-5 days) as property is already mortgaged and verified. Minimal documentation required compared to fresh loans.</p>
          </div>
        </div>
      </div>

      <!-- Eligibility -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Top-up Loan Eligibility</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-3">Basic Requirements</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Existing home loan with good repayment history</li>
              <li>• Property value should have appreciated</li>
              <li>• At least 12-24 months of regular EMI payments</li>
              <li>• Good CIBIL score (700+ preferred)</li>
            </ul>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-3">Loan Amount Factors</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Current property value</li>
              <li>• Outstanding loan amount</li>
              <li>• Your income and repayment capacity</li>
              <li>• Bank's LTV policy (typically 70-80% of property value)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Rates -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Top-up Loan Interest Rates</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div class="p-6">
              <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Prime Borrowers</p>
              <p class="text-2xl font-extrabold text-emerald-600 mb-1">8.25% - 8.75%</p>
              <p class="text-sm text-gray-600">CIBIL 750+</p>
            </div>
            <div class="p-6">
              <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Good Credit</p>
              <p class="text-2xl font-extrabold text-gray-700 mb-1">8.75% - 9.25%</p>
              <p class="text-sm text-gray-600">CIBIL 700-749</p>
            </div>
            <div class="p-6">
              <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Average Credit</p>
              <p class="text-2xl font-extrabold text-gray-700 mb-1">9.25% - 9.75%</p>
              <p class="text-sm text-gray-600">CIBIL 650-699</p>
            </div>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-4">Rates are similar to regular home loans. Compare offers from 30+ banks to find the best rate.</p>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Compare top-up offers from 30+ banks - Get the best deal",
    },
    {
      text: "Quick approval - Get approved in 3-5 days",
    },
    {
      text: "Flexible usage - Use for any purpose",
    },
    {
      text: "Competitive rates - Starting from 8.25% per annum",
    },
    {
      text: "Minimal documentation - Easier than fresh loans",
    },
    {
      text: "Expert guidance - Our managers help you understand options and choose best offer",
    },
  ],

  faqs: [
    {
      question: "What is home loan top-up?",
      answer:
        "Home loan top-up is an additional loan over your existing home loan, secured against the same property. It allows you to borrow more money without taking a separate loan. Top-up amount depends on property value, existing loan, and your eligibility. Typically, you can get 10-20% of property value or ₹10-50 Lakh as top-up.",
    },
    {
      question: "How much top-up loan can I get?",
      answer:
        "Top-up amount depends on: (1) Current property value, (2) Outstanding home loan amount, (3) Your income and repayment capacity, (4) Bank's LTV policy (typically 70-80% of property value). For example, if property is worth ₹1 Cr and you have ₹40 Lakh outstanding, you may get ₹30-40 Lakh as top-up (subject to eligibility).",
    },
    {
      question: "What can I use top-up loan for?",
      answer:
        "Top-up loan can be used for any purpose - home renovation, child education, medical expenses, business, debt consolidation, wedding, travel, or any other need. Unlike regular home loans, there are no end-use restrictions on top-up loans. You have complete flexibility in usage.",
    },
    {
      question: "What is the interest rate for top-up loan?",
      answer:
        "Top-up loan interest rates are similar to regular home loans, starting from 8.25% per annum for prime borrowers with CIBIL score 750+. Rates range from 8.25% to 9.75% depending on your credit score, income, and lender. Some banks may charge slightly higher rates for top-up. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "How long does top-up loan approval take?",
      answer:
        "Top-up loan approval is faster than fresh loans, typically 3-5 working days when you apply through Credrace. Since property is already mortgaged and verified, banks require minimal documentation and faster processing. Approval depends on your repayment history, property value, and eligibility.",
    },
    {
      question: "Can I get top-up from different bank?",
      answer:
        "Yes, you can get top-up from a different bank, but it requires refinancing your entire home loan (existing + top-up) to the new bank. This is more complex and may involve prepayment charges if your current loan is fixed rate. Getting top-up from same bank is easier and faster. Compare both options through Credrace.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan Top-up?",
  ctaSub:
    "Check your eligibility. Compare top-up offers from 30+ banks. Get additional funds at best rates. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Home Loan Refinancing Hyderabad", href: "/home-loan-refinancing-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
  ],
};

export default function HomeLoanTopUpHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
