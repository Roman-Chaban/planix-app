import type { PlatformId, ProjectsHeaderProps, TabId } from '@types';

import type { Project } from '@/entities/project';

export type ToolbarProps = {
  statusId: TabId;
  platformId: PlatformId | null;
  search: string;
  projects: Project[];
  setPlatformId: (platform: PlatformId | null) => void;
  setSearchQuery: (search: string) => void;
  setStatusId: (status: TabId) => void;
};

export type ToolbarSelectProps = {
  statusId: TabId;
  setStatusId: (status: TabId) => void;
};

export type ToolbarSelectOption = {
  value: TabId;
  label: string;
};

export type ToolbarHeaderProps = ToolbarSelectProps;

export type ToolbarActionsProps = {
  projects: Project[];
  platformId: PlatformId | null;
  search: string;
  setPlatformId: (platform: PlatformId | null) => void;
  setSearchQuery: (search: string) => void;
};

export type ToolbarHeaderItemProps = ProjectsHeaderProps;

export type PlatformOption = {
  value: PlatformId | null;
  label: string;
};

export type PlatformSelectProps = {
  platformId: PlatformId | null;
  projects: Project[];
  setPlatformId: (platform: PlatformId | null) => void;
};
