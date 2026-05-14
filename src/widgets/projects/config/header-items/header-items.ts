import type { HeaderItems } from '@/widgets/projects/ui/projects-header/model/types';

export const headerItems: HeaderItems = [
  {
    id: 'allProjects',
    label: 'ProjectsHeader.allProjects',
  },
  {
    id: 'inProgress',
    label: 'ProjectsHeader.inProgress',
  },
  {
    id: 'pending',
    label: 'ProjectsHeader.pending',
  },
  {
    id: 'completed',
    label: 'ProjectsHeader.completed',
  },
  {
    id: 'canceled',
    label: 'ProjectsHeader.canceled',
  },
] as const;
