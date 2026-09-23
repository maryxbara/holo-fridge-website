import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import {
  getGuide,
  GUIDES,
  type Guide,
} from "@/lib/guides";
import { renderMarkdownLite, renderParagraphs } from "@/lib/markdown-lite";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BASE_URL = "https://www.holofridge.com";

// Generate static params for all locale × slug combinations
export async function generateStaticParams() {
  const slugs = [...new Set(GUIDES.map((g) => g.slug))];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  // Try locale first, then fall back to English
  let guide = getGuide(locale, slug);
  if (!guide) {
    guide = getGuide("en", slug);
  }

  if (!guide) {
    return {
      title: "Guide Not Found · Holo",
    };
  }

  const canonicalUrl = `${BASE_URL}/en/guides/${slug}`;

  return {
    title: `${guide.title} · Holo`,
    description: guide.description,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries([
        ["x-default", canonicalUrl],
        ...locales.map((l) => [l, `${BASE_URL}/${l}/guides/${slug}`]),
      ]),
    },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: canonicalUrl,
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
    },
  };
}

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function GuideStructuredData({ guide }: { guide: Guide }) {
  const canonicalUrl = `${BASE_URL}/en/guides/${guide.slug}`;

  const graph = [
    // Article
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      datePublished: guide.publishedAt,
      dateModified: guide.updatedAt,
      inLanguage: "en",
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntityOfPage: canonicalUrl,
      citation: guide.sources.map((s) => s.url),
    },
    // FAQPage
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
    // BreadcrumbList
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${BASE_URL}/en/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: guide.title,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  // Try locale first, then fall back to English
  let guide = getGuide(locale, slug);
  if (!guide) {
    guide = getGuide("en", slug);
  }

  if (!guide) {
    notFound();
  }

  return (
    <>
      <Navbar locale={locale} />
      <GuideStructuredData guide={guide} />

      <main className="relative pb-24 pt-28 sm:pt-32">
        <article className="mx-auto max-w-[680px] px-5 sm:px-8">
          {/* Eyebrow */}
          <Reveal y={14}>
            <p className="text-sm text-bodyGray dark:text-white/60">
              Guide · {guide.readingMinutes} min read · Updated{" "}
              {formatDate(guide.updatedAt)}
            </p>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.05} y={18}>
            <h1 className="mt-4 text-3xl font-semibold tracking-tightish text-charcoal dark:text-white sm:text-4xl lg:text-[2.5rem] leading-tight">
              {guide.title}
            </h1>
          </Reveal>

          {/* Intro paragraphs - slightly larger type */}
          <Reveal delay={0.1} y={16}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/90 dark:text-white/85">
              {renderParagraphs(guide.intro)}
            </div>
          </Reveal>

          {/* Sections */}
          <div className="mt-12 space-y-10">
            {guide.sections.map((section, idx) => (
              <Reveal key={idx} delay={0.12 + idx * 0.03} y={14}>
                <section>
                  <h2 className="text-xl font-semibold text-charcoal dark:text-white sm:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-charcoal/85 dark:text-white/80">
                    {renderParagraphs(section.body)}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          {/* Closing block */}
          <Reveal delay={0.2} y={14}>
            <div className="mt-14 rounded-2xl border border-divider/60 dark:border-white/10 bg-white/40 dark:bg-white/5 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-charcoal/85 dark:text-white/80">
                {renderMarkdownLite(guide.closing.text)}
              </p>
              <Link
                href={`/${locale}${guide.closing.ctaHref}`}
                className="mt-4 inline-block text-deepTurquoise dark:text-glowTurquoise font-medium hover:underline"
              >
                {guide.closing.ctaLabel} →
              </Link>
            </div>
          </Reveal>

          {/* FAQ */}
          <Reveal delay={0.22} y={14}>
            <section className="mt-14">
              <h2 className="text-xl font-semibold text-charcoal dark:text-white sm:text-2xl">
                Questions
              </h2>
              <div className="mt-6 space-y-6">
                {guide.faq.map((item, idx) => (
                  <div key={idx}>
                    <h3 className="text-base font-semibold text-charcoal dark:text-white">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-charcoal/85 dark:text-white/80">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Sources */}
          <Reveal delay={0.25} y={14}>
            <section className="mt-14">
              <h2 className="text-xl font-semibold text-charcoal dark:text-white sm:text-2xl">
                Sources
              </h2>
              <ol className="mt-6 space-y-2 list-decimal list-inside text-sm text-bodyGray dark:text-white/70">
                {guide.sources.map((source) => (
                  <li key={source.id} id={`source-${source.id}`}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener"
                      className="text-deepTurquoise dark:text-glowTurquoise hover:underline"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
        </article>
      </main>

      <Footer locale={locale} />
    </>
  );
}
