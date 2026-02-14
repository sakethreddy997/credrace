import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/product-page-template";
import { FAQSchema, WebPageSchema } from "@/components/json-ld";
import type { ProductPageData } from "@/components/product/product-page-template";

export const metadata: Metadata = {
  title: "Home Loan at Best Rates in India | Compare 30+ Banks | Credrace",
  description:
    "Compare home loan offers from 30+ banks and NBFCs. Interest rates starting 8.25%, loan up to 5 Cr, tenure up to 30 years. Check eligibility instantly on Credrace.",
  openGraph: {
    title: "Home Loan at Best Rates | Credrace",
    description:
      "Compare home loan offers from 30+ banks. Rates from 8.25%, up to 5 Cr.",
  },
};

const homeLoanData: ProductPageData = {
  heroLabel: "Home Loan at the best rates in India",
  heroHeadline: "Stop settling for one bank's rate.\nMake 30+ banks compete.",
  heroSub:
    "Compare home loan offers from India's top banks and housing finance companies. Pick the lowest rate. Save lakhs over your tenure.",
  stats: [
    { value: "8.25%", label: "Rates starting from" },
    { value: "₹5 Cr", label: "Max loan amount" },
    { value: "30 yrs", label: "Longest tenure" },
    { value: "0", label: "Bank visits needed" },
  ],

  compareHeadline: "One bank gives you one offer. We give you thirty.",
  compareSub:
    "When you walk into a single bank, you accept whatever rate they offer. With Credrace, 30+ lenders compete for your business. You pick the winner.",
  compareRows: [
    { label: "Banks compared", bank: "1", credrace: "30+", highlight: true },
    { label: "Interest rate", bank: "9.15%", credrace: "8.25%" },
    { label: "Processing fee", bank: "₹10,000+", credrace: "Negotiated lower" },
    { label: "Approval time", bank: "2-3 weeks", credrace: "5-7 days" },
    { label: "CIBIL impact", bank: "Hard inquiry", credrace: "Soft check first", highlight: true },
    { label: "Dedicated manager", bank: "No", credrace: "Yes, free" },
  ],
  savingsAmount: "up to ₹8.5 Lakh",
  savingsContext: "Average savings on a ₹50L loan over 20 years vs single-bank offer",

  benefits: [
    { text: "Compare real-time rates from SBI, HDFC, ICICI, LIC HFL, Bajaj, and 25+ more lenders" },
    { text: "Zero prepayment penalty on floating rate home loans across all partner lenders" },
    { text: "Tax benefits under Section 80C (principal) and Section 24(b) (interest) applicable" },
    { text: "Balance transfer facility if you already have a loan at a higher rate" },
    { text: "Dedicated relationship manager handles your paperwork end-to-end" },
    { text: "Track your application status in real-time from submission to disbursement" },
  ],

  features: [
    { label: "Interest rate", value: "8.25% – 9.50% p.a." },
    { label: "Loan amount", value: "₹5 Lakh – ₹5 Crore" },
    { label: "Tenure", value: "Up to 30 years" },
    { label: "Processing fee", value: "0.25% – 0.50%" },
    { label: "Prepayment charges", value: "Nil for floating rate" },
    { label: "Disbursement time", value: "5–10 working days" },
  ],

  faqs: [
    {
      question: "What is the minimum salary required for a home loan?",
      answer:
        "Most lenders require a minimum monthly income of ₹25,000 for salaried applicants. Self-employed applicants typically need to show annual income of ₹3 Lakh or more with ITR filings.",
    },
    {
      question: "Can I get a home loan for a resale property?",
      answer:
        "Yes. Most lenders finance resale properties, provided the property has a clear title and all necessary approvals. Some lenders may have age-of-property restrictions.",
    },
    {
      question: "What documents are needed for a home loan?",
      answer:
        "Typically: PAN card, Aadhaar, salary slips (3 months), bank statements (6 months), Form 16, and property documents. Self-employed applicants need ITR (2-3 years) and business financials.",
    },
    {
      question: "How much home loan can I get based on my salary?",
      answer:
        "As a general rule, you can get a home loan of up to 60x your monthly income, subject to existing EMIs and the lender's FOIR (Fixed Obligation to Income Ratio) criteria.",
    },
    {
      question: "Is it better to choose a fixed or floating interest rate?",
      answer:
        "Floating rates are generally lower and come with no prepayment penalty. Fixed rates offer EMI certainty but may be 1-2% higher. Most borrowers in India choose floating rates.",
    },
  ],

  relatedLinks: [
    { label: "Personal Loan", href: "/personal-loan" },
    { label: "Two-Wheeler Loan", href: "/two-wheeler-loan" },
    { label: "Check Eligibility", href: "/eligibility" },
  ],
};

export default function HomeLoanPage() {
  return (
    <>
      <WebPageSchema
        title="Home Loan at Best Rates in India"
        description="Compare home loan offers from 30+ banks. Rates from 8.25%, up to ₹5 Cr."
        url="/home-loan"
      />
      <FAQSchema faqs={homeLoanData.faqs} />
      <ProductPageTemplate data={homeLoanData} />
    </>
  );
}
