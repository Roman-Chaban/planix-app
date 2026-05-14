import type { Dispatch, SetStateAction } from 'react';

import type { TabId } from '@/widgets/projects/model/types';

export type HeaderItem = {
  id: TabId;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export type HeaderItems = HeaderItem[];

export type ProjectsHeaderProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};
