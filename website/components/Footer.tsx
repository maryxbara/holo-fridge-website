import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import CookieSettingsButton from "./CookieSettingsButton";
import { type Locale } from "@/lib/i18n";
import { APP_STORE_URL, META_PIXEL_ID, PLAY_STORE_URL, SOCIAL_LINKS } from "@/lib/site";
import { t } from "@/lib/translations";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();
  const linkClass =
    "transition-colors duration-300 hover:text-charcoal dark:hover:text-pearl1";
  const socialClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-full text-bodyGray transition-colors duration-300 hover:text-charcoal dark:text-pearl1/60 dark:hover:text-pearl1";

  return (
    <footer className="relative w-full border-t border-divider/80 bg-white/40 backdrop-blur-md dark:border-white/10 dark:bg-black/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Reveal y={16}>
          <Link href={`/${locale}`} className="group flex items-center gap-3">
            <Image
              src="/holo-logo.png"
              alt="Holo"
              width={300}
              height={300}
              className="h-11 w-[110px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <p className="text-sm text-bodyGray dark:text-pearl1/60">
              {t(locale, "footerTagline")}
            </p>
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
              className={linkClass}
            >
              {t(locale, "appStore")}
            </a>
            {PLAY_STORE_URL ? (
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
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
            {META_PIXEL_ID ? (
              <CookieSettingsButton
                label={t(locale, "footerCookieSettings")}
                className={linkClass}
              />
            ) : null}
            <a href="mailto:support@holofridge.com" className={linkClass}>
              {t(locale, "footerContact")}
            </a>
          </nav>
        </Reveal>
      </div>

      <div className="border-t border-divider/60 dark:border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 text-xs text-bodyGray dark:text-pearl1/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{t(locale, "footerCopyright", { year: year.toString() })}</p>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-1" aria-label="Social">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={socialClass}
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </nav>
            <p>{t(locale, "footerMadeIn")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: (typeof SOCIAL_LINKS)[number]["name"] }) {
  if (name === "Instagram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "TikTok") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.5 3c.4 2.4 1.9 4 4.2 4.3v2.7c-1.5 0-2.9-.4-4.2-1.2v5.7c0 3.7-2.9 6.5-6.6 6.5A6.5 6.5 0 0 1 3.4 14.5c0-3.7 3-6.6 6.5-6.6.3 0 .7 0 1 .1v2.9a3.6 3.6 0 0 0-1-.1 3.6 3.6 0 0 0-3.6 3.6 3.6 3.6 0 0 0 3.6 3.6c2 0 3.6-1.6 3.6-3.6V3h3z" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19.1 5 12 5 12 5s-7.1 0-8.9.4A3 3 0 0 0 1 7.5 31.5 31.5 0 0 0 .6 12a31.5 31.5 0 0 0 .4 4.5 3 3 0 0 0 2.1 2.1C4.9 19 12 19 12 19s7.1 0 8.9-.4a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 23.4 12 31.5 31.5 0 0 0 23 7.5zM9.8 15.2V8.8L15.7 12l-5.9 3.2z" />
    </svg>
  );
}
