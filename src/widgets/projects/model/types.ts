import type { PlatformId, TabId } from '@types';

export type ProjectQueryUpdates = {
  search?: string;
  status?: TabId;
  platform?: PlatformId | null;
};

export type UpdateProjectQueryParamsOptions = {
  searchParams: URLSearchParams;
  updates: ProjectQueryUpdates;
};
