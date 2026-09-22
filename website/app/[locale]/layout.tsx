import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { locales, type Locale, isValidLocale } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { notFound } from "next/navigation";

const inter = Inter({
  subsets: ["latin", "cyrillic", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.holofridge.com";

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
  const t = translations[validLocale];

  return {
    metadataBase: new URL(siteUrl),
    title: t.siteTitle,
    description: t.siteDescription,
    applicationName: "Holo Fridge",
    keywords: [
      "Holo Fridge",
      "smart fridge app",
      "food tracking",
      "reduce food waste",
      "AI recipes",
      "shopping list app",
      "kitchen assistant",
    ],
    authors: [{ name: "Holo Fridge" }],
    openGraph: {
      type: "website",
      url: siteUrl,
      siteName: "Holo Fridge",
      title: t.siteTitle,
      description: t.siteDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: t.siteTitle,
      description: t.siteDescription,
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
        {children}
      </body>
    </html>
  );
}
