import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, isValidLocale } from './lib/i18n';

function getLocale(request: NextRequest): string {
  // Check for locale in cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  // Check Accept-Language header
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
