import type { ProjectsHeaderItems } from '@/widgets/projects-header/model/types';

export const headerItems: ProjectsHeaderItems = [
  {
    id: 'AllProjects',
    label: 'projects.header.allProjects',
  },
  {
    id: 'In Progress',
    label: 'projects.header.inProgress',
  },
  {
    id: 'Pending',
    label: 'projects.header.pending',
  },
  {
    id: 'Completed',
    label: 'projects.header.completed',
  },
  {
    id: 'Canceled',
    label: 'projects.header.canceled',
  },
] as const;
