import { type Locale, LOCALES } from '@/shared/config/i18n/locales';

export const isLocale = (value: string): value is Locale => {
  return LOCALES.includes(value as Locale);
};
