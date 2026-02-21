import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Foreclosure Charges in Hyderabad | Prepayment Penalty | Credrace",
  description:
    "Understand home loan foreclosure charges in Hyderabad. No charges on floating rate loans as per RBI. Charges may apply on fixed rate loans. Learn about foreclosure and save money.",
  keywords: [
    "home loan foreclosure charges hyderabad",
    "home loan prepayment penalty hyderabad",
    "home loan foreclosure hyderabad",
    "home loan closure charges hyderabad",
  ],
  openGraph: {
    title: "Home Loan Foreclosure Charges Hyderabad | Credrace",
    description: "Home loan foreclosure charges in Hyderabad. No charges on floating rate loans.",
    url: `${SITE_URL}/home-loan-foreclosure-charges-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Foreclosure Charges in Hyderabad | Prepayment Penalty | Credrace",
  description:
    "Understand home loan foreclosure charges in Hyderabad. No charges on floating rate loans as per RBI. Charges may apply on fixed rate loans.",
  url: "/home-loan-foreclosure-charges-hyderabad",
  keywords: [
    "home loan foreclosure charges hyderabad",
    "home loan prepayment penalty hyderabad",
    "home loan foreclosure hyderabad",
  ],

  heroLabel: "Home Loan Foreclosure Charges",
  heroHeadline: "Home Loan Foreclosure Charges in Hyderabad",
  heroSub:
    "Understand home loan foreclosure (prepayment) charges in Hyderabad. No charges on floating rate loans as per RBI guidelines. Charges may apply on fixed rate loans. Learn about foreclosure and save money.",
  stats: [
    { value: "0%", label: "Floating rate" },
    { value: "2-4%", label: "Fixed rate (may apply)" },
    { value: "RBI", label: "Guidelines" },
    { value: "Save", label: "Money" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Planning to <strong>foreclose (prepay) your home loan in Hyderabad</strong>? Understanding foreclosure charges is important. Good news - there are no foreclosure charges on floating rate home loans as per RBI guidelines. However, fixed rate loans may have charges.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>understand foreclosure charges</strong> in Hyderabad. Learn about RBI guidelines, when charges apply, and how to avoid them. Get expert guidance on foreclosure.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Foreclosure Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Understanding Foreclosure Charges</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Floating Rate Loans</h3>
            <p class="text-gray-600">Zero foreclosure charges as per RBI guidelines. You can prepay or foreclose floating rate home loans anytime without any penalty. This applies to both partial and full foreclosure.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Fixed Rate Loans</h3>
            <p class="text-gray-600">Fixed rate loans may have foreclosure charges (typically 2-4% of prepaid amount). Charges depend on bank policy and loan terms. Check with your bank before foreclosing fixed rate loan.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ RBI Guidelines</h3>
            <p class="text-gray-600">RBI has prohibited banks from charging foreclosure penalty on floating rate home loans. This applies to all banks and HFCs. Fixed rate loans are exempt from this rule.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💡 How to Avoid Charges</h3>
            <p class="text-gray-600">Choose floating rate loan to avoid foreclosure charges. If you have fixed rate loan, check charges before foreclosing. Some banks may waive charges in certain cases.</p>
          </div>
        </div>
      </div>

      <!-- Charges Comparison -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Foreclosure Charges Comparison</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Loan Type</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Foreclosure Charges</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">RBI Guidelines</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Floating Rate Home Loan</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">0% (Zero)</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">RBI Prohibited</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Fixed Rate Home Loan</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-amber-600">2-4% (May Apply)</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Bank Discretion</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Partial Prepayment</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">0% (Floating)</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">RBI Prohibited</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Full Foreclosure</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">0% (Floating)</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">RBI Prohibited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Tips -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Tips to Avoid Foreclosure Charges</h3>
        <ul class="space-y-3 text-sm text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Choose Floating Rate:</strong> Opt for floating rate loan to avoid foreclosure charges. You can prepay anytime without penalty.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Check Loan Terms:</strong> Before taking loan, check if it's floating or fixed rate. Understand foreclosure charges in loan agreement.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Negotiate Charges:</strong> If you have fixed rate loan, negotiate with bank to reduce or waive foreclosure charges before foreclosing.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-emerald-500 font-bold mt-0.5">✓</span>
            <span><strong class="text-gray-900">Transfer to Floating:</strong> Some banks allow converting fixed rate to floating rate. Consider this if you plan to foreclose.</span>
          </li>
        </ul>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Understand foreclosure charges - Know when charges apply and how to avoid",
    },
    {
      text: "Zero charges on floating rate - No penalty as per RBI guidelines",
    },
    {
      text: "Save money - Avoid unnecessary charges by choosing right loan type",
    },
    {
      text: "Expert guidance - Our managers help you understand charges and options",
    },
    {
      text: "Compare loan types - Choose floating rate to avoid foreclosure charges",
    },
    {
      text: "Transparent information - Know all charges upfront, no surprises",
    },
  ],

  faqs: [
    {
      question: "Are there foreclosure charges on home loan?",
      answer:
        "For floating rate home loans, there are no foreclosure charges as per RBI guidelines. You can prepay or foreclose floating rate loans anytime without penalty. For fixed rate home loans, banks may charge foreclosure penalty (typically 2-4% of prepaid amount). Always check with your bank before foreclosing, especially for fixed rate loans.",
    },
    {
      question: "What are RBI guidelines on foreclosure charges?",
      answer:
        "RBI has prohibited banks and HFCs from charging foreclosure penalty on floating rate home loans. This applies to both partial prepayment and full foreclosure. However, fixed rate loans are exempt from this rule, and banks may charge foreclosure penalty on fixed rate loans. The guideline was introduced to promote prepayment and reduce borrower burden.",
    },
    {
      question: "How much is foreclosure charge on fixed rate loan?",
      answer:
        "Foreclosure charges on fixed rate loans vary by bank, typically 2-4% of prepaid amount. For example, if you prepay ₹10 Lakh on fixed rate loan, charges can be ₹20,000-40,000. Some banks may charge lower amount or waive charges in certain cases. Always check with your bank before foreclosing fixed rate loan.",
    },
    {
      question: "Can I avoid foreclosure charges?",
      answer:
        "Yes, you can avoid foreclosure charges by: (1) Choosing floating rate loan (zero charges as per RBI), (2) Negotiating with bank to reduce or waive charges on fixed rate loan, (3) Converting fixed rate to floating rate before foreclosing (if bank allows), (4) Checking for promotional waivers. Floating rate loans are best option to avoid charges.",
    },
    {
      question: "Is there difference between prepayment and foreclosure?",
      answer:
        "Prepayment is partial payment of loan (paying extra amount while loan continues), while foreclosure is complete closure of loan (paying entire outstanding amount). Both are allowed without charges on floating rate loans. Fixed rate loans may have charges on both. RBI guidelines apply to both prepayment and foreclosure for floating rate loans.",
    },
    {
      question: "Should I choose floating or fixed rate to avoid foreclosure charges?",
      answer:
        "Choose floating rate loan to avoid foreclosure charges. Floating rate loans have zero foreclosure charges as per RBI, while fixed rate loans may have 2-4% charges. Floating rate also allows you to benefit from rate reductions. However, if you prefer rate stability and don't plan to foreclose, fixed rate may be suitable. Consider your plans before choosing.",
    },
  ],

  ctaHeadline: "Ready to Understand Foreclosure Charges?",
  ctaSub:
    "Learn about foreclosure charges. Choose right loan type. Avoid unnecessary penalties. Get expert guidance on foreclosure options.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Prepayment Hyderabad", href: "/home-loan-prepayment-hyderabad" },
    { label: "Home Loan Balance Transfer Hyderabad", href: "/home-loan-balance-transfer-hyderabad" },
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Best Home Loan Rates Hyderabad", href: "/best-home-loan-rates-hyderabad-2025" },
  ],
};

export default function HomeLoanForeclosureChargesHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
