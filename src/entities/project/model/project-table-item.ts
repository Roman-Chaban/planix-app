import type { ProjectDBRow, ProjectTableItem } from '@/widgets/project-table/model/types';
import { toDisplay } from '@/features/project-add/ui/project-add-fields';

export const toProjectTableItem = (project: ProjectDBRow): ProjectTableItem => {
  const formattedDueDate = toDisplay(project.due_date);

  return {
    id: project.id,
    projectName: project.project_name,
    slug: project.slug,
    platform: project.platform,
    progress: project.progress,
    price: project.price,
    status: project.status,
    description: project.description,
    reason: project.reason,

    client: {
      id: project.client_id,
      name: project.client_name,
      avatar: project.client_avatar,
    },

    startDate: project.start_date,
    dueDate: project.due_date,

    formattedDueDate,
    progressText: `${project.progress}%`,
    formattedPrice: `$${project.price.toLocaleString()}`,
    statusColor: 'Pending',
  };
};
