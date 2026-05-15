'use client';

import type { FC } from 'react';

import type { BasedProviderProps } from '@/shared/providers/model/types';
import { QueryProvider } from '@/shared/providers/QueryProvider';
import { TranslationProvider } from '@/shared/providers/TranslationProvider';

export const GlobalProviders: FC<BasedProviderProps> = ({ children, locale }) => {
  return (
    <QueryProvider>
      <TranslationProvider locale={locale}>{children}</TranslationProvider>
    </QueryProvider>
  );
};
