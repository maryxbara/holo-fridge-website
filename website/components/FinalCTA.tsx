import GlassCard from "./GlassCard";
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-deepTurquoise">
            {t(locale, 'ctaLabel')}
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tightish text-charcoal dark:text-pearl1 sm:text-5xl">
            {t(locale, 'ctaTitle')}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-bodyGray dark:text-pearl1/70">
            {t(locale, 'ctaSubtitle')}
          </p>

          <div className="mt-8 flex justify-center">
            <StoreButtons locale={locale} />
          </div>

          <p className="mt-5 text-sm text-bodyGray dark:text-pearl1/60">
            {t(locale, 'heroFreeToStart')}
          </p>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
