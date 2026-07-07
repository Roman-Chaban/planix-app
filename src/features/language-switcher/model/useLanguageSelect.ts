'use client';

import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { languageOptions, type LanguageOption } from '@/features/language-switcher';

export const useLanguageSelect = () => {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const searchParams = useSearchParams();

  const segments = pathname.split('/').filter(Boolean);

  const selectValue =
    languageOptions.find(({ value }) => value === segments[0]) ?? languageOptions[0];

  const currentLocale = selectValue.value;

  const handleChange = useCallback(
    (option: LanguageOption | null) => {
      if (!option || option.value === currentLocale) {
        return;
      }

      const [, ...rest] = segments;

      const search = searchParams.toString();

      const newPath = `/${option.value}${rest.length ? `/${rest.join('/')}` : ''}`;

      router.push(`${newPath}${search ? `?${search}` : ''}`);
    },
    [router, segments, searchParams, currentLocale],
  );

  return {
    selectValue,
    languageOptions,
    currentLocale,
    handleChange,
  };
};
