import GlassCard from "./GlassCard";
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
 * Final CTA. The turquoise underline under "Holo" is the same device as the
 * ad end card.
 */
export default function FinalCTA({ locale }: FinalCTAProps) {
  return (
    <SectionWrapper id="download">
      <div className="relative">
        {/* Glow halo behind the card */}
        <div
          aria-hidden
          className="halo-glow-card pointer-events-none absolute inset-0 -z-10 mx-auto"
          style={{ filter: "blur(40px)" }}
        />

        <Reveal>
          <GlassCard
            variant="strong"
            className="relative mx-auto max-w-3xl !p-10 text-center transition-all duration-700 hover:-translate-y-1 hover:shadow-glassHover sm:!p-14"
          >
            <h2 className="text-balance text-4xl font-semibold tracking-tightish text-charcoal dark:text-pearl1 sm:text-5xl">
              {t(locale, "ctaTitle")}
            </h2>
            <p className="mt-5 text-balance text-xl leading-relaxed text-charcoal dark:text-pearl1 sm:text-2xl">
              <span className="accent-underline">{t(locale, "ctaBrand")}</span>{" "}
              <span className="text-bodyGray dark:text-pearl1/70">{t(locale, "ctaTagline")}</span>
            </p>

            <div className="mt-8 flex flex-col items-center">
              <StoreButtons locale={locale} className="justify-center" />
              <p className="mt-4 text-sm text-bodyGray dark:text-pearl1/60">
                {t(locale, "heroFreeToStart")}
              </p>
              <ProofStrip locale={locale} className="mt-3 justify-center" />
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
