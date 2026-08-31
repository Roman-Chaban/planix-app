'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { DEFAULT_LOCALE } from '@/shared/i18n';
import { buildHref } from '@/shared/lib/routing/build-href';

export const useLocalizedRouter = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const locale = i18n.language || DEFAULT_LOCALE;

  return useMemo(
    () => ({
      ...router,
      push: (path: string) => router.push(buildHref(path, locale)),
      replace: (path: string) => router.replace(buildHref(path, locale)),
    }),
    [router, locale],
  );
};
