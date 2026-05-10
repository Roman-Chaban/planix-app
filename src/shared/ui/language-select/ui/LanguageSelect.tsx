'use client';

import { useMemo } from 'react';
import Select from 'react-select';

import { BREAKPOINTS } from '@/shared/constants/breakpoints';
import { INSTANCE_ID } from '@/shared/constants/common';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { useLanguageSelect } from '@/shared/ui/language-select/hooks/useLanguageSelect';
import { createSelectStyles } from '@/shared/ui/language-select/lib/language-select-styles/language-select-styles';
import type { LanguageOption } from '@/shared/ui/language-select/model/types';

import { Option } from '@/shared/ui/language-select/ui/Option';
import { SingleValue } from '@/shared/ui/language-select/ui/SingleValue';

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
