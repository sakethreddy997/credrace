import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Joint Home Loan in Hyderabad | Co-Applicant Home Loan | Credrace",
  description:
    "Joint home loan in Hyderabad. Apply with spouse, parents, siblings as co-applicant. Higher loan amounts, better rates, combined income. Compare offers from 30+ banks.",
  keywords: [
    "joint home loan hyderabad",
    "co applicant home loan hyderabad",
    "home loan with spouse hyderabad",
    "joint home loan application hyderabad",
  ],
  openGraph: {
    title: "Joint Home Loan Hyderabad | Credrace",
    description: "Joint home loan in Hyderabad. Apply with co-applicant for higher loan amounts, better rates.",
    url: `${SITE_URL}/joint-home-loan-hyderabad`,
  },
};

const pageData = {
  title: "Joint Home Loan in Hyderabad | Co-Applicant Home Loan | Credrace",
  description:
    "Joint home loan in Hyderabad. Apply with spouse, parents, siblings as co-applicant. Higher loan amounts, better rates, combined income.",
  url: "/joint-home-loan-hyderabad",
  keywords: [
    "joint home loan hyderabad",
    "co applicant home loan hyderabad",
    "home loan with spouse hyderabad",
  ],

  heroLabel: "Joint Home Loan",
  heroHeadline: "Joint Home Loan in Hyderabad",
  heroSub:
    "Get joint home loan in Hyderabad with spouse, parents, or siblings as co-applicant. Higher loan amounts (50-100% more), better rates, combined income calculation. Compare offers from 30+ banks. Expert guidance for joint applications.",
  stats: [
    { value: "50-100%", label: "More loan" },
    { value: "Combined", label: "Income" },
    { value: "30+", label: "Banks compared" },
    { value: "Better", label: "Rates" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      A <strong>joint home loan in Hyderabad</strong> allows you to apply with a co-applicant (spouse, parents, siblings) to increase your loan capacity. Banks consider combined income and CIBIL scores of all applicants, resulting in higher loan amounts (50-100% more) and often better interest rates.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>get joint home loans</strong> from 30+ banks in Hyderabad. Understand how joint loans work, eligibility criteria, benefits, required documents, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Joint Loan Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Benefits of Joint Home Loan</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Higher Loan Amounts</h3>
            <p class="text-gray-600">Joint loans allow 50-100% higher loan amounts. Banks consider combined income of all applicants. For example, ₹1 Lakh + ₹1 Lakh = ₹2 Lakh combined income = ₹1.2-1.5 Cr loan (vs ₹50-60 Lakh single).</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Better Interest Rates</h3>
            <p class="text-gray-600">Joint loans often get 0.10-0.25% better rates due to lower risk (multiple income sources). Better CIBIL scores of co-applicants also help get better rates.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Tax Benefits</h3>
            <p class="text-gray-600">Both applicants can claim tax benefits (Section 24, Section 80C, Section 80EE). Principal repayment deduction up to ₹1.5 Lakh each, interest deduction up to ₹2 Lakh each.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Easier Eligibility</h3>
            <p class="text-gray-600">Joint loans make it easier to meet eligibility criteria. If one applicant has lower income or CIBIL, other applicant compensates. Combined strength improves approval chances.</p>
          </div>
        </div>
      </div>

      <!-- Loan Amount Comparison -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Loan Amount: Single vs Joint</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Applicant Income</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Single Loan Amount</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Joint Loan Amount*</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Increase</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1 Lakh + ₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹50-60 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.2-1.5 Cr</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">100%+</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1.5 Lakh + ₹50K</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹75-90 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1-1.2 Cr</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">40-50%</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹2 Lakh + ₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1-1.2 Cr</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.8-2.2 Cr</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">80-100%</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹3 Lakh + ₹2 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.8-2.2 Cr</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹3-3.5 Cr</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">70-80%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-xs text-gray-600">*At 8.25% interest rate, 20 years tenure, CIBIL 750+, no existing EMIs, 50% FOIR. Joint loan considers combined income.</p>
          </div>
        </div>
      </div>

      <!-- Co-Applicant Types -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Who Can Be Co-Applicant?</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">👫 Spouse</h3>
            <p class="text-sm text-gray-600 mb-3">Most common co-applicant. Both can claim tax benefits. Combined income increases loan capacity. Both are co-owners of property.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Tax benefits for both</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">👨‍👩‍👧 Parents</h3>
            <p class="text-sm text-gray-600 mb-3">Parents can be co-applicants. Their income and CIBIL considered. Helps if parents have good income/CIBIL. Both are co-owners.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Higher loan capacity</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">👨‍👩‍👧‍👦 Siblings</h3>
            <p class="text-sm text-gray-600 mb-3">Siblings can be co-applicants. Their income and CIBIL considered. Helps if siblings have good income/CIBIL. Both are co-owners.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Combined income</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">👥 Other Relatives</h3>
            <p class="text-sm text-gray-600 mb-3">Some banks allow other relatives (uncles, aunts) as co-applicants. Check with individual banks. Both are co-owners.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Flexible options</p>
          </div>
        </div>
      </div>

      <!-- Tax Benefits -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Tax Benefits for Joint Home Loan</h3>
        <div class="space-y-4">
          <div class="p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">Section 24 - Interest Deduction</p>
            <p class="text-sm text-gray-600">Both applicants can claim interest deduction up to ₹2 Lakh each (total ₹4 Lakh) if property is self-occupied. For let-out property, full interest is deductible.</p>
          </div>
          <div class="p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">Section 80C - Principal Repayment</p>
            <p class="text-sm text-gray-600">Both applicants can claim principal repayment deduction up to ₹1.5 Lakh each (total ₹3 Lakh) under Section 80C.</p>
          </div>
          <div class="p-4 bg-emerald-50 rounded-lg">
            <p class="text-sm font-bold text-gray-900 mb-2">Section 80EE - First-Time Homebuyers</p>
            <p class="text-sm text-gray-600">Both applicants can claim additional interest deduction up to ₹50,000 each (total ₹1 Lakh) if they're first-time homebuyers and loan is ₹35 Lakh or less.</p>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Higher loan amounts - Get 50-100% more loan with combined income",
    },
    {
      text: "Better interest rates - Get 0.10-0.25% lower rates",
    },
    {
      text: "Tax benefits - Both applicants can claim tax deductions",
    },
    {
      text: "Easier eligibility - Combined strength improves approval chances",
    },
    {
      text: "Compare from 30+ banks - See offers from all lenders",
    },
    {
      text: "Expert guidance - Our managers help with joint loan applications",
    },
  ],

  faqs: [
    {
      question: "What is joint home loan and how does it work?",
      answer:
        "Joint home loan is a home loan where two or more people apply together as co-applicants. Banks consider combined income and CIBIL scores of all applicants, resulting in higher loan amounts (50-100% more) and often better interest rates. All applicants are co-owners of the property and jointly responsible for loan repayment. Both applicants can claim tax benefits (Section 24, Section 80C, Section 80EE). Common co-applicants include spouse, parents, siblings. Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "How much more loan can I get with joint home loan?",
      answer:
        "Joint home loan allows 50-100% higher loan amounts compared to single loan. For example: Single applicant with ₹1 Lakh income = ₹50-60 Lakh loan. Joint applicants with ₹1 Lakh + ₹1 Lakh = ₹2 Lakh combined income = ₹1.2-1.5 Cr loan (100%+ increase). Single applicant with ₹2 Lakh income = ₹1-1.2 Cr loan. Joint applicants with ₹2 Lakh + ₹1 Lakh = ₹3 Lakh combined income = ₹1.8-2.2 Cr loan (80-100% increase). Actual increase depends on co-applicant income and CIBIL score.",
    },
    {
      question: "Who can be co-applicant in joint home loan?",
      answer:
        "Co-applicants can be: (1) Spouse - Most common, both can claim tax benefits, (2) Parents - Their income and CIBIL considered, both are co-owners, (3) Siblings - Their income and CIBIL considered, both are co-owners, (4) Other relatives - Some banks allow (uncles, aunts), check with individual banks. All co-applicants must meet age and income requirements. All are co-owners of property and jointly responsible for loan repayment.",
    },
    {
      question: "What are tax benefits for joint home loan?",
      answer:
        "Tax benefits for joint home loan: (1) Section 24 - Interest deduction: Both applicants can claim up to ₹2 Lakh each (total ₹4 Lakh) if property is self-occupied. For let-out property, full interest is deductible, (2) Section 80C - Principal repayment: Both applicants can claim up to ₹1.5 Lakh each (total ₹3 Lakh), (3) Section 80EE - First-time homebuyers: Both applicants can claim additional interest deduction up to ₹50,000 each (total ₹1 Lakh) if they're first-time homebuyers and loan is ₹35 Lakh or less. Both applicants must be co-owners to claim benefits.",
    },
    {
      question: "Do both applicants need good CIBIL score?",
      answer:
        "Ideally, both applicants should have good CIBIL scores (700+), but banks consider combined strength. If one applicant has excellent CIBIL (750+) and other has good CIBIL (700+), loan is approved. If one applicant has poor CIBIL (below 650), it may affect approval or rates. However, if other applicant has excellent CIBIL and income, some banks may still approve. Best to have both applicants with good CIBIL scores (700+) for best rates and terms.",
    },
    {
      question: "Can I remove co-applicant later?",
      answer:
        "Removing co-applicant from joint home loan is possible but complex: (1) Bank approval required - Bank needs to reassess loan with single applicant, (2) Eligibility check - Single applicant must meet income and CIBIL requirements, (3) Property ownership - Co-applicant must transfer property share to main applicant, (4) Processing fee - Bank may charge processing fee for restructuring, (5) Tax implications - Co-applicant loses tax benefits. It's easier to add co-applicant than remove. Consult with bank before making changes.",
    },
  ],

  ctaHeadline: "Ready to Get Joint Home Loan?",
  ctaSub:
    "Calculate your loan amount with co-applicant. Compare offers from 30+ banks. Get expert guidance for joint applications. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Co-Applicant Home Loan Hyderabad", href: "/co-applicant-home-loan-hyderabad" },
    { label: "How Much Home Loan Can I Get Hyderabad", href: "/how-much-home-loan-can-i-get-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Based on Salary Hyderabad", href: "/home-loan-based-on-salary-hyderabad" },
  ],
};

export default function JointHomeLoanHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
