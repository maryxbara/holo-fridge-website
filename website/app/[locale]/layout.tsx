import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { locales, isValidLocale } from "@/lib/i18n";
import { t } from "@/lib/translations";
import { notFound } from "next/navigation";
import { StructuredData } from "@/app/structured-data";
import MetaPixel from "@/components/MetaPixel";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
  // No <link rel=preload> for all three subsets on every page: each subset is
  // declared with a unicode-range, so the browser fetches only what the page's
  // glyphs need and the hero image is not competing with ~150 KB of fonts.
  preload: false,
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : 'en';
  const title = t(validLocale, 'siteTitle');
  const description = t(validLocale, 'siteDescription');

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: "Holo",
    authors: [{ name: "Holo" }],
    // og:image / twitter:image come from app/[locale]/opengraph-image.tsx
    // (file convention), so they are not repeated here.
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${validLocale}`,
      siteName: "Holo",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#F8FCFF",
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Scroll reveals are gated on JS; without it, show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.push-in{transform:none!important}`}</style>
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased text-charcoal dark:text-pearl1">
        <StructuredData />
        {children}
        <MetaPixel
          labels={{
            text: t(locale, "consentText"),
            allow: t(locale, "consentAllow"),
            decline: t(locale, "consentDecline"),
          }}
        />
      </body>
    </html>
  );
}
