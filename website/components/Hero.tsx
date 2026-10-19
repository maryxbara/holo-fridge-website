import HoloHero from "./HoloHero";
import PhoneMockup from "./PhoneMockup";
import ProofStrip from "./ProofStrip";
import StoreButtons from "./StoreButtons";
import { SCREEN_PLACEHOLDERS } from "@/lib/screen-placeholders";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type HeroProps = {
  locale: Locale;
};

/**
 * Hero: copy fades up in a short stagger on mount (.hero-in). On the right,
 * Holo floats beside the home-screen mockup with an endless strip of status
 * chips underneath. The mockup itself is not animated so the LCP image paints
 * immediately.
 */
export default function Hero({ locale }: HeroProps) {
  const CHIPS = [
    { label: t(locale, "chipExpireSoon"), dot: "#FFB867" },
    { label: t(locale, "chipRecipeReady"), dot: "#32C0B5" },
    { label: t(locale, "chipShoppingUpdated"), dot: "#A6F5E8" },
    { label: t(locale, "chipDinnerIdeas"), dot: "#32C0B5" },
  ];

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      {/* Decorative pearl/turquoise wash — top-right halo */}
      <div
        aria-hidden
        className="halo-glow pointer-events-none absolute -top-32 right-[-20%] h-[680px] w-[680px] rounded-full"
        style={{ filter: "blur(40px)" }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <div className="relative z-10 max-w-xl lg:col-span-6">
          <h1 className="hero-in text-balance text-[44px] font-semibold leading-[1.05] tracking-tightish text-charcoal dark:text-pearl1 sm:text-[52px] lg:text-[60px]">
            {t(locale, "heroTitle")}
          </h1>

          <p
            className="hero-in mt-5 max-w-lg text-balance text-lg leading-relaxed text-bodyGray dark:text-pearl1/70 sm:text-xl"
            style={{ animationDelay: "90ms" }}
          >
            {t(locale, "heroSubtitle")}
          </p>

          <div className="hero-in mt-8" style={{ animationDelay: "180ms" }}>
            <StoreButtons locale={locale} />
            <p className="mt-3 text-sm text-bodyGray dark:text-pearl1/60">
              {t(locale, "heroFreeToStart")}
            </p>
            <ProofStrip locale={locale} className="mt-3" />
          </div>
        </div>

        {/* Holo + phone, chip strip below. `size` on HoloHero is a ceiling, so
            the composition scales down on phones instead of overflowing. */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto flex w-full max-w-md items-end justify-center lg:max-w-xl">
            {/* min-w-0 lets Holo give way instead of pushing the phone off-screen */}
            <div className="relative -mr-6 min-w-0 flex-1">
              <HoloHero size={420} priority withParticles withSweep />
            </div>
            <div className="relative -mb-2 -ml-2 w-[42%] max-w-[180px] shrink-0 lg:max-w-[220px]">
              <PhoneMockup
                contain
                src="/screens/hero-home.jpg"
                blurDataURL={SCREEN_PLACEHOLDERS["/screens/hero-home.jpg"]}
                alt="Holo home screen with expiring items, meal plan, shopping, and quick actions"
                priority
                glow
                sizes="(max-width: 640px) 42vw, 220px"
              />
            </div>
          </div>

          {/* Status chips — endless marquee */}
          <div
            className="hero-in marquee-mask -mx-5 mt-6 overflow-hidden pb-2 sm:-mx-8 lg:mx-0"
            style={{ animationDelay: "320ms" }}
          >
            <div className="flex w-max animate-marquee">
              {[...CHIPS, ...CHIPS, ...CHIPS, ...CHIPS].map((c, i) => (
                <div
                  key={`${c.label}-${i}`}
                  aria-hidden={i >= CHIPS.length}
                  className="glass-chip mr-3 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium text-charcoal/90 dark:text-pearl1/90"
                >
                  <span
                    className="mr-2 inline-block h-1.5 w-1.5 -translate-y-[1px] rounded-full align-middle"
                    style={{ background: c.dot, boxShadow: `0 0 10px ${c.dot}AA` }}
                  />
                  {c.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
