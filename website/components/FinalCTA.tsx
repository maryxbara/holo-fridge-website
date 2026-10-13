import ProofStrip from "./ProofStrip";
import Reveal from "./Reveal";
import SectionWrapper from "./SectionWrapper";
import StoreButtons from "./StoreButtons";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type FinalCTAProps = {
  locale: Locale;
};

/**
 * Final CTA. The single turquoise underline under "Holo" is the same device
 * as the ad end card — the one place the accent appears outside links.
 */
export default function FinalCTA({ locale }: FinalCTAProps) {
  return (
    <SectionWrapper id="download">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-[32px] font-semibold leading-[1.1] tracking-tightish text-charcoal dark:text-[#f3f1ec] sm:text-[40px]">
          {t(locale, "ctaTitle")}
        </h2>
        <p className="mt-5 text-balance text-xl leading-relaxed text-charcoal dark:text-[#f3f1ec] sm:text-2xl">
          <span className="accent-underline">{t(locale, "ctaBrand")}</span>{" "}
          <span className="text-bodyGray dark:text-[#f3f1ec]/70">{t(locale, "ctaTagline")}</span>
        </p>

        <div className="mt-8 flex flex-col items-center">
          <StoreButtons locale={locale} className="justify-center" />
          <p className="mt-3 text-sm text-bodyGray dark:text-[#f3f1ec]/60">
            {t(locale, "heroFreeToStart")}
          </p>
          <ProofStrip locale={locale} className="mt-3 justify-center" />
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
