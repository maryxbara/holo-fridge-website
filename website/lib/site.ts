/**
 * Site-wide constants read from the environment at build time
 * (NEXT_PUBLIC_* values are inlined by Next).
 */

/**
 * Neutral App Store link — redirects to the visitor's own storefront.
 * The old `/lt/app/holofridge/…` form pinned everyone to the Lithuanian store.
 * Once the Apple Ads account is live, append `?pt=…&ct=website&mt=8` so site
 * clicks show separately in App Store Connect.
 */
export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com/app/id6760011328";

/**
 * Google Play listing. Override with NEXT_PUBLIC_PLAY_STORE_URL if needed.
 * The Play button and footer link render only when this is non-empty.
 */
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
  "https://play.google.com/store/apps/details?id=com.holofridge.app";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.holofridge.com";

/**
 * Proof strip inputs. Both must be set for the strip to render — never a
 * placeholder. Example: NEXT_PUBLIC_APP_RATING=4.8 NEXT_PUBLIC_APP_RATING_COUNT=312
 */
export const APP_RATING = process.env.NEXT_PUBLIC_APP_RATING || "";
export const APP_RATING_COUNT = process.env.NEXT_PUBLIC_APP_RATING_COUNT || "";

/** Meta Pixel ID for the domain. Pixel is not loaded while this is empty. */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
