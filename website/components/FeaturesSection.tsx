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
    { title: t(locale, "featureBTitle"), body: t(locale, "featureBDesc"), icon: <PlateIcon /> },
    { title: t(locale, "featureCTitle"), body: t(locale, "featureCDesc"), icon: <ListIcon /> },
  ];

  return (
    <SectionWrapper id="what-holo-does">
      <SectionHeader eyebrow={t(locale, "featuresKicker")} title={t(locale, "featuresTitle")} />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06} className="h-full">
            <div className="glass h-full rounded-3xl p-7 sm:p-8">
              <div className="text-charcoal/80 dark:text-[#f3f1ec]/80">{f.icon}</div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-charcoal dark:text-[#f3f1ec]">
                {f.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-bodyGray dark:text-[#f3f1ec]/70">
                {f.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

/* --- 1-px line icons, no tiles --- */

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function FridgeIcon() {
  return (
    <svg {...iconProps}>
      <rect x="5.5" y="2.5" width="13" height="19" rx="2.5" />
      <path d="M5.5 10.5h13" />
      <path d="M8.5 6v2M8.5 13.5v3" />
    </svg>
  );
}

function PlateIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg {...iconProps}>
      <path d="M8 6.5h12M8 12h12M8 17.5h12" />
      <path d="M3.5 6.5l1 1 1.75-2M3.5 12l1 1 1.75-2M3.5 17.5l1 1 1.75-2" />
    </svg>
  );
}
