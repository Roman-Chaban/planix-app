import type { ProjectDBRow, ProjectTableItem } from '@/widgets/project-table/model/types';
import { toDisplay } from '@/features/project-add/ui/project-add-fields';

export const toProjectTableItem = (row: ProjectDBRow): ProjectTableItem => {
  const formattedDueDate = toDisplay(row.due_date);

  return {
    id: row.id,
    projectName: row.project_name,
    slug: row.slug,
    platform: row.platform,
    progress: row.progress,
    price: row.price,
    status: row.status,
    description: row.description,
    reason: row.reason,

    client: {
      id: row.client_id,
      name: row.client_name,
      avatar: row.client_avatar,
    },

    startDate: row.start_date,
    dueDate: row.due_date,

    formattedDueDate,
    progressText: `${row.progress}%`,
    formattedPrice: `$${row.price.toLocaleString()}`,
    statusColor: 'Pending',
  };
};
