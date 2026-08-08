import { type Locale, LOCALES } from '@/shared/i18n/locales/locales';

export const isLocale = (value: string): value is Locale => {
  return LOCALES.includes(value as Locale);
};
