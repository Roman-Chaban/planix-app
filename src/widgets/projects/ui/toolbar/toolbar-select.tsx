'use client';

import type { ToolbarSelectOption, ToolbarSelectProps } from './model/types';

import { buildClassName } from '@/shared/lib';
import { useSidebar } from '@/shared/providers/sidebar';
import { Select } from '@/shared/ui';

import { DropdownIndicator } from './custom-dropdown-indicator';
import { useToolbarSelect } from './model/use-toolbar-select';

import styles from './toolbar.module.scss';

export const ToolbarSelect = ({ statusId, setStatusId }: ToolbarSelectProps) => {
  const { isSidebarOpen } = useSidebar();

  const { options, selectedOption, selectStyles, handleChange } = useToolbarSelect(
    statusId,
    setStatusId,
  );

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
