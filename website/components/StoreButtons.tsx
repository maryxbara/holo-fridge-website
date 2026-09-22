"use client";

import { useState } from "react";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

type StoreButtonsProps = {
  className?: string;
  variant?: "default" | "compact";
  locale: Locale;
};

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || "#";

export default function StoreButtons({
  className = "",
  variant = "default",
  locale,
}: StoreButtonsProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const isCompact = variant === "compact";

  return (
    <div className={`relative flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Holo Fridge on the App Store"
        className={`glass-strong group inline-flex items-center gap-3 rounded-2xl px-5 ${
          isCompact ? "py-2.5" : "py-3"
        } text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-15px_rgba(50,192,181,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deepTurquoise focus-visible:ring-offset-2 dark:text-pearl1`}
      >
        <AppleGlyph />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-charcoal/60 dark:text-pearl1/60">
            {t(locale, 'downloadOnThe')}
          </span>
          <span className={`font-semibold tracking-tight ${isCompact ? "text-base" : "text-lg"}`}>
            {t(locale, 'appStore')}
          </span>
        </span>
      </a>

      {/* Google Play Button with Coming Soon popup */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowComingSoon((open) => !open)}
          aria-label="Get Holo Fridge on Google Play"
          aria-expanded={showComingSoon}
          className={`glass-strong group relative z-50 inline-flex items-center gap-3 rounded-2xl px-5 ${
            isCompact ? "py-2.5" : "py-3"
          } text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-15px_rgba(50,192,181,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deepTurquoise focus-visible:ring-offset-2 dark:text-pearl1`}
        >
          <PlayGlyph />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-charcoal/60 dark:text-pearl1/60">
              {t(locale, 'getItOn')}
            </span>
            <span className={`font-semibold tracking-tight ${isCompact ? "text-base" : "text-lg"}`}>
              {t(locale, 'googlePlay')}
            </span>
          </span>
        </button>

        {/* Coming Soon Popup */}
        {showComingSoon && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setShowComingSoon(false)}
            />
            {/* App-style info bubble */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 z-50 animate-in">
              <div 
                className="rounded-[20px] px-6 py-4 light-bubble dark:hidden"
                style={{
                  background: "rgba(248, 252, 255, 0.95)",
                  border: "1.5px solid rgba(50, 192, 181, 0.55)",
                  boxShadow:
                    "0 12px 32px -10px rgba(50,192,181,0.3), 0 0 0 1px rgba(50,192,181,0.12), 0 0 16px rgba(50,192,181,0.4), 0 0 40px rgba(50,192,181,0.26), 0 0 72px rgba(50,192,181,0.16), inset 0 0 22px -8px rgba(50,192,181,0.2)",
                }}
              >
                <span className="text-[15px] font-semibold tracking-tightish text-charcoal whitespace-nowrap">
                  {t(locale, 'comingSoon')}
                </span>
              </div>
              <div 
                className="rounded-[20px] px-6 py-4 hidden dark:block"
                style={{
                  backgroundColor: "rgba(10, 16, 16, 0.55)",
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.025) 55%, rgba(50,192,181,0.06) 100%)",
                  border: "1.5px solid rgba(166, 245, 232, 0.7)",
                  backdropFilter: "blur(36px) saturate(165%)",
                  WebkitBackdropFilter: "blur(36px) saturate(165%)",
                  boxShadow:
                    "0 24px 60px -16px rgba(0,0,0,0.85), 0 0 0 1px rgba(166,245,232,0.18), 0 0 16px rgba(50,192,181,0.5), 0 0 40px rgba(50,192,181,0.32), 0 0 72px rgba(50,192,181,0.18), inset 0 0 22px -6px rgba(166,245,232,0.28), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                <span className="text-[15px] font-semibold tracking-tightish text-white whitespace-nowrap">
                  {t(locale, 'comingSoon')}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
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
      className="shrink-0"
    >
      <path d="M16.365 1.43c0 1.14-.42 2.22-1.13 3.04-.78.92-2.04 1.62-3.07 1.54-.13-1.1.43-2.27 1.13-3.05.79-.9 2.13-1.55 3.07-1.53zM20.5 17.18c-.55 1.27-.81 1.83-1.52 2.95-.99 1.55-2.39 3.49-4.12 3.5-1.54.02-1.94-1.01-4.04-1-2.1.01-2.54 1.02-4.08.99-1.73-.02-3.05-1.77-4.04-3.32-2.77-4.31-3.06-9.37-1.35-12.06 1.21-1.91 3.13-3.03 4.93-3.03 1.83 0 2.99 1.01 4.5 1.01 1.46 0 2.36-1.02 4.49-1.02 1.61 0 3.32.88 4.54 2.4-3.99 2.18-3.34 7.88.69 9.58z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="22"
      height="22"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="play-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A6F5E8" />
          <stop offset="100%" stopColor="#32C0B5" />
        </linearGradient>
        <linearGradient id="play-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--play-hi)" />
          <stop offset="100%" stopColor="#A6F5E8" />
        </linearGradient>
        <linearGradient id="play-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#32C0B5" />
          <stop offset="100%" stopColor="#1E8E86" />
        </linearGradient>
        <linearGradient id="play-d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--play-hi)" />
          <stop offset="100%" stopColor="var(--play-lo)" />
        </linearGradient>
      </defs>
      <path d="M3.6 1.5C3.2 1.8 3 2.3 3 2.9v18.2c0 .6.2 1.1.6 1.4l10-10.5L3.6 1.5z" fill="url(#play-a)" />
      <path d="M16.6 8.3 13.6 12l3 3.7 4.4-2.6c1-.6 1-2 0-2.6l-4.4-2.2z" fill="url(#play-c)" />
      <path d="M3.6 1.5c.4-.3 1-.4 1.6-.1l11.4 6.9-3 3.7L3.6 1.5z" fill="url(#play-b)" />
      <path d="M3.6 22.5c.4.3 1 .4 1.6.1l11.4-6.9-3-3.7L3.6 22.5z" fill="url(#play-d)" />
    </svg>
  );
}
