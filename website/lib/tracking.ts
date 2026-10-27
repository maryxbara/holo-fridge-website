/** Meta Pixel helpers. Safe to call when the pixel is absent or declined. */

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

/** Fired by the footer's "Cookie settings" link; MetaPixel reopens its consent bar. */
export const CONSENT_SETTINGS_EVENT = "holo:consent-settings";

export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
}

/** `ViewContent` on a store-button click — the signal the web-to-app funnel keys off. */
export function trackStoreClick(store: "app_store" | "google_play") {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "ViewContent", {
    content_name: store,
    content_category: "store_button",
  });
}
