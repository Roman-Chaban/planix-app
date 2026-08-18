import type { ProjectsHeaderProps, TabId } from '@types';

import type { Dispatch, SetStateAction } from 'react';

export type ToolbarProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};

export type ToolbarSelectProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};

export type ToolbarSelectOption = {
  value: TabId;
  label: string;
};

export type ToolbarHeaderProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
  isSidebarOpen?: boolean;
};

export type ToolbarActionsProps = {
  handleCreateProject?: () => void;
};

export type ToolbarHeaderItemProps = ProjectsHeaderProps;
