import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Business Owners in Hyderabad | Self-Employed Home Loan | Credrace",
  description:
    "Home loan for business owners in Hyderabad. Specialized loans for self-employed, business owners, proprietors. Flexible eligibility, ITR-based income, business documents. Compare offers from 30+ banks.",
  keywords: [
    "home loan for business owners hyderabad",
    "home loan self employed hyderabad",
    "home loan for proprietors hyderabad",
    "business owner home loan hyderabad",
  ],
  openGraph: {
    title: "Home Loan for Business Owners Hyderabad | Credrace",
    description: "Home loan for business owners in Hyderabad. ITR-based income, flexible eligibility.",
    url: `${SITE_URL}/home-loan-for-business-owners-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Business Owners in Hyderabad | Self-Employed Home Loan | Credrace",
  description:
    "Home loan for business owners in Hyderabad. Specialized loans for self-employed, business owners, proprietors. Flexible eligibility, ITR-based income, business documents.",
  url: "/home-loan-for-business-owners-hyderabad",
  keywords: [
    "home loan for business owners hyderabad",
    "home loan self employed hyderabad",
    "home loan for proprietors hyderabad",
  ],

  heroLabel: "Home Loan for Business Owners",
  heroHeadline: "Home Loan for Business Owners in Hyderabad",
  heroSub:
    "Get home loan in Hyderabad as a business owner. Specialized loans for self-employed, proprietors, partners. ITR-based income calculation, flexible eligibility, business documents. Compare offers from 30+ banks. Expert guidance for business owners.",
  stats: [
    { value: "2+ Years", label: "Business age" },
    { value: "ITR Based", label: "Income proof" },
    { value: "30+", label: "Banks compared" },
    { value: "Flexible", label: "Eligibility" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      As a <strong>business owner in Hyderabad</strong>, you can get home loan with flexible eligibility criteria. Banks consider your ITR (Income Tax Return), business profit, and business stability to calculate loan amount. Business owners often get competitive rates and terms similar to salaried employees.
    </p>
    <p class="text-gray-600">
      At Credrace, we help <strong>business owners get home loans</strong> from 30+ banks in Hyderabad. Understand ITR-based income calculation, required documents, eligibility criteria, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Business Owner Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Home Loan for Business Owners</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💼 Business Types</h3>
            <p class="text-gray-600">Eligible: Proprietors, Partners, Directors, Self-employed professionals (CA, doctors, lawyers), Business owners with 2+ years of business. Banks consider business stability and profitability.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Income Calculation</h3>
            <p class="text-gray-600">Banks calculate income from ITR (last 2-3 years average), business profit, and P&L statements. Typically 40-50% of declared profit is considered as monthly income. Higher profit = Higher loan amount.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documents</h3>
            <p class="text-gray-600">ITR (last 2-3 years), P&L statements, balance sheets, bank statements (12+ months), business registration, GST certificate, business address proof. More documents than salaried employees.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Eligibility</h3>
            <p class="text-gray-600">Minimum 2 years of business, profitable business (last 2 years), ITR filed, CIBIL score 700+, age 21-65 years. Some banks require 3+ years business age for higher loan amounts.</p>
          </div>
        </div>
      </div>

      <!-- Income Calculation -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Income Calculation for Business Owners</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Annual Profit (ITR)</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Monthly Income Considered*</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">FOIR (50%)</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Eligible Loan Amount**</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹6 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹20,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹10,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹12-15 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹12 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹40,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹20,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹25-30 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹24 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹80,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹40,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹50-60 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹36 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.2 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹60,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹75-90 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹60 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹2 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.2-1.5 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-xs text-gray-600">*40-50% of annual profit divided by 12. **At 8.25% interest rate, 20 years tenure, CIBIL 750+, no existing EMIs.</p>
          </div>
        </div>
      </div>

      <!-- Documents Required -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Documents Required for Business Owners</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Income Documents</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• ITR (Income Tax Return) - Last 2-3 years</li>
              <li>• P&L (Profit & Loss) statements - Last 2-3 years</li>
              <li>• Balance sheets - Last 2-3 years</li>
              <li>• Bank statements - Last 12 months (business account)</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Business Documents</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Business registration certificate</li>
              <li>• GST certificate (if applicable)</li>
              <li>• Business address proof</li>
              <li>• Partnership deed / MOA (if applicable)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tips for Business Owners -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Tips to Increase Loan Eligibility</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📈 Show Consistent Profit</h3>
            <p class="text-sm text-gray-600 mb-3">Maintain consistent or growing profit in ITR (last 2-3 years). Banks prefer stable, profitable businesses. Avoid showing losses or declining profits.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Higher loan amount</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💰 Maintain Good Bank Balance</h3>
            <p class="text-sm text-gray-600 mb-3">Keep healthy average balance in business account (3-6 months). Shows business stability and repayment capacity. Avoid frequent overdrafts.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Better eligibility</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">📊 File ITR Regularly</h3>
            <p class="text-sm text-gray-600 mb-3">File ITR on time for last 2-3 years. Banks verify income through ITR. Late filing or non-filing reduces eligibility significantly.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Faster approval</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💼 Add Co-Applicant</h3>
            <p class="text-sm text-gray-600 mb-3">Add spouse or family member as co-applicant (if salaried). Combined income increases loan capacity. Both applicants' income and CIBIL considered.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: 50-100% more loan</p>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "ITR-based income - Calculate loan based on business profit",
    },
    {
      text: "Flexible eligibility - Specialized criteria for business owners",
    },
    {
      text: "Compare from 30+ banks - See offers from all lenders",
    },
    {
      text: "Expert guidance - Our managers help with documentation",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Competitive rates - Get rates similar to salaried employees",
    },
  ],

  faqs: [
    {
      question: "Can business owners get home loan in Hyderabad?",
      answer:
        "Yes, business owners can get home loan in Hyderabad. Banks offer specialized home loans for self-employed, proprietors, partners, and business owners. Eligibility criteria: (1) Minimum 2 years of business (some banks require 3+ years), (2) Profitable business (last 2 years), (3) ITR filed (last 2-3 years), (4) CIBIL score 700+, (5) Age 21-65 years. Income is calculated from ITR and business profit (typically 40-50% of annual profit considered as monthly income). Compare offers from 30+ banks through Credrace.",
    },
    {
      question: "How is income calculated for business owners?",
      answer:
        "Income for business owners is calculated from: (1) ITR (Income Tax Return) - Last 2-3 years average profit, (2) P&L statements - Business profit, (3) Bank statements - Business account transactions. Typically, banks consider 40-50% of annual profit (from ITR) divided by 12 as monthly income. For example, ₹24 Lakh annual profit = ₹80,000-1 Lakh monthly income considered. This income is then used for FOIR calculation (40-60% of income for EMIs). Higher profit = Higher loan amount.",
    },
    {
      question: "What documents are needed for business owner home loan?",
      answer:
        "Documents required: (1) Income documents - ITR (last 2-3 years), P&L statements (last 2-3 years), balance sheets (last 2-3 years), bank statements (12+ months, business account), (2) Business documents - Business registration certificate, GST certificate (if applicable), business address proof, partnership deed/MOA (if applicable), (3) Personal documents - Identity proof, address proof, CIBIL report, property documents. More documents than salaried employees. Ensure all documents are in order.",
    },
    {
      question: "What is minimum business age for home loan?",
      answer:
        "Minimum business age for home loan is typically 2 years. However, some banks require 3+ years for higher loan amounts or better rates. Banks verify business age through: (1) Business registration certificate (date of incorporation/registration), (2) ITR filing history (should show 2+ years), (3) Bank statements (should show 2+ years of business transactions). New businesses (less than 2 years) may face challenges or get lower loan amounts. Some banks may consider businesses with 1.5+ years if profit is strong.",
    },
    {
      question: "Do business owners get same rates as salaried employees?",
      answer:
        "Business owners typically get slightly higher interest rates (0.10-0.50% more) than salaried employees, but rates are competitive. Factors affecting rates: (1) CIBIL score (750+ gets best rates), (2) Business stability and profit (consistent profit gets better rates), (3) Loan amount (higher loan may get better rates), (4) Property value and LTV. However, with good CIBIL score and stable business, business owners can get rates very close to salaried employees. Compare offers from 30+ banks to get best rates.",
    },
    {
      question: "Can I get home loan if my business has losses?",
      answer:
        "Getting home loan with business losses is challenging but possible in some cases: (1) If losses are recent (1 year) but previous years were profitable, some banks may consider, (2) If you have other income sources (rental income, investments), (3) If you have strong CIBIL score and assets, (4) If you add co-applicant with good income. However, consistent losses (2+ years) significantly reduce eligibility. Banks prefer profitable businesses. Improve business profitability or wait for profitable year before applying.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan as Business Owner?",
  ctaSub:
    "Calculate your loan amount based on ITR. Compare offers from 30+ banks. Get expert guidance for business owners. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Based on Salary Hyderabad", href: "/home-loan-based-on-salary-hyderabad" },
    { label: "How Much Home Loan Can I Get Hyderabad", href: "/how-much-home-loan-can-i-get-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Joint Home Loan Hyderabad", href: "/joint-home-loan-hyderabad" },
  ],
};

export default function HomeLoanForBusinessOwnersHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
