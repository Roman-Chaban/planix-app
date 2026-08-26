import type { Project } from '../model/types';

import type { ProjectDetailsSchema } from '@/features/project-create';

export const mapCreateProject = (formData: ProjectDetailsSchema): Partial<Project> => {
  return {
    project_name: formData.projectName,
    client_id: String(Date.now()),
    client_name: formData.clientName,
    client_avatar: '',
    start_date: formData.startDate,
    due_date: formData.dueDate,
    platform: formData.platform,
    price: formData.price,
    progress: '0',
    status: 'Pending',
    description: formData.description,
    slug: formData.projectName.toLowerCase().replace(/ /g, '-'),
    files: formData.files,
  };
};
