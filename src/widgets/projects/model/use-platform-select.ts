import type { UsePlatformSelectOptions } from './types';
import type { PlatformOption } from '../ui/toolbar/model/types';

import { useMemo } from 'react';

import { createSelectStyles } from '@/shared/ui';

import { SELECT_CONTROL_VARIANTS } from '@/shared/ui/select';

import { getPlatformValues } from '../ui/toolbar/lib/get-platform-values';

const { PLATFORM } = SELECT_CONTROL_VARIANTS;

export const usePlaformSelect = ({ activeId, setActiveId, projects }: UsePlatformSelectOptions) => {
  const selectStyles = useMemo(() => createSelectStyles<PlatformOption>(PLATFORM), []);

  const options = useMemo(() => getPlatformValues(projects), [projects]);

  const selectedOption = options.find((option) => option.value === activeId) ?? null;

  const handleChange = (option: PlatformOption | null) => {
    if (!option) {
      return;
    }

    setActiveId(option.value);
  };

  return {
    options,
    selectStyles,
    selectedOption,
    handleChange,
  };
};
