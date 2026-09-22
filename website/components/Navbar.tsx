"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Locale, locales } from "@/lib/i18n";
import { t } from "@/lib/translations";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const NAV_LINKS = [
    { href: "#features", label: t(locale, 'navFeatures') },
    { href: "#how-it-works", label: t(locale, 'navHowItWorks') },
    { href: "#meet-holo", label: t(locale, 'navMeetHolo') },
    { href: "#download", label: t(locale, 'navDownload') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-6">
      <div
        className={`pointer-events-auto mt-4 flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled
            ? "glass-strong"
            : "bg-white/0 border border-transparent shadow-none"
        }`}
      >
        <Link
          href={`/${locale}#top`}
          aria-label="Holo Fridge — home"
          className="group flex shrink-0 items-center gap-2 rounded-full pl-1.5 pr-3 transition-opacity"
        >
          <Image
            src="/holo-logo.png"
            alt=""
            width={300}
            height={300}
            className="h-11 w-auto object-contain"
            priority
          />
          <span className="hidden whitespace-nowrap text-base font-semibold tracking-tightish text-charcoal dark:text-pearl1 sm:inline">
            Holo Fridge
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-charcoal/80 dark:text-pearl1/80 transition-colors hover:text-charcoal dark:hover:text-pearl1 lg:px-4"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full text-charcoal/70 dark:text-pearl1/70 hover:text-charcoal dark:hover:text-pearl1 hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-charcoal/80 dark:text-pearl1/80 hover:text-charcoal dark:hover:text-pearl1 transition-colors"
            >
              <span className="uppercase">{locale}</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-20 glass rounded-2xl p-1.5 shadow-[0_18px_40px_-18px_rgba(50,192,181,0.22)] max-h-[min(70vh,22rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    onClick={() => setLangOpen(false)}
                    className={`block rounded-xl px-3 py-1.5 text-center text-[13px] font-medium uppercase transition-colors ${
                      loc === locale
                        ? "bg-deepTurquoise/10 text-deepTurquoise"
                        : "text-charcoal/60 hover:bg-white/40 hover:text-charcoal/85 dark:text-pearl1/80 dark:hover:bg-white/10 dark:hover:text-pearl1"
                    }`}
                  >
                    {loc}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="#download"
            className="hidden rounded-full bg-deepTurquoise px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(50,192,181,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(50,192,181,0.75)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deepTurquoise focus-visible:ring-offset-2 sm:inline-flex"
          >
            {t(locale, 'navDownload')}
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 dark:bg-white/10 text-charcoal dark:text-pearl1 backdrop-blur-md md:hidden"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
              {mobileOpen ? (
                <path
                  d="M2 2l14 10M16 2L2 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 2h14" />
                  <path d="M2 7h14" />
                  <path d="M2 12h14" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — glass sheet, only when open */}
      {mobileOpen ? (
        <div className="pointer-events-auto fixed inset-x-3 top-20 z-40 glass-strong rounded-3xl p-3 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-charcoal/90 dark:text-pearl1/90 hover:bg-white/60 dark:hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            
            {/* Theme toggle in mobile */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-charcoal/90 dark:text-pearl1/90 hover:bg-white/60 dark:hover:bg-white/10"
            >
              {isDark ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                  Light mode
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                  Dark mode
                </>
              )}
            </button>
            
            {/* Language selector in mobile */}
            <div className="border-t border-divider/40 dark:border-white/10 mt-2 pt-2">
              <p className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-bodyGray dark:text-pearl1/60">Language</p>
              <div className="grid grid-cols-3 gap-1">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-xl px-3 py-2 text-center text-sm transition-colors ${
                      loc === locale
                        ? "bg-deepTurquoise/10 text-deepTurquoise font-medium"
                        : "text-charcoal/80 dark:text-pearl1/80 hover:bg-white/60 dark:hover:bg-white/10"
                    }`}
                  >
                    {loc.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
            
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-2xl bg-deepTurquoise px-4 py-3 text-center text-base font-semibold text-white shadow-[0_12px_30px_-10px_rgba(50,192,181,0.65)]"
            >
              {t(locale, 'navDownload')}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
