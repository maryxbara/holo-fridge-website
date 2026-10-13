import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site";
import { t } from "@/lib/translations";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();
  const linkClass =
    "transition-colors duration-200 hover:text-charcoal dark:hover:text-[#f3f1ec]";

  return (
    <footer className="relative w-full border-t border-divider dark:border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/holo-logo.png"
            alt="Holo"
            width={300}
            height={300}
            className="h-9 w-[90px] object-cover object-center"
          />
          <p className="text-[13px] text-bodyGray dark:text-[#f3f1ec]/60">
            {t(locale, "footerTagline")}
          </p>
        </Link>

        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-bodyGray dark:text-[#f3f1ec]/60"
          aria-label="Footer"
        >
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {t(locale, "appStore")}
          </a>
          {PLAY_STORE_URL ? (
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {t(locale, "googlePlay")}
            </a>
          ) : null}
          <Link href={`/${locale}/support`} className={linkClass}>
            {t(locale, "footerSupport")}
          </Link>
          <Link href={`/${locale}/guides`} className={linkClass}>
            {t(locale, "footerGuides")}
          </Link>
          <Link href={`/${locale}/privacy`} className={linkClass}>
            {t(locale, "footerPrivacy")}
          </Link>
          <Link href={`/${locale}/terms`} className={linkClass}>
            {t(locale, "footerTerms")}
          </Link>
          <a href="mailto:support@holofridge.com" className={linkClass}>
            {t(locale, "footerContact")}
          </a>
        </nav>
      </div>

      <div className="border-t border-divider dark:border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 text-xs text-bodyGray dark:text-[#f3f1ec]/50 sm:px-8">
          <p>{t(locale, "footerCopyright", { year: year.toString() })}</p>
          <p>{t(locale, "footerMadeIn")}</p>
        </div>
      </div>
    </footer>
  );
}
