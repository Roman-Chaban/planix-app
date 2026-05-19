import type { ProjectsHeaderItems } from '@/widgets/projects-header/model/types';

export const headerItems: ProjectsHeaderItems = [
  {
    id: 'AllProjects',
    label: 'ProjectsHeader.allProjects',
  },
  {
    id: 'In Progress',
    label: 'ProjectsHeader.inProgress',
  },
  {
    id: 'Pending',
    label: 'ProjectsHeader.pending',
  },
  {
    id: 'Completed',
    label: 'ProjectsHeader.completed',
  },
  {
    id: 'Canceled',
    label: 'ProjectsHeader.canceled',
  },
] as const;
