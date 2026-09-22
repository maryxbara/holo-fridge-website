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

export default function FeaturesSection({ locale }: FeaturesSectionProps) {
  const FEATURES: Feature[] = [
    {
      title: t(locale, 'feature1Title'),
      body: t(locale, 'feature1Desc'),
      icon: <FridgeIcon />,
    },
    {
      title: t(locale, 'feature4Title'),
      body: t(locale, 'feature4Desc'),
      icon: <ClockIcon />,
    },
    {
      title: t(locale, 'feature2Title'),
      body: t(locale, 'feature2Desc'),
      icon: <SparkIcon />,
    },
    {
      title: t(locale, 'feature3Title'),
      body: t(locale, 'feature3Desc'),
      icon: <CartIcon />,
    },
    {
      title: t(locale, 'feature5Title'),
      body: t(locale, 'feature5Desc'),
      icon: <PeopleIcon />,
    },
    {
      title: t(locale, 'feature6Title'),
      body: t(locale, 'feature6Desc'),
      icon: <ChatIcon />,
    },
  ];

  return (
    <SectionWrapper id="features">
      <SectionHeader
        eyebrow={t(locale, 'featuresLabel')}
        title={t(locale, 'featuresTitle')}
        subtitle={t(locale, 'featuresSubtitle')}
      />

      {/* 2x3 grid */}
      <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08} className="h-full">
            <GlassCard className="group h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-glassHover">
              <div className="icon-tile inline-flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-charcoal dark:text-pearl1">
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
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke={stroke} strokeWidth="1.6" />
      <path d="M12 8v4l2.5 2" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 4l1.6 4.2L18 10l-4.4 1.8L12 16l-1.6-4.2L6 10l4.4-1.8L12 4z" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M19 4v3M20.5 5.5h-3" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
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
function PeopleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="3" stroke={stroke} strokeWidth="1.6" />
      <circle cx="17" cy="10.5" r="2.4" stroke={stroke} strokeWidth="1.6" />
      <path d="M3 19c.6-3.2 3-5 6-5s5.4 1.8 6 5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15 19c.4-2.4 2.2-3.6 4-3.6s2.6 1 3 2.6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6.5a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H10l-4 3.5v-3.5H7a3 3 0 01-3-3v-7z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 10h6M9 13h4" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
