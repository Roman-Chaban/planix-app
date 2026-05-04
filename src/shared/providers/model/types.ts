import type { ReactNode } from 'react';

import type { Locale } from '@/shared/constants/locales';

export type GlobalProvidersProps = {
  children: ReactNode;
  locale: Locale;
};
