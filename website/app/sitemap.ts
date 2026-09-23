import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/guides";

const BASE_URL = "https://www.holofridge.com";

// Keep in sync with your i18n config. First entry is the default locale.
const LOCALES = [
  "en", "uk", "ro", "pl", "de", "es", "it", "fr",
  "ru", "lt", "nl", "sv", "da", "fi", "pt",
] as const;

// Public, indexable routes only. Do not add app-only or auth routes here.
const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "",         priority: 1.0, changeFrequency: "weekly"  },
  { path: "/support", priority: 0.7, changeFrequency: "monthly" },
  { path: "/guides",  priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly"  },
  { path: "/terms",   priority: 0.3, changeFrequency: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static routes
  const staticRoutes = ROUTES.flatMap(({ path, priority, changeFrequency }) => {
    // hreflang alternates: every locale version of this route points to all others
    const languages = Object.fromEntries(
      LOCALES.map((l) => [l, `${BASE_URL}/${l}${path}`])
    );
    languages["x-default"] = `${BASE_URL}/en${path}`;

    return LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });

  // Guide pages
  const guideRoutes = GUIDES.flatMap((guide) => {
    const guidePath = `/guides/${guide.slug}`;
    
    // hreflang alternates for this guide
    const languages = Object.fromEntries(
      LOCALES.map((l) => [l, `${BASE_URL}/${l}${guidePath}`])
    );
    languages["x-default"] = `${BASE_URL}/en${guidePath}`;

    return LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${guidePath}`,
      lastModified: new Date(guide.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages },
    }));
  });

  return [...staticRoutes, ...guideRoutes];
}
