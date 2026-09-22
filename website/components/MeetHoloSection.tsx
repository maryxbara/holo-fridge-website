import HoloHero from "./HoloHero";
import Reveal from "./Reveal";
import SectionWrapper from "./SectionWrapper";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type MeetHoloSectionProps = {
  locale: Locale;
};

export default function MeetHoloSection({ locale }: MeetHoloSectionProps) {
  return (
    <SectionWrapper id="meet-holo" className="!py-32 sm:!py-40">
      <div className="relative flex flex-col items-center text-center">
        <Reveal y={14}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-deepTurquoise">
            {t(locale, 'meetHoloLabel')}
          </p>
        </Reveal>
        <Reveal delay={0.08} y={18}>
          <h2 className="mt-3 text-5xl font-semibold tracking-tightish text-charcoal dark:text-pearl1 sm:text-6xl">
            {t(locale, 'meetHoloTitle')}
          </h2>
        </Reveal>
        <Reveal delay={0.16} y={18}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-bodyGray dark:text-pearl1/70 sm:text-xl">
            {t(locale, 'meetHoloDesc')}
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-12 sm:mt-14">
          <HoloHero size={460} priority={false} withParticles withSweep />
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
