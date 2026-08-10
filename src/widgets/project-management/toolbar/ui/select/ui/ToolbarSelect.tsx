'use client';

import type { ToolbarSelectProps, ToolbarSelectOption } from '../model/select.types';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-details';
import { NAMESPACE as NS } from '@/shared/i18n';

import { buildClassName } from '@/shared/lib';
import { useSidebar } from '@/shared/providers/sidebar';
import { createSelectStyles, Select } from '@/shared/ui';

import styles from './ToolbarSelect.module.scss';

export const ToolbarSelect = ({ activeId, setActiveId }: ToolbarSelectProps) => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);

  const { isSidebarOpen } = useSidebar();

  const headerItems = getHeaderItems(t);

  const options: ToolbarSelectOption[] = headerItems.map((item) => ({
    value: item.id,
    label: item.label,
  }));

  const selectedOption = options.find((option) => option.value === activeId) ?? null;

  const selectStyles = useMemo(() => createSelectStyles<ToolbarSelectOption>(), []);

  return (
    <Select<ToolbarSelectOption, false>
      className={buildClassName(styles.select, { [styles.selectCollapsed]: isSidebarOpen })}
      value={selectedOption}
      options={options}
      styles={selectStyles}
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
