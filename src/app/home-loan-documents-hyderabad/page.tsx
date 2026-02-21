import type { Metadata } from "next";
import { SEOPageTemplate } from "@/components/seo/seo-page-template";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home Loan Documents Required in Hyderabad | Complete Checklist | Credrace",
  description:
    "Complete list of documents required for home loan in Hyderabad. Identity proof, income proof, property documents. Download checklist PDF. Salaried and self-employed documents list.",
  keywords: [
    "home loan documents required hyderabad",
    "home loan documents list hyderabad",
    "home loan documents checklist hyderabad",
    "home loan documents for salaried hyderabad",
  ],
  openGraph: {
    title: "Home Loan Documents Required in Hyderabad | Credrace",
    description: "Complete list of documents required for home loan in Hyderabad. Download checklist.",
    url: `${SITE_URL}/home-loan-documents-hyderabad`,
  },
};

const pageData = {
  title: "Home Loan Documents Required in Hyderabad | Complete Checklist | Credrace",
  description:
    "Complete list of documents required for home loan in Hyderabad. Identity proof, income proof, property documents. Download checklist PDF.",
  url: "/home-loan-documents-hyderabad",
  keywords: [
    "home loan documents required hyderabad",
    "home loan documents list hyderabad",
    "home loan documents checklist hyderabad",
  ],

  heroLabel: "Home Loan Documents",
  heroHeadline: "Documents Required for Home Loan in Hyderabad",
  heroSub:
    "Complete checklist of all documents needed for home loan application in Hyderabad. Identity proof, income proof, property documents. Different lists for salaried and self-employed. Download PDF checklist.",
  stats: [
    { value: "6-8", label: "Document categories" },
    { value: "15-20", label: "Total documents" },
    { value: "2-3 days", label: "Document collection" },
    { value: "Free", label: "Document checklist" },
  ],

  introContent: `
    <p class="lead text-xl text-gray-700 mb-6">
      Applying for a <strong>home loan in Hyderabad</strong>? Having all documents ready beforehand speeds up the approval process significantly. Different documents are required for salaried employees, self-employed professionals, and business owners.
    </p>
    <p>
      At Credrace, we provide you with a <strong>complete document checklist</strong> for home loan in Hyderabad, categorized by document type and employment status. Our dedicated loan managers also help you gather and organize all documents to ensure a smooth application process.
    </p>
  `,

  mainContent: `
    <h2>Documents Required for Salaried Employees</h2>
    <p>
      If you're a salaried employee applying for home loan in Hyderabad, you need:
    </p>

    <h3>Identity & Address Proof</h3>
    <ul>
      <li><strong>Aadhaar Card:</strong> Copy (front and back)</li>
      <li><strong>PAN Card:</strong> Copy</li>
      <li><strong>Passport:</strong> Copy (if available)</li>
      <li><strong>Voter ID:</strong> Copy (if available)</li>
      <li><strong>Driving License:</strong> Copy (if available)</li>
    </ul>
    <p>
      <strong>Note:</strong> At least one identity proof and one address proof is mandatory. Aadhaar serves as both.
    </p>

    <h3>Income Proof</h3>
    <ul>
      <li><strong>Salary Slips:</strong> Last 3 months (original or attested copies)</li>
      <li><strong>Form 16:</strong> Last 2 years (original)</li>
      <li><strong>Bank Statements:</strong> Last 6 months (all salary account statements)</li>
      <li><strong>ITR (Income Tax Returns):</strong> Last 2 years with computation of income</li>
      <li><strong>Employment Certificate:</strong> From current employer stating designation, salary, and tenure</li>
    </ul>

    <h3>Employment Proof</h3>
    <ul>
      <li><strong>Appointment Letter:</strong> Current job appointment letter</li>
      <li><strong>Experience Certificates:</strong> From previous employers (if required)</li>
      <li><strong>Employee ID Card:</strong> Copy of current company ID card</li>
    </ul>

    <h3>Property Documents</h3>
    <ul>
      <li><strong>Sale Agreement:</strong> Registered sale agreement with builder/seller</li>
      <li><strong>Property Papers:</strong> Title deeds, encumbrance certificate</li>
      <li><strong>NOC from Builder/Society:</strong> No Objection Certificate</li>
      <li><strong>Property Valuation Report:</strong> From bank-approved valuer</li>
      <li><strong>Approved Building Plan:</strong> If under construction</li>
      <li><strong>Allotment Letter:</strong> From builder (if applicable)</li>
    </ul>

    <h3>Other Documents</h3>
    <ul>
      <li><strong>Photographs:</strong> 2-4 passport size photographs</li>
      <li><strong>Cheque/DD:</strong> For processing fee payment</li>
      <li><strong>Co-Applicant Documents:</strong> If applying with co-applicant (same set of documents)</li>
    </ul>

    <h2>Documents Required for Self-Employed</h2>
    <p>
      If you're self-employed (CA, doctor, lawyer, consultant, etc.) or a business owner:
    </p>

    <h3>Identity & Address Proof</h3>
    <ul>
      <li>Same as salaried employees (Aadhaar, PAN, Passport, etc.)</li>
    </ul>

    <h3>Income Proof</h3>
    <ul>
      <li><strong>ITR (Income Tax Returns):</strong> Last 2-3 years with computation of income</li>
      <li><strong>Profit & Loss Statement:</strong> Last 2-3 years (audited or CA-certified)</li>
      <li><strong>Balance Sheet:</strong> Last 2-3 years (for companies/partnerships)</li>
      <li><strong>Bank Statements:</strong> Last 12-24 months (all business and personal accounts)</li>
      <li><strong>CA Certificate:</strong> Certified income statement from Chartered Accountant</li>
      <li><strong>GST Returns:</strong> Last 2 years (if GST registered)</li>
    </ul>

    <h3>Business Proof</h3>
    <ul>
      <li><strong>Business Registration:</strong> Certificate of incorporation, partnership deed, etc.</li>
      <li><strong>Professional License:</strong> CA certificate, medical license, bar council certificate, etc.</li>
      <li><strong>Business Address Proof:</strong> Office rent agreement or ownership documents</li>
      <li><strong>Business Vintage Proof:</strong> Documents showing business existence for 2+ years</li>
    </ul>

    <h3>Property Documents</h3>
    <ul>
      <li>Same as salaried employees</li>
    </ul>

    <h2>Property Documents Checklist</h2>
    <p>
      Property documents are crucial for home loan approval. Ensure you have:
    </p>
    <ul>
      <li><strong>Registered Sale Agreement:</strong> Must be registered with sub-registrar</li>
      <li><strong>Title Deed:</strong> Clear title in seller's name</li>
      <li><strong>Encumbrance Certificate:</strong> Shows no pending loans/charges on property</li>
      <li><strong>Khata Certificate:</strong> Property tax payment certificate</li>
      <li><strong>Approved Building Plan:</strong> If under construction</li>
      <li><strong>NOC from Builder:</strong> For under-construction properties</li>
      <li><strong>NOC from Society:</strong> For resale properties in societies</li>
      <li><strong>Property Tax Receipts:</strong> Latest property tax payment receipts</li>
    </ul>

    <h2>Tips for Document Preparation</h2>
    <p>
      To ensure smooth document processing:
    </p>
    <ul>
      <li><strong>Keep Originals Ready:</strong> Banks may ask for original documents for verification</li>
      <li><strong>Get Attested Copies:</strong> Self-attested copies are usually accepted, but some banks may require attestation</li>
      <li><strong>Organize by Category:</strong> Keep documents organized by type (identity, income, property, etc.)</li>
      <li><strong>Check Validity:</strong> Ensure all documents are current and not expired</li>
      <li><strong>Digital Copies:</strong> Keep scanned copies ready for online submission</li>
      <li><strong>Complete Sets:</strong> Ensure all pages of multi-page documents are included</li>
    </ul>

    <h2>Common Document Mistakes to Avoid</h2>
    <p>
      Avoid these common mistakes that delay approval:
    </p>
    <ul>
      <li><strong>Incomplete Bank Statements:</strong> Ensure all pages are included</li>
      <li><strong>Expired Documents:</strong> Check validity of ID proofs</li>
      <li><strong>Mismatched Names:</strong> Ensure name is consistent across all documents</li>
      <li><strong>Missing Signatures:</strong> Ensure all required documents are signed</li>
      <li><strong>Poor Quality Copies:</strong> Ensure clear, readable copies</li>
      <li><strong>Incomplete Property Papers:</strong> Ensure all property documents are included</li>
    </ul>
  `,

  benefits: [
    {
      text: "Complete document checklist - All documents listed by category",
    },
    {
      text: "Separate lists for salaried and self-employed - Know exactly what you need",
    },
    {
      text: "Downloadable PDF checklist - Keep it handy while collecting documents",
    },
    {
      text: "Document organization support - Our managers help you organize documents",
    },
    {
      text: "Digital submission - Submit documents online, no need to visit bank",
    },
    {
      text: "Quick verification - Organized documents speed up approval process",
    },
  ],

  features: [
    { label: "Identity Proof", value: "Aadhaar, PAN, Passport" },
    { label: "Income Proof (Salaried)", value: "Salary slips, Form 16, Bank statements" },
    { label: "Income Proof (Self-Employed)", value: "ITR, P&L, Bank statements" },
    { label: "Property Documents", value: "Sale agreement, Title deed, NOC" },
  ],

  faqs: [
    {
      question: "What documents are required for home loan in Hyderabad?",
      answer:
        "For home loan in Hyderabad, you need identity proof (Aadhaar, PAN), address proof, income proof (salary slips for salaried, ITR for self-employed), property documents (sale agreement, title deed, NOC), and photographs. Salaried employees need last 3 months salary slips and 6 months bank statements. Self-employed need ITR for last 2-3 years and 12-24 months bank statements.",
    },
    {
      question: "How many documents are needed for home loan?",
      answer:
        "Typically 15-20 documents are required for home loan, depending on your employment type and property. This includes 2-3 identity/address proofs, 4-6 income documents, 5-8 property documents, and other supporting documents. The exact number varies by lender and your profile.",
    },
    {
      question: "Can I get home loan with just Aadhaar and PAN?",
      answer:
        "No, Aadhaar and PAN are just identity proofs. You also need income proof (salary slips/ITR), bank statements, property documents (sale agreement, title deed), and other documents. However, Aadhaar can serve as both identity and address proof, reducing the number of documents needed.",
    },
    {
      question: "What property documents are required for home loan?",
      answer:
        "Property documents required include registered sale agreement, title deed, encumbrance certificate, khata certificate, approved building plan (if under construction), NOC from builder/society, and property tax receipts. These documents prove property ownership and ensure there are no legal issues.",
    },
    {
      question: "Do I need to submit original documents?",
      answer:
        "Usually, self-attested copies are accepted for home loan application. However, banks may ask for original documents for verification purposes. Original documents are typically returned after verification. It's best to keep originals ready and submit attested copies initially.",
    },
    {
      question: "How long does it take to collect all documents?",
      answer:
        "If you have all documents organized, it takes 1-2 days to collect everything. However, if you need to get new documents (like encumbrance certificate, property valuation), it may take 3-5 days. Our dedicated managers help you identify missing documents and guide you on how to get them quickly.",
    },
  ],

  ctaHeadline: "Ready to Apply for Home Loan?",
  ctaSub:
    "Check your eligibility first. Then gather documents using our checklist. Apply online with all documents ready. Get approved faster.",
  ctaButtonText: "Check Eligibility & Get Checklist",
  ctaButtonHref: "/eligibility",

  relatedLinks: [
    { label: "Home Loan Hyderabad", href: "/home-loan-hyderabad" },
    { label: "Home Loan Eligibility Hyderabad", href: "/home-loan-eligibility-hyderabad" },
    { label: "Home Loan Process Hyderabad", href: "/home-loan-process-hyderabad" },
  ],
};

export default function HomeLoanDocumentsHyderabadPage() {
  return <SEOPageTemplate data={pageData} />;
}
