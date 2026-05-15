'use client';

import { useMemo } from 'react';
import Select from 'react-select';

import { useLanguageSelect } from '@/features/change-language/hooks/useLanguageSelect';
import { SingleValue, Option } from '@/features/change-language/index';
import { createSelectStyles } from '@/features/change-language/lib/language-select-styles/language-select-styles';
import type { LanguageOption } from '@/features/change-language/model/types';
import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { INSTANCE_ID } from '@/shared/constants/common';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

const { TABLET } = BREAKPOINTS;

export const LanguageSelect = () => {
  const { value, options, handleChange } = useLanguageSelect();
  const isTablet = useMediaQuery(TABLET);

  const styles = useMemo(() => createSelectStyles(isTablet), [isTablet]);

  return (
    <Select<LanguageOption, false>
      value={value}
      onChange={handleChange}
      components={{ Option, SingleValue }}
      options={options}
      isSearchable={false}
      styles={styles}
      instanceId={INSTANCE_ID}
    />
  );
};
