/** Meta Pixel helpers. Safe to call when the pixel is absent or declined. */

type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

/** `ViewContent` on a store-button click — the signal the web-to-app funnel keys off. */
export function trackStoreClick(store: "app_store" | "google_play") {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", "ViewContent", {
    content_name: store,
    content_category: "store_button",
  });
}
