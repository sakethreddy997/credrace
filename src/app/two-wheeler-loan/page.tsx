import type { Metadata } from "next";
import { ProductPageTemplate } from "@/components/product/product-page-template";
import { FAQSchema, WebPageSchema } from "@/components/json-ld";
import type { ProductPageData } from "@/components/product/product-page-template";

export const metadata: Metadata = {
  title: "Two-Wheeler Loan at Low EMIs | 100% Funding | Credrace",
  description:
    "Get a two-wheeler loan with EMIs starting ₹999. Interest rates from 7.99%, up to 100% on-road funding. Compare offers from top lenders on Credrace.",
  openGraph: {
    title: "Two-Wheeler Loan at Low EMIs | Credrace",
    description:
      "Two-wheeler loans from 7.99%. EMIs starting ₹999, up to 100% funding.",
  },
};

const twoWheelerData: ProductPageData = {
  heroLabel: "Two-Wheeler Loan at EMIs you can afford",
  heroHeadline: "Ride out today.\nPay at your pace.",
  heroSub:
    "Get up to 100% on-road price funding for your new bike, scooter, or EV. EMIs starting at just ₹999/month from verified lenders.",
  stats: [
    { value: "7.99%", label: "Rates starting from" },
    { value: "100%", label: "On-road funding" },
    { value: "₹999", label: "EMI starting from" },
    { value: "0%", label: "Down payment possible" },
  ],

  compareHeadline: "Dealer financing vs Credrace. The numbers speak.",
  compareSub:
    "Dealership finance desks earn commissions on high rates. Credrace shows you every option available so you pick the cheapest one.",
  compareRows: [
    { label: "Lenders shown", bank: "1-2", credrace: "10+", highlight: true },
    { label: "Interest rate", bank: "12-14%", credrace: "7.99%" },
    { label: "Down payment", bank: "10-20%", credrace: "As low as 0%" },
    { label: "Processing fee", bank: "₹2,000+", credrace: "From ₹500" },
    { label: "Hidden charges", bank: "Often added", credrace: "None, full breakdown", highlight: true },
    { label: "Time to approval", bank: "1-2 days", credrace: "Same day" },
  ],
  savingsAmount: "up to ₹12,000",
  savingsContext: "Average savings on a ₹1.5L loan over 3 years vs dealer financing",

  benefits: [
    { text: "Up to 100% on-road price financing. No need to drain your savings for a down payment." },
    { text: "EMIs starting at just ₹999/month. Pick a tenure that fits your monthly budget." },
    { text: "Available for new bikes, scooters, and electric vehicles from all major brands" },
    { text: "Minimal documentation. Aadhaar + PAN is often enough to get started." },
    { text: "No income proof needed for loans under ₹1 Lakh with select lenders" },
    { text: "See the total cost upfront including processing fees, insurance, and EMI schedule" },
  ],

  features: [
    { label: "Interest rate", value: "7.99% – 14.00% p.a." },
    { label: "Loan amount", value: "Up to 100% on-road price" },
    { label: "Tenure", value: "1 – 4 years" },
    { label: "Processing fee", value: "₹500 – ₹2,000" },
    { label: "Down payment", value: "As low as 0%" },
    { label: "Disbursement time", value: "Same day – 3 days" },
  ],

  faqs: [
    {
      question: "Can I get a two-wheeler loan without a down payment?",
      answer:
        "Yes. Several lenders on our platform offer up to 100% on-road price financing, meaning zero down payment. Eligibility depends on your credit profile and the vehicle model.",
    },
    {
      question: "What documents are needed for a two-wheeler loan?",
      answer:
        "Typically: PAN card, Aadhaar card, one passport-size photo, and a cancelled cheque or bank statement. Salaried individuals may also need their latest salary slip.",
    },
    {
      question: "Can I get a loan for a used two-wheeler?",
      answer:
        "Some lenders finance pre-owned two-wheelers, typically up to 5 years old. Interest rates for used vehicles may be slightly higher than for new ones.",
    },
    {
      question: "Is there a minimum salary requirement?",
      answer:
        "Most lenders require a minimum monthly income of ₹10,000-₹15,000. Some lenders may approve with lower income for smaller loan amounts.",
    },
    {
      question: "Can I foreclose my two-wheeler loan?",
      answer:
        "Yes. Most lenders allow foreclosure after 6 months. Some charge a 2-5% foreclosure fee on the outstanding principal. Check specific lender terms on your offer.",
    },
  ],

  relatedLinks: [
    { label: "Home Loan", href: "/home-loan" },
    { label: "Personal Loan", href: "/personal-loan" },
    { label: "Check Eligibility", href: "/eligibility" },
  ],
};

export default function TwoWheelerLoanPage() {
  return (
    <>
      <WebPageSchema
        title="Two-Wheeler Loan at Low EMIs | Quick Approval"
        description="Finance your bike or scooter at EMIs from ₹999. Rates from 7.99%."
        url="/two-wheeler-loan"
      />
      <FAQSchema faqs={twoWheelerData.faqs} />
      <ProductPageTemplate data={twoWheelerData} />
    </>
  );
}
