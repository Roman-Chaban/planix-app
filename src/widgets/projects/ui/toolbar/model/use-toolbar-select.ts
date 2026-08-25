import type { ToolbarSelectOption, ToolbarSelectProps } from '../model/types';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-details';

import { NAMESPACE as NS } from '@/shared/i18n';
import { createSelectStyles } from '@/shared/ui';
import { SELECT_CONTROL_VARIANTS } from '@/shared/ui/select';

const { TOOLBAR } = SELECT_CONTROL_VARIANTS;

export const useToolbarSelect = (
  statusId: ToolbarSelectProps['statusId'],
  setStatusId: ToolbarSelectProps['setStatusId'],
) => {
  const { t } = useTranslation(NS.PROJECTS);

  const selectStyles = useMemo(() => createSelectStyles<ToolbarSelectOption>(TOOLBAR), []);

  const headerItems = getHeaderItems(t);

  const options: ToolbarSelectOption[] = headerItems.map((item) => ({
    value: item.id,
    label: item.label,
  }));

  const selectedOption = options.find((option) => option.value === statusId) ?? null;

  const handleChange = (option: ToolbarSelectOption | null) => {
    if (!option) {
      return;
    }

    setStatusId(option.value);
  };

  return {
    options,
    selectedOption,
    selectStyles,
    handleChange,
  };
};
