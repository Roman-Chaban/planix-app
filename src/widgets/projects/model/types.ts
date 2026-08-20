import type { PlatformId, Projects } from '@types';

import type { Dispatch, SetStateAction } from 'react';

export type UsePlatformSelectOptions = {
  platformId: PlatformId | null;
  setPlatformId: Dispatch<SetStateAction<PlatformId | null>>;
  projects: Projects;
};
