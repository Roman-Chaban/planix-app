import type { TabId } from '@/widgets/projects/model/types';

import type { ProjectStatus } from '@/features/projects/model/types';

export const statusMap: Record<TabId, ProjectStatus | null> = {
  allProjects: null,
  inProgress: 'In Progress',
  pending: 'Pending',
  completed: 'Completed',
  canceled: 'Canceled',
} as const;
