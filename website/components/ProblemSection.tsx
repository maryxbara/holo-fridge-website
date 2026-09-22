import GlassCard from "./GlassCard";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type ProblemSectionProps = {
  locale: Locale;
};

export default function ProblemSection({ locale }: ProblemSectionProps) {
  const PAINS = [
    {
      title: t(locale, 'problemItem1Title'),
      body: t(locale, 'problemItem1Desc'),
    },
    {
      title: t(locale, 'problemItem2Title'),
      body: t(locale, 'problemItem2Desc'),
    },
    {
      title: t(locale, 'problemItem3Title'),
      body: t(locale, 'problemItem3Desc'),
    },
  ];

  return (
    <SectionWrapper id="how-it-works">
      <SectionHeader
        eyebrow={t(locale, 'problemTitle')}
        title={t(locale, 'problemSubtitle')}
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
        {PAINS.map((p) => (
          <GlassCard
            key={p.title}
            className="group relative h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-glassHover"
          >
            <div className="flex h-2.5 items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full bg-deepTurquoise"
                style={{ boxShadow: "0 0 12px rgba(50,192,181,0.8)" }}
              />
              <span className="h-1.5 w-1.5 rounded-full bg-glowTurquoise" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-charcoal dark:text-pearl1">
              {p.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-bodyGray dark:text-pearl1/70">
              {p.body}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
