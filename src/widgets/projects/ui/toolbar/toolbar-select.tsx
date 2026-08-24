'use client';

import type { ToolbarSelectOption, ToolbarSelectProps } from './model/types';

import { useMemo } from 'react';

import { buildClassName } from '@/shared/lib';
import { useSidebar } from '@/shared/providers/sidebar';
import { createSelectStyles, Select } from '@/shared/ui';

import { SELECT_CONTROL_VARIANTS } from '@/shared/ui/select';

import { useToolbarSelect } from '../../model/use-toolbar-select';

import { DropdownIndicator } from './custom-dropdown-indicator';
import styles from './toolbar.module.scss';

const { TOOLBAR } = SELECT_CONTROL_VARIANTS;

export const ToolbarSelect = ({ statusId, setStatusId }: ToolbarSelectProps) => {
  const { isSidebarOpen } = useSidebar();

  const { options, selectedOption, handleChange } = useToolbarSelect(statusId, setStatusId);

  const selectStyles = useMemo(() => createSelectStyles<ToolbarSelectOption>(TOOLBAR), []);

  return (
    <Select<ToolbarSelectOption, false>
      className={buildClassName(styles.select, { [styles.selectCollapsed]: isSidebarOpen })}
      value={selectedOption}
      options={options}
      styles={selectStyles}
      isSearchable={false}
      components={{ DropdownIndicator }}
      isClearable={false}
      onChange={handleChange}
    />
  );
};
