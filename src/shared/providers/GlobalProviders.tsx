import type { FC } from 'react';

import type { BasedProviderProps } from '@/shared/providers/model/types';
import { TranslationProvider } from '@/shared/providers/TranslationProvider';

import { FormProvider } from './FormProvider';

export const GlobalProviders: FC<BasedProviderProps> = ({ children, locale }) => {
  return (
    <FormProvider>
      <TranslationProvider locale={locale}>{children}</TranslationProvider>
    </FormProvider>
  );
};
