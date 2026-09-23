import { isValidLocale, type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    title: `${trans.termsTitle} | Holo Fridge`,
    description: 'Terms of Service for Holo Fridge',
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  return (
    <>
      <Navbar locale={locale} />
      <main className="relative pb-24 pt-28 sm:pt-32">
        <SectionWrapper className="!py-0">
          <div className="mx-auto max-w-4xl">
            <Reveal y={18}>
              <h1 className="text-4xl font-semibold tracking-tightish text-charcoal dark:text-white sm:text-5xl">
                {t(locale, 'termsTitle')}
              </h1>
            </Reveal>
            <Reveal delay={0.1} y={14}>
              <p className="mt-4 text-bodyGray dark:text-white/70">
                {t(locale, 'termsLastUpdated')}
              </p>
            </Reveal>

            <div className="legal mt-12 max-w-none text-bodyGray dark:text-white/70">
              <p>{t(locale, 'termsIntro')}</p>
              <div className="glass rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">{t(locale, 'termsCompanyName')}</p>
                <p>{t(locale, 'termsCompanyDesc')}</p>
                <p>{t(locale, 'termsCompanyCode')}</p>
                <p>{t(locale, 'termsCompanyAddress')}</p>
                <p>{t(locale, 'termsCompanyRef')}</p>
              </div>
              <p>{t(locale, 'termsServiceDef')}</p>
              <p><strong>{t(locale, 'termsAcceptance')}</strong></p>

              <h2>{t(locale, 'termsSection1Title')}</h2>
              <p>{t(locale, 'termsSection1Text')}</p>

              <h2>{t(locale, 'termsSection2Title')}</h2>
              <ul>
                <li>{t(locale, 'termsSection2Item1')}</li>
                <li>{t(locale, 'termsSection2Item2')}</li>
                <li>{t(locale, 'termsSection2Item3')}</li>
                <li>{t(locale, 'termsSection2Item4')}</li>
                <li>{t(locale, 'termsSection2Item5')}</li>
              </ul>

              <h2>{t(locale, 'termsSection3Title')}</h2>
              <p>{t(locale, 'termsSection3Text1')}</p>
              <p>{t(locale, 'termsSection3Text2')}</p>

              <h2>{t(locale, 'termsSection4Title')}</h2>
              <p>{t(locale, 'termsSection4Intro')}</p>
              <ul>
                <li>{t(locale, 'termsSection4Item1')}</li>
                <li>{t(locale, 'termsSection4Item2')}</li>
                <li>{t(locale, 'termsSection4Item3')}</li>
                <li>{t(locale, 'termsSection4Item4')}</li>
              </ul>
              <p>{t(locale, 'termsSection4Renewal')}</p>

              <h2>{t(locale, 'termsSection5Title')}</h2>
              <p>{t(locale, 'termsSection5Intro')}</p>
              <ul>
                <li>{t(locale, 'termsSection5Item1')}</li>
                <li>{t(locale, 'termsSection5Item2')}</li>
                <li>{t(locale, 'termsSection5Item3')}</li>
                <li>{t(locale, 'termsSection5Item4')}</li>
              </ul>

              <h2>{t(locale, 'termsSection6Title')}</h2>
              <p>{t(locale, 'termsSection6Def')}</p>
              <p>{t(locale, 'termsSection6Warranty')}</p>
              <ul>
                <li>{t(locale, 'termsSection6Item1')}</li>
                <li>{t(locale, 'termsSection6Item2')}</li>
              </ul>
              <p>{t(locale, 'termsSection6License')}</p>
              <p>{t(locale, 'termsSection6End')}</p>
              <p><strong>{t(locale, 'termsSection6AI')}</strong></p>

              <h2>{t(locale, 'termsSection7Title')}</h2>
              <p>{t(locale, 'termsSection7Intro')}</p>
              <ul>
                <li>{t(locale, 'termsSection7Item1')}</li>
                <li>{t(locale, 'termsSection7Item2')}</li>
                <li>{t(locale, 'termsSection7Item3')}</li>
                <li>{t(locale, 'termsSection7Item4')}</li>
                <li>{t(locale, 'termsSection7Item5')}</li>
                <li>{t(locale, 'termsSection7Item6')}</li>
              </ul>
              <p>{t(locale, 'termsSection7Enforce')}</p>

              <h2>{t(locale, 'termsSection8Title')}</h2>
              <div className="glass-strong rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">{t(locale, 'termsSection8Warning')}</p>
                <p>{t(locale, 'termsSection8Desc')}</p>
                <p className="font-semibold text-charcoal dark:text-white mt-4">{t(locale, 'termsSection8Verify')}</p>
                <p className="mt-4"><strong>{t(locale, 'termsSection8Medical')}</strong></p>
                <p className="mt-4"><strong>{t(locale, 'termsSection8NoGuarantee')}</strong></p>
              </div>

              <h2>{t(locale, 'termsSection9Title')}</h2>
              <p>{t(locale, 'termsSection9Text')}</p>

              <h2>{t(locale, 'termsSection10Title')}</h2>
              <p>{t(locale, 'termsSection10Text1')}</p>
              <p>{t(locale, 'termsSection10Text2')}</p>

              <h2>{t(locale, 'termsSection11Title')}</h2>
              <p><strong>{t(locale, 'termsSection11Text1')}</strong></p>
              <p>{t(locale, 'termsSection11Text2')}</p>
              <p>{t(locale, 'termsSection11Text3')}</p>

              <h2>{t(locale, 'termsSection12Title')}</h2>
              <p>{t(locale, 'termsSection12Text1')}</p>
              <p>{t(locale, 'termsSection12Text2')}</p>
              <p>{t(locale, 'termsSection12Text3')}</p>

              <h2>{t(locale, 'termsSection13Title')}</h2>
              <p>{t(locale, 'termsSection13Text1')}</p>
              <p>{t(locale, 'termsSection13Text2')}</p>
              <p>{t(locale, 'termsSection13Text3')}</p>

              <h2>{t(locale, 'termsSection14Title')}</h2>
              <p>{t(locale, 'termsSection14Text')}</p>

              <h2>{t(locale, 'termsSection15Title')}</h2>
              <p>{t(locale, 'termsSection15Text')}</p>
              
              <h3>{t(locale, 'termsSection15DisputeTitle')}</h3>
              <ul>
                <li><strong>{t(locale, 'termsSection15Dispute1')}</strong></li>
                <li>{t(locale, 'termsSection15Dispute2')}</li>
                <li>{t(locale, 'termsSection15Dispute3')}</li>
              </ul>

              <h2>{t(locale, 'termsSection16Title')}</h2>
              <p>{t(locale, 'termsSection16Text')}</p>

              <h2>{t(locale, 'termsSection17Title')}</h2>
              <div className="glass rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">{t(locale, 'termsCompanyName')}</p>
                <p>{t(locale, 'termsContactAddress')}</p>
                <p className="mt-4">{t(locale, 'termsContactSupport')} <a href="mailto:support@holofridge.com" className="text-deepTurquoise hover:underline">support@holofridge.com</a></p>
                <p>{t(locale, 'termsContactLegal')} <a href="mailto:privacy@holofridge.com" className="text-deepTurquoise hover:underline">privacy@holofridge.com</a></p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer locale={locale} />
    </>
  );
}
