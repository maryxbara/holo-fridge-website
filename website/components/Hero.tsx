import PhoneMockup from "./PhoneMockup";
import ProofStrip from "./ProofStrip";
import StoreButtons from "./StoreButtons";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type HeroProps = {
  locale: Locale;
};

/**
 * Hero: one home-screen mockup, product first. Holo the character lives in
 * "Meet Holo". One button until Google Play is live. Copy fades up on mount
 * with CSS (.hero-in); the mockup is not animated so the LCP image paints
 * immediately.
 */
export default function Hero({ locale }: HeroProps) {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      {/* Decorative pearl/turquoise wash — top-right halo */}
      <div
        aria-hidden
        className="halo-glow pointer-events-none absolute -top-32 right-[-20%] h-[680px] w-[680px] rounded-full"
        style={{ filter: "blur(40px)" }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <div className="relative z-10 max-w-xl lg:col-span-7">
          <h1 className="hero-in text-balance text-[44px] font-semibold leading-[1.05] tracking-tightish text-charcoal dark:text-pearl1 sm:text-[52px] lg:text-[60px]">
            {t(locale, "heroTitle")}
          </h1>

          <p
            className="hero-in mt-5 max-w-lg text-balance text-lg leading-relaxed text-bodyGray dark:text-pearl1/70 sm:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            {t(locale, "heroSubtitle")}
          </p>

          <div className="hero-in mt-8" style={{ animationDelay: "160ms" }}>
            <StoreButtons locale={locale} />
            <p className="mt-3 text-sm text-bodyGray dark:text-pearl1/60">
              {t(locale, "heroFreeToStart")}
            </p>
            <ProofStrip locale={locale} className="mt-3" />
          </div>
        </div>

        {/* Mockup — visible immediately, no fade. Glowing shell is the house style. */}
        <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
          <PhoneMockup
            src="/screens/home-hero.png"
            alt="Holo home screen: fridge overview with items, expiring-soon count and categories"
            priority
            glow
            sizes="(max-width: 640px) 60vw, (max-width: 1024px) 36vw, 300px"
            className="w-[62%] max-w-[300px] sm:w-[48%] lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}
