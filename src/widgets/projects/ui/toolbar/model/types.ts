import type { ActiveTabProps, ProjectsHeaderProps, TabId } from '@types';

import type { Project } from '@/entities/project';

export type ToolbarProps = ActiveTabProps & {
  projects: Project[];
};

export type ToolbarSelectProps = ActiveTabProps;

export type ToolbarSelectOption = {
  value: TabId;
  label: string;
};

export type ToolbarHeaderProps = ActiveTabProps & {
  isSidebarOpen?: boolean;
};

export type ToolbarActionsProps = ActiveTabProps & {
  handleCreateProject?: () => void;
  projects: Project[];
};

export type ToolbarHeaderItemProps = ProjectsHeaderProps;

export type PlatformOption = {
  value: TabId;
  label: string;
};

export type PlatformSelectProps = ActiveTabProps & {
  projects: Project[];
};
