import type { GroupBase, StylesConfig } from 'react-select';

import type { Locale } from '@/shared/i18n/locales/locales';
import type { SVGComponent } from '@types';

export type LanguageOption = {
  value: Locale;
  label: string;
  icon: SVGComponent;
};

export type LanguageSelectStyles = StylesConfig<LanguageOption, false, GroupBase<LanguageOption>>;
