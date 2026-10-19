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
 * A slowly drifting strip of the ten App Store mockups. The line under each
 * one is the same caption used on that screenshot. Visitors can swipe or
 * scroll the strip; the drift resumes a moment after they let go.
 */
export default function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  const STEPS = [
    {
      src: "/screens/fridge.jpg",
      label: t(locale, "mockCaption1"),
      alt: "Not just a fridge. Every gram counts.",
    },
    {
      src: "/screens/list.jpg",
      label: t(locale, "mockCaption2"),
      alt: "Not just typing. Scan once.",
    },
    {
      src: "/screens/recipes-cook.jpg",
      label: t(locale, "mockCaption3"),
      alt: "Not just recipes. Cook what you have.",
    },
    {
      src: "/screens/tracking.jpg",
      label: t(locale, "mockCaption4"),
      alt: "Not just tracking. See money come back.",
    },
    {
      src: "/screens/reminders.jpg",
      label: t(locale, "mockCaption5"),
      alt: "Not just reminders. Nothing wasted.",
    },
    {
      src: "/screens/plate.jpg",
      label: t(locale, "mockCaption6"),
      alt: "Not just a list. Only what you need.",
    },
    {
      src: "/screens/family.jpg",
      label: t(locale, "mockCaption7"),
      alt: "Not just calorie tracking. Holo knows what's in your plate.",
    },
    {
      src: "/screens/assistant.jpg",
      label: t(locale, "mockCaption8"),
      alt: "Not just an app. Your personal coach.",
    },
    {
      src: "/screens/scan.jpg",
      label: t(locale, "mockCaption9"),
      alt: "Not just yours. One home, one rhythm.",
    },
    {
      src: "/screens/ranks.jpg",
      label: t(locale, "mockCaption10"),
      alt: "Not just a fridge app.",
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
