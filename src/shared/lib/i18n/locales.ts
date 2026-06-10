export const APP_LOCALES = {
  EN: 'en',
  UK: 'uk',
} as const;

export const LOCALE_VALUES = Object.values(APP_LOCALES);

export const LOCALES = ['en', 'uk'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
