import { I18nProvider } from '@/app/providers/i18n';
import { QueryProvider } from '@/app/providers/query';
import { SidebarProvider } from '@/features/sidebar';
import type { AppLocale, WithChildren } from '@/shared/types/types';

type AppProvidersProps = WithChildren & {
  locale: AppLocale;
};

export const AppProviders = ({ children, locale }: AppProvidersProps) => {
  return (
    <QueryProvider>
      <SidebarProvider>
        <I18nProvider locale={locale}>{children}</I18nProvider>
      </SidebarProvider>
    </QueryProvider>
  );
};
