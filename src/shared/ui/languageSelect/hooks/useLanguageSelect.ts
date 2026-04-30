'use client';

import { useMemo, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { languageOptions } from '@/shared/ui/languageSelect/lib/languageOptions';
import type { LanguageOption } from '@/shared/ui/languageSelect/model/types';

export const useLanguageSelect = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = useMemo(() => pathname.split('/'), [pathname]);

  const currentLocale = useMemo(() => {
    return (
      languageOptions.find((option) => option.value === segments[1])?.value ??
      languageOptions[0].value
    );
  }, [segments]);

  const value = useMemo(() => {
    return languageOptions.find((option) => option.value === currentLocale);
  }, [currentLocale]);

  const handleChange = useCallback(
    (option: LanguageOption | null) => {
      if (!option) return;

      const newLocale = option.value;
      const newSegments = [...segments];

      newSegments[1] = newLocale;

      const newPath = newSegments.join('/') || `/${newLocale}`;
      const search = typeof window !== 'undefined' ? window.location.search : '';

      router.prefetch(newPath);
      router.replace(newPath + search);
    },
    [router, segments],
  );

  return {
    value,
    options: languageOptions,
    handleChange,
  };
};
