export const SITE_NAME = "Credrace";
export const SITE_URL = "https://www.credrace.com";
export const SITE_DESCRIPTION =
  "India's trusted loan marketplace. Compare offers from 30+ lenders for home loans, personal loans, and more. Check your eligibility in 2 minutes. No impact on your CIBIL score.";
export const SITE_TAGLINE = "Your race to the right credit, simplified.";

export const NAV_LINKS = [
  { label: "Home Loan", href: "/home-loan" },
  { label: "Personal Loan", href: "/personal-loan" },
  { label: "Two-Wheeler Loan", href: "/two-wheeler-loan" },
] as const;

export const LOAN_PRODUCTS = [
  {
    title: "Home Loan",
    href: "/home-loan",
    description: "Affordable rates from India's top banks. Get up to ₹5 Cr.",
    rate: "8.25%",
    rateLabel: "onwards",
    icon: "Home",
  },
  {
    title: "Personal Loan",
    href: "/personal-loan",
    description: "Quick disbursal with minimal documentation. Up to ₹40 Lakh.",
    rate: "10.25%",
    rateLabel: "onwards",
    icon: "User",
  },
  {
    title: "Two-Wheeler Loan",
    href: "/two-wheeler-loan",
    description: "Finance your ride with EMIs starting ₹999. Up to 100% funding.",
    rate: "7.99%",
    rateLabel: "onwards",
    icon: "Bike",
  },
  {
    title: "Business Loan",
    href: "/eligibility",
    description: "Fuel your growth. Collateral-free loans up to ₹50 Lakh.",
    rate: "14%",
    rateLabel: "onwards",
    icon: "Briefcase",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Check your eligibility",
    description:
      "Answer a few simple questions. No documents needed at this stage. Zero impact on your CIBIL score.",
  },
  {
    step: 2,
    title: "Compare personalised offers",
    description:
      "We match you with the best rates from 30+ verified lenders. Transparent terms, no hidden fees.",
  },
  {
    step: 3,
    title: "Get your loan disbursed",
    description:
      "Choose an offer, submit documents digitally, and receive funds. Often within 24 to 48 hours.",
  },
] as const;

export const TRUST_PILLARS = [
  {
    title: "Bank-grade security",
    description:
      "256-bit encryption protects your data. We never share your information without explicit consent.",
    icon: "Shield",
  },
  {
    title: "100% transparent",
    description:
      "No hidden charges, no surprise fees. Every offer shows the full cost breakdown upfront.",
    icon: "Eye",
  },
  {
    title: "Fast & paperless",
    description:
      "Digital-first process. Check eligibility in 2 minutes, get offers in hours, not weeks.",
    icon: "Zap",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "I compared 5 home loan offers and saved ₹3.2 Lakh in interest over the tenure. The process was completely transparent.",
    author: "Customer from Hyderabad",
    loanType: "Home Loan",
  },
  {
    quote:
      "Got my personal loan approved in under 24 hours. No branch visits, no paperwork hassles. Highly recommend.",
    author: "Customer from Bangalore",
    loanType: "Personal Loan",
  },
  {
    quote:
      "As a first-time borrower, I appreciated how clearly everything was explained. No pressure, no spam calls.",
    author: "Customer from Mumbai",
    loanType: "Two-Wheeler Loan",
  },
] as const;

export const HOME_FAQS = [
  {
    question: "Is Credrace a bank or an NBFC?",
    answer:
      "No. Credrace is a loan marketplace that connects you with verified banks and NBFCs. We help you compare and choose. We don't lend directly.",
  },
  {
    question: "Does checking eligibility affect my credit score?",
    answer:
      "No. Our eligibility check uses a soft inquiry that does not impact your CIBIL or credit score in any way.",
  },
  {
    question: "Is my personal data safe with Credrace?",
    answer:
      "Absolutely. We use 256-bit encryption and never share your data with any third party without your explicit consent. We are compliant with all applicable data protection regulations.",
  },
  {
    question: "How does Credrace make money?",
    answer:
      "We earn a referral fee from the lender when a loan is successfully disbursed. This never affects the interest rate or terms you receive.",
  },
  {
    question: "How long does the loan process take?",
    answer:
      "After you select an offer, most loans are approved within 24–72 hours, depending on the lender and loan type. Personal loans can be disbursed in as little as 4 hours.",
  },
] as const;
