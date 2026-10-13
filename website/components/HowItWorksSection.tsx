import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type HowItWorksSectionProps = {
  locale: Locale;
};

/**
 * Four slots, one per step, each a static image with a 2-second push-in on
 * scroll. No carousel, no autoplay loop.
 *
 * TODO(mockups): swap for the new set when ready —
 *   1 home (inventory) · 2 expiring-soon · 3 dinner suggestion · 4 shared list on two phones
 */
export default function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  const STEPS = [
    {
      src: "/screens/add-item.png",
      label: t(locale, "howStep1"),
      alt: "Add item screen: add food by photo, voice, barcode or multi-scan",
    },
    {
      src: "/screens/recipes.png",
      label: t(locale, "howStep2"),
      alt: "Recipes screen with a dinner suggestion from what is in the fridge",
    },
    {
      src: "/screens/shopping-list.png",
      label: t(locale, "howStep3"),
      alt: "Shopping list that fills itself from what is running out",
    },
    {
      src: "/screens/holo.png",
      label: t(locale, "howStep4"),
      alt: "Holo chat screen answering a question about the kitchen",
    },
  ];

  return (
    <SectionWrapper id="how-it-works">
      <SectionHeader eyebrow={t(locale, "howKicker")} title={t(locale, "howTitle")} />

      <ol className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:mt-14 sm:gap-x-8 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s.src} className="flex flex-col items-center">
            <PhoneMockup
              src={s.src}
              alt={s.alt}
              pushIn
              sizes="(max-width: 640px) 42vw, (max-width: 1024px) 40vw, 220px"
              className="w-full max-w-[220px]"
            />
            <Reveal className="mt-6 w-full max-w-[220px]" delay={0.06}>
              <p className="text-xs font-medium tabular-nums text-bodyGray dark:text-[#f3f1ec]/50">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1.5 text-balance text-[15px] font-medium leading-snug text-charcoal dark:text-[#f3f1ec] sm:text-base">
                {s.label}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
