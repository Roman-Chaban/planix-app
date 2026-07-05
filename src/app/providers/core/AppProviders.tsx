import { SidebarProvider } from '@/features/sidebar';

import type { AppLocale, WithChildren } from '@/shared/types/types';

import { AuthProvider } from '../auth';
import { I18nProvider } from '../i18n';
import { QueryProvider } from '../query';

type AppProvidersProps = WithChildren & {
  locale: AppLocale;
};

export const AppProviders = ({ children, locale }: AppProvidersProps) => {
  return (
    <QueryProvider>
      <AuthProvider>
        <SidebarProvider>
          <I18nProvider locale={locale}>{children}</I18nProvider>
        </SidebarProvider>
      </AuthProvider>
    </QueryProvider>
  );
};
