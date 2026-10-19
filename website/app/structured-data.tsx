// Renders JSON-LD for AI systems and search engines.
// Import once in app/layout.tsx (or app/[locale]/layout.tsx) inside <body>.
//
// RULES for this file:
// - No aggregateRating until it is pulled from real App Store / Play data.
// - No numbers, statistics or claims that are not true today.

const BASE_URL = "https://www.holofridge.com";
// Neutral link — redirects to the visitor's own storefront.
const APP_STORE_URL = "https://apps.apple.com/app/id6760011328";
const PLAY_STORE_URL = ""; // Not yet available

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Holo",
  alternateName: ["Holo Fridge", "HoloFridge"],
  legalName: "UAB BML BIG",
  url: BASE_URL,
  logo: `${BASE_URL}/holo-logo.png`,
  email: "support@holofridge.com",
  address: { "@type": "PostalAddress", addressCountry: "LT" },
  sameAs: [APP_STORE_URL],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Holo",
  alternateName: ["Holo Fridge", "holofridge.com"],
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: [
    "en", "uk", "ro", "pl", "de", "es", "it", "fr",
    "ru", "lt", "nl", "sv", "da", "fi", "pt",
  ],
};

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": ["SoftwareApplication", "MobileApplication"],
  "@id": `${BASE_URL}/#app`,
  name: "Holo",
  alternateName: ["Holo Fridge", "HoloFridge"],
  url: BASE_URL,
  image: `${BASE_URL}/holo-logo.png`,
  screenshot: [
    `${BASE_URL}/screens/fridge.jpg`,
    `${BASE_URL}/screens/recipes-cook.jpg`,
    `${BASE_URL}/screens/list.jpg`,
    `${BASE_URL}/screens/assistant.jpg`,
  ],
  sameAs: [APP_STORE_URL],
  downloadUrl: APP_STORE_URL,
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "Food & Home Management",
  operatingSystem: "iOS",
  publisher: { "@id": `${BASE_URL}/#organization` },
  installUrl: [APP_STORE_URL].filter(Boolean),
  inLanguage: [
    "en", "uk", "ro", "pl", "de", "es", "it", "fr",
    "ru", "lt", "nl", "sv", "da", "fi", "pt",
  ],
  description:
    "Holo knows what's in your fridge, what's running out, and what's for dinner. It tracks what you have in the fridge, freezer and pantry, reminds you before food expires, suggests meals from what is already there, and keeps the whole household on one shopping list.",
  featureList: [
    "Fridge, freezer and pantry inventory",
    "Expiry reminders before food goes off",
    "AI meal suggestions from ingredients you already have",
    "Shared shopping list for the household",
    "Add items by voice or photo",
    "Family sharing",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Free to download. Premium features available in-app.",
  },
};

// Questions phrased the way people actually ask AI assistants.
// Answers are short, factual, and only describe what Holo does today.
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Holo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holo is a food and home management app for iPhone. It keeps track of what you have, warns you before food expires, suggests meals from your ingredients, and shares one shopping list across the household.",
      },
    },
    {
      "@type": "Question",
      name: "How does Holo help reduce food waste?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holo knows what is in your fridge and when it expires. It reminds you before items go off and suggests meals that use them first, so food is eaten rather than thrown away.",
      },
    },
    {
      "@type": "Question",
      name: "Can Holo suggest recipes from what I already have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Holo looks at the ingredients in your inventory and suggests meals you can cook now, prioritising items that are close to their expiry date.",
      },
    },
    {
      "@type": "Question",
      name: "How do I add food to Holo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Speak, type, or take a photo. Holo recognises the items and adds them to your fridge, freezer or pantry with an estimated expiry date.",
      },
    },
    {
      "@type": "Question",
      name: "Can my family use Holo together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. One household shares the same inventory and shopping list, so everyone sees what is at home and what needs buying.",
      },
    },
    {
      "@type": "Question",
      name: "What app tells me what to cook with what's in my fridge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holo (also known as Holo Fridge) suggests a recipe from the ingredients already in your fridge, freezer and pantry, using up items that expire first. It is free to start on iPhone.",
      },
    },
    {
      "@type": "Question",
      name: "Which app reminds me before food in my fridge expires?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holo tracks expiry dates for everything you add and reminds you before food goes off, then suggests meals that use those items.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an app for a shared family shopping list that knows what we already have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holo builds the shopping list from what is running out at home and shares it with the whole household, so nobody buys doubles.",
      },
    },
    {
      "@type": "Question",
      name: "Which languages does Holo support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holo is available in English, Ukrainian, Romanian, Polish, German, Spanish, Italian, French, Russian, Lithuanian, Dutch, Swedish, Danish, Finnish and Portuguese.",
      },
    },
    {
      "@type": "Question",
      name: "Is Holo free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Holo is free to download on the App Store. Premium features are available as an in-app subscription. An Android version is in preparation.",
      },
    },
  ],
};

export function StructuredData() {
  const graph = [organization, website, softwareApplication, faq];
  return (
    <>
      {graph.map((item) => (
        <script
          key={item["@id"]}
          type="application/ld+json"
          // JSON.stringify output is safe here: all values are static strings we control.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
