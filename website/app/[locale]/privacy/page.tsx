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
    title: `${trans.privacyTitle} | Holo Fridge`,
    description: 'Privacy Policy for Holo Fridge',
  };
}

export default async function PrivacyPage({
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
                {t(locale, 'privacyTitle')}
              </h1>
            </Reveal>
            <Reveal delay={0.1} y={14}>
              <p className="mt-4 text-bodyGray dark:text-white/70">
                {t(locale, 'privacyLastUpdated')}
              </p>
            </Reveal>

            <div className="legal mt-12 max-w-none text-bodyGray dark:text-white/70">
              <div className="glass-strong rounded-3xl p-8 mb-8">
                <h2 className="!mt-0">{t(locale, 'privacySummaryTitle')}</h2>
                <ul>
                  <li>{t(locale, 'privacySummary1')}</li>
                  <li>{t(locale, 'privacySummary2')}</li>
                  <li>{t(locale, 'privacySummary3')}</li>
                  <li>{t(locale, 'privacySummary4')}</li>
                  <li>{t(locale, 'privacySummary5')}</li>
                  <li>{t(locale, 'privacySummary6')}</li>
                </ul>
                <p>{t(locale, 'privacySummaryGlobal')}</p>
              </div>

              <h2>{t(locale, 'privacySection1Title')}</h2>
              <p>{t(locale, 'privacySection1Intro')}</p>
              <div className="glass rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">{t(locale, 'termsCompanyName')}</p>
                <p>{t(locale, 'termsCompanyDesc')}</p>
                <p>{t(locale, 'termsCompanyCode')}</p>
                <p>{t(locale, 'termsCompanyAddress')}</p>
                <p className="mt-4">{t(locale, 'privacySection1Email')} <a href="mailto:privacy@holofridge.com" className="text-deepTurquoise hover:underline">privacy@holofridge.com</a></p>
                <p>{t(locale, 'privacySection1Support')} <a href="mailto:support@holofridge.com" className="text-deepTurquoise hover:underline">support@holofridge.com</a></p>
              </div>
              <p>{t(locale, 'privacySection1Ref')}</p>

              <h2>{t(locale, 'privacySection2Title')}</h2>
              <ul>
                <li><strong>{t(locale, 'privacySection2Def1')}</strong></li>
                <li><strong>{t(locale, 'privacySection2Def2')}</strong></li>
                <li><strong>{t(locale, 'privacySection2Def3')}</strong></li>
                <li><strong>{t(locale, 'privacySection2Def4')}</strong></li>
              </ul>

              <h2>{t(locale, 'privacySection3Title')}</h2>
              <p>{t(locale, 'privacySection3Intro')}</p>
              
              <h3>{t(locale, 'privacySection3DirectTitle')}</h3>
              <ul>
                <li><strong>{t(locale, 'privacySection3Direct1')}</strong></li>
                <li><strong>{t(locale, 'privacySection3Direct2')}</strong></li>
                <li><strong>{t(locale, 'privacySection3Direct3')}</strong></li>
                <li><strong>{t(locale, 'privacySection3Direct4')}</strong></li>
                <li><strong>{t(locale, 'privacySection3Direct5')}</strong></li>
              </ul>

              <h3>{t(locale, 'privacySection3AutoTitle')}</h3>
              <ul>
                <li><strong>{t(locale, 'privacySection3Auto1')}</strong></li>
                <li><strong>{t(locale, 'privacySection3Auto2')}</strong></li>
                <li><strong>{t(locale, 'privacySection3Auto3')}</strong></li>
              </ul>

              <h3>{t(locale, 'privacySection3PermTitle')}</h3>
              <ul>
                <li><strong>{t(locale, 'privacySection3Perm1')}</strong></li>
                <li><strong>{t(locale, 'privacySection3Perm2')}</strong></li>
                <li><strong>{t(locale, 'privacySection3Perm3')}</strong></li>
                <li><strong>{t(locale, 'privacySection3Perm4')}</strong></li>
              </ul>
              <p>{t(locale, 'privacySection3PermNote')}</p>

              <h3>{t(locale, 'privacySection3ChildrenTitle')}</h3>
              <p>{t(locale, 'privacySection3Children')}</p>

              <h2>{t(locale, 'privacySection4Title')}</h2>
              
              <h3>{t(locale, 'privacySection4ProvideTitle')}</h3>
              <ul>
                <li>{t(locale, 'privacySection4Provide1')}</li>
                <li>{t(locale, 'privacySection4Provide2')}</li>
                <li>{t(locale, 'privacySection4Provide3')}</li>
              </ul>

              <h3>{t(locale, 'privacySection4PersonalTitle')}</h3>
              <p>{t(locale, 'privacySection4Personal')}</p>

              <h3>{t(locale, 'privacySection4AITitle')}</h3>
              <p>{t(locale, 'privacySection4AIIntro')}</p>
              <ul>
                <li>{t(locale, 'privacySection4AI1')}</li>
                <li>{t(locale, 'privacySection4AI2')}</li>
              </ul>
              <p>{t(locale, 'privacySection4AIProvider')}</p>
              <ul>
                <li>{t(locale, 'privacySection4AIProvider1')}</li>
                <li>{t(locale, 'privacySection4AIProvider2')}</li>
                <li>{t(locale, 'privacySection4AIProvider3')}</li>
              </ul>

              <h3>{t(locale, 'privacySection4WhoTitle')}</h3>
              <p>{t(locale, 'privacySection4WhoIntro')}</p>
              <ul>
                <li><strong>{t(locale, 'privacySection4Who1')}</strong></li>
                <li><strong>{t(locale, 'privacySection4Who2')}</strong></li>
                <li><strong>{t(locale, 'privacySection4Who3')}</strong></li>
              </ul>
              <p>{t(locale, 'privacySection4WhoSent')}</p>
              <p>{t(locale, 'privacySection4WhoAvoid')}</p>

              <h3>{t(locale, 'privacySection4PushTitle')}</h3>
              <p>{t(locale, 'privacySection4Push')}</p>

              <h3>{t(locale, 'privacySection4SafetyTitle')}</h3>
              <p>{t(locale, 'privacySection4Safety')}</p>

              <h3>{t(locale, 'privacySection4CommsTitle')}</h3>
              <p>{t(locale, 'privacySection4Comms')}</p>

              <h3>{t(locale, 'privacySection4MarketingTitle')}</h3>
              <p>{t(locale, 'privacySection4Marketing')}</p>

              <h3>{t(locale, 'privacySection4LegalTitle')}</h3>
              <p>{t(locale, 'privacySection4Legal')}</p>

              <h2>{t(locale, 'privacySection5Title')}</h2>
              <p>{t(locale, 'privacySection5Intro')}</p>
              <ul>
                <li><strong>{t(locale, 'privacySection5Base1')}</strong></li>
                <li><strong>{t(locale, 'privacySection5Base2')}</strong></li>
                <li><strong>{t(locale, 'privacySection5Base3')}</strong></li>
                <li><strong>{t(locale, 'privacySection5Base4')}</strong></li>
                <li><strong>{t(locale, 'privacySection5Base5')}</strong></li>
              </ul>

              <h2>{t(locale, 'privacySection6Title')}</h2>
              <p><strong>{t(locale, 'privacySection6Family')}</strong></p>
              <p><strong>{t(locale, 'privacySection6Providers')}</strong></p>
              <p><strong>{t(locale, 'privacySection6Legal')}</strong></p>
              <p><strong>{t(locale, 'privacySection6Corporate')}</strong></p>
              <p><strong>{t(locale, 'privacySection6Direction')}</strong></p>
              <p><strong>{t(locale, 'privacySection6NoSell')}</strong></p>

              <h2>{t(locale, 'privacySection7Title')}</h2>
              <p>{t(locale, 'privacySection7Text')}</p>

              <h2>{t(locale, 'privacySection8Title')}</h2>
              <p>{t(locale, 'privacySection8Intro')}</p>
              <ul>
                <li><strong>{t(locale, 'privacySection8Item1')}</strong></li>
                <li><strong>{t(locale, 'privacySection8Item2')}</strong></li>
                <li><strong>{t(locale, 'privacySection8Item3')}</strong></li>
                <li><strong>{t(locale, 'privacySection8Item4')}</strong></li>
              </ul>
              <p>{t(locale, 'privacySection8Note')}</p>

              <h2>{t(locale, 'privacySection9Title')}</h2>
              <p>{t(locale, 'privacySection9Intro')}</p>
              <ul>
                <li>{t(locale, 'privacySection9Item1')}</li>
                <li>{t(locale, 'privacySection9Item2')}</li>
                <li>{t(locale, 'privacySection9Item3')}</li>
              </ul>
              <p>{t(locale, 'privacySection9Note')}</p>

              <h2>{t(locale, 'privacySection10Title')}</h2>
              <p>{t(locale, 'privacySection10Intro')}</p>
              <ul>
                <li><strong>{t(locale, 'privacySection10Right1')}</strong></li>
                <li><strong>{t(locale, 'privacySection10Right2')}</strong></li>
                <li><strong>{t(locale, 'privacySection10Right3')}</strong></li>
                <li><strong>{t(locale, 'privacySection10Right4')}</strong></li>
                <li><strong>{t(locale, 'privacySection10Right5')}</strong></li>
                <li><strong>{t(locale, 'privacySection10Right6')}</strong></li>
                <li><strong>{t(locale, 'privacySection10Right7')}</strong></li>
              </ul>

              <h3>{t(locale, 'privacySection10HowTitle')}</h3>
              <ul>
                <li><strong>{t(locale, 'privacySection10How1')}</strong></li>
                <li><strong>{t(locale, 'privacySection10How2')}</strong> <a href="mailto:privacy@holofridge.com" className="text-deepTurquoise hover:underline">privacy@holofridge.com</a></li>
              </ul>
              <p>{t(locale, 'privacySection10Delete')} <a href={`/${locale}/delete-account`} className="text-deepTurquoise hover:underline">{t(locale, 'privacySection10DeleteLink')}</a>.</p>
              <p>{t(locale, 'privacySection10Response')}</p>
              <p>{t(locale, 'privacySection10Complaint')}</p>

              <h2>{t(locale, 'privacySection11Title')}</h2>
              <p>{t(locale, 'privacySection11Text')}</p>

              <h2>{t(locale, 'privacySection12Title')}</h2>
              <p>{t(locale, 'privacySection12Text')}</p>

              <h2>{t(locale, 'privacySection13Title')}</h2>
              <p>{t(locale, 'privacySection13Intro')}</p>
              <div className="glass rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">{t(locale, 'termsCompanyName')}</p>
                <p>{t(locale, 'termsContactAddress')}</p>
                <p>{t(locale, 'privacyContactEmail')} <a href="mailto:privacy@holofridge.com" className="text-deepTurquoise hover:underline">privacy@holofridge.com</a></p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer locale={locale} />
    </>
  );
}
