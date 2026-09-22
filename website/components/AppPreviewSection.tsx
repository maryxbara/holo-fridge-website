import MockupCarousel from "./MockupCarousel";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type AppPreviewSectionProps = {
  locale: Locale;
};

export default function AppPreviewSection({ locale }: AppPreviewSectionProps) {
  const SCREENS = [
    {
      src: "/screens/home.png",
      label: t(locale, 'appPreviewStep1Title'),
      alt: "Holo Fridge home screen with categories and item counts",
    },
    {
      src: "/screens/recipes.png",
      label: t(locale, 'appPreviewStep2Title'),
      alt: "Recipes screen with AI suggestions",
    },
    {
      src: "/screens/shopping.png",
      label: t(locale, 'appPreviewStep3Title'),
      alt: "Shopping list with budget and AI assistant",
    },
    {
      src: "/screens/holo.png",
      label: t(locale, 'meetHoloTitle'),
      alt: "Holo Assistant chat screen",
    },
  ];

  return (
    <SectionWrapper id="preview" containerClassName="max-w-7xl">
      <SectionHeader
        eyebrow={t(locale, 'appPreviewLabel')}
        title={t(locale, 'appPreviewTitle')}
        subtitle={t(locale, 'appPreviewSubtitle')}
      />

      <Reveal className="mt-14">
        <MockupCarousel screens={SCREENS} />
      </Reveal>
    </SectionWrapper>
  );
}
