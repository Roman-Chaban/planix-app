import type { PlatformId, ProjectsHeaderProps, TabId } from '@types';

import type { Dispatch, SetStateAction } from 'react';

import type { Project } from '@/entities/project';

export type ToolbarProps = {
  statusId: TabId;
  setStatusId: Dispatch<SetStateAction<TabId>>;
  platformId: PlatformId | null;
  setPlatformId: Dispatch<SetStateAction<PlatformId | null>>;
  projects: Project[];
};

export type ToolbarSelectProps = {
  statusId: TabId;
  setStatusId: Dispatch<SetStateAction<TabId>>;
};

export type ToolbarSelectOption = {
  value: TabId;
  label: string;
};

export type ToolbarHeaderProps = ToolbarSelectProps & {
  isSidebarOpen?: boolean;
};

export type ToolbarActionsProps = {
  handleCreateProject?: () => void;
  projects: Project[];
  platformId: PlatformId | null;
  setPlatformId: Dispatch<SetStateAction<PlatformId | null>>;
};

export type ToolbarHeaderItemProps = ProjectsHeaderProps;

export type PlatformOption = {
  value: PlatformId | null;
  label: string;
};

export type PlatformSelectProps = {
  platformId: PlatformId | null;
  setPlatformId: Dispatch<SetStateAction<PlatformId | null>>;
  projects: Project[];
};
