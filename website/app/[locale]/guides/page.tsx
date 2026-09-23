import { isValidLocale, type Locale } from "@/lib/i18n";
import { getGuidesForLocale, type Guide } from "@/lib/guides";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "en";

  return {
    title: "Guides · Holo",
    description:
      "Practical guides to help you reduce food waste, understand expiry labels, and get the most from your kitchen.",
    alternates: {
      canonical: "https://www.holofridge.com/en/guides",
      languages: {
        "x-default": "https://www.holofridge.com/en/guides",
        en: "https://www.holofridge.com/en/guides",
      },
    },
  };
}

function GuideCard({ guide, locale }: { guide: Guide; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/guides/${guide.slug}`}
      className="group block rounded-2xl border border-divider/60 dark:border-white/10 bg-white/50 dark:bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass"
    >
      <h2 className="text-xl font-semibold text-charcoal dark:text-white group-hover:text-deepTurquoise dark:group-hover:text-glowTurquoise transition-colors">
        {guide.title}
      </h2>
      <p className="mt-2 text-bodyGray dark:text-white/70 line-clamp-2">
        {guide.description}
      </p>
      <p className="mt-4 text-sm text-bodyGray/80 dark:text-white/50">
        {guide.readingMinutes} min read
      </p>
    </Link>
  );
}

export default async function GuidesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  // Get guides for this locale, fall back to English if empty
  let guides = getGuidesForLocale(locale);
  const showEnglishNote = guides.length === 0 && locale !== "en";

  if (guides.length === 0) {
    guides = getGuidesForLocale("en");
  }

  return (
    <>
      <Navbar locale={locale} />
      <main className="relative pb-24 pt-28 sm:pt-32">
        <SectionWrapper className="!py-0">
          <div className="mx-auto max-w-3xl">
            <Reveal y={18}>
              <h1 className="text-4xl font-semibold tracking-tightish text-charcoal dark:text-white sm:text-5xl">
                Guides
              </h1>
            </Reveal>
            <Reveal delay={0.1} y={18}>
              <p className="mt-4 text-lg text-bodyGray dark:text-white/70">
                Practical advice for reducing food waste and making the most of
                your kitchen.
              </p>
            </Reveal>

            {showEnglishNote && (
              <Reveal delay={0.15} y={14}>
                <p className="mt-6 text-sm text-bodyGray dark:text-white/60 italic">
                  Guides are currently available in English.
                </p>
              </Reveal>
            )}

            <div className="mt-12 space-y-6">
              {guides.map((guide, idx) => (
                <Reveal key={guide.slug} delay={0.15 + idx * 0.08} y={14}>
                  <GuideCard guide={guide} locale={locale} />
                </Reveal>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer locale={locale} />
    </>
  );
}
