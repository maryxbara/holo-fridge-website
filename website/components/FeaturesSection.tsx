import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type Feature = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

type FeaturesSectionProps = {
  locale: Locale;
};

/**
 * "What Holo does" — three things, done quietly. Expiry alerts, family
 * sharing and voice/photo input are folded into these three as lines; six
 * equal cards made the product look like a utility.
 */
export default function FeaturesSection({ locale }: FeaturesSectionProps) {
  const FEATURES: Feature[] = [
    { title: t(locale, "featureATitle"), body: t(locale, "featureADesc"), icon: <FridgeIcon /> },
    { title: t(locale, "featureBTitle"), body: t(locale, "featureBDesc"), icon: <SparkIcon /> },
    { title: t(locale, "featureCTitle"), body: t(locale, "featureCDesc"), icon: <CartIcon /> },
  ];

  return (
    <SectionWrapper id="what-holo-does">
      <SectionHeader eyebrow={t(locale, "featuresKicker")} title={t(locale, "featuresTitle")} />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:mt-14 md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08} className="h-full">
            <GlassCard className="group h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-glassHover">
              <div className="icon-tile inline-flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105">
                {f.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-charcoal dark:text-pearl1">
                {f.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-bodyGray dark:text-pearl1/70">
                {f.body}
              </p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* --- Inline icons (inherit tile color) --- */

const stroke = "currentColor";

function FridgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="3" width="14" height="18" rx="3" stroke={stroke} strokeWidth="1.6" />
      <path d="M5 11h14" stroke={stroke} strokeWidth="1.6" />
      <path d="M8 7v1.5M8 14v2" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M10.5 4.5l2.1 5.9 5.9 2.1-5.9 2.1-2.1 5.9-2.1-5.9-5.9-2.1 5.9-2.1 2.1-5.9z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M19 2.5v5M16.5 5h5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 4h2l2.4 11.2a2 2 0 002 1.6h7.6a2 2 0 002-1.6L21 8H6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1.4" stroke={stroke} strokeWidth="1.6" />
      <circle cx="17" cy="20" r="1.4" stroke={stroke} strokeWidth="1.6" />
    </svg>
  );
}
