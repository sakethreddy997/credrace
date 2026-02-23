import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Plot Purchase in Hyderabad | Plot Loan | Best Rates | Credrace",
  description:
    "Get home loan for plot purchase in Hyderabad. Special plot loans available. Compare rates from 30+ banks. Interest rates starting 8.25%, loan up to ₹5 Cr. Lower LTV but flexible terms.",
  keywords: [
    "home loan for plot purchase hyderabad",
    "plot loan hyderabad",
    "land loan hyderabad",
    "home loan plot hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-plot-purchase-hyderabad` },
  openGraph: {
    title: "Home Loan for Plot Purchase Hyderabad | Credrace",
    description: "Home loan for plot purchase in Hyderabad. Special plot loans. Compare 30+ banks.",
    url: `${SITE_URL}/home-loan-plot-purchase-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Plot Purchase in Hyderabad | Plot Loan | Best Rates | Credrace",
  description:
    "Get home loan for plot purchase in Hyderabad. Special plot loans available. Compare rates from 30+ banks. Interest rates starting 8.25%.",
  url: "/home-loan-plot-purchase-hyderabad",
  keywords: [
    "home loan for plot purchase hyderabad",
    "plot loan hyderabad",
    "land loan hyderabad",
  ],

  heroLabel: "Home Loan for Plot Purchase",
  heroHeadline: "Home Loan for Plot Purchase in Hyderabad",
  heroSub:
    "Get home loan for plot purchase in Hyderabad. Special plot loans available with competitive rates. Compare offers from 30+ banks. Interest rates starting 8.25%, loan up to ₹5 Cr. Lower LTV but flexible terms.",
  stats: [
    { value: "8.25%", label: "Starting interest rate" },
    { value: "₹5 Cr", label: "Maximum loan amount" },
    { value: "60-70%", label: "LTV ratio" },
    { value: "30+", label: "Banks compared" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Planning to buy a <strong>plot in Hyderabad</strong> for future construction? You can get a home loan specifically for plot purchase. Plot loans have slightly different terms than regular home loans, but offer competitive rates and flexible options.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>compare plot loan offers from 30+ banks</strong> in Hyderabad. Get the best rates, understand LTV limits, and apply online with dedicated support.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Plot Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Understanding Plot Loans</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏗️ What is Plot Loan?</h3>
            <p class="text-gray-600">Plot loan is a home loan variant specifically for purchasing residential plots. It's different from regular home loan as there's no built property as collateral initially.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Lower LTV Ratio</h3>
            <p class="text-gray-600">Plot loans typically offer 60-70% LTV (Loan-to-Value) compared to 80-90% for regular home loans. You need to pay 30-40% down payment.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Competitive Rates</h3>
            <p class="text-gray-600">Interest rates are similar to regular home loans, starting from 8.25% per annum. Rates depend on your credit profile, income, and plot location.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">⏰ Flexible Tenure</h3>
            <p class="text-gray-600">Plot loans offer flexible tenure up to 20-25 years. Some banks offer longer tenure if you plan to construct within a certain period.</p>
          </div>
        </div>
      </div>

      <!-- LTV and Eligibility -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">LTV Ratio and Eligibility</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-3">LTV Ratio for Plot Loans</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Maximum 60-70% of plot value</li>
              <li>• Higher down payment required (30-40%)</li>
              <li>• Lower LTV due to no built property</li>
              <li>• Some banks offer higher LTV for approved layouts</li>
            </ul>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-3">Eligibility Criteria</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Age: 21-65 years (salaried), 21-70 years (self-employed)</li>
              <li>• Income: Minimum ₹25,000/month</li>
              <li>• CIBIL Score: 650+ (700+ preferred)</li>
              <li>• Plot should be in approved layout</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Rates -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Plot Loan Interest Rates</h2>
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
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Compare plot loan offers from 30+ banks - Get the best deal",
    },
    {
      text: "Competitive rates - Starting from 8.25% per annum",
    },
    {
      text: "Flexible tenure - Up to 20-25 years",
    },
    {
      text: "Expert guidance - Our managers help you understand plot loan terms",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Dedicated support - Personal manager guides you through entire process",
    },
  ],

  faqs: [
    {
      question: "What is the difference between plot loan and home loan?",
      answer:
        "Plot loan is for purchasing residential plots (land), while home loan is for purchasing built properties. Key differences: (1) LTV ratio - Plot loans offer 60-70% LTV vs 80-90% for home loans, (2) Down payment - Higher down payment (30-40%) required for plot loans, (3) Tenure - Plot loans typically up to 20-25 years vs 30 years for home loans, (4) Interest rates - Similar rates but may be slightly higher for plot loans.",
    },
    {
      question: "How much loan can I get for plot purchase?",
      answer:
        "You can get 60-70% of plot value as loan, subject to eligibility. For example, for ₹1 Crore plot, you can get ₹60-70 Lakh as loan and need to pay ₹30-40 Lakh as down payment. Some banks offer higher LTV (up to 75%) for approved layouts or if you plan to construct within 2-3 years.",
    },
    {
      question: "What documents are required for plot loan?",
      answer:
        "Documents required: Identity proof (Aadhaar, PAN), address proof, income proof (salary slips, Form 16, or ITR), plot documents (sale agreement, title deed, approved layout plan, NOC from authorities), bank statements, and photographs. Plot should be in approved residential layout.",
    },
    {
      question: "Can I get plot loan for agricultural land?",
      answer:
        "No, plot loans are only for residential plots in approved layouts. Agricultural land, commercial plots, or unapproved layouts are not eligible. The plot should have clear title, be in approved residential zone, and have necessary approvals from local authorities.",
    },
    {
      question: "What is the interest rate for plot loan?",
      answer:
        "Plot loan interest rates start from 8.25% per annum for prime borrowers with CIBIL score 750+. Rates range from 8.25% to 9.75% depending on your credit score, income, plot location, and lender. Rates are similar to regular home loans but may be slightly higher. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "Can I convert plot loan to home loan after construction?",
      answer:
        "Yes, many banks allow conversion of plot loan to home loan after you start construction. You can get additional loan for construction (up to approved amount) and convert the entire loan into a regular home loan. This allows you to get higher LTV (80-90%) on completed property. Check with your bank for specific conversion terms.",
    },
  ],

  ctaHeadline: "Ready to Buy Your Plot?",
  ctaSub:
    "Check your eligibility. Compare plot loan offers from 30+ banks. Get the best rate and terms. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Home Loan for Construction Hyderabad", href: "/home-loan-construction-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
  ],
};

export default function HomeLoanPlotPurchaseHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
