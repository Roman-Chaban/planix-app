import type { PlatformId, Projects } from '@types';

export type UsePlatformSelectOptions = {
  platformId: PlatformId | null;
  setPlatformId: (platform: PlatformId | null) => void;
  projects: Projects;
};
