import { type Locale, LOCALES } from '@/shared/constants/locales';

export const isLocale = (value: string): value is Locale => {
  return LOCALES.includes(value as Locale);
};
