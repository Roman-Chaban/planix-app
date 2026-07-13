import type { SVGComponent } from '@types';
import type { GroupBase, StylesConfig } from 'react-select';

import type { Locale } from '@/shared/i18n/locales/locales';

export type LanguageOption = {
  value: Locale;
  label: string;
  icon: SVGComponent;
};

export type LanguageSelectStyles = StylesConfig<LanguageOption, false, GroupBase<LanguageOption>>;
