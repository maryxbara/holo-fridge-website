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

      <div className="mt-12 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-3">
        {PAINS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="border-t border-divider pt-6 dark:border-white/10">
              <h3 className="text-xl font-semibold tracking-tight text-charcoal dark:text-[#f3f1ec]">
                {p.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-bodyGray dark:text-[#f3f1ec]/70">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
