"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Locale, locales } from "@/lib/i18n";

export type NavbarLabels = {
  howItWorks: string;
  meetHolo: string;
  support: string;
  getHolo: string;
  lightMode: string;
  darkMode: string;
  language: string;
};

type NavbarClientProps = {
  locale: Locale;
  labels: NavbarLabels;
};

/**
 * Client half of the navbar — the floating glass pill. Strings arrive as props
 * from Navbar.tsx (a server component) so the 15-language translation table
 * never ships to the browser.
 */
export default function NavbarClient({ locale, labels }: NavbarClientProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  // Remembers the choice so the middleware sends "/" here next time instead of
  // guessing from the visitor's country. Cookie name matches middleware.ts.
  const rememberLocale = (loc: Locale) => {
    document.cookie = `holo_locale=${loc}; Path=/; Max-Age=31536000; SameSite=Lax`;
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const NAV_LINKS = [
    { href: `/${locale}#how-it-works`, label: labels.howItWorks },
    { href: `/${locale}#meet-holo`, label: labels.meetHolo },
    { href: `/${locale}/support`, label: labels.support },
  ];
  const CTA = { href: `/${locale}#download`, label: labels.getHolo };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:text-charcoal dark:text-pearl1/80 dark:hover:text-pearl1 lg:px-4";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-6">
      <div
        className={`nav-in pointer-events-auto mt-4 flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled ? "glass-strong" : "border border-transparent bg-white/0 shadow-none"
        }`}
      >
        <Link
          href={`/${locale}#top`}
          aria-label="Holo — home"
          className="group flex shrink-0 items-center rounded-full pl-1 pr-2 transition-opacity"
        >
          {/* The PNG is a square with the wordmark in the middle band; object-cover crops the padding. */}
          <Image
            src="/holo-logo.png"
            alt="Holo"
            width={300}
            height={300}
            className="h-10 w-[100px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) =>
            l.href.includes("#") ? (
              <a key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden h-9 w-9 items-center justify-center rounded-full text-charcoal/70 transition-colors hover:bg-white/50 hover:text-charcoal dark:text-pearl1/70 dark:hover:bg-white/10 dark:hover:text-pearl1 lg:inline-flex"
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Language selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              aria-expanded={langOpen}
              className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-charcoal/80 transition-colors hover:text-charcoal dark:text-pearl1/80 dark:hover:text-pearl1 lg:inline-flex"
            >
              <span className="uppercase">{locale}</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="animate-in-soft glass absolute right-0 mt-2 max-h-[min(70vh,22rem)] w-20 overflow-y-auto rounded-2xl p-1.5 shadow-[0_18px_40px_-18px_rgba(50,192,181,0.22)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    onClick={() => {
                      rememberLocale(loc);
                      setLangOpen(false);
                    }}
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

          {/* CTA */}
          <a
            href={CTA.href}
            className="glass-dark hidden rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 lg:inline-flex"
          >
            {CTA.label}
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-charcoal backdrop-blur-md dark:bg-white/10 dark:text-pearl1 lg:hidden"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
              {mobileOpen ? (
                <path d="M2 2l14 10M16 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
        <div className="animate-in-soft glass-strong pointer-events-auto fixed inset-x-3 top-20 z-40 rounded-3xl p-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((l) =>
              l.href.includes("#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-charcoal/90 hover:bg-white/60 dark:text-pearl1/90 dark:hover:bg-white/10"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-charcoal/90 hover:bg-white/60 dark:text-pearl1/90 dark:hover:bg-white/10"
                >
                  {l.label}
                </Link>
              ),
            )}
            <a
              href={CTA.href}
              onClick={() => setMobileOpen(false)}
              className="glass-dark mt-1 rounded-2xl px-4 py-3 text-center text-base font-semibold text-white"
            >
              {CTA.label}
            </a>

            {/* Theme toggle in mobile */}
            <button
              type="button"
              onClick={toggleTheme}
              className="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-charcoal/90 hover:bg-white/60 dark:text-pearl1/90 dark:hover:bg-white/10"
            >
              {isDark ? (
                <>
                  <SunIcon />
                  {labels.lightMode}
                </>
              ) : (
                <>
                  <MoonIcon />
                  {labels.darkMode}
                </>
              )}
            </button>

            {/* Language selector in mobile */}
            <div className="mt-2 border-t border-divider/40 pt-2 dark:border-white/10">
              <p className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-bodyGray dark:text-pearl1/60">
                {labels.language}
              </p>
              <div className="grid grid-cols-3 gap-1">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    onClick={() => {
                      rememberLocale(loc);
                      setMobileOpen(false);
                    }}
                    className={`rounded-xl px-3 py-2 text-center text-sm transition-colors ${
                      loc === locale
                        ? "bg-deepTurquoise/10 font-medium text-deepTurquoise"
                        : "text-charcoal/80 hover:bg-white/60 dark:text-pearl1/80 dark:hover:bg-white/10"
                    }`}
                  >
                    {loc.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
