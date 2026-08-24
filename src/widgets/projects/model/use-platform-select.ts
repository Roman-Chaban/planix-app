import type { UsePlatformSelectOptions } from './types';
import type { PlatformOption } from '../ui/toolbar/model/types';

import { useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { createSelectStyles } from '@/shared/ui';

import { SELECT_CONTROL_VARIANTS } from '@/shared/ui/select';

import { getPlatformValues } from '../ui/toolbar/lib/get-platform-values';

const { TOOLBAR } = SELECT_CONTROL_VARIANTS;

export const usePlatformSelect = ({
  platformId,
  setPlatformId,
  projects,
}: UsePlatformSelectOptions) => {
  const { t } = useTranslation(NS.PROJECTS);
  const selectStyles = useMemo(() => createSelectStyles<PlatformOption>(TOOLBAR), []);

  const options = useMemo(() => getPlatformValues(projects, t('allPlatforms')), [projects, t]);

  const selectedOption = options.find((option) => option.value === platformId) ?? null;

  const handleChange = (option: PlatformOption | null) => {
    if (!option) {
      return;
    }

    setPlatformId(option.value);
  };

  return {
    options,
    selectStyles,
    selectedOption,
    handleChange,
  };
};
