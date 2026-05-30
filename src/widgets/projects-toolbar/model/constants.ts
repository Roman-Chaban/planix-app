import type { ProjectHeaderItems } from '@/widgets/projects-toolbar';

export const headerItems: ProjectHeaderItems = [
  {
    id: 'AllProjects',
    label: 'allProjects',
  },
  {
    id: 'In Progress',
    label: 'inProgress',
  },
  {
    id: 'Pending',
    label: 'pending',
  },
  {
    id: 'Completed',
    label: 'completed',
  },
  {
    id: 'Canceled',
    label: 'canceled',
  },
] as const;
