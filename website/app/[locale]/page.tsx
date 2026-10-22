import type { Metadata } from "next";
import FeaturesSection from "@/components/FeaturesSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import MeetHoloSection from "@/components/MeetHoloSection";
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { localeAlternates } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  return { alternates: localeAlternates(locale) };
}

// Order, top to bottom: Hero → (Proof strip, inside Hero) → Problems →
// What Holo does → How it works → Meet Holo → Final CTA → Footer.
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : "en";

  return (
    <>
      <Navbar locale={locale} />
      <main className="relative">
        <Hero locale={locale} />
        <ProblemSection locale={locale} />
        <FeaturesSection locale={locale} />
        <HowItWorksSection locale={locale} />
        <MeetHoloSection locale={locale} />
        <FinalCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
