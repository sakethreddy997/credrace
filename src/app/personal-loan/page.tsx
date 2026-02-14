import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/product-page-template";
import { FAQSchema, WebPageSchema } from "@/components/json-ld";
import type { ProductPageData } from "@/components/product/product-page-template";

export const metadata: Metadata = {
  title: "Personal Loan at Low Interest | Quick Approval | Credrace",
  description:
    "Get a personal loan up to ₹40 Lakh with rates starting 10.25%. Instant approval, minimal docs, and fast disbursal from India's top banks on Credrace.",
  openGraph: {
    title: "Personal Loan at Low Interest | Credrace",
    description:
      "Personal loans up to ₹40 Lakh. Rates from 10.25%, quick disbursal.",
  },
};

const personalLoanData: ProductPageData = {
  heroLabel: "Personal Loan with instant approval",
  heroHeadline: "Need funds fast?\nLet banks compete for you.",
  heroSub:
    "Medical bills, wedding, renovation, or travel. Get the lowest personal loan rate from 30+ banks with approval in as little as 4 hours.",
  stats: [
    { value: "10.25%", label: "Rates starting from" },
    { value: "₹40L", label: "Max loan amount" },
    { value: "4 hrs", label: "Fastest approval" },
    { value: "0", label: "Collateral needed" },
  ],

  compareHeadline: "Your bank charges what it wants. We show you what's fair.",
  compareSub:
    "A single bank has no reason to give you their best rate. When 30+ lenders compete on Credrace, you always get a better deal.",
  compareRows: [
    { label: "Lenders compared", bank: "1", credrace: "30+", highlight: true },
    { label: "Interest rate", bank: "14.5%", credrace: "10.25%" },
    { label: "Approval time", bank: "3-5 days", credrace: "4 hours" },
    { label: "Processing fee", bank: "2.5%", credrace: "As low as 1%" },
    { label: "CIBIL impact", bank: "Hard inquiry", credrace: "Soft check first", highlight: true },
    { label: "Hidden charges", bank: "Varies", credrace: "Full breakdown shown" },
  ],
  savingsAmount: "up to ₹1.2 Lakh",
  savingsContext: "Average savings on a ₹10L loan over 5 years vs single-bank offer",

  benefits: [
    { text: "No collateral or security required. 100% unsecured loan from verified lenders." },
    { text: "Disbursal in as little as 4 hours with select digital lenders on our platform" },
    { text: "Use the loan for anything. Medical, travel, wedding, renovation, or debt consolidation." },
    { text: "Flexible tenure from 12 to 60 months. Pick an EMI that fits your budget." },
    { text: "See the full cost breakdown upfront. Processing fees, interest, and total payable." },
    { text: "Your dedicated manager handles lender coordination and paperwork for free" },
  ],

  features: [
    { label: "Interest rate", value: "10.25% – 16.00% p.a." },
    { label: "Loan amount", value: "₹50,000 – ₹40 Lakh" },
    { label: "Tenure", value: "1 – 5 years" },
    { label: "Processing fee", value: "1% – 2.5%" },
    { label: "Prepayment charges", value: "2% – 4% (varies by lender)" },
    { label: "Disbursement time", value: "4 hours – 3 days" },
  ],

  faqs: [
    {
      question: "What is the minimum CIBIL score for a personal loan?",
      answer:
        "Most lenders prefer a CIBIL score of 700 or above. However, some NBFCs may approve applications with scores as low as 650, often at a slightly higher interest rate.",
    },
    {
      question: "Can I get a personal loan without salary slips?",
      answer:
        "Self-employed individuals can apply with ITR and bank statements instead of salary slips. Some digital lenders also accept bank statement analysis for quick approval.",
    },
    {
      question: "How fast can I get a personal loan disbursed?",
      answer:
        "With digital lenders on our platform, you can get disbursement in as little as 4 hours after approval. Traditional banks typically take 2-3 working days.",
    },
    {
      question: "Can I prepay my personal loan early?",
      answer:
        "Yes. Most lenders allow part or full prepayment after a lock-in period (usually 6-12 months). Prepayment charges typically range from 2% to 4% of the outstanding amount.",
    },
    {
      question: "Will applying for a personal loan affect my CIBIL score?",
      answer:
        "Checking eligibility on Credrace does NOT impact your CIBIL score (soft inquiry). However, when you formally apply with a lender, they will perform a hard inquiry which may slightly impact your score.",
    },
  ],

  relatedLinks: [
    { label: "Home Loan", href: "/home-loan" },
    { label: "Two-Wheeler Loan", href: "/two-wheeler-loan" },
    { label: "Check Eligibility", href: "/eligibility" },
  ],
};

export default function PersonalLoanPage() {
  return (
    <>
      <WebPageSchema
        title="Personal Loan at Low Interest | Quick Approval"
        description="Get a personal loan up to ₹40 Lakh with rates from 10.25%. Instant approval."
        url="/personal-loan"
      />
      <FAQSchema faqs={personalLoanData.faqs} />
      <ProductPageTemplate data={personalLoanData} />
    </>
  );
}
