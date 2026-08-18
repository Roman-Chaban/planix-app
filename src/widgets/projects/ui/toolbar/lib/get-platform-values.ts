import type { PlatformOption } from '../model/types';
import type { TabId } from '@types';

import type { Project } from '@/entities/project';

export const getPlatformValues = (projects: Project[]): PlatformOption[] => {
  const platforms = [...new Set(projects.map((project) => project.platform))];

  return platforms.map((platform) => ({
    value: platform as TabId,
    label: platform,
  }));
};
