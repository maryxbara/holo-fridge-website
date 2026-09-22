"use client";

import { motion } from "framer-motion";
import HoloHero from "./HoloHero";
import PhoneMockup from "./PhoneMockup";
import StoreButtons from "./StoreButtons";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

type HeroProps = {
  locale: Locale;
};

export default function Hero({ locale }: HeroProps) {
  const CHIPS = [
    { label: t(locale, 'chipExpireSoon'), dot: "#FFB867" },
    { label: t(locale, 'chipRecipeReady'), dot: "#32C0B5" },
    { label: t(locale, 'chipShoppingUpdated'), dot: "#A6F5E8" },
    { label: t(locale, 'chipDinnerIdeas'), dot: "#32C0B5" },
  ];

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Decorative pearl/turquoise wash — top-right halo */}
      <div
        aria-hidden
        className="halo-glow pointer-events-none absolute -top-32 right-[-20%] h-[680px] w-[680px] rounded-full"
        style={{ filter: "blur(40px)" }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* LEFT — copy + CTAs */}
        <div className="relative z-10 lg:col-span-6">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
            className="max-w-xl"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 dark:border-white/20 bg-white/70 dark:bg-white/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-deepTurquoise backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-deepTurquoise shadow-[0_0_10px_rgba(50,192,181,0.9)]" />
              {t(locale, 'heroNowAvailable')}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-balance text-[40px] font-semibold leading-[1.05] tracking-tightish text-charcoal dark:text-pearl1 sm:text-[56px] lg:text-[64px] xl:text-[72px]"
            >
              {t(locale, 'heroTitle1')}{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, #32C0B5 0%, #A6F5E8 60%, #32C0B5 100%)",
                  }}
                >
                  {t(locale, 'heroTitle2')}
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-bodyGray dark:text-pearl1/70 sm:text-xl"
            >
              {t(locale, 'heroSubtitle')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8"
            >
              <StoreButtons locale={locale} />
              <p className="mt-3 text-xs text-bodyGray dark:text-pearl1/60">
                {t(locale, 'heroFreeToStart')}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT — Holo + phone composition (desktop) */}
        <div className="relative lg:col-span-6">
          {/* Desktop: Holo + phone with floating chips orbiting around them */}
          <div className="relative mx-auto hidden h-[640px] w-full max-w-[560px] lg:block">
            {/* HoloHero — top center-left, large */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <HoloHero size={420} priority withParticles withSweep />
            </div>

            {/* Phone — sits below/right of Holo */}
            <div className="absolute bottom-0 right-2 w-[230px]">
              <PhoneMockup
                src="/screens/home.png"
                alt="Holo Fridge home screen showing fridge inventory"
                priority
                glow
              />
            </div>

            {/* Floating chips — orbiting */}
            <FloatingChip
              label={CHIPS[0].label}
              dot={CHIPS[0].dot}
              className="absolute left-0 top-[18%]"
              delay={0.4}
            />
            <FloatingChip
              label={CHIPS[1].label}
              dot={CHIPS[1].dot}
              className="absolute right-[-10px] top-[30%]"
              delay={0.55}
            />
            <FloatingChip
              label={CHIPS[2].label}
              dot={CHIPS[2].dot}
              className="absolute left-[-10px] bottom-[28%]"
              delay={0.7}
            />
            <FloatingChip
              label={CHIPS[3].label}
              dot={CHIPS[3].dot}
              className="absolute right-0 bottom-[6%]"
              delay={0.85}
            />
          </div>

          {/* Mobile / tablet — stacked composition + horizontal chip strip */}
          <div className="relative lg:hidden">
            <div className="relative mx-auto flex w-full max-w-md items-end justify-center">
              <div className="relative -mr-6 flex-1">
                <HoloHero size={320} priority withParticles withSweep />
              </div>
              <div className="relative w-[170px] -ml-2 -mb-2">
                <PhoneMockup
                  src="/screens/home.png"
                  alt="Holo Fridge home screen showing fridge inventory"
                  priority
                  glow
                />
              </div>
            </div>

            {/* Chip strip — horizontal scroll, snap, never display:none */}
            <div className="mt-6 -mx-5 sm:-mx-8">
              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {CHIPS.map((c) => (
                  <div
                    key={c.label}
                    className="snap-start glass-chip rounded-full px-4 py-2.5 text-sm font-medium text-charcoal/90 whitespace-nowrap"
                  >
                    <span
                      className="mr-2 inline-block h-1.5 w-1.5 -translate-y-[1px] rounded-full align-middle"
                      style={{
                        background: c.dot,
                        boxShadow: `0 0 10px ${c.dot}AA`,
                      }}
                    />
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  label,
  dot,
  className = "",
  delay = 0,
}: {
  label: string;
  dot: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={`glass-chip rounded-full px-4 py-2.5 text-sm font-medium text-charcoal/90 dark:text-pearl1/90 ${className}`}
      style={{ animation: "float 7s ease-in-out infinite", animationDelay: `${delay}s` }}
    >
      <span
        className="mr-2 inline-block h-1.5 w-1.5 -translate-y-[1px] rounded-full align-middle"
        style={{ background: dot, boxShadow: `0 0 10px ${dot}AA` }}
      />
      {label}
    </motion.div>
  );
}
