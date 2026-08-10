import type { TabId } from '@types';

import type { Dispatch, SetStateAction } from 'react';

export type ToolbarSelectProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};

export type ToolbarSelectOption = {
  value: TabId;
  label: string;
};
