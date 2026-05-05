import type { ReactNode } from 'react';

import type { Locale } from '@/shared/constants/locales';

export type BasedProviderProps = {
  children: ReactNode;
  locale: Locale;
};
