export const locales = [
  'en', 'uk', 'ro', 'pl', 'de', 'es', 'it', 'fr', 'ru', 'lt', 'nl', 'sv', 'da', 'fi', 'pt'
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  uk: 'Українська',
  ro: 'Română',
  pl: 'Polski',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  fr: 'Français',
  ru: 'Русский',
  lt: 'Lietuvių',
  nl: 'Nederlands',
  sv: 'Svenska',
  da: 'Dansk',
  fi: 'Suomi',
  pt: 'Português',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
