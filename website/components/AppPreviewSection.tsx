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

      <div className="mt-14">
        {/* Padding leaves room for the mockup glow — this scroller clips overflow below lg */}
        <div
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 pt-8 sm:gap-8 lg:gap-10 lg:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SCREENS.map((s, i) => (
            <div
              key={s.src}
              className="snap-center shrink-0 basis-[72%] sm:basis-[44%] lg:basis-0 lg:flex-1"
            >
              <Reveal delay={i * 0.12}>
                <div className="relative mx-auto w-full max-w-[260px] transition-transform duration-700 hover:-translate-y-1.5">
                  <PhoneMockup
                    src={s.src}
                    alt={s.alt}
                    glow
                    priority={false}
                  />
                </div>
                <p className="mt-6 text-center text-sm font-medium text-charcoal/85 dark:text-pearl1/85 sm:text-base">
                  {s.label}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
