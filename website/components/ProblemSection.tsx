import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type ProblemSectionProps = {
  locale: Locale;
};

export default function ProblemSection({ locale }: ProblemSectionProps) {
  const PAINS = [
    { title: t(locale, "problem1Title"), body: t(locale, "problem1Desc") },
    { title: t(locale, "problem2Title"), body: t(locale, "problem2Desc") },
    { title: t(locale, "problem3Title"), body: t(locale, "problem3Desc") },
  ];

  return (
    <SectionWrapper id="problems">
      <SectionHeader eyebrow={t(locale, "problemKicker")} title={t(locale, "problemTitle")} />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:mt-14 md:grid-cols-3">
        {PAINS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="h-full">
            <GlassCard className="group relative h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-glassHover">
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
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
