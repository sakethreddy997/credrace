import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "LIC Housing Finance Home Loan in Hyderabad | Interest Rates | Eligibility | Credrace",
  description:
    "LIC Housing Finance home loan in Hyderabad - Competitive rates, trusted brand, flexible options. Compare LIC HFL rates with other banks. Interest rates starting 8.30%, loan up to ₹5 Cr.",
  keywords: [
    "LIC housing finance home loan hyderabad",
    "LIC HFL home loan hyderabad",
    "LIC home loan hyderabad",
    "LIC housing finance rates hyderabad",
  ],
  alternates: { canonical: `${SITE_URL}/lic-hfl-home-loan-hyderabad` },
  openGraph: {
    title: "LIC Housing Finance Home Loan in Hyderabad | Credrace",
    description: "LIC Housing Finance home loan in Hyderabad. Rates from 8.30%, up to ₹5 Cr.",
    url: `${SITE_URL}/lic-hfl-home-loan-hyderabad`,
  },
};

const pageData = {
  title: "LIC Housing Finance Home Loan in Hyderabad | Interest Rates | Eligibility | Credrace",
  description:
    "LIC Housing Finance home loan in Hyderabad - Competitive rates, trusted brand, flexible options. Compare LIC HFL rates with other banks.",
  url: "/lic-hfl-home-loan-hyderabad",
  keywords: [
    "LIC housing finance home loan hyderabad",
    "LIC HFL home loan hyderabad",
    "LIC home loan hyderabad",
  ],

  heroLabel: "LIC Housing Finance Home Loan",
  heroHeadline: "LIC Housing Finance Home Loan in Hyderabad",
  heroSub:
    "LIC Housing Finance home loan in Hyderabad - Interest rates starting 8.30%, loan up to ₹5 Cr, flexible tenure up to 30 years. Trusted brand, competitive rates. Compare LIC HFL rates with other banks. Apply online through Credrace.",
  stats: [
    { value: "8.30%", label: "Starting interest rate" },
    { value: "₹5 Cr", label: "Maximum loan amount" },
    { value: "30 yrs", label: "Maximum tenure" },
    { value: "Trusted", label: "Brand" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6 font-medium">
      <strong>LIC Housing Finance</strong> is one of India's leading housing finance companies, offering competitive home loan rates and trusted service in Hyderabad. LIC HFL home loans are popular for their reliability, competitive rates, and customer-friendly policies.
    </p>
    <p class="text-gray-600">
      At Credrace, we help you <strong>compare LIC Housing Finance home loan rates with 30+ other banks</strong> in Hyderabad. See if LIC HFL offers you the best rate, or find better options. Apply for LIC HFL home loan online with dedicated support.
    </p>
  `,

  mainContent: `
    <div class="space-y-10">
      <!-- LIC HFL Overview -->
      <div class="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 border border-emerald-100">
        <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Why Choose LIC Housing Finance Home Loan?</h2>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏦 Trusted Brand</h3>
            <p class="text-gray-600">LIC Housing Finance is backed by LIC, India's largest insurance company. Trusted brand with decades of experience in housing finance.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">💰 Competitive Rates</h3>
            <p class="text-gray-600">LIC HFL offers competitive home loan interest rates starting from 8.30% per annum. Rates are linked to external benchmark and vary based on your credit profile.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">📈 Flexible Options</h3>
            <p class="text-gray-600">Flexible loan tenure up to 30 years, multiple repayment options, and customer-friendly policies. Options for salaried and self-employed.</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-gray-900 text-lg">🏠 Wide Coverage</h3>
            <p class="text-gray-600">LIC HFL has a strong presence in Hyderabad with multiple branches and excellent customer service. Easy access for queries and support.</p>
          </div>
        </div>
      </div>

      <!-- Rates -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">LIC Housing Finance Home Loan Interest Rates in Hyderabad</h2>
        <div class="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div class="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div class="p-6">
              <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Prime Borrowers</p>
              <p class="text-2xl font-extrabold text-emerald-600 mb-1">8.30% - 8.80%</p>
              <p class="text-sm text-gray-600">CIBIL 750+</p>
            </div>
            <div class="p-6">
              <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Good Credit</p>
              <p class="text-2xl font-extrabold text-gray-700 mb-1">8.80% - 9.30%</p>
              <p class="text-sm text-gray-600">CIBIL 700-749</p>
            </div>
            <div class="p-6">
              <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Average Credit</p>
              <p class="text-2xl font-extrabold text-gray-700 mb-1">9.30% - 9.80%</p>
              <p class="text-sm text-gray-600">CIBIL 650-699</p>
            </div>
          </div>
        </div>
        <p class="text-sm text-gray-600 mt-4">Rates are indicative and may vary based on your profile, loan amount, and property location.</p>
      </div>

      <!-- Eligibility & Documents -->
      <div class="grid md:grid-cols-2 gap-6">
        <div class="rounded-xl border border-gray-200 bg-white p-6">
          <h3 class="text-xl font-extrabold text-gray-900 mb-4">Eligibility Criteria</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong class="text-gray-900">Age:</strong> 21-65 years (salaried), 21-70 years (self-employed)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong class="text-gray-900">Income:</strong> Minimum ₹25,000/month (salaried), ₹2.5 Lakh/year (self-employed)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong class="text-gray-900">CIBIL Score:</strong> 650+ (700+ for best rates)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong class="text-gray-900">Work Experience:</strong> 2 years total, 1 year current</span>
            </li>
          </ul>
        </div>
        <div class="rounded-xl border border-gray-200 bg-white p-6">
          <h3 class="text-xl font-extrabold text-gray-900 mb-4">Key Documents</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong class="text-gray-900">Identity:</strong> Aadhaar, PAN, Passport</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong class="text-gray-900">Income:</strong> Salary slips (3 months), Form 16, Bank statements (6 months)</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong class="text-gray-900">Property:</strong> Sale agreement, Title deed, NOC from builder</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold mt-0.5">✓</span>
              <span><strong class="text-gray-900">Others:</strong> Photographs, Processing fee cheque</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Process -->
      <div>
        <h2 class="text-2xl font-extrabold text-gray-900 mb-6">How to Apply for LIC Housing Finance Home Loan</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">1</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Check Eligibility</h4>
              <p class="text-sm text-gray-600">Use our free calculator to check your eligibility for LIC HFL home loan. Takes 2 minutes, zero CIBIL impact.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">2</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Compare with Other Banks</h4>
              <p class="text-sm text-gray-600">See how LIC HFL rates compare with 30+ other banks. Find the best deal for your profile.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">3</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Apply Online</h4>
              <p class="text-sm text-gray-600">Submit LIC HFL home loan application online with documents. Our managers help organize everything.</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">4</div>
            <div>
              <h4 class="font-bold text-gray-900 mb-1">Get Approved</h4>
              <p class="text-sm text-gray-600">Receive LIC HFL approval in 5-7 days. Funds disbursed after property verification.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,

  benefits: [
    {
      text: "Compare LIC HFL rates with 30+ other banks - Get the best deal",
    },
    {
      text: "Trusted brand - Backed by LIC, India's largest insurance company",
    },
    {
      text: "Competitive rates - Starting from 8.30% per annum",
    },
    {
      text: "Flexible options - Multiple repayment options and customer-friendly policies",
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
      question: "What is the current LIC Housing Finance home loan interest rate in Hyderabad?",
      answer:
        "LIC Housing Finance home loan interest rates in Hyderabad start from 8.30% per annum for prime borrowers with CIBIL score 750+. Rates range from 8.30% to 9.80% depending on your credit score, income, and loan amount. Compare LIC HFL rates with other banks through Credrace to find the best deal.",
    },
    {
      question: "How much home loan can I get from LIC Housing Finance in Hyderabad?",
      answer:
        "LIC Housing Finance offers home loans up to ₹5 Crore in Hyderabad, subject to your eligibility, income, property value, and RBI LTV norms. Generally, you can get up to 80-90% of the property value as loan. Use our eligibility calculator to know your exact loan amount.",
    },
    {
      question: "How long does it take to get LIC Housing Finance home loan approved?",
      answer:
        "LIC Housing Finance home loan approval typically takes 5-7 working days when you apply through Credrace. The process includes eligibility check, document verification, property valuation, and final approval. LIC HFL's customer-friendly process makes it smooth.",
    },
    {
      question: "What documents are required for LIC Housing Finance home loan?",
      answer:
        "For LIC Housing Finance home loan, you need identity proof (Aadhaar, PAN), address proof, income proof (salary slips, Form 16 for salaried; ITR for self-employed), property documents (sale agreement, title deed, NOC), and photographs. LIC HFL accepts both online and offline document submission.",
    },
    {
      question: "Can I transfer my existing home loan to LIC Housing Finance?",
      answer:
        "Yes, LIC Housing Finance offers home loan balance transfer facility. You can transfer your existing home loan from another bank to LIC HFL to potentially avail lower interest rates or better terms. Compare balance transfer offers through Credrace.",
    },
    {
      question: "Does LIC Housing Finance offer special rates for government employees?",
      answer:
        "Yes, LIC Housing Finance may offer special rates or schemes for government employees in some cases. However, rates primarily depend on your credit profile. Compare LIC HFL rates with other banks through Credrace to find the best deal for your profile.",
    },
  ],

  ctaHeadline: "Ready to Apply for LIC Housing Finance Home Loan?",
  ctaSub:
    "Check your eligibility. Compare LIC HFL rates with 30+ other banks. Get the best home loan deal. Zero CIBIL impact.",
  ctaButtonText: "Check Eligibility Now",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "SBI Home Loan Hyderabad", href: "/sbi-home-loan-hyderabad" },
    { label: "HDFC Home Loan Hyderabad", href: "/hdfc-home-loan-hyderabad" },
    { label: "Axis Home Loan Hyderabad", href: "/axis-home-loan-hyderabad" },
  ],
};

export default function LICHFLHomeLoanHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
