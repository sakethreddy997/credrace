import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Rejection Reasons in Hyderabad | Why Home Loan Rejected | Credrace",
  description:
    "Home loan rejection reasons in Hyderabad. Common reasons for home loan rejection: Low CIBIL, insufficient income, property issues. How to fix and reapply. Compare offers from 30+ banks.",
  keywords: [
    "home loan rejection reasons hyderabad",
    "why home loan rejected hyderabad",
    "home loan rejection causes hyderabad",
    "home loan application rejected hyderabad",
  ],
  openGraph: {
    title: "Home Loan Rejection Reasons Hyderabad | Credrace",
    description: "Home loan rejection reasons in Hyderabad. Common reasons and how to fix.",
    url: `${SITE_URL}/home-loan-rejection-reasons-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Rejection Reasons in Hyderabad | Why Home Loan Rejected | Credrace",
  description:
    "Home loan rejection reasons in Hyderabad. Common reasons for home loan rejection: Low CIBIL, insufficient income, property issues. How to fix and reapply.",
  url: "/home-loan-rejection-reasons-hyderabad",
  keywords: [
    "home loan rejection reasons hyderabad",
    "why home loan rejected hyderabad",
    "home loan rejection causes hyderabad",
  ],

  heroLabel: "Home Loan Rejection Reasons",
  heroHeadline: "Home Loan Rejection Reasons in Hyderabad",
  heroSub:
    "Understand common reasons for home loan rejection in Hyderabad: Low CIBIL score, insufficient income, property issues, documentation problems. Learn how to fix these issues and reapply successfully. Compare offers from 30+ banks.",
  stats: [
    { value: "Common", label: "Reasons" },
    { value: "Fixable", label: "Most issues" },
    { value: "30+", label: "Banks compared" },
    { value: "Tips", label: "To fix" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Understanding <strong>home loan rejection reasons in Hyderabad</strong> helps you fix issues and reapply successfully. Common reasons include low CIBIL score, insufficient income, property issues, and documentation problems. Most rejection reasons are fixable with proper planning.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>understand rejection reasons</strong> and fix them to get home loan approval in Hyderabad. Learn common rejection reasons, how to fix them, and compare offers from 30+ banks to find lenders with flexible requirements.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Common Rejection Reasons -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Common Home Loan Rejection Reasons</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Low CIBIL Score</h3>
            <p class="text-gray-600">Most common reason. CIBIL below 650-700 often leads to rejection. Banks prefer CIBIL 750+ for best rates. Fix: Improve CIBIL to 700+ (pay EMIs on time, reduce utilization, clear dues).</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Insufficient Income</h3>
            <p class="text-gray-600">Income not meeting FOIR requirements. Banks need 40-60% FOIR capacity. Fix: Add co-applicant, show additional income, reduce existing EMIs, wait for salary increase.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏠 Property Issues</h3>
            <p class="text-gray-600">Property not meeting bank criteria (legal issues, location, valuation). Fix: Choose bank-approved property, get property valuation, ensure clear title, check legal documents.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation Problems</h3>
            <p class="text-gray-600">Missing or incorrect documents, incomplete application. Fix: Prepare all documents, verify accuracy, submit complete application, get help from loan manager.</p>
          </div>
        </div>
      </div>

      <!-- Rejection Reasons Table -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Detailed Rejection Reasons & Solutions</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Rejection Reason</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Frequency</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">How to Fix</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Low CIBIL Score (Below 650-700)</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Very Common</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Improve CIBIL to 700+, wait 3-6 months</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Insufficient Income/FOIR</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Very Common</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Add co-applicant, show additional income</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Property Issues (Legal/Location)</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Common</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Choose bank-approved property, verify documents</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Documentation Problems</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Common</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Prepare all documents, verify accuracy</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Employment Instability</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Moderate</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Wait for stable employment (2+ years)</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Existing Loan Defaults</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Moderate</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Clear defaults, wait 6-12 months</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">Age Limit Exceeded</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">Rare</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Add co-applicant, reduce tenure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- How to Fix -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">How to Fix Rejection Reasons</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📈 Fix Low CIBIL Score</h3>
            <p class="text-sm text-gray-600 mb-3">Improve CIBIL to 700+: Pay all EMIs on time, reduce credit utilization below 30%, clear all dues, fix credit report errors. Wait 3-6 months after improvements.</p>
            <p class="text-xs font-semibold text-emerald-600">Time: 3-6 months</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💰 Fix Insufficient Income</h3>
            <p class="text-sm text-gray-600 mb-3">Add co-applicant with good income, show additional income sources (rental, investments), reduce existing EMIs by closing loans, wait for salary increase.</p>
            <p class="text-xs font-semibold text-emerald-600">Time: Immediate to 3 months</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">🏠 Fix Property Issues</h3>
            <p class="text-sm text-gray-600 mb-3">Choose bank-approved property, get property valuation done, ensure clear title and legal documents, check location and property type eligibility.</p>
            <p class="text-xs font-semibold text-emerald-600">Time: 1-2 months</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📄 Fix Documentation</h3>
            <p class="text-sm text-gray-600 mb-3">Prepare all required documents, verify accuracy and completeness, get help from loan manager, submit complete application with all supporting documents.</p>
            <p class="text-xs font-semibold text-emerald-600">Time: 1-2 weeks</p>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Understand rejection reasons - Learn why home loans get rejected",
    },
    {
      text: "How to fix issues - Step-by-step solutions for each rejection reason",
    },
    {
      text: "Compare from 30+ banks - Find lenders with flexible requirements",
    },
    {
      text: "Expert guidance - Our managers help fix rejection reasons",
    },
    {
      text: "Reapply successfully - Fix issues and get approved",
    },
    {
      text: "Prevent rejection - Know what to avoid before applying",
    },
  ],

  faqs: [
    {
      question: "What are common reasons for home loan rejection?",
      answer:
        "Common reasons for home loan rejection: (1) Low CIBIL score (below 650-700) - Most common reason, banks prefer CIBIL 750+, (2) Insufficient income/FOIR - Income not meeting 40-60% FOIR requirements, (3) Property issues - Property not meeting bank criteria (legal issues, location, valuation), (4) Documentation problems - Missing or incorrect documents, incomplete application, (5) Employment instability - Frequent job changes, less than 2 years employment, (6) Existing loan defaults - Defaults or settlements on previous loans, (7) Age limit exceeded - Age at loan maturity exceeds 65-70 years. Most rejection reasons are fixable with proper planning. Use our calculator to check eligibility before applying.",
    },
    {
      question: "How to fix low CIBIL score rejection?",
      answer:
        "To fix low CIBIL score rejection: (1) Improve CIBIL to 700+ - Pay all EMIs on time (payment history is 35% of score), reduce credit utilization below 30% (ideally below 10%), clear all dues, fix credit report errors, (2) Wait 3-6 months - After improvements, wait 3-6 months for CIBIL to improve and stabilize, (3) Add co-applicant - Add spouse or family member with CIBIL 750+ as co-applicant, (4) Show higher income - Higher income compensates for lower CIBIL. Aim for CIBIL 700+ before reapplying. Use our calculator to check eligibility after improvements.",
    },
    {
      question: "How to fix insufficient income rejection?",
      answer:
        "To fix insufficient income rejection: (1) Add co-applicant - Add spouse or family member with good income as co-applicant, combined income increases loan capacity, (2) Show additional income - Show rental income, investments, part-time work, all income sources, (3) Reduce existing EMIs - Close or reduce existing loans/credit cards, lower existing EMIs means more capacity for home loan, (4) Wait for salary increase - Apply after salary increase, higher salary = Higher loan capacity, (5) Consider lower loan amount - Apply for smaller loan that matches your income. Use our calculator to check eligibility with co-applicant.",
    },
    {
      question: "How to fix property issues rejection?",
      answer:
        "To fix property issues rejection: (1) Choose bank-approved property - Select property that meets bank criteria (location, type, legal status), (2) Get property valuation - Get property valuation done from bank-approved valuer, ensure valuation matches loan amount, (3) Ensure clear title - Verify property has clear title, no legal disputes, all documents in order, (4) Check legal documents - Verify all property documents (sale deed, registration, NOC, etc.) are correct and complete, (5) Check location - Ensure property is in approved location, not in restricted areas. Work with loan manager to verify property eligibility before applying.",
    },
    {
      question: "Can I reapply after rejection?",
      answer:
        "Yes, you can reapply after rejection, but: (1) Fix rejection reason first - Address the reason for rejection (improve CIBIL, increase income, fix property issues, etc.), (2) Wait for improvement - Wait 3-6 months after fixing issues before reapplying, (3) Apply to different bank - Different banks have different criteria, try banks with flexible requirements, (4) Improve application - Prepare better application with all documents, add co-applicant if needed, (5) Get help - Work with loan manager to understand rejection and fix issues. Don't reapply immediately without fixing issues - This may lead to another rejection. Use our calculator to check eligibility after fixing issues.",
    },
    {
      question: "How to prevent home loan rejection?",
      answer:
        "To prevent home loan rejection: (1) Check eligibility first - Use eligibility calculator to check if you qualify before applying, (2) Improve CIBIL - Maintain CIBIL 750+ for best approval chances, (3) Ensure sufficient income - Check if income meets FOIR requirements (40-60%), (4) Choose right property - Select bank-approved property with clear title and legal documents, (5) Prepare documents - Prepare all required documents, verify accuracy and completeness, (6) Add co-applicant - Add co-applicant if needed to increase loan capacity, (7) Work with loan manager - Get help from loan manager to prepare strong application. Prevention is better than rejection. Use our calculator to check eligibility before applying.",
    },
  ],

  ctaHeadline: "Ready to Fix Rejection Reasons?",
  ctaSub:
    "Understand rejection reasons and fix them. Compare offers from 30+ banks. Get expert guidance to get approved. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Reapply After Rejection Hyderabad", href: "/home-loan-reapply-after-rejection-hyderabad" },
    { label: "How to Improve CIBIL for Home Loan Hyderabad", href: "/how-to-improve-cibil-for-home-loan-hyderabad" },
    { label: "Home Loan for Low CIBIL Score Hyderabad", href: "/home-loan-for-low-cibil-score-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
  ],
};

export default function HomeLoanRejectionReasonsHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
