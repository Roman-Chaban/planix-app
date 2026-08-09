import type { ProjectsHeaderProps, TabId } from '@types';

import type { Dispatch, SetStateAction } from 'react';

export type ToolbarHeaderItemProps = ProjectsHeaderProps;

export type ToolbarHeaderProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
  isSidebarOpen?: boolean;
};
