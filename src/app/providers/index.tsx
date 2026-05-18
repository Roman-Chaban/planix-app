'use client';

import type { FC, ReactNode } from 'react';

import { I18nProvider } from '@/app/providers/i18n/I18nProvider';
import { QueryProvider } from '@/app/providers/query/QueryProvider';
import type { Locale } from '@/shared/lib/i18n/locales';

type AppProviderProps = {
  children: ReactNode;
  locale: Locale;
};

export const AppProvider: FC<AppProviderProps> = ({ children, locale }) => {
  return (
    <QueryProvider>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </QueryProvider>
  );
};
