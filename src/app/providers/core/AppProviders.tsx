import type { FC, ReactNode } from 'react';

import { I18nProvider } from '@/app/providers/i18n';
import { QueryProvider } from '@/app/providers/query';
import { SidebarProvider } from '@/features/sidebar';
import type { Locale } from '@/shared/lib/i18n/locales';

type AppProvidersProps = {
  children: ReactNode;
  locale: Locale;
};

export const AppProviders: FC<AppProvidersProps> = ({ children, locale }) => {
  return (
    <QueryProvider>
      <SidebarProvider>
        <I18nProvider locale={locale}>{children}</I18nProvider>
      </SidebarProvider>
    </QueryProvider>
  );
};
