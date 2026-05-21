import type { FC, ReactNode } from 'react';

import { I18nProvider } from '@/app/providers/i18n';
import { QueryProvider } from '@/app/providers/query';
import type { Locale } from '@/shared/lib/i18n/locales';

type AppProvidersProps = {
  children: ReactNode;
  locale: Locale;
};

export const AppProviders: FC<AppProvidersProps> = ({ children, locale }) => {
  return (
    <QueryProvider>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </QueryProvider>
  );
};
