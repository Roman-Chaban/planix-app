import type { ProjectsHeaderItems } from '@/widgets/projects-header/model/types';

export const headerItems: ProjectsHeaderItems = [
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
