import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Based on Rent Income in Hyderabad | Rental Income Home Loan | Credrace",
  description:
    "Get home loan in Hyderabad based on rental income. Use rental income from existing properties to increase loan eligibility. Calculate loan amount with rental income. Compare offers from 30+ banks.",
  keywords: [
    "home loan based on rent income hyderabad",
    "home loan rental income hyderabad",
    "home loan with rental income hyderabad",
    "rental income home loan hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-based-on-rent-income-hyderabad` },
  openGraph: {
    title: "Home Loan Based on Rent Income Hyderabad | Credrace",
    description: "Home loan based on rental income in Hyderabad. Use rental income to increase eligibility.",
    url: `${SITE_URL}/home-loan-based-on-rent-income-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Based on Rent Income in Hyderabad | Rental Income Home Loan | Credrace",
  description:
    "Get home loan in Hyderabad based on rental income. Use rental income from existing properties to increase loan eligibility. Calculate loan amount with rental income.",
  url: "/home-loan-based-on-rent-income-hyderabad",
  keywords: [
    "home loan based on rent income hyderabad",
    "home loan rental income hyderabad",
    "home loan with rental income hyderabad",
  ],

  heroLabel: "Home Loan Based on Rent Income",
  heroHeadline: "Home Loan Based on Rent Income in Hyderabad",
  heroSub:
    "Use rental income from existing properties to increase your home loan eligibility in Hyderabad. Many banks consider rental income (typically 70-80% of rent) to calculate loan amount. Compare offers from 30+ banks and maximize your borrowing capacity.",
  stats: [
    { value: "70-80%", label: "Rent considered" },
    { value: "Increase", label: "Loan capacity" },
    { value: "30+", label: "Banks compared" },
    { value: "Documented", label: "Rent required" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      Have <strong>rental income from existing properties in Hyderabad</strong>? You can use this rental income to increase your home loan eligibility. Many banks consider rental income (typically 70-80% of rent) along with your salary/income to calculate your total borrowing capacity.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>calculate your home loan amount including rental income</strong> from 30+ banks in Hyderabad. Understand how rental income affects eligibility, what documents are needed, and maximize your loan capacity.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Rental Income Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">How Rental Income Affects Home Loan</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Rental Income Consideration</h3>
            <p class="text-gray-600">Banks typically consider 70-80% of rental income (after accounting for maintenance, vacancy, etc.) as additional income. This increases your total income and loan capacity significantly.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Combined Income</h3>
            <p class="text-gray-600">Rental income is added to your salary/income to calculate total monthly income. Higher total income = Higher FOIR capacity = Higher loan amount. For example, ₹1 Lakh salary + ₹30,000 rent = ₹1.3 Lakh total income.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Documentation</h3>
            <p class="text-gray-600">You need rental agreement, rent receipts, bank statements showing rent credits, and property documents. Banks verify rental income through bank statements and rental agreements.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Eligibility</h3>
            <p class="text-gray-600">Rental income is considered if: (1) Property is in your name, (2) Rental agreement is registered/valid, (3) Rent is received regularly (6+ months), (4) Property is rented out and generating income.</p>
          </div>
        </div>
      </div>

      <!-- Calculation Examples -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Loan Amount with Rental Income</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Salary</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Rental Income</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Total Income</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Eligible Loan Amount*</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹0</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹50-60 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹20,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.14 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹60-70 Lakh</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹1.5 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹30,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.71 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹90 Lakh - ₹1 Cr</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹2 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹40,000</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹2.28 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.2-1.4 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-xs text-gray-600">*Rental income considered at 70% of rent. At 8.25% interest rate, 20 years tenure, CIBIL 750+, no existing EMIs.</p>
          </div>
        </div>
      </div>

      <!-- Documents Required -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Documents Required for Rental Income</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Rental Income Proof</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Rental agreement (registered preferred)</li>
              <li>• Rent receipts (last 6-12 months)</li>
              <li>• Bank statements showing rent credits</li>
              <li>• Property tax receipts</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Property Documents</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Property title deed</li>
              <li>• Property registration documents</li>
              <li>• NOC from society (if applicable)</li>
              <li>• Property valuation report</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Important Points -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Important Points About Rental Income</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">✅ What Banks Consider</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• 70-80% of rental income (after deductions)</li>
              <li>• Regular rent receipts (6+ months)</li>
              <li>• Bank statements showing rent credits</li>
              <li>• Registered rental agreement preferred</li>
            </ul>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">⚠️ What Banks Don't Consider</h3>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Unregistered rental agreements (some banks)</li>
              <li>• Cash rent without bank trail</li>
              <li>• Irregular or inconsistent rent</li>
              <li>• Rent from commercial properties (varies)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Increase loan capacity - Use rental income to get higher loan amount",
    },
    {
      text: "Compare from 30+ banks - See which banks consider rental income best",
    },
    {
      text: "Understand calculation - Learn how rental income affects eligibility",
    },
    {
      text: "Expert guidance - Our managers help you document rental income properly",
    },
    {
      text: "No CIBIL impact - Check eligibility without affecting credit score",
    },
    {
      text: "Maximize borrowing - Combine salary and rental income for maximum loan",
    },
  ],

  faqs: [
    {
      question: "Can I use rental income for home loan eligibility?",
      answer:
        "Yes, you can use rental income from existing properties to increase your home loan eligibility in Hyderabad. Banks typically consider 70-80% of rental income (after accounting for maintenance, vacancy, etc.) as additional income. This is added to your salary/income to calculate total monthly income, which increases your FOIR capacity and loan amount. For example, ₹1 Lakh salary + ₹20,000 rent (70% = ₹14,000 considered) = ₹1.14 Lakh total income, increasing loan capacity from ₹50-60 Lakh to ₹60-70 Lakh.",
    },
    {
      question: "What percentage of rental income is considered for home loan?",
      answer:
        "Banks typically consider 70-80% of rental income for home loan calculation. This accounts for maintenance, vacancy periods, property taxes, and other expenses. For example, if you receive ₹30,000/month rent, banks consider ₹21,000-24,000 (70-80%) as additional income. Some banks may consider higher percentage (up to 90%) for properties in prime locations or with long-term rental agreements. Check with individual banks for their specific policy.",
    },
    {
      question: "What documents are needed for rental income home loan?",
      answer:
        "Documents required: (1) Rental agreement (registered preferred, valid for at least 6-12 months), (2) Rent receipts (last 6-12 months showing regular rent payment), (3) Bank statements (6-12 months showing rent credits), (4) Property documents (title deed, registration), (5) Property tax receipts, (6) NOC from society (if applicable). Banks verify rental income through bank statements and rental agreements. Ensure all documents are in order.",
    },
    {
      question: "Can I use rental income if property is not in my name?",
      answer:
        "Generally, banks consider rental income only if the property is in your name or you're a co-owner. If property is in someone else's name (like parents), you cannot use that rental income for your loan eligibility. However, if you're a co-owner (even with small share), some banks may consider proportional rental income. Check with individual banks for their specific policy on co-owned properties.",
    },
    {
      question: "How much can rental income increase my loan amount?",
      answer:
        "Rental income can increase your loan amount by 20-40% depending on rent amount. For example: ₹1 Lakh salary = ₹50-60 Lakh loan. Add ₹20,000 rent (70% = ₹14,000 considered) = ₹1.14 Lakh total income = ₹60-70 Lakh loan (20% increase). Add ₹40,000 rent (70% = ₹28,000 considered) = ₹1.28 Lakh total income = ₹70-80 Lakh loan (40% increase). Higher rental income = Higher loan capacity. Use our calculator to see exact increase.",
    },
    {
      question: "Do all banks consider rental income for home loan?",
      answer:
        "Most major banks consider rental income for home loan eligibility, but policies vary: (1) Public sector banks (SBI, PNB) - Consider 70-80% of rent, (2) Private banks (HDFC, ICICI, Axis) - Consider 70-80% of rent, (3) HFCs (LIC HFL) - Consider 70-80% of rent. However, some banks may have stricter requirements (registered agreement mandatory, longer rental history). Compare offers from 30+ banks through Credrace to find banks that best consider your rental income.",
    },
  ],

  ctaHeadline: "Ready to Use Rental Income for Home Loan?",
  ctaSub:
    "Calculate your loan amount including rental income. Compare offers from 30+ banks. Maximize your borrowing capacity. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "How Much Home Loan Can I Get Hyderabad", href: "/how-much-home-loan-can-i-get-hyderabad" },
    { label: "Home Loan Based on Salary Hyderabad", href: "/home-loan-based-on-salary-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Joint Home Loan Hyderabad", href: "/joint-home-loan-hyderabad" },
  ],
};

export default function HomeLoanBasedOnRentIncomeHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
