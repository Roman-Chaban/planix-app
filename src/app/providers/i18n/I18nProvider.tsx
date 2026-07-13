'use client';

import type { WithChildren, AppLocale } from '@types';

import { useEffect } from 'react';

import { I18nextProvider } from 'react-i18next';

import i18n from '@/shared/i18n/config/i18nConfig';

type I18nProviderProps = WithChildren & { locale: AppLocale };

export const I18nProvider = ({ children, locale }: I18nProviderProps) => {
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
