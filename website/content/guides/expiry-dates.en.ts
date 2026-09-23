// Guide 1 of 4 — "Use by, best before: what the dates on food actually mean"
// Every figure below is tied to a source in `sources`. Do not add numbers
// without adding a source. Do not add marketing claims about Holo.

import type { Guide } from "@/lib/guides";

export const guide: Guide = {
  slug: "food-expiry-dates-explained",
  locale: "en",
  title: "Use by, best before: what the dates on food actually mean",
  description:
    "A calm, factual guide to food date labels — which dates are about safety, which are about quality, and how much good food is thrown away because of the confusion.",
  publishedAt: "2026-09-23",
  updatedAt: "2026-09-23",
  readingMinutes: 5,

  intro: [
    "Most food in a European or American kitchen carries a date. Very few people are sure what it means. That uncertainty has a cost: food that is perfectly good ends up in the bin because the number on the label looked final.",
    "This guide explains the three kinds of dates you will see, what the regulators who define them actually say, and the small habits that keep good food from being wasted.",
  ],

  sections: [
    {
      heading: "Two dates matter. One is about safety, one is about quality.",
      body: [
        "In the EU and the UK, food law recognises two dates with different meanings.",
        "**Use by** is a safety date. It appears on perishable foods — fresh meat, fish, ready-to-eat salads, soft dairy. The European Food Safety Authority is unambiguous: foods with this label “should not be eaten after that specific date, even if they look or smell fine”, because the microorganisms that cause illness are often invisible and odourless. [1]",
        "**Best before** is a quality date. After it, the food “is still safe to eat if stored correctly but may lose some of its taste, texture, or freshness.” [1] Food Standards Scotland puts it plainly: it is safe to use smell and appearance to judge food that has passed its best-before date. [2]",
        "In short: *use by* — trust the date. *Best before* — trust your senses.",
      ],
    },
    {
      heading: "The US system is different — and looser.",
      body: [
        "In the United States, the dates on most food are not required by federal law at all. The USDA states that “except for infant formula, product dating is not required by Federal regulations.” [3]",
        "The phrases you see — *Best if Used By*, *Sell-By*, *Use-By* — are manufacturers’ quality indicators, not safety limits. The USDA describes each of them as “not a safety date”, with one exception: *Use-By* on infant formula. Its guidance is that if a date passes during home storage, “a product should still be safe and wholesome if handled properly until the time spoilage is evident.” [3]",
        "So an American *Use-By* and a European *use by* are not the same thing. The European one is a legal safety limit; the American one is a quality suggestion.",
      ],
    },
    {
      heading: "What the confusion costs",
      body: [
        "The European Commission estimates that up to 10% of food waste generated annually in the EU is linked to date marking — food discarded because a date was misread or misunderstood. [4]",
        "The scale behind that percentage is large. In 2023, the EU generated 58.2 million tonnes of food waste, around 130 kg per person. Households were responsible for more than half of it — 53%, or 69 kg per inhabitant. [5]",
        "The UK, which measures household waste in unusual detail, found that households threw away 6 million tonnes of food in 2022, of which 4.4 million tonnes was edible. Nearly 40% of that waste happened because food “wasn’t used in time”. The cost: around £1,000 a year for a household of four. [6]",
      ],
    },
    {
      heading: "Reading a label in three seconds",
      body: [
        "1. **Find the words, not just the number.** *Use by* means safety. *Best before* means quality. In the US, assume quality unless it is infant formula.",
        "2. **Check the storage instruction next to the date.** A use-by date is only valid if the food was kept as instructed — EFSA gives the example of keeping it below 5 °C. [1] A date on chicken that spent an afternoon on the counter no longer applies.",
        "3. **Freeze before, not after.** Food can be frozen up to and including its use-by date, which effectively pauses the clock. [2] Once the date has passed, it is too late.",
        "4. **For best-before food, look and smell.** Best-before dates are typical of shelf-stable food — dry pasta, rice, tinned goods, chocolate — where the date marks a decline in quality, not safety. [1][2] Eggs, according to Food Standards Scotland, can be eaten a day or two after their best-before date if cooked thoroughly. [2]",
      ],
    },
    {
      heading: "The habit that actually works",
      body: [
        "Knowing what a date means solves half the problem. The other half is remembering that the food exists.",
        "Nearly 40% of UK household food waste is food that simply wasn’t used in time [6] — not misunderstood, just forgotten at the back of a shelf. The households that waste least are not the ones with the most knowledge. They are the ones who know what they have and when it needs eating.",
        "That can be a notebook, a whiteboard on the fridge door, or an app that keeps the list for you. What matters is that the list exists and is looked at before shopping and before cooking.",
      ],
    },
  ],

  // One quiet mention. No feature list, no urgency.
  closing: {
    text: "Holo keeps that list for you — what is in the fridge, freezer and pantry, and what should be eaten first.",
    ctaLabel: "See how Holo works",
    ctaHref: "/",
  },

  faq: [
    {
      q: "Can I eat food after its use-by date?",
      a: "In the EU and UK, no. A use-by date is a safety limit set by law, and the bacteria that cause illness cannot be seen or smelled. Freeze the food before the date if you cannot use it in time.",
    },
    {
      q: "Can I eat food after its best-before date?",
      a: "Usually yes. Best before is about quality, not safety. If the packaging is intact and the food looks and smells normal, it is safe to eat, though texture or flavour may have declined.",
    },
    {
      q: "What is the difference between use by and best before?",
      a: "Use by is about safety and applies to perishable food such as meat, fish and soft dairy — do not eat after it. Best before is about quality — food is safe after it but may not be at its best.",
    },
    {
      q: "Are expiry dates required by law in the United States?",
      a: "No. Except for infant formula, the US federal government does not require dates on food. Best if Used By, Sell-By and Use-By are manufacturers’ quality indicators, not safety dates.",
    },
    {
      q: "Can I freeze food on its use-by date?",
      a: "Yes. Food can be frozen up to and including the use-by date. Freezing pauses bacterial growth, so the food remains safe until it is thawed and eaten.",
    },
    {
      q: "How much food is wasted because of date labels?",
      a: "The European Commission estimates that up to 10% of the EU’s annual food waste is linked to date marking. The EU generated 58.2 million tonnes of food waste in 2023, more than half of it in households.",
    },
  ],

  sources: [
    {
      id: 1,
      title: "Food date labelling — EFSA (European Food Safety Authority)",
      url: "https://efsa.europa.eu/en/safe2eat/food-date-labelling",
    },
    {
      id: 2,
      title: "Use-by and best-before dates — Food Standards Scotland",
      url: "https://www.foodstandards.gov.scot/consumer-advice/food-labels/use-by-and-best-before-dates",
    },
    {
      id: 3,
      title: "Food Product Dating — USDA Food Safety and Inspection Service",
      url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/food-product-dating",
    },
    {
      id: 4,
      title: "Date marking and food waste prevention — European Commission",
      url: "https://food.ec.europa.eu/food-safety/food-waste/eu-actions-against-food-waste/date-marking-and-food-waste-prevention_en",
    },
    {
      id: 5,
      title: "130 kg of food wasted per person annually in the EU (2023 data) — Eurostat, 16 Oct 2025",
      url: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251016-2",
    },
    {
      id: 6,
      title: "Household food waste levels threaten UK’s carbon reduction ambitions — WRAP (2022 data)",
      url: "https://www.wrap.ngo/media-centre/press-releases/household-food-waste-levels-threaten-uks-carbon-reduction-ambitions",
    },
  ],
};
