import type { AppLocale, WithChildren } from '@/shared/types/types';

export type AppProvidersProps = WithChildren & {
  locale: AppLocale;
};
