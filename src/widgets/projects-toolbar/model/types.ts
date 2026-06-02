import type { Control } from 'react-hook-form';

import type { Dispatch, SetStateAction } from 'react';

import type { TabId } from '@/widgets/project-layout/model/types';

type ProjectFilterForm = {
  search: string;
};

export type ProjectToolbarProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
  control: Control<ProjectFilterForm>;
};

export type ProjectHeaderItemProps = {
  id: TabId;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export type ProjectHeaderProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};

export type ProjectHeaderItems = ProjectHeaderItemProps[];

export type ProjectsActionsProps = {
  handleCreateProject?: () => void;
};
