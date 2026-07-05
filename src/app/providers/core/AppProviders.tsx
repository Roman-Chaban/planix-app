import type { AppProvidersProps } from './types';

import { AuthProvider } from '../auth';
import { I18nProvider } from '../i18n';
import { QueryProvider } from '../query';
import { SidebarProvider } from '../sidebar';

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
