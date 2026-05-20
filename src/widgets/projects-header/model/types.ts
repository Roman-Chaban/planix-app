import type { Dispatch, SetStateAction } from 'react';

import type { TabId } from '@/widgets/project-layout/model/types';

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
