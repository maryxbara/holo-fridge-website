import { isValidLocale, type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import SectionWrapper from "@/components/SectionWrapper";
import type { Metadata } from "next";
import { translations } from "@/lib/translations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : 'en';
  const trans = translations[validLocale];

  return {
    title: `${trans.supportTitle} | Holo Fridge`,
    description: trans.supportSubtitle,
  };
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  const faqs = [
    { q: t(locale, 'supportFaq1Q'), a: t(locale, 'supportFaq1A') },
    { q: t(locale, 'supportFaq2Q'), a: t(locale, 'supportFaq2A') },
    { q: t(locale, 'supportFaq3Q'), a: t(locale, 'supportFaq3A') },
    { q: t(locale, 'supportFaq4Q'), a: t(locale, 'supportFaq4A') },
  ];

  return (
    <>
      <Navbar locale={locale} />
      <main className="relative pt-32 pb-20">
        <SectionWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal y={18}>
              <h1 className="text-4xl font-semibold tracking-tightish text-charcoal dark:text-white sm:text-5xl">
                {t(locale, 'supportTitle')}
              </h1>
            </Reveal>
            <Reveal delay={0.1} y={18}>
              <p className="mt-4 text-lg text-bodyGray dark:text-white/70">
                {t(locale, 'supportSubtitle')}
              </p>
            </Reveal>
            <Reveal delay={0.2} y={14}>
              <a
                href={`mailto:${t(locale, 'supportEmail')}`}
                className="mt-6 inline-block rounded-full bg-deepTurquoise px-8 py-3 text-lg font-semibold text-white shadow-[0_12px_30px_-10px_rgba(50,192,181,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(50,192,181,0.75)]"
              >
                {t(locale, 'contactUs')}
              </a>
            </Reveal>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <Reveal y={16}>
              <h2 className="text-2xl font-semibold text-charcoal dark:text-white mb-8">
                {t(locale, 'supportFaq')}
              </h2>
            </Reveal>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Reveal key={idx} delay={idx * 0.09}>
                  <GlassCard className="p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-glassHover">
                    <h3 className="text-lg font-semibold text-charcoal dark:text-white">
                      {faq.q}
                    </h3>
                    <p className="mt-2 text-bodyGray dark:text-white/70">{faq.a}</p>
                  </GlassCard>
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
