import type { AppProvidersProps } from '../../../app/providers/core/types';

import { AppToast } from '@/entities/toast';

import { I18nProvider } from '../../../app/providers/i18n';
import { QueryProvider } from '../../../app/providers/query';
import { SidebarProvider } from '../../../app/providers/sidebar';
import { StoreProvider } from '../../../app/providers/store';
import { AuthProvider } from '../auth';

export const AppProviders = ({ children, locale }: AppProvidersProps) => {
  return (
    <QueryProvider>
      <StoreProvider>
        <AppToast />
        <AuthProvider>
          <SidebarProvider>
            <I18nProvider locale={locale}>{children}</I18nProvider>
          </SidebarProvider>
        </AuthProvider>
      </StoreProvider>
    </QueryProvider>
  );
};
