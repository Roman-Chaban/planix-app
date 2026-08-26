import type { Project } from '@/entities/projects';
import { toDisplay, STATUSES } from '@/shared/lib';

export const toProjectTableItem = (project: Project) => {
  const formattedDueDate = toDisplay(project.due_date);

  return {
    id: project.id,
    project_name_uk: project.project_name_uk,
    project_name: project.project_name,
    slug: project.slug,
    platform: project.platform,
    progress: `${project.progress}%`,
    price: `$${project.price.toLocaleString()}`,
    status: project.status,
    description: project.description,
    description_uk: project.description_uk,
    client_id: project.client_id,
    client_name: project.client_name,
    client_avatar: project.client_avatar,
    start_date: project.start_date,
    due_date: formattedDueDate,
    statusColor: STATUSES.PENDING,
    files: project.files || [],
  };
};
