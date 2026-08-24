import type { ToolbarSelectOption, ToolbarSelectProps } from '../ui/toolbar/model/types';

import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-details';

import { NAMESPACE as NS } from '@/shared/i18n';

export const useToolbarSelect = (
  statusId: ToolbarSelectProps['statusId'],
  setStatusId: ToolbarSelectProps['setStatusId'],
) => {
  const { t } = useTranslation(NS.PROJECTS);

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
    handleChange,
  };
};
