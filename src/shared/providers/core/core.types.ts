import type { AppLocale, WithChildren } from '@types';

export type AppProvidersProps = WithChildren & {
  locale: AppLocale;
};
