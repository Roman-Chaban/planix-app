'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import {
  SingleValue,
  Option,
  INSTANCE_ID,
  type LanguageOption,
  useLanguageSwitcher,
  createSelectStyles,
} from '@/features/language-switcher';
import { NAMESPACE as NS } from '@/shared/i18n';
import { FormLabel } from '@/shared/ui';

export const LanguageSwitcher = () => {
  const { t } = useTranslation(NS.SETTINGS);
  const { selectValue, languageOptions, handleChange } = useLanguageSwitcher();

  const styles = useMemo(() => createSelectStyles(), []);

  return (
    <>
      <FormLabel>{t('system.selectLabel')}</FormLabel>
      <Select<LanguageOption, false>
        value={selectValue}
        onChange={handleChange}
        components={{ Option, SingleValue }}
        options={languageOptions}
        isSearchable={false}
        styles={styles}
        instanceId={INSTANCE_ID}
      />
    </>
  );
};
