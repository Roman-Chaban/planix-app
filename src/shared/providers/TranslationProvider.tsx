'use client';

import { type ReactNode, useEffect, useState } from 'react';

import { I18nextProvider } from 'react-i18next';

import i18n from '@/shared/config/i18n/config';
import type { Locale } from '@/shared/config/i18n/lib/locales';

export default function TranslationProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      await i18n.changeLanguage(locale);
      if (mounted) setReady(true);
    };

    run();

    return () => {
      mounted = false;
    };
  }, [locale]);

  if (!ready) {
    return null;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
