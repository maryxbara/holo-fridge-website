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
 * Final CTA. "Holo." uses the logo gradient, the same accent as the
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

        <GlassCard
          variant="strong"
          className="relative mx-auto max-w-3xl !p-10 text-center transition-all duration-700 hover:-translate-y-1 hover:shadow-glassHover sm:!p-14"
        >
          <Reveal y={14}>
            <h2 className="text-balance text-4xl font-semibold tracking-tightish text-charcoal dark:text-pearl1 sm:text-5xl">
              {t(locale, "ctaTitle")}
            </h2>
          </Reveal>
          <Reveal delay={0.08} y={18}>
            <p className="mt-5 text-balance text-xl leading-relaxed text-charcoal dark:text-pearl1 sm:text-2xl">
              <span className="logo-gradient-text font-semibold">{t(locale, "ctaBrand")}</span>{" "}
              <span className="text-bodyGray dark:text-pearl1/70">{t(locale, "ctaTagline")}</span>
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8 flex flex-col items-center">
            <StoreButtons locale={locale} className="justify-center" />
          </Reveal>
          <Reveal delay={0.24} y={12} className="flex flex-col items-center">
            <p className="mt-4 text-sm text-bodyGray dark:text-pearl1/60">
              {t(locale, "heroFreeToStart")}
            </p>
            <ProofStrip locale={locale} className="mt-3 justify-center" />
          </Reveal>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
