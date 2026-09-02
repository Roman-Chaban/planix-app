import type { Project } from '@/entities/projects';
import { formatCurrency, STATUSES, toDisplay } from '@/shared/lib';

export const mapProjectTableRow = (project: Project) => {
  const formattedCurrency = formatCurrency(Number(project.price));
  const formattedStartDate = toDisplay(project.start_date);
  const formattedDueDate = toDisplay(project.due_date);

  return {
    user_id: project.user_id,
    id: project.id,
    project_name_uk: project.project_name_uk,
    project_name: project.project_name,
    slug: project.slug,
    platform: project.platform,
    progress: `${project.progress}%`,
    price: formattedCurrency,
    status: project.status,
    description: project.description,
    description_uk: project.description_uk,
    client_id: project.client_id,
    client_name: project.client_name,
    client_avatar: project.client_avatar,
    start_date: formattedStartDate,
    due_date: formattedDueDate,
    statusColor: STATUSES.PENDING,
    files: project.files || [],
  };
};
