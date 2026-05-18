'use client';

import type { FC } from 'react';

import type { BasedProviderProps } from '@/app/providers/provider.types';
import { QueryProvider } from '@/app/providers/QueryProvider';
import { TranslationProvider } from '@/app/providers/TranslationProvider';

export const GlobalProviders: FC<BasedProviderProps> = ({ children, locale }) => {
  return (
    <QueryProvider>
      <TranslationProvider locale={locale}>{children}</TranslationProvider>
    </QueryProvider>
  );
};
