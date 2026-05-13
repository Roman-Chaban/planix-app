import type { StatusMap } from '@/widgets/projects/model/types';

export const statusMap: StatusMap = {
  allProjects: null,
  inProgress: 'In Progress',
  pending: 'Pending',
  completed: 'Completed',
  canceled: 'Canceled',
} as const;
