import type { GroupBase, StylesConfig } from 'react-select';

import type { ComponentType, SVGProps } from 'react';

import type { Locale } from '@/shared/config/locales/locales';

export type LanguageOption = {
  value: Locale;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type LanguageSelectStyles = StylesConfig<LanguageOption, false, GroupBase<LanguageOption>>;
