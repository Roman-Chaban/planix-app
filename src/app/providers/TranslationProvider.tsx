'use client';

import { type FC, useEffect, useState } from 'react';

import { I18nextProvider } from 'react-i18next';

import type { BasedProviderProps } from '@/app/providers/provider.types';
import i18n from '@/shared/config/i18n/i18nConfig';

export const TranslationProvider: FC<BasedProviderProps> = ({ children, locale }) => {
  const [isTranslationReady, setIsTranslationReady] = useState<boolean>(false);

  useEffect(() => {
    let isComponentMounted = true;

    const initializeLanguage = async () => {
      await i18n.changeLanguage(locale);

      if (isComponentMounted) {
        setIsTranslationReady(true);
      }
    };

    initializeLanguage();

    return () => {
      isComponentMounted = false;
    };
  }, [locale]);

  if (!isTranslationReady) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
