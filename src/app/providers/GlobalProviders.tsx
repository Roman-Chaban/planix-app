import type { FC } from 'react';

import { QueryProvider, TranslationProvider } from '@/app/providers/index';
import type { BasedProviderProps } from '@/app/providers/model/types';

export const GlobalProviders: FC<BasedProviderProps> = ({ children, locale }) => {
  return (
    <QueryProvider>
      <TranslationProvider locale={locale}>{children}</TranslationProvider>
    </QueryProvider>
  );
};
