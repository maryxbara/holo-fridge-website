"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { META_PIXEL_ID } from "@/lib/site";
import { CONSENT_SETTINGS_EVENT } from "@/lib/tracking";

const CONSENT_KEY = "holo_pixel_consent"; // "granted" | "denied"
const PIXEL_COOKIES = ["_fbp", "_fbc"];

type Consent = "granted" | "denied" | "unset";

/** Expire the pixel's first-party cookies on this host and every parent domain. */
function clearPixelCookies() {
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) domains.push(`; domain=.${parts.slice(i).join(".")}`);
  for (const name of PIXEL_COOKIES) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

/**
 * Meta Pixel with a decline-by-default consent pattern.
 * - Renders nothing while NEXT_PUBLIC_META_PIXEL_ID is empty.
 * - The pixel script loads only after the visitor taps "Allow"; until then
 *   nothing is set. The choice is remembered; the footer's "Cookie settings"
 *   link reopens the bar.
 * - Withdrawing consent revokes the pixel, deletes its cookies and reloads the
 *   page, because a loaded fbevents.js cannot be unloaded.
 * - PageView fires on load; store-button clicks fire ViewContent (lib/tracking.ts).
 */
export type ConsentLabels = { text: string; allow: string; decline: string };

export default function MetaPixel({ labels }: { labels: ConsentLabels }) {
  const [consent, setConsent] = useState<Consent>("unset");
  const [reopened, setReopened] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === "granted" || stored === "denied") setConsent(stored);
    } catch {
      /* storage unavailable — stay unset, nothing loads */
    }
    const reopen = () => setReopened(true);
    window.addEventListener(CONSENT_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_SETTINGS_EVENT, reopen);
  }, []);

  if (!META_PIXEL_ID || !mounted) return null;

  const decide = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    if (consent === "granted" && value === "denied") {
      window.fbq?.("consent", "revoke");
      clearPixelCookies();
      window.location.reload();
      return;
    }
    setConsent(value);
    setReopened(false);
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

      {consent === "unset" || reopened ? (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Measurement consent"
          className="glass-strong animate-in-soft fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-xl flex-col gap-3 rounded-3xl p-4 sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-center sm:gap-4"
        >
          <p className="flex-1 text-sm leading-snug text-charcoal/85 dark:text-pearl1/85">
            {labels.text}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => decide("denied")}
              className="rounded-full border border-divider/80 bg-white/50 px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-white/80 dark:border-white/15 dark:bg-white/5 dark:text-pearl1 dark:hover:bg-white/10"
            >
              {labels.decline}
            </button>
            <button
              type="button"
              onClick={() => decide("granted")}
              className="glass-dark rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              {labels.allow}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
