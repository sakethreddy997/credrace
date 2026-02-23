import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/constants";

interface FAQItem {
  question: string;
  answer: string;
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/eligibility?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface OrganizationSchemaProps {
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  telephone?: string;
}

export function OrganizationSchema({ address, telephone }: OrganizationSchemaProps = {}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@credrace.com",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
      ...(telephone && { telephone }),
    },
    sameAs: [],
  };
  if (address) {
    schema.address = {
      "@type": "PostalAddress",
      ...address,
      addressCountry: address.addressCountry ?? "IN",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: readonly FAQItem[] | FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface LoanOrCreditSchemaProps {
  name: string;
  description: string;
  url: string;
  amount: number;
  currency?: string;
  interestRate: number;
  loanTermValue: number;
  loanTermUnit: string;
}

export function LoanOrCreditSchema({
  name,
  description,
  url,
  amount,
  currency = "INR",
  interestRate,
  loanTermValue,
  loanTermUnit,
}: LoanOrCreditSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    amount: { "@type": "MonetaryAmount", currency, value: amount },
    interestRate: {
      "@type": "QuantitativeValue",
      value: interestRate,
      unitText: "PERCENT",
    },
    loanTerm: {
      "@type": "QuantitativeValue",
      value: loanTermValue,
      unitText: loanTermUnit,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
