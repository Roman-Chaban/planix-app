import type { ProjectsHeaderProps, TabId } from '@types';

import type { Dispatch, SetStateAction } from 'react';

export type ToolbarProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};

export type ToolbarHeaderItemProps = ProjectsHeaderProps;

export type ToolbarHeaderProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
  isSidebarOpen?: boolean;
};

export type ToolbarActionsProps = {
  handleCreateProject?: () => void;
};
