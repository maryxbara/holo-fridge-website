import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || "#";
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL || "#";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full border-t border-divider/80 dark:border-white/10 bg-white/40 dark:bg-black/20 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Reveal y={16}>
        <Link href={`/${locale}`} className="group flex items-center gap-3">
          <Image
            src="/holo-logo.png"
            alt="Holo"
            width={300}
            height={300}
            className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <p className="text-base font-semibold tracking-tight text-charcoal dark:text-pearl1">
              Holo Fridge
            </p>
            <p className="text-[13px] text-bodyGray dark:text-pearl1/60">
              {t(locale, 'footerTagline')}
            </p>
          </div>
        </Link>
        </Reveal>

        <Reveal y={16} delay={0.1}>
        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-bodyGray dark:text-pearl1/60"
          aria-label="Footer"
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-charcoal dark:hover:text-pearl1"
          >
            {t(locale, 'appStore')}
          </a>
          {PLAY_STORE_URL !== "#" && (
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-charcoal dark:hover:text-pearl1"
            >
              {t(locale, 'googlePlay')}
            </a>
          )}
          <Link href={`/${locale}/support`} className="transition-colors duration-300 hover:text-charcoal dark:hover:text-pearl1">
            {t(locale, 'footerSupport')}
          </Link>
          <Link href={`/${locale}/guides`} className="transition-colors duration-300 hover:text-charcoal dark:hover:text-pearl1">
            {t(locale, 'footerGuides')}
          </Link>
          <Link href={`/${locale}/privacy`} className="transition-colors duration-300 hover:text-charcoal dark:hover:text-pearl1">
            {t(locale, 'footerPrivacy')}
          </Link>
          <Link href={`/${locale}/terms`} className="transition-colors duration-300 hover:text-charcoal dark:hover:text-pearl1">
            {t(locale, 'footerTerms')}
          </Link>
          <a href="mailto:support@holofridge.com" className="transition-colors duration-300 hover:text-charcoal dark:hover:text-pearl1">
            {t(locale, 'footerContact')}
          </a>
        </nav>
        </Reveal>
      </div>

      <div className="border-t border-divider/60 dark:border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 text-xs text-bodyGray dark:text-pearl1/50 sm:px-8">
          <p>{t(locale, 'footerCopyright', { year: year.toString() })}</p>
          <p className="hidden sm:block">{t(locale, 'footerMadeWith')}</p>
        </div>
      </div>
    </footer>
  );
}
