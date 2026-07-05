'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { DEFAULT_LOCALE } from '@/shared/i18n';
import { buildHref } from '@/shared/lib/routing/buildHref';

export const useLocalizedRouter = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  return useMemo(
    () => ({
      ...router,
      push: (path: string) => {
        router.push(buildHref(path, i18n.language || DEFAULT_LOCALE));
      },
    }),
    [router, i18n.language],
  );
};
