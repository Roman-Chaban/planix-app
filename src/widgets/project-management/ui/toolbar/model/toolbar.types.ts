import type { TabId } from '@types';

import type { Dispatch, SetStateAction } from 'react';

export type ToolbarProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};
