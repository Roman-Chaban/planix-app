'use client';

import type { ToolbarSelectProps, ToolbarSelectOption } from '../model/select.types';

import { useMemo } from 'react';

import { buildClassName } from '@/shared/lib';
import { useSidebar } from '@/shared/providers/sidebar';
import { createSelectStyles, Select } from '@/shared/ui';

import { SELECT_CONTROL_VARIANTS } from '@/shared/ui/select';

import { useToolbarSelect } from '../model/useToolbarSelect';

import styles from './ToolbarSelect.module.scss';

const { TOOLBAR } = SELECT_CONTROL_VARIANTS;

export const ToolbarSelect = ({ activeId, setActiveId }: ToolbarSelectProps) => {
  const { isSidebarOpen } = useSidebar();

  const { options, selectedOption, handleChange } = useToolbarSelect(activeId, setActiveId);

  const selectStyles = useMemo(() => createSelectStyles<ToolbarSelectOption>(TOOLBAR), []);

  return (
    <Select<ToolbarSelectOption, false>
      className={buildClassName(styles.select, { [styles.selectCollapsed]: isSidebarOpen })}
      value={selectedOption}
      options={options}
      styles={selectStyles}
      isSearchable={false}
      isClearable={false}
      onChange={handleChange}
    />
  );
};
