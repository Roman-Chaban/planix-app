import type { PlatformOption } from '../model/types';

import type { PlatformId, Projects } from '@types';

export const getPlatformValues = (projects: Projects, allLabel: string): PlatformOption[] => {
  const platforms = [...new Set(projects.map((project) => project.platform))];

  return [
    { value: null, label: allLabel },
    ...platforms.map((platform) => ({
      value: platform as PlatformId,
      label: platform,
    })),
  ];
};
