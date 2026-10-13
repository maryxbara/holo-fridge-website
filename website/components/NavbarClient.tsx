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
 * Client half of the navbar. Strings arrive as props from Navbar.tsx (a server
 * component) so the 15-language translation table never ships to the browser.
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-charcoal/75 transition-colors hover:text-charcoal dark:text-[#f3f1ec]/75 dark:hover:text-[#f3f1ec]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-divider bg-ivory/90 backdrop-blur-md dark:border-white/10 dark:bg-ink/90"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={`/${locale}#top`}
          aria-label="Holo — home"
          className="flex shrink-0 items-center gap-2.5"
        >
          {/* The PNG is a square with the wordmark in the middle band; object-cover crops the padding. */}
          <Image
            src="/holo-logo.png"
            alt="Holo"
            width={300}
            height={300}
            className="h-8 w-[80px] object-cover object-center"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
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

        <div className="flex items-center gap-1.5">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden h-9 w-9 items-center justify-center rounded-lg text-charcoal/70 transition-colors hover:bg-ivoryDeep hover:text-charcoal dark:text-[#f3f1ec]/70 dark:hover:bg-white/10 dark:hover:text-[#f3f1ec] lg:inline-flex"
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
              className="hidden items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-medium text-charcoal/75 transition-colors hover:bg-ivoryDeep hover:text-charcoal dark:text-[#f3f1ec]/75 dark:hover:bg-white/10 dark:hover:text-[#f3f1ec] lg:inline-flex"
            >
              <span className="uppercase">{locale}</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="animate-in-soft glass absolute right-0 mt-2 max-h-[min(70vh,22rem)] w-24 overflow-y-auto rounded-2xl p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                        ? "bg-ivoryDeep text-charcoal dark:bg-white/10 dark:text-[#f3f1ec]"
                        : "text-charcoal/60 hover:bg-ivory hover:text-charcoal dark:text-[#f3f1ec]/70 dark:hover:bg-white/5 dark:hover:text-[#f3f1ec]"
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
            className="ml-1 hidden rounded-xl bg-[#1a1917] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2a2825] dark:bg-[#f3f1ec] dark:text-[#0f0e0c] dark:hover:bg-white lg:inline-flex"
          >
            {CTA.label}
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-charcoal dark:text-[#f3f1ec] lg:hidden"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden>
              {mobileOpen ? (
                <path d="M2 2l14 10M16 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M2 2h14" />
                  <path d="M2 7h14" />
                  <path d="M2 12h14" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — only when open */}
      {mobileOpen ? (
        <div className="animate-in-soft glass fixed inset-x-3 top-[4.5rem] z-40 rounded-3xl p-3 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((l) =>
              l.href.includes("#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-charcoal hover:bg-ivory dark:text-[#f3f1ec] dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-charcoal hover:bg-ivory dark:text-[#f3f1ec] dark:hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ),
            )}
            <a
              href={CTA.href}
              onClick={() => setMobileOpen(false)}
              className="mt-1 rounded-2xl bg-[#1a1917] px-4 py-3 text-center text-base font-semibold text-white dark:bg-[#f3f1ec] dark:text-[#0f0e0c]"
            >
              {CTA.label}
            </a>

            {/* Theme toggle in mobile */}
            <button
              type="button"
              onClick={toggleTheme}
              className="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-charcoal hover:bg-ivory dark:text-[#f3f1ec] dark:hover:bg-white/5"
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
            <div className="mt-2 border-t border-divider pt-2 dark:border-white/10">
              <p className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-bodyGray dark:text-[#f3f1ec]/60">
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
                        ? "bg-ivoryDeep font-medium text-charcoal dark:bg-white/10 dark:text-[#f3f1ec]"
                        : "text-charcoal/75 hover:bg-ivory dark:text-[#f3f1ec]/75 dark:hover:bg-white/5"
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
