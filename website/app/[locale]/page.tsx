import AppPreviewSection from "@/components/AppPreviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MeetHoloSection from "@/components/MeetHoloSection";
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  return (
    <>
      <Navbar locale={locale} />
      <main className="relative">
        <Hero locale={locale} />
        <ProblemSection locale={locale} />
        <FeaturesSection locale={locale} />
        <AppPreviewSection locale={locale} />
        <MeetHoloSection locale={locale} />
        <FinalCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
