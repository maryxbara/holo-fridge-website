import PhoneMockup from "./PhoneMockup";
import ProofStrip from "./ProofStrip";
import StoreButtons from "./StoreButtons";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type HeroProps = {
  locale: Locale;
};

/**
 * Hero: ivory, one home-screen mockup on a quiet card with a 10 % turquoise
 * glow behind it. No mascot here — Holo lives in "Meet Holo". One button.
 * Copy fades up on mount with a CSS animation (.hero-in); the mockup is not
 * animated so the LCP image paints immediately.
 */
export default function Hero({ locale }: HeroProps) {
  return (
    <section id="top" className="relative w-full pb-12 pt-24 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="relative z-10 max-w-xl lg:col-span-7">
          <h1 className="hero-in text-balance text-[44px] font-semibold leading-[1.04] tracking-tightish text-charcoal dark:text-[#f3f1ec] sm:text-[52px] lg:text-[60px]">
            {t(locale, "heroTitle")}
          </h1>

          <p
            className="hero-in mt-6 max-w-lg text-balance text-lg leading-relaxed text-bodyGray dark:text-[#f3f1ec]/70 sm:text-xl"
            style={{ animationDelay: "60ms" }}
          >
            {t(locale, "heroSubtitle")}
          </p>

          <div className="hero-in mt-8" style={{ animationDelay: "120ms" }}>
            <StoreButtons locale={locale} />
            <p className="mt-3 text-sm text-bodyGray dark:text-[#f3f1ec]/60">
              {t(locale, "heroFreeToStart")}
            </p>
            <ProofStrip locale={locale} className="mt-3" />
          </div>
        </div>

        {/* Mockup — visible immediately, no fade */}
        <div className="relative lg:col-span-5">
          {/* On phones the card is capped so the mockup is cropped — the top of the
              home screen is the message; the full phone would cost a whole scroll. */}
          <div className="glass-strong relative mx-auto max-h-[360px] w-full max-w-sm overflow-hidden rounded-[2rem] px-8 pt-8 sm:max-h-none sm:max-w-md sm:px-12 sm:pt-10 lg:ml-auto lg:max-w-none">
            <div aria-hidden className="hero-glow pointer-events-none absolute inset-0" />
            <PhoneMockup
              src="/screens/home-hero.png"
              alt="Holo home screen: fridge overview with items, expiring-soon count and categories"
              priority
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 360px"
              className="relative mx-auto w-[86%] max-w-[320px] translate-y-5 sm:translate-y-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
