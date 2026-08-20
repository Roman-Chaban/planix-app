import type { PlatformId, Projects, Status, TabId } from '@types';

import type { ComponentType, Dispatch, SetStateAction } from 'react';

export type TabsContent = Record<TabId, ComponentType>;
export type StatusMap = Record<TabId, Status | null>;

export type UsePlatformSelectOptions = {
  platformId: PlatformId | null;
  setPlatformId: Dispatch<SetStateAction<PlatformId | null>>;
  projects: Projects;
};
