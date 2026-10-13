# Holo — holofridge.com

Landing site for the Holo iOS app. Next.js 14 (App Router) + TypeScript +
Tailwind CSS. No animation library — motion is CSS plus one
IntersectionObserver hook.

The site has one job: catch the person who saw an ad, searched the name,
and needs ten seconds of reassurance before tapping the store button.
One message, identical to the ad end card: **Holo. Not just a fridge app.**
Design and copy rules come from `../holofridge.com — Upgrade Spec.md`.

---

## Run locally

```bash
cd website
npm install
npm run dev    # http://localhost:3000  (redirects to /en)
```

Build for production:

```bash
npm run build
npm run start
```

---

## Deploy

Deployed on Render from `../render.yaml` (Node 20, `npm ci && npm run build`).
`NEXT_PUBLIC_*` values are inlined at build time, so they live in
`render.yaml`, not only in the Render dashboard.

---

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_APP_STORE_URL` | Neutral App Store link (`https://apps.apple.com/app/id6760011328`). Redirects by storefront. Append `?pt=…&ct=website&mt=8` once the Apple Ads account is live. |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Empty until Android ships. The Play button renders only when set. |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, hreflang and OG. |
| `NEXT_PUBLIC_APP_RATING` / `NEXT_PUBLIC_APP_RATING_COUNT` | Proof strip under the hero button. Renders only when **both** are set. Real figures only — never a placeholder. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel for the domain. Nothing loads until the visitor taps "Allow" (decline-by-default consent bar). `PageView` on load, `ViewContent` on store-button click. |

See `.env.example`.

---

## Brand tokens

Defined in [`tailwind.config.ts`](tailwind.config.ts) and
[`app/globals.css`](app/globals.css).

| Token | Value | Use |
| --- | --- | --- |
| `ivory` | `#F7F5F0` | Page background |
| `ivoryDeep` | `#EFECE5` | Meet Holo band, hover surfaces |
| `divider` / `ivoryLine` | `#E4E0D7` | Hairlines |
| `charcoal` | `#24221F` | Headings, primary text |
| `bodyGray` | `#6F6A62` | Body copy |
| `deepTurquoise` | `#32C0B5` | **Only** on links and the single underline under "Holo" in the final CTA |
| `ink` / `inkDeep` | `#0F0E0C` / `#161513` | Dark theme surfaces |

Rules: no gradients, no emoji, no rounded-badge icons (1-px line icons if
any), sentence case, no exclamation marks, no "smart". Typeface: Inter.

Motion: fade-up on scroll at 400 ms, once (`.reveal`). Mockups get a
2-second push-in on scroll (`.push-in`). Nothing bounces, nothing loops.

---

## Copy and languages

`lib/translations.ts` holds the strings. The homepage copy is an **English
master** that lives only in the `en` block. Other locales are translated by
a native speaker after approval; until then a locale that lacks a key
serves the English text (`getTranslation()` falls back to `en`). Legal,
support and guide strings remain translated per locale.

---

## Assets

| File | Used in |
| --- | --- |
| `public/screens/home-hero.png` | Hero mockup (LCP image) and the OG image |
| `public/screens/add-item.png` | How it works · 01 |
| `public/screens/recipes.png` | How it works · 02 |
| `public/screens/shopping-list.png` | How it works · 03 |
| `public/screens/holo.png` | How it works · 04 |
| `public/holo-hologram.png` | Meet Holo (the one place the mascot appears, ≤ 320 px) |
| `public/holo-logo.png` | Navbar and footer mark |

The "How it works" slots are to be swapped for the new mockup set when it is
ready: home (inventory), expiring-soon, dinner suggestion, shared list on two
phones. `PhoneMockup` crops to 9 : 19.5 — supply 1170 × 2532 images.

---

## File structure

```
website/
  app/
    [locale]/
      layout.tsx            Inter (unicode-range subsets), <title>, description, OG, Pixel
      page.tsx              homepage; hreflang + canonical per locale
      icon.tsx              favicon (under [locale] so the middleware doesn't redirect it)
      opengraph-image.tsx   1200×630: hero mockup on ivory + tagline (Edge runtime)
      support/ guides/ privacy/ terms/ delete-account/
    globals.css             tokens, .glass card, .reveal/.push-in motion, legal typography
    structured-data.tsx     JSON-LD (Organization, SoftwareApplication, FAQ)
    sitemap.ts  robots.ts
  components/
    Navbar.tsx              server wrapper (resolves strings) → NavbarClient.tsx
    Hero.tsx                H1, sub, one store button, pricing line, ProofStrip, mockup card
    ProofStrip.tsx          rating + count; renders only when both env vars are set
    StoreButtons.tsx        App Store (+ Play when URL set) → StoreLink.tsx fires ViewContent
    ProblemSection.tsx      three problems
    FeaturesSection.tsx     "What Holo does" — three cards, 1-px line icons
    HowItWorksSection.tsx   four static mockups with push-in
    MeetHoloSection.tsx     mascot on a dark-ivory band
    FinalCTA.tsx            "Holo." with the single turquoise underline
    Footer.tsx
    MetaPixel.tsx           consent bar + pixel loader
    Reveal.tsx  SectionWrapper.tsx  SectionHeader.tsx  GlassCard.tsx  PhoneMockup.tsx
  lib/
    i18n.ts  translations.ts  site.ts (env constants)  tracking.ts  useInView.ts
  middleware.ts             locale redirect (cookie → country → Accept-Language)
```

---

## Performance notes

- Client components never import `lib/translations.ts`; strings are passed
  as props from server components so the 15-language table stays out of the
  browser bundle (~140 KB gzipped saved).
- Inter is loaded with `preload: false`; each subset has a unicode-range so a
  page downloads only the glyphs it uses.
- The hero mockup is the LCP element: `priority`, fixed aspect box (no layout
  shift), not animated.
- Lighthouse mobile (local production build): performance 98, accessibility
  100, best practices 100, SEO 100, CLS 0.01.
