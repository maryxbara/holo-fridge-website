import { isValidLocale, type Locale } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionWrapper from "@/components/SectionWrapper";
import type { Metadata } from "next";
import { translations } from "@/lib/translations";
import { localeAlternates } from "@/lib/site";
import { loadLegalDoc, LegalDocBody } from "@/lib/legal-doc";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : 'en';
  const trans = translations[validLocale];

  return {
    title: `${trans.termsTitle} | Holo`,
    description: 'Terms of Service for Holo Fridge',
    alternates: localeAlternates(validLocale, '/terms'),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';
  const doc = loadLegalDoc('terms', locale);

  return (
    <>
      <Navbar locale={locale} />
      <main className="relative pb-24 pt-28 sm:pt-32">
        <SectionWrapper className="!py-0">
          <div className="mx-auto max-w-4xl">
            <Reveal y={18}>
              <h1 className="text-4xl font-semibold tracking-tightish text-charcoal dark:text-white sm:text-5xl">
                {doc.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1} y={14}>
              <p className="mt-4 text-bodyGray dark:text-white/70">
                {doc.lastUpdated}
              </p>
            </Reveal>

            <div className="legal mt-12 max-w-none text-bodyGray dark:text-white/70">
              {/* Section 7 is "8. AI Features — Important Disclaimers". */}
              <LegalDocBody
                blocks={doc.blocks}
                cards={[{ section: 7, heading: "above", className: "glass-strong rounded-2xl p-6 my-4" }]}
              />
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer locale={locale} />
    </>
  );
}
