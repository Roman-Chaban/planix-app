import type { PlatformId, ProjectsHeaderProps, TabId } from '@types';

import type { Project } from '@/entities/project';

export type ToolbarProps = {
  statusId: TabId;
  setStatusId: (status: TabId) => void;
  platformId: PlatformId | null;
  setPlatformId: (platform: PlatformId | null) => void;
  search: string;
  setSearchQuery: (search: string) => void;
  projects: Project[];
};

export type ToolbarSelectProps = {
  statusId: TabId;
  setStatusId: (status: TabId) => void;
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
  setPlatformId: (platform: PlatformId | null) => void;
  search: string;
  setSearchQuery: (search: string) => void;
};

export type ToolbarHeaderItemProps = ProjectsHeaderProps;

export type PlatformOption = {
  value: PlatformId | null;
  label: string;
};

export type PlatformSelectProps = {
  platformId: PlatformId | null;
  setPlatformId: (platform: PlatformId | null) => void;
  projects: Project[];
};
