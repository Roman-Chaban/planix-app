import type { AppProvidersProps } from './core.types';

import { AppToast } from '@/entities/toast';

import { SidebarProvider } from '../../../app/providers/sidebar';
import { StoreProvider } from '../../../app/providers/store';
import { AuthProvider } from '../auth';
import { I18nProvider } from '../i18n';
import { QueryProvider } from '../query';

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
