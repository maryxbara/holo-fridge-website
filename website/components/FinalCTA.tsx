import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import SectionWrapper from "./SectionWrapper";
import StoreButtons from "./StoreButtons";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type FinalCTAProps = {
  locale: Locale;
};

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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-deepTurquoise">
              {t(locale, 'ctaLabel')}
            </p>
          </Reveal>
          <Reveal delay={0.08} y={18}>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tightish text-charcoal dark:text-pearl1 sm:text-5xl">
              {t(locale, 'ctaTitle')}
            </h2>
          </Reveal>
          <Reveal delay={0.16} y={18}>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-bodyGray dark:text-pearl1/70">
              {t(locale, 'ctaSubtitle')}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-8 flex justify-center">
            <StoreButtons locale={locale} className="justify-center" />
          </Reveal>

          <Reveal delay={0.32} y={12}>
            <p className="mt-5 text-sm text-bodyGray dark:text-pearl1/60">
              {t(locale, 'heroFreeToStart')}
            </p>
          </Reveal>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
