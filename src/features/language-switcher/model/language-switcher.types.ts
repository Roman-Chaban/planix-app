import type { SVGComponent } from '@types';

import type { Locale } from '@/shared/i18n/locales/locales';

export type LanguageOption = {
  value: Locale;
  label: string;
  icon: SVGComponent;
};
