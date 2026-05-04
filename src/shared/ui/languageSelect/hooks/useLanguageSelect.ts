// useLanguageSelect.ts
'use client';

import { useMemo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { languageOptions } from '@/shared/ui/languageSelect/lib/languageOptions';
import type { LanguageOption } from '@/shared/ui/languageSelect/model/types';

export const useLanguageSelect = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);

  const currentLocale = useMemo(() => {
    const possibleLocale = segments[0];
    return languageOptions.some((option) => option.value === possibleLocale)
      ? possibleLocale
      : languageOptions[0].value;
  }, [segments]);

  const value = useMemo(
    () => languageOptions.find((option) => option.value === currentLocale) ?? languageOptions[0],
    [currentLocale],
  );

  const handleChange = useCallback(
    (option: LanguageOption | null) => {
      if (!option || option.value === currentLocale) return;

      const newLocale = option.value;
      const newSegments = [...segments];
      newSegments[0] = newLocale;

      const newPath = '/' + newSegments.join('/');
      const search = typeof window !== 'undefined' ? window.location.search : '';

      router.push(newPath + search);
    },
    [router, segments, currentLocale],
  );

  return {
    value,
    options: languageOptions,
    currentLocale,
    handleChange,
  };
};
