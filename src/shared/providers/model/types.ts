import type { ReactNode } from 'react';

import type { Locale } from '@/shared/config/i18n/lib/locales';

export type GlobalProvidersProps = {
  children: ReactNode;
  locale: Locale;
};
