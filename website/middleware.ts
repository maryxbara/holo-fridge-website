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

function getLocale(request: NextRequest): string {
  // An explicit pick from the language switcher outranks any guesswork.
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  // Where the visitor is, as reported by the edge in front of us.
  const country = request.headers.get('cf-ipcountry')?.toUpperCase();
  const countryLocale = country && LOCALE_BY_COUNTRY.get(country);
  if (countryLocale) {
    return countryLocale;
  }

  // No mapping for that country — fall back to what the browser asks for.
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const browserLocales = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().substring(0, 2).toLowerCase());
    
    for (const browserLocale of browserLocales) {
      if (isValidLocale(browserLocale)) {
        return browserLocale;
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
    pathname.startsWith('/favicon')
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

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
