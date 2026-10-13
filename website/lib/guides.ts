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
import { guide as expiryDatesUk } from "@/content/guides/expiry-dates.uk";
import { guide as expiryDatesRo } from "@/content/guides/expiry-dates.ro";
import { guide as expiryDatesPl } from "@/content/guides/expiry-dates.pl";
import { guide as expiryDatesDe } from "@/content/guides/expiry-dates.de";
import { guide as expiryDatesEs } from "@/content/guides/expiry-dates.es";
import { guide as expiryDatesIt } from "@/content/guides/expiry-dates.it";
import { guide as expiryDatesFr } from "@/content/guides/expiry-dates.fr";
import { guide as expiryDatesRu } from "@/content/guides/expiry-dates.ru";
import { guide as expiryDatesLt } from "@/content/guides/expiry-dates.lt";
import { guide as expiryDatesNl } from "@/content/guides/expiry-dates.nl";
import { guide as expiryDatesSv } from "@/content/guides/expiry-dates.sv";
import { guide as expiryDatesDa } from "@/content/guides/expiry-dates.da";
import { guide as expiryDatesFi } from "@/content/guides/expiry-dates.fi";
import { guide as expiryDatesPt } from "@/content/guides/expiry-dates.pt";

export const GUIDES: Guide[] = [
  expiryDatesEn,
  expiryDatesUk,
  expiryDatesRo,
  expiryDatesPl,
  expiryDatesDe,
  expiryDatesEs,
  expiryDatesIt,
  expiryDatesFr,
  expiryDatesRu,
  expiryDatesLt,
  expiryDatesNl,
  expiryDatesSv,
  expiryDatesDa,
  expiryDatesFi,
  expiryDatesPt,
];

export function getGuide(locale: string, slug: string): Guide | undefined {
  return GUIDES.find((g) => g.locale === locale && g.slug === slug);
}

export function getGuidesForLocale(locale: string): Guide[] {
  return GUIDES.filter((g) => g.locale === locale);
}
