import StoreLink from "./StoreLink";
import { type Locale } from "@/lib/i18n";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";
import { t } from "@/lib/translations";

type StoreButtonsProps = {
  className?: string;
  variant?: "default" | "compact";
  locale: Locale;
};

/**
 * App Store + Google Play CTAs. The Play button renders only when
 * PLAY_STORE_URL is set — a dead button is worse than no button.
 */
export default function StoreButtons({
  className = "",
  variant = "default",
  locale,
}: StoreButtonsProps) {
  const isCompact = variant === "compact";
  const base = `glass-dark group inline-flex items-center gap-3 rounded-2xl px-5 ${
    isCompact ? "py-2.5 text-[15px]" : "py-3.5 text-base"
  } font-semibold tracking-tight text-white transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deepTurquoise focus-visible:ring-offset-2`;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreLink href={APP_STORE_URL} store="app_store" className={base}>
        <AppleGlyph />
        <span>{t(locale, "storeCtaApple")}</span>
      </StoreLink>

      {PLAY_STORE_URL ? (
        <StoreLink href={PLAY_STORE_URL} store="google_play" className={base}>
          <PlayGlyph />
          <span>{t(locale, "storeCtaPlay")}</span>
        </StoreLink>
      ) : null}
    </div>
  );
}

function AppleGlyph() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      className="shrink-0 -translate-y-[1px]"
    >
      <path d="M16.365 1.43c0 1.14-.42 2.22-1.13 3.04-.78.92-2.04 1.62-3.07 1.54-.13-1.1.43-2.27 1.13-3.05.79-.9 2.13-1.55 3.07-1.53zM20.5 17.18c-.55 1.27-.81 1.83-1.52 2.95-.99 1.55-2.39 3.49-4.12 3.5-1.54.02-1.94-1.01-4.04-1-2.1.01-2.54 1.02-4.08.99-1.73-.02-3.05-1.77-4.04-3.32-2.77-4.31-3.06-9.37-1.35-12.06 1.21-1.91 3.13-3.03 4.93-3.03 1.83 0 2.99 1.01 4.5 1.01 1.46 0 2.36-1.02 4.49-1.02 1.61 0 3.32.88 4.54 2.4-3.99 2.18-3.34 7.88.69 9.58z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" width="22" height="22" className="shrink-0">
      <defs>
        <linearGradient id="play-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A6F5E8" />
          <stop offset="100%" stopColor="#32C0B5" />
        </linearGradient>
        <linearGradient id="play-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#A6F5E8" />
        </linearGradient>
        <linearGradient id="play-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#32C0B5" />
          <stop offset="100%" stopColor="#1E8E86" />
        </linearGradient>
        <linearGradient id="play-d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#DDE3EA" />
        </linearGradient>
      </defs>
      <path d="M3.6 1.5C3.2 1.8 3 2.3 3 2.9v18.2c0 .6.2 1.1.6 1.4l10-10.5L3.6 1.5z" fill="url(#play-a)" />
      <path d="M16.6 8.3 13.6 12l3 3.7 4.4-2.6c1-.6 1-2 0-2.6l-4.4-2.2z" fill="url(#play-c)" />
      <path d="M3.6 1.5c.4-.3 1-.4 1.6-.1l11.4 6.9-3 3.7L3.6 1.5z" fill="url(#play-b)" />
      <path d="M3.6 22.5c.4.3 1 .4 1.6.1l11.4-6.9-3-3.7L3.6 22.5z" fill="url(#play-d)" />
    </svg>
  );
}
