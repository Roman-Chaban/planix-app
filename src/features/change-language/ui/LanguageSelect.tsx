'use client';

import { useMemo } from 'react';
import Select from 'react-select';

import {
  SingleValue,
  Option,
  INSTANCE_ID,
  type LanguageOption,
  useLanguageSelect,
  createSelectStyles,
} from '@/features/change-language';
import { useMediaQuery } from '@/shared/lib/hooks';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

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
