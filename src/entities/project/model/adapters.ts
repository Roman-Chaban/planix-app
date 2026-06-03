import type { ProjectTableItem } from '@/widgets/project-table/model/types';

import type { Project } from '@/entities/project';

export const toProjectTableItem = (project: Project): ProjectTableItem => ({
  ...project,
  progressText: `${project.progress}% Complete`,
  statusColor: project.status,
  formattedPrice: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(project.price),
});
