// Shared type + registry for /guides content.
// Content lives in website/content/guides/<slug>.<locale>.ts

export type GuideSection = {
  heading: string;
  /** Paragraphs. Supports **bold**, *italic*, and [n] source references. */
  body: string[];
};

export type GuideFaq = { q: string; a: string };

export type GuideSource = { id: number; title: string; url: string };

export type Guide = {
  slug: string;
  locale: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  updatedAt: string;   // ISO date
  readingMinutes: number;
  intro: string[];
  sections: GuideSection[];
  closing: { text: string; ctaLabel: string; ctaHref: string };
  faq: GuideFaq[];
  sources: GuideSource[];
};

// Register every guide here. Order = order on the /guides index page.
import { guide as expiryDatesEn } from "@/content/guides/expiry-dates.en";

export const GUIDES: Guide[] = [expiryDatesEn];

export function getGuide(locale: string, slug: string): Guide | undefined {
  return GUIDES.find((g) => g.locale === locale && g.slug === slug);
}

export function getGuidesForLocale(locale: string): Guide[] {
  return GUIDES.filter((g) => g.locale === locale);
}
