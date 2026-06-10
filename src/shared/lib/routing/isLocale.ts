import { type Locale, LOCALES } from '@/shared/lib/i18n/locales';

export const isLocale = (value: string): value is Locale => {
  return LOCALES.includes(value as Locale);
};
