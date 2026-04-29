import type { FC } from 'react';

import type { GlobalProvidersProps } from '@/shared/providers/model/types';
import TranslationProvider from '@/shared/providers/TranslationProvider';

export const GlobalProviders: FC<GlobalProvidersProps> = ({ children, locale }) => {
  return <TranslationProvider locale={locale}>{children}</TranslationProvider>;
};
