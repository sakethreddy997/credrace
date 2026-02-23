import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan for Doctors in Hyderabad | Doctor Home Loan | Credrace",
  description:
    "Home loan for doctors in Hyderabad. Specialized loans for doctors, medical professionals. Higher loan amounts, better rates, flexible eligibility. ITR-based income. Compare offers from 30+ banks.",
  keywords: [
    "home loan for doctors hyderabad",
    "doctor home loan hyderabad",
    "home loan for medical professionals hyderabad",
    "physician home loan hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/home-loan-for-doctors-hyderabad` },
  openGraph: {
    title: "Home Loan for Doctors Hyderabad | Credrace",
    description: "Home loan for doctors in Hyderabad. Higher loan amounts, better rates, flexible eligibility.",
    url: `${SITE_URL}/home-loan-for-doctors-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan for Doctors in Hyderabad | Doctor Home Loan | Credrace",
  description:
    "Home loan for doctors in Hyderabad. Specialized loans for doctors, medical professionals. Higher loan amounts, better rates, flexible eligibility. ITR-based income.",
  url: "/home-loan-for-doctors-hyderabad",
  keywords: [
    "home loan for doctors hyderabad",
    "doctor home loan hyderabad",
    "home loan for medical professionals hyderabad",
  ],

  heroLabel: "Home Loan for Doctors",
  heroHeadline: "Home Loan for Doctors in Hyderabad",
  heroSub:
    "Get home loan in Hyderabad as a doctor. Specialized loans for doctors, physicians, medical professionals. Higher loan amounts, better rates, flexible eligibility. ITR-based income. Compare offers from 30+ banks. Expert guidance for doctors.",
  stats: [
    { value: "Higher", label: "Loan amount" },
    { value: "Better", label: "Interest rates" },
    { value: "30+", label: "Banks compared" },
    { value: "Flexible", label: "Eligibility" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      As a <strong>doctor in Hyderabad</strong>, you can get home loan with specialized benefits. Banks consider doctors as low-risk borrowers and offer higher loan amounts, better interest rates, and flexible eligibility. Medical professionals often get preferential treatment from lenders.
    </p>
    <p class="text-gray-600">
      At Credrace, we help <strong>doctors get home loans</strong> from 30+ banks in Hyderabad. Understand specialized benefits for doctors, ITR-based income calculation, required documents, and compare offers to get the best deal.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- Doctor Benefits -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Special Benefits for Doctors</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Higher Loan Amounts</h3>
            <p class="text-gray-600">Doctors can get higher loan amounts (up to 70-80% FOIR vs 50-60% for others). Banks consider doctors as stable, high-income professionals with low default risk.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📊 Better Interest Rates</h3>
            <p class="text-gray-600">Doctors often get 0.10-0.25% lower interest rates than regular borrowers. Banks offer preferential rates to medical professionals due to stable income and low risk profile.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📄 Flexible Documentation</h3>
            <p class="text-gray-600">Some banks accept medical degree, registration certificate, and ITR as primary documents. Less documentation compared to other self-employed professionals.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">✅ Lower Processing Fees</h3>
            <p class="text-gray-600">Many banks offer reduced or waived processing fees for doctors. Some banks have special programs with zero processing fees for medical professionals.</p>
          </div>
        </div>
      </div>

      <!-- Income Calculation -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Loan Amount for Doctors</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-bold text-gray-900">Annual Income (ITR)</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">Monthly Income Considered*</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-gray-900">FOIR (70%)</th>
                  <th class="px-6 py-4 text-center text-sm font-bold text-emerald-600">Eligible Loan Amount**</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹12 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹70,000</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹85 Lakh - ₹1 Cr</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹18 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.5 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.05 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.3-1.5 Cr</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹24 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹2 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹1.4 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹1.7-2 Cr</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-sm text-gray-900">₹36 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹3 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm text-gray-600">₹2.1 Lakh</td>
                  <td class="px-6 py-4 text-center text-sm font-bold text-emerald-600">₹2.5-3 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p class="text-xs text-gray-600">*50-60% of annual income divided by 12. **At 8.0% interest rate (preferential), 20 years tenure, CIBIL 750+, no existing EMIs. Doctors get higher FOIR (70% vs 50-60%).</p>
          </div>
        </div>
      </div>

      <!-- Documents Required -->
      <div class="rounded-xl border border-gray-200 bg-white p-6">
        <h3 class="text-xl font-extrabold text-gray-900 mb-4">Documents Required for Doctors</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Professional Documents</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• Medical degree (MBBS/MD/MS/DNB)</li>
              <li>• Medical registration certificate (MCI/State Medical Council)</li>
              <li>• Medical practice certificate (if applicable)</li>
              <li>• Clinic/hospital registration (if applicable)</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">Income Documents</h4>
            <ul class="space-y-2 text-sm text-gray-600">
              <li>• ITR (Income Tax Return) - Last 2-3 years</li>
              <li>• Bank statements - Last 12 months</li>
              <li>• P&L statements (if self-employed)</li>
              <li>• Salary slips (if employed in hospital)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Types of Doctors -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">Eligibility by Doctor Type</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">👨‍⚕️ Self-Employed Doctors</h3>
            <p class="text-sm text-gray-600 mb-3">Private practice, clinic owners. ITR-based income, 2+ years practice. Higher loan amounts, better rates. Flexible documentation.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Higher FOIR, better rates</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">🏥 Hospital-Employed Doctors</h3>
            <p class="text-sm text-gray-600 mb-3">Doctors employed in hospitals. Salary-based income, salary slips. Similar to salaried employees but with doctor benefits.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Easier documentation</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">🎓 Resident Doctors</h3>
            <p class="text-sm text-gray-600 mb-3">Doctors in residency/training. Lower income but stable. Some banks offer loans with lower income requirements for residents.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Lower income requirement</p>
          </div>
          <div class="rounded-xl border border-gray-200 bg-white p-6">
            <h3 class="font-bold text-gray-900 mb-2">💼 Consultant Doctors</h3>
            <p class="text-sm text-gray-600 mb-3">Consultants with multiple hospitals/clinics. Higher income, ITR-based. Best loan terms and highest loan amounts.</p>
            <p class="text-xs font-semibold text-emerald-600">Benefit: Highest loan amounts</p>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Higher loan amounts - Get up to 70-80% FOIR (vs 50-60% for others)",
    },
    {
      text: "Better interest rates - Get 0.10-0.25% lower rates than regular borrowers",
    },
    {
      text: "Flexible documentation - Less documentation required",
    },
    {
      text: "Lower processing fees - Many banks offer reduced or waived fees",
    },
    {
      text: "Compare from 30+ banks - See offers from all lenders",
    },
    {
      text: "Expert guidance - Our managers help with doctor-specific requirements",
    },
  ],

  faqs: [
    {
      question: "Do doctors get better home loan terms?",
      answer:
        "Yes, doctors get better home loan terms in Hyderabad: (1) Higher loan amounts - Up to 70-80% FOIR (vs 50-60% for others), (2) Better interest rates - 0.10-0.25% lower than regular borrowers, (3) Flexible documentation - Some banks accept medical degree and ITR as primary documents, (4) Lower processing fees - Many banks offer reduced or waived fees. Banks consider doctors as low-risk, high-income professionals with stable income and low default risk.",
    },
    {
      question: "How much home loan can a doctor get?",
      answer:
        "Doctors can get higher loan amounts due to higher FOIR (70-80% vs 50-60%). For example: ₹12 Lakh annual income = ₹1 Lakh monthly = ₹70,000 EMI capacity (70% FOIR) = ₹85 Lakh - ₹1 Cr loan. ₹24 Lakh annual income = ₹2 Lakh monthly = ₹1.4 Lakh EMI capacity = ₹1.7-2 Cr loan. Actual amount depends on: (1) Annual income (ITR), (2) CIBIL score (750+ gets best amounts), (3) Existing EMIs, (4) Property value. Use our calculator for exact amount.",
    },
    {
      question: "What documents are needed for doctor home loan?",
      answer:
        "Documents required: (1) Professional documents - Medical degree (MBBS/MD/MS/DNB), Medical registration certificate (MCI/State Medical Council), Medical practice certificate (if applicable), Clinic/hospital registration (if applicable), (2) Income documents - ITR (last 2-3 years), Bank statements (12+ months), P&L statements (if self-employed), Salary slips (if employed), (3) Personal documents - Identity proof, address proof, CIBIL report, property documents. Some banks accept medical degree and ITR as primary documents.",
    },
    {
      question: "Do resident doctors get home loan?",
      answer:
        "Yes, resident doctors can get home loan, but with some considerations: (1) Lower income requirement - Some banks offer loans with lower income for residents, (2) Stable income - Residency provides stable, predictable income, (3) Future income potential - Banks may consider future income potential, (4) Co-applicant - Adding co-applicant (spouse/parents) helps increase loan capacity. However, loan amounts may be lower than practicing doctors. Compare offers from 30+ banks to find best terms for residents.",
    },
    {
      question: "Can self-employed doctors get home loan?",
      answer:
        "Yes, self-employed doctors (private practice, clinic owners) can get home loan with ITR-based income. Eligibility: (1) Minimum 2 years of practice, (2) ITR filed (last 2-3 years), (3) Profitable practice, (4) CIBIL score 700+, (5) Age 21-65 years. Income is calculated from ITR (typically 50-60% of annual income considered as monthly income). Self-employed doctors get higher FOIR (70-80%) and better rates than other self-employed professionals. Compare offers from 30+ banks.",
    },
    {
      question: "Do all banks offer special terms for doctors?",
      answer:
        "Most major banks offer special terms for doctors, but benefits vary: (1) Public sector banks (SBI, PNB) - Higher FOIR, better rates, (2) Private banks (HDFC, ICICI, Axis) - Higher FOIR, better rates, reduced fees, (3) HFCs (LIC HFL) - Higher FOIR, better rates. However, benefits depend on: (1) Doctor type (self-employed vs employed), (2) Income level, (3) CIBIL score, (4) Loan amount. Compare offers from 30+ banks through Credrace to find banks offering best terms for doctors.",
    },
  ],

  ctaHeadline: "Ready to Get Home Loan as Doctor?",
  ctaSub:
    "Calculate your loan amount with doctor benefits. Compare offers from 30+ banks. Get expert guidance for medical professionals. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan for IT Employees Hyderabad", href: "/home-loan-for-it-employees-hyderabad" },
    { label: "Home Loan for Government Employees Hyderabad", href: "/home-loan-government-employees-hyderabad" },
    { label: "How Much Home Loan Can I Get Hyderabad", href: "/how-much-home-loan-can-i-get-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
  ],
};

export default function HomeLoanForDoctorsHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
