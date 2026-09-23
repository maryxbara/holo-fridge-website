import { NextRequest, NextResponse } from 'next/server';
import { Locale, locales, defaultLocale, isValidLocale } from './lib/i18n';

/**
 * Which of our languages to serve a visitor based on where they are.
 * Countries where none of the fifteen is clearly dominant — Switzerland,
 * Belgium, Canada, Luxembourg — are left out on purpose, so those visitors
 * keep whatever their browser asks for instead of being guessed at.
 */
const COUNTRIES_BY_LOCALE: Record<string, string[]> = {
  uk: ['UA'],
  pl: ['PL'],
  lt: ['LT'],
  fi: ['FI'],
  sv: ['SE', 'AX'],
  da: ['DK', 'GL', 'FO'],
  nl: ['NL', 'SR', 'AW', 'CW', 'SX', 'BQ'],
  de: ['DE', 'AT', 'LI'],
  it: ['IT', 'SM', 'VA'],
  ro: ['RO', 'MD'],
  ru: ['RU', 'BY', 'KZ', 'KG'],
  // 'SV' below is El Salvador, not Swedish.
  es: [
    'ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU',
    'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'GQ',
  ],
  pt: ['PT', 'BR', 'AO', 'MZ', 'CV', 'GW', 'ST', 'TL'],
  fr: [
    'FR', 'MC', 'SN', 'CI', 'ML', 'BF', 'NE', 'TG',
    'BJ', 'GA', 'CG', 'CD', 'GN', 'TD', 'MG', 'HT',
  ],
};

const LOCALE_BY_COUNTRY = new Map<string, Locale>(
  Object.entries(COUNTRIES_BY_LOCALE).flatMap(([locale, countries]) =>
    countries.map((country) => [country, locale as Locale] as const)
  )
);

/** Written by the language switcher; see Navbar.tsx. */
const LOCALE_COOKIE = 'holo_locale';

const BOT_UA =
  /bot|crawl|spider|slurp|GPTBot|ClaudeBot|anthropic|PerplexityBot|Google-Extended|Applebot|Bingbot|facebookexternalhit/i;

function getLocale(request: NextRequest): Locale {
  // An explicit pick from the language switcher outranks any guesswork.
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  // Where the visitor is, as reported by the edge in front of us.
  const country = (
    request.headers.get('x-vercel-ip-country') ??
    request.headers.get('cf-ipcountry') ??
    request.headers.get('cloudfront-viewer-country')
  )?.toUpperCase();
  const countryLocale = country && LOCALE_BY_COUNTRY.get(country);
  if (countryLocale) {
    return countryLocale;
  }

  // No mapping for that country — fall back to what the browser asks for.
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    for (const entry of acceptLanguage.split(',')) {
      const code = entry.split(';')[0].trim().slice(0, 2).toLowerCase();
      if (isValidLocale(code)) {
        return code;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/google')
  ) {
    return NextResponse.next();
  }

  // Check if pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const prefixed = (locale: string) =>
    new URL(pathname === '/' ? `/${locale}` : `/${locale}${pathname}`, request.url);

  // Crawlers are served the English copy in place. Redirecting them would make
  // the indexed URL depend on whichever country the crawl came from.
  if (BOT_UA.test(request.headers.get('user-agent') ?? '')) {
    return NextResponse.rewrite(prefixed(defaultLocale));
  }

  // 307 keeps this a temporary redirect — the destination varies per visitor,
  // so it must never be cached or memorised as permanent.
  return NextResponse.redirect(prefixed(getLocale(request)), 307);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
