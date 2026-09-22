import PhoneMockup from "./PhoneMockup";
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
        {/* Endless slow drift. This clips overflow, so the track pads itself to clear the glow. */}
        <div className="marquee-mask-wide -mx-5 overflow-hidden sm:-mx-8">
          <div className="flex w-max animate-marqueeSlow py-16 will-change-transform">
            {[...SCREENS, ...SCREENS, ...SCREENS, ...SCREENS].map((s, i) => (
              <div
                key={`${s.src}-${i}`}
                /* Copies past the first are visual padding for the loop only */
                aria-hidden={i >= SCREENS.length}
                className="mr-10 w-[240px] shrink-0 sm:w-[260px]"
              >
                <PhoneMockup src={s.src} alt={s.alt} glow priority={false} />
                <p className="mt-6 text-center text-sm font-medium text-charcoal/85 dark:text-pearl1/85 sm:text-base">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
