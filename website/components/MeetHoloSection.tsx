import HoloHero from "./HoloHero";
import Reveal from "./Reveal";
import SectionWrapper from "./SectionWrapper";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type MeetHoloSectionProps = {
  locale: Locale;
};

/**
 * The one place the mascot appears: mid-page, as the hologram — radial
 * turquoise orb, drifting particles, breathing scale and light sweep.
 */
export default function MeetHoloSection({ locale }: MeetHoloSectionProps) {
  return (
    <SectionWrapper id="meet-holo" className="!py-24 sm:!py-32">
      <div className="relative flex flex-col items-center text-center">
        <Reveal y={18}>
          <h2 className="text-balance text-4xl font-semibold tracking-tightish text-charcoal dark:text-pearl1 sm:text-5xl">
            {t(locale, "meetHoloTitle")}
          </h2>
        </Reveal>
        <Reveal delay={0.08} y={18}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-bodyGray dark:text-pearl1/70 sm:text-xl">
            {t(locale, "meetHoloDesc")}
          </p>
        </Reveal>

        {/* w-full keeps this from shrink-wrapping to Holo's max size, which is
            what lets Holo cap itself to the viewport on narrow screens */}
        <Reveal delay={0.16} className="mt-10 flex w-full flex-col items-center sm:mt-12">
          <HoloHero size={420} priority={false} withParticles withSweep />
          <p className="mt-2 text-sm text-bodyGray dark:text-pearl1/60">
            {t(locale, "meetHoloCaption")}
          </p>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
