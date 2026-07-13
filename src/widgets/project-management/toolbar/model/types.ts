import type { Dispatch, SetStateAction } from 'react';

import type { TabId } from '@/widgets/project-management/ui/layout/model/types';

export type ToolbarProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};

export type ToolbarHeaderItemProps = {
  id: TabId;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export type ToolbarHeaderProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
  isSidebarOpen?: boolean;
};

export type ToolbarActionsProps = {
  handleCreateProject?: () => void;
};
