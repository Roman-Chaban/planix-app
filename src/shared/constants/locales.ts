export const APP_ROUTES = {
  EN: 'en',
  UK: 'uk',
} as const;

export const LOCALE_VALUES = Object.values(APP_ROUTES);

export const LOCALES = ['en', 'uk'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
