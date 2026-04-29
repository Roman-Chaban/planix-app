'use client';

import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';

import i18n from '@/shared/config/i18n/i18nConfig';
import type { Locale } from '@/shared/config/i18n/locales';

import { INSTANCE_ID } from '@/shared/constants/common';
import { languageOptions } from '@/shared/ui/languageSelect/lib/languageOptions';
import { createSelectStyles } from '@/shared/ui/languageSelect/lib/languageSelectStyles';
import type { LanguageOption } from '@/shared/ui/languageSelect/model/types';

import { Option } from '@/shared/ui/languageSelect/ui/Option';
import { SingleValue } from '@/shared/ui/languageSelect/ui/SingleValue';

export const LanguageSelect = () => {
  const [language, setLanguage] = useState<Locale>(i18n.language as Locale);

  const styles = useMemo(() => createSelectStyles(), []);

  useEffect(() => {
    const handler = (language: string) => setLanguage(language as Locale);

    i18n.on('languageChanged', handler);
    return () => i18n.off('languageChanged', handler);
  }, []);

  const handleChange = (option: LanguageOption | null) => {
    if (!option) return;
    i18n.changeLanguage(option.value);
  };

  const value = useMemo(() => {
    return languageOptions.find((option) => option.value === language) ?? languageOptions[0];
  }, [language]);

  return (
    <Select<LanguageOption, false>
      value={value}
      onChange={handleChange}
      components={{ Option, SingleValue }}
      options={languageOptions}
      isSearchable={false}
      styles={styles}
      instanceId={INSTANCE_ID}
    />
  );
};
