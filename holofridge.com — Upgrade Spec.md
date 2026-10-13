# holofridge.com — Upgrade Spec

Oct 13, 2026 · @Mariia Baranauskas

What to change on the site before marketing starts. Google Play link is deliberately left out — it comes later.

## Decision

The site has one job during the test: catch the person who saw an ad, searched the name, and needs ten seconds of reassurance before tapping the store button. It is not a feature catalogue. The one message, identical to the ad end card: **Holo. Not just a fridge app.** Everything on the page either supports that sentence or goes below the fold.

Three things follow. The hero sells an outcome, not a feature. Proof (rating, a review line) sits directly under the download button. The mascot stays — it is the brand's recognisable face in the ads — but it supports the message; it is not the headline.

## Fixes that ship this week (independent of the redesign)

| # | Where | Now | Change to | Why |
| --- | --- | --- | --- | --- |
| 1 | Both App Store buttons | `https://apps.apple.com/lt/app/holofridge/id6760011328` | `https://apps.apple.com/app/id6760011328` | Lithuanian storefront; US/UK/DE visitors may see the wrong country page. The neutral form redirects by region. |
| 2 | Name everywhere | "Holo Fridge" in title, logo text, footer, OG | "Holo" as the product name; "Holo — Not just a fridge app" as the tagline | Ads, app and end card say Holo. One name for trademark and recall. Keep `holofridge.com` as the domain. |
| 3 | Hero kicker | "Now available" | remove | Says nothing; the download button already says it. |
| 4 | Pricing line | "Free to start. Premium features available inside the app." | keep, exact | The only pricing claim on the site until the trial exists. |
| 5 | Hero image | mascot + home screen mockup side by side | home screen mockup only (new mockup from the upgrade); mascot moves to the "Meet Holo" section | Product first; the cartoon in the first viewport reads as a toy. |
| 6 | Footer line | "Made with care." | "Made in Lithuania." or remove | Origin is a real fact; "made with care" is filler. |
| 7 | Google Play button | plain text, no link | leave for now (your call) — but hide it until the link exists | A dead button is worse than no button. |

## Homepage copy — current → replacement (paste as-is)

English master. The other languages are translated from this after it's approved, by a native speaker, never machine-only.

| Section | Current | Replacement |
| --- | --- | --- |
| Nav | Features · How it works · Meet Holo · Download | How it works · Meet Holo · Support · Get Holo |
| Hero H1 | Your fridge, finally smart. | The part of your week you stop thinking about. |
| Hero sub | Track what you have, cook from it, waste less, and shop smarter — with Holo by your side. | Holo knows what's in your fridge, what's running out, and what's for dinner. Not just a fridge app. |
| Hero CTA | Download on the App Store | Get Holo on the App Store |
| Under CTA | Free to start. Premium features available inside the app. | Free to start. Premium inside the app. · ★ 4.8 on the App Store (replace with the real figure; omit the line until it's real) |
| Problem kicker | Sound familiar? | Every week, the same three problems |
| Problem H2 | Your fridge is full — but dinner feels impossible | A full fridge. Nothing for dinner. |
| Problem 1 | Forgotten food — Items get pushed to the back and expire before you remember them. | It was fresh on Monday. — Food goes to the back, then to the bin. |
| Problem 2 | No idea what to cook — You have ingredients but no idea what to make. | What's for dinner? — The question that lands on you at five, every day. |
| Problem 3 | Wasted money — You buy duplicates or forget what you actually need. | You pay for food you never eat. — Doubles, forgotten items, a receipt that keeps growing. |
| Features kicker | Features | What Holo does |
| Features H2 | Everything you need to run a smarter kitchen | Three things, done quietly |
| Feature A | Smart Inventory — Know exactly what's in your fridge… | Knows what you have — Fridge, freezer, pantry. Added by photo or voice, kept up to date without you. |
| Feature B | AI Recipes — Get personalized recipe ideas… | Knows what's for dinner — A recipe from what's already there, before anything expires. |
| Feature C | Shopping Lists — Build lists that sync… | Knows what's running out — The list writes itself. One tap to confirm. Shared with the household. |
| (removed) | Expiry Alerts, Family Sharing, Voice & Photo Input as separate cards | folded into A–C as lines; six equal cards made the product look like a utility |
| How it works H2 | Simple steps to an organized kitchen | Set up once. Under a minute. |
| Step 1 | Add your food | Photograph your fridge. Holo lists it. |
| Step 2 | Get suggestions | Say what's for dinner, or let Holo decide. |
| Step 3 | Cook & shop smarter | The list is ready before you are. |
| Step 4 | Your friendly kitchen assistant | Ask Holo anything about your kitchen. |
| Meet Holo H2 | Your friendly kitchen assistant | Meet Holo |
| Meet Holo body | Holo is here to help you stay organized… never judging. | Calm, precise, never judging. Holo is the presence in your kitchen that remembers everything so you don't have to. |
| Final CTA H2 | Ready to make your fridge smart? | Control, calm, and a smaller receipt. |
| Final CTA body | Start organizing your kitchen today. Download Holo Fridge and make your food feel effortless. | Holo. Not just a fridge app. |
| Footer tagline | Smart food, organized kitchens. | Not just a fridge app. |

Tone rules applied: no exclamation marks, no "smart" as a selling word (every competitor uses it), no feature named before its outcome, sentence case everywhere, the word "Holo" at most once per section.

## Structure and visual rules for the upgrade

Order of sections, top to bottom: Hero → Proof strip → Problems → What Holo does → How it works (new mockups) → Meet Holo → Final CTA → Footer. Five scrolls on a phone, not eight.

**Hero.** Ivory background (#F7F5F0), one new home-screen mockup, slight glass card behind it with the turquoise glow at 10 % opacity. No mascot here. H1 at 44–52 px on mobile, max two lines. One button, not two, until Google Play is live.

**Proof strip.** One line under the button: rating + count, or one 12-word review quote with a first name and country. If neither exists yet, the strip is omitted — never a placeholder.

**Mockups.** Four slots, one per "How it works" step, from the new mockup set: home (inventory), expiring-soon, dinner suggestion, shared list on two phones. Each slot is a static image with a 2-second slow push-in on scroll; no carousel, no autoplay loop of the same four screens three times (the current page repeats them, which reads as a bug).

**Meet Holo.** The one place the mascot appears, mid-page, at most 320 px tall, on a dark-ivory band. Caption under it: "Holo, the quiet one." No fog, no glow floor.

**Typography and colour.** Keep the app's typeface. Ivory, warm grey, one turquoise accent used only on links and the single underline under "Holo" in the final CTA — same device as the ad end card. No gradients, no emoji, no rounded-badge feature icons; a 1-px line icon set if icons are needed at all.

**Motion.** Fade-up on scroll at 400 ms, once. Nothing bounces, nothing loops.

**Languages.** The language switcher stays in the nav; each language page gets the same structure and the native-reviewed copy. Until a language is reviewed, it serves English rather than machine text.

## Tracking and SEO

| Item | Now | Change |
| --- | --- | --- |
| `<title>` | Holo Fridge - Smart Food & Fridge Assistant | Holo — Not just a fridge app |
| Meta description | Holo Fridge helps you track food, reduce waste, discover recipes, and build smarter shopping lists. | Holo knows what's in your fridge, what's running out, and what's for dinner. Free to start on iOS. |
| OG title / image | same as title; current OG image | new title; OG image = hero mockup on ivory with the one-line tagline, 1200 × 630 |
| Meta Pixel | not visible in the page source | add the Pixel for the domain, with PageView and a `ViewContent` on store-button click — needed for the US web-to-app funnel in December and for retargeting ad viewers |
| Store links | storefront-specific (`/lt/`) | neutral link; add `?pt=&ct=website&mt=8` App Store campaign parameters once the Apple Ads account is live, so site clicks show separately in App Store Connect |
| Language URLs | `/en` | keep; add `hreflang` tags per language and a canonical on each |
| Support / Guides | linked in footer | keep; add a one-line FAQ on the homepage only if support tickets show a repeated question |

No cookie banner beyond what the Pixel legally requires in the EU; the decline-by-default consent pattern, minimal, in the brand colours.

## Checklist for Cursor

Scope: the homepage, `<head>` metadata and footer only. Do not change the app, the support or guides pages, the privacy/terms pages, routing, or the language switcher logic.

- [ ] Replace both App Store hrefs with the neutral link
- [ ] Hide the Google Play button until a link exists (component stays, `hidden` until `playUrl` is set)
- [ ] Rename product strings "Holo Fridge" → "Holo" in nav, hero, footer, title, OG; domain untouched
- [ ] Replace homepage copy per the table above, English only
- [ ] Remove "Now available" kicker and "Made with care." footer line
- [ ] Move mascot image from hero to Meet Holo; hero shows the new home-screen mockup only
- [ ] Replace the four "How it works" images with the new mockup set when ready; remove the triple repetition of the strip
- [ ] Add proof strip component under the hero button, rendered only when `rating` and `ratingCount` are set
- [ ] Update `<title>`, meta description, OG title; new OG image at `/opengraph-image`
- [ ] Add Meta Pixel with PageView and store-click `ViewContent`
- [ ] Add `hreflang` + canonical per language route
- [ ] Run Lighthouse on mobile after: target ≥ 90 performance, no layout shift from the hero image (set width/height)
