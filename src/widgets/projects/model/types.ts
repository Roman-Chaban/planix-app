import type { PlatformId, Projects, TabId } from '@types';

export type UsePlatformSelectOptions = {
  platformId: PlatformId | null;
  setPlatformId: (platform: PlatformId | null) => void;
  projects: Projects;
};

export type ProjectQueryUpdates = {
  search?: string;
  status?: TabId;
  platform?: PlatformId | null;
};

export type UpdateProjectQueryParamsOptions = {
  searchParams: URLSearchParams;
  updates: ProjectQueryUpdates;
};
