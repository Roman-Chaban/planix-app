import type { FC } from 'react';

import type { BasedProviderProps } from '@/shared/providers/model/types';
import { TranslationProvider } from '@/shared/providers/TranslationProvider';

export const GlobalProviders: FC<BasedProviderProps> = ({ children, locale }) => {
  return <TranslationProvider locale={locale}>{children}</TranslationProvider>;
};
