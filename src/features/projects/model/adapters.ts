import type { Project, ProjectTableItem } from '@/features/projects/model/types';

export const toProjectTableItem = (project: Project): ProjectTableItem => ({
  ...project,
  progressText: `${project.progress}% Complete`,
  statusColor: project.status,
  formattedPrice: `$${project.price.toLocaleString()}`,
});
