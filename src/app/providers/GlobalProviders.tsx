'use client';

import type { FC, ReactNode } from 'react';

import type { Locale } from '@/shared/config/locales/locales';
import { TranslationProvider, QueryProvider } from '@/shared/providers/index';

type GlobalProvidersProps = {
  children: ReactNode;
  locale: Locale;
};

export const GlobalProviders: FC<GlobalProvidersProps> = ({ children, locale }) => {
  return (
    <QueryProvider>
      <TranslationProvider locale={locale}>{children}</TranslationProvider>
    </QueryProvider>
  );
};
