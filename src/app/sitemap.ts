import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { PHASE1_CATEGORIES } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const entries: MetadataRoute.Sitemap = [];

  // ─── Core Pages ───
  entries.push({
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "daily",
    priority: 1.0,
  });

  entries.push({
    url: `${SITE_URL}/eligibility`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  });

  entries.push({
    url: `${SITE_URL}/home-loan`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  entries.push({
    url: `${SITE_URL}/personal-loan`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  });

  entries.push({
    url: `${SITE_URL}/two-wheeler-loan`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  });

  // ─── Phase 1: SEO Pages (Hyderabad Focus) ───
  PHASE1_CATEGORIES.forEach((category) => {
    entries.push({
      url: `${SITE_URL}/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  // ─── Phase 2: Area-Specific Pages (Hyderabad Areas) ───
  const phase2Areas = [
    "gachibowli",
    "hitech-city",
    "banjara-hills",
    "jubilee-hills",
    "kondapur",
    "madhapur",
    "kukatpally",
    "miyapur",
    "manikonda",
    "financial-district",
    "bandlaguda-jagir",
    "suncity-kismatpur",
    "rajendranagar",
  ];

  phase2Areas.forEach((area) => {
    entries.push({
      url: `${SITE_URL}/home-loan/hyderabad/${area}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // ─── Phase 3: Additional SEO Category Pages ───
  const phase3Categories = [
    "axis-home-loan-hyderabad",
    "lic-hfl-home-loan-hyderabad",
    "home-loan-balance-transfer-hyderabad",
    "home-loan-government-employees-hyderabad",
    "home-loan-women-hyderabad",
    "home-loan-low-cibil-hyderabad",
    "home-loan-calculator-hyderabad",
    "home-loan-emi-calculator-hyderabad",
    "home-loan-tax-benefits-hyderabad",
    "home-loan-prepayment-hyderabad",
    "home-loan-plot-purchase-hyderabad",
    "home-loan-construction-hyderabad",
    "home-loan-refinancing-hyderabad",
    "home-loan-top-up-hyderabad",
    "home-loan-pre-approval-hyderabad",
    "home-loan-processing-fee-hyderabad",
    "home-loan-foreclosure-charges-hyderabad",
    "home-loan-resale-property-hyderabad",
    "home-loan-under-construction-hyderabad",
    "home-loan-interest-calculator-hyderabad",
  ];

  phase3Categories.forEach((category) => {
    entries.push({
      url: `${SITE_URL}/${category}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  // ─── Phase 4: Advanced SEO Pages (Eligibility & Specialized Topics) ───
  const phase4Categories = [
    "how-much-home-loan-can-i-get-hyderabad",
    "home-loan-based-on-salary-hyderabad",
    "home-loan-based-on-rent-income-hyderabad",
    "home-loan-for-business-owners-hyderabad",
    "home-loan-for-startup-founders-hyderabad",
    "home-loan-for-doctors-hyderabad",
    "home-loan-for-it-employees-hyderabad",
    "home-loan-for-private-employees-hyderabad",
    "home-loan-for-contract-employees-hyderabad",
    "home-loan-for-retired-persons-hyderabad",
    "joint-home-loan-hyderabad",
    "co-applicant-home-loan-hyderabad",
    "minimum-salary-for-home-loan-hyderabad",
    "home-loan-eligibility-with-existing-loan-hyderabad",
    "home-loan-with-personal-loan-running-hyderabad",
  ];

  phase4Categories.forEach((category) => {
    entries.push({
      url: `${SITE_URL}/${category}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  // ─── Phase 5: CIBIL & Rejection Related Pages ───
  const phase5Categories = [
    "home-loan-for-low-cibil-score-hyderabad",
    "home-loan-for-cibil-650-hyderabad",
    "home-loan-for-cibil-700-hyderabad",
    "home-loan-after-loan-settlement-hyderabad",
    "how-to-improve-cibil-for-home-loan-hyderabad",
    "personal-loan-with-low-cibil-hyderabad",
    "loan-after-credit-card-default-hyderabad",
    "home-loan-after-bounce-history-hyderabad",
    "home-loan-rejection-reasons-hyderabad",
    "home-loan-reapply-after-rejection-hyderabad",
  ];

  phase5Categories.forEach((category) => {
    entries.push({
      url: `${SITE_URL}/${category}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  // ─── Phase 6: Property Type Specific Pages ───
  const phase6Categories = [
    "home-loan-for-under-construction-property-hyderabad",
    "home-loan-for-ready-to-move-property-hyderabad",
    "home-loan-for-resale-property-hyderabad",
    "home-loan-for-villa-hyderabad",
    "home-loan-for-apartment-hyderabad",
    "home-loan-for-independent-house-hyderabad",
    "home-loan-for-open-plot-hyderabad",
    "home-loan-for-commercial-property-hyderabad",
    "home-loan-for-duplex-house-hyderabad",
    "home-loan-for-gated-community-hyderabad",
    "construction-stage-wise-home-loan-hyderabad",
    "home-loan-for-farmhouse-hyderabad",
    "home-loan-for-second-home-hyderabad",
    "home-loan-for-rental-property-hyderabad",
    "home-loan-for-land-purchase-hyderabad",
  ];

  phase6Categories.forEach((category) => {
    entries.push({
      url: `${SITE_URL}/${category}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  return entries;
}
