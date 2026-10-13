import MockupCarousel from "./MockupCarousel";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
import { SCREEN_PLACEHOLDERS } from "@/lib/screen-placeholders";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type HowItWorksSectionProps = {
  locale: Locale;
};

/**
 * The four steps as a slowly drifting strip of glowing mockups — the house
 * style from the original holofridge.com. Visitors can swipe or scroll it;
 * the drift resumes a moment after they let go.
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
  ].map((s) => ({ ...s, blurDataURL: SCREEN_PLACEHOLDERS[s.src] }));

  return (
    <SectionWrapper id="how-it-works" containerClassName="max-w-7xl">
      <SectionHeader eyebrow={t(locale, "howKicker")} title={t(locale, "howTitle")} />

      <Reveal className="mt-6 sm:mt-8">
        <MockupCarousel screens={STEPS} />
      </Reveal>
    </SectionWrapper>
  );
}
