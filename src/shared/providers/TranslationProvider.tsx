'use client';

import { type ReactNode, useEffect, useState } from 'react';

import { I18nextProvider } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18nConfig';
import type { Locale } from '@/shared/config/i18n/locales';

export default function TranslationProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const handleReady = async () => {
      await i18n.changeLanguage(locale);
      setReady(true);
    };

    if (!i18n.isInitialized) {
      i18n.on('initialized', handleReady);
    } else {
      handleReady();
    }
  }, [locale]);

  if (!ready) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
