import type { FC, ReactNode } from 'react';

import type { Locale } from '@/shared/config/i18n/locales';

import TranslationProvider from '@/shared/providers/TranslationProvider';

type GlobalProvidersProps = {
  children: ReactNode;
  locale: Locale;
};

export const GlobalProviders: FC<GlobalProvidersProps> = ({ children, locale }) => {
  return <TranslationProvider locale={locale}>{children}</TranslationProvider>;
};
