'use client';

import { useMemo } from 'react';
import Select from 'react-select';

import type { LanguageOption } from '@/features/change-language/ChangeLanguage.types';
import { SingleValue, Option } from '@/features/change-language/index';
import { createSelectStyles } from '@/features/change-language/LanguageSelectStyles.constants';
import { useLanguageSelect } from '@/features/change-language/useLanguageSelect';
import { INSTANCE_ID } from '@/shared/config/common';
import { useMediaQuery } from '@/shared/lib/hooks';
import { BREAKPOINTS } from '@/shared/ui/theme/breakpoints';

const { TABLET } = BREAKPOINTS;

export const LanguageSelect = () => {
  const { selectValue, languageOptions, handleChange } = useLanguageSelect();

  const isTablet = useMediaQuery(TABLET);

  const styles = useMemo(() => createSelectStyles(isTablet), [isTablet]);

  return (
    <Select<LanguageOption, false>
      value={selectValue}
      onChange={handleChange}
      components={{ Option, SingleValue }}
      options={languageOptions}
      isSearchable={false}
      styles={styles}
      instanceId={INSTANCE_ID}
    />
  );
};
