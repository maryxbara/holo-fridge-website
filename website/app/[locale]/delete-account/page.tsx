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
    title: `${trans.deleteAccountTitle} | Holo Fridge`,
    description: 'How to delete your Holo Fridge account',
  };
}

export default async function DeleteAccountPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  return (
    <>
      <Navbar locale={locale} />
      <main className="relative pt-32 pb-20">
        <SectionWrapper>
          <div className="mx-auto max-w-3xl">
            <Reveal y={18}>
              <h1 className="text-4xl font-semibold tracking-tightish text-charcoal dark:text-white sm:text-5xl text-center">
                {t(locale, 'deleteAccountTitle')}
              </h1>
            </Reveal>

            <Reveal delay={0.12} className="mt-12 block">
            <GlassCard className="p-8">
              <p className="text-lg text-bodyGray dark:text-white/70 mb-6">
                {t(locale, 'deleteAccountDesc')}
              </p>
              
              <ol className="space-y-4 text-charcoal dark:text-white">
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deepTurquoise text-white font-semibold">
                    1
                  </span>
                  <span className="text-lg pt-0.5">{t(locale, 'deleteAccountStep1')}</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deepTurquoise text-white font-semibold">
                    2
                  </span>
                  <span className="text-lg pt-0.5">{t(locale, 'deleteAccountStep2')}</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deepTurquoise text-white font-semibold">
                    3
                  </span>
                  <span className="text-lg pt-0.5">{t(locale, 'deleteAccountStep3')}</span>
                </li>
              </ol>
              
              <p className="mt-8 text-bodyGray dark:text-white/70 border-t border-divider/60 dark:border-white/10 pt-6">
                {t(locale, 'deleteAccountNote')}
              </p>
              
              <p className="mt-4 text-bodyGray dark:text-white/70">
                {t(locale, 'deleteAccountQuestions')}{' '}
                <a 
                  href="mailto:support@holofridge.com" 
                  className="text-deepTurquoise hover:underline font-medium"
                >
                  support@holofridge.com
                </a>
              </p>
            </GlassCard>
            </Reveal>
          </div>
        </SectionWrapper>
      </main>
      <Footer locale={locale} />
    </>
  );
}
