"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { META_PIXEL_ID } from "@/lib/site";

const CONSENT_KEY = "holo_pixel_consent"; // "granted" | "denied"

type Consent = "granted" | "denied" | "unset";

/**
 * Meta Pixel with a decline-by-default consent pattern.
 * - Renders nothing while NEXT_PUBLIC_META_PIXEL_ID is empty.
 * - The pixel script loads only after the visitor taps "Allow"; until then
 *   nothing is set. "Decline" is remembered and the bar never returns.
 * - PageView fires on load; store-button clicks fire ViewContent (lib/tracking.ts).
 */
export type ConsentLabels = { text: string; allow: string; decline: string };

export default function MetaPixel({ labels }: { labels: ConsentLabels }) {
  const [consent, setConsent] = useState<Consent>("unset");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === "granted" || stored === "denied") setConsent(stored);
    } catch {
      /* storage unavailable — stay unset, nothing loads */
    }
  }, []);

  if (!META_PIXEL_ID || !mounted) return null;

  const decide = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      ) : null}

      {consent === "unset" ? (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Measurement consent"
          className="glass animate-in-soft fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-xl flex-col gap-3 rounded-2xl p-4 sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-center sm:gap-4"
        >
          <p className="flex-1 text-sm leading-snug text-charcoal/85 dark:text-[#f3f1ec]/85">
            {labels.text}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => decide("denied")}
              className="rounded-xl border border-divider px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-ivory dark:border-white/15 dark:text-[#f3f1ec] dark:hover:bg-white/5"
            >
              {labels.decline}
            </button>
            <button
              type="button"
              onClick={() => decide("granted")}
              className="rounded-xl bg-[#1a1917] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2a2825] dark:bg-[#f3f1ec] dark:text-[#0f0e0c] dark:hover:bg-white"
            >
              {labels.allow}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
