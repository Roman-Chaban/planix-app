import { type Locale, LOCALES } from '@/shared/config/locales/locales';

export const isLocale = (value: string): value is Locale => {
  return LOCALES.includes(value as Locale);
};
