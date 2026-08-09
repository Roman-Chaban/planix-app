'use client';

import type { ToolbarSelectMobileProps, ToolbarSelectOption } from '../model/select.types';

import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-details';
import { NAMESPACE as NS } from '@/shared/i18n';

import { Select } from '@/shared/ui';

export const ToolbarSelectMobile = ({ activeId, setActiveId }: ToolbarSelectMobileProps) => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);

  const headerItems = getHeaderItems(t);

  const options: ToolbarSelectOption[] = headerItems.map((item) => ({
    value: item.id,
    label: item.label,
  }));

  const selectedOption = options.find((option) => option.value === activeId) ?? null;

  return (
    <Select<ToolbarSelectOption, false>
      value={selectedOption}
      options={options}
      isSearchable={false}
      isClearable={false}
      onChange={(option) => {
        if (!option) {
          return;
        }

        setActiveId(option.value);
      }}
    />
  );
};
