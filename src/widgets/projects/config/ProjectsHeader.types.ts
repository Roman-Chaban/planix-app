import type { Dispatch, SetStateAction } from 'react';

import type { TabId } from '@/widgets/projects/config/ProjectsLayout.types';

export type ProjectsHeaderItemProps = {
  id: TabId;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export type ProjectsHeaderProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};

export type ProjectsHeaderItems = ProjectsHeaderItemProps[];
