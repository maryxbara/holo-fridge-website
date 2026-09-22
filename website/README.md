# Holo Fridge — Landing Site

Production-ready, luxury-minimal landing page for the Holo Fridge mobile app.
Built with Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

The visual hero is **Holo**, the holographic fridge companion — the website's
entire identity is designed around Holo's pearl-and-turquoise aesthetic.

---

## Run locally

```bash
cd website
npm install
npm run dev    # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

---

## Deploy

### Vercel (recommended, one-line)

```bash
vercel --prod
```

The included `next.config.mjs` and Edge-runtime `app/opengraph-image.tsx`
work on Vercel out of the box. No extra configuration needed.

### Any other Node host

`npm run build` produces a standard Next.js production bundle. Deploy the
output of `.next/` along with `public/` and `package.json` to any host that
supports Node 18+ (Cloudflare Pages, Netlify, Render, Railway, etc.).

---

## Brand tokens

These match the Holo Fridge mobile app's design system. They live in
[`tailwind.config.ts`](tailwind.config.ts) and are also documented in
[`app/globals.css`](app/globals.css).

| Token            | Value                                               | Use                  |
| ---------------- | --------------------------------------------------- | -------------------- |
| `deepTurquoise`  | `#32C0B5`                                           | Primary accent       |
| `glowTurquoise`  | `#A6F5E8`                                           | Hologram glow        |
| Pearl gradient   | `#F8FCFF → #ECF5F7 → #F5F7FA`                       | Page background      |
| `charcoal`       | `#262626`                                           | Headings             |
| `bodyGray`       | `#6B7280`                                           | Body copy            |
| `divider`        | `#DDE3EA`                                           | Subtle dividers      |
| Glass card       | `rgba(255,255,255,0.65)` + `blur(24px) saturate(140%)` | Premium surfaces |
| Glass shadow     | `0 30px 80px -30px rgba(50,192,181,0.18)`           | Glass card lift      |

---

## Replace the Holo hologram

Drop a transparent-background PNG of the Holo character at:

```
public/holo-hologram.png
```

This single asset is used in:

- The Hero (right column, large)
- The Meet Holo section (centered, ~480px)
- The Open Graph preview image (1200×630)

If the file is missing at runtime, [`components/HoloHero.tsx`](components/HoloHero.tsx)
falls back to a pure radial-glow placeholder with a `TODO` marker. The
landing page **never** falls back to the logo for the hologram — the
brand identity depends on the real Holo character render.

The logo (`public/holo-logo.png`) is used **only** for the navbar mark,
the footer mark, and the favicon. Drop in a different logo there if needed.

---

## Replace the app screenshots

App preview screens live in `public/screens/`:

| File                       | Used in                       |
| -------------------------- | ----------------------------- |
| `public/screens/home.png`     | Hero phone mockup + App Preview |
| `public/screens/recipes.png`  | App Preview                   |
| `public/screens/shopping.png` | App Preview                   |
| `public/screens/holo.png`     | App Preview                   |
| `public/screens/add-item.png` | (available; not used yet)     |

Replace any of these with a new PNG using the same filename. The
[`PhoneMockup`](components/PhoneMockup.tsx) component crops them to
`9 / 19.5` automatically — supply 1170×2532 (or any 9:19.5 aspect)
images for crisp results.

---

## Set the App Store / Google Play links

Edit `.env.local`:

```bash
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/your-app-id
NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=your.app.id
NEXT_PUBLIC_SITE_URL=https://holofridge.app
```

`StoreButtons` and the Footer read these at build time, so you only
need to redeploy after changing them — no code edits required.

The default values are `#`, so the buttons remain inert until you
populate real URLs.

---

## File structure

```
website/
  app/
    layout.tsx              Inter font, metadata, OG/Twitter
    page.tsx                composes all sections
    globals.css             pearl bg, .glass, keyframes, reduced-motion
    opengraph-image.tsx     1200x630 OG (Edge runtime)
    icon.tsx                favicon
  components/
    Navbar.tsx              sticky glass pill (visible after 80px scroll)
    Hero.tsx                headline, store buttons, Holo, phone, floating chips
    HoloHero.tsx            Holo + radial glow + particles + float/breathe/sweep
    PhoneMockup.tsx         notch-less rounded slab, 9:19.5
    SectionWrapper.tsx      motion.section scroll fade-in
    SectionHeader.tsx       shared title+subtitle primitive
    GlassCard.tsx           glass surface
    StoreButtons.tsx        env-driven inline SVG badges
    ProblemSection.tsx
    FeaturesSection.tsx     2x3 grid + seamless drift strip
    AppPreviewSection.tsx
    MeetHoloSection.tsx
    FinalCTA.tsx
    Footer.tsx
  public/
    holo-logo.png           navbar + footer mark + favicon source
    holo-hologram.png       hero + meet-holo + OG (transparent PNG)
    screens/                app screenshots
  .env.local                store / site URLs
  tailwind.config.ts        brand tokens, keyframes
  next.config.mjs           AVIF/WebP image formats
```

---

## Performance

- All animations are CSS-first; Framer Motion only handles scroll fade-ins
  and Hero stagger. No WebGL, no Three.js, no autoplay carousels.
- `next/image` serves AVIF/WebP automatically when `sharp` is installed
  (it is, as a runtime dep).
- All non-hero sections are server-rendered; only Navbar, Hero, HoloHero,
  and SectionWrapper are client components.
- The Holo hologram is preloaded with `priority` in the Hero. Other
  screenshots lazy-load.
- `prefers-reduced-motion: reduce` disables all hologram animations,
  particles, and the chip-strip drift via a single rule in `globals.css`.

---

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`).
- Visible focus rings on every interactive element (deepTurquoise).
- `prefers-reduced-motion` honored throughout.
- Color contrast on body copy is WCAG AA against the pearl background.
- Skip-able anchors with `scroll-margin-top: 96px` so the sticky navbar
  never covers section headings.
