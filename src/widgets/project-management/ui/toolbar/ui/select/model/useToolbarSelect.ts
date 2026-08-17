import type { ToolbarSelectOption, ToolbarSelectProps } from './select.types';

import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-details';

import { NAMESPACE as NS } from '@/shared/i18n';

export const useToolbarSelect = (
  activeId: ToolbarSelectProps['activeId'],
  setActiveId: ToolbarSelectProps['setActiveId'],
) => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);

  const headerItems = getHeaderItems(t);

  const options: ToolbarSelectOption[] = headerItems.map((item) => ({
    value: item.id,
    label: item.label,
  }));

  const selectedOption = options.find((option) => option.value === activeId) ?? null;

  const handleChange = (option: ToolbarSelectOption | null) => {
    if (!option) {
      return;
    }

    setActiveId(option.value);
  };

  return {
    options,
    selectedOption,
    handleChange,
  };
};
