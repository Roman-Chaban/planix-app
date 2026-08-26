import type { Project, ProjectFile } from '../model/types';

import type { ProjectDetailsSchema } from '@/features/project-create';

import { getClientAvatar } from './get-client-avatar';

export const mapCreateProject = (
  formData: ProjectDetailsSchema,
  files: ProjectFile[],
): Partial<Project> => {
  return {
    project_name: formData.projectName,
    client_id: String(Date.now()),
    client_name: formData.clientName,
    client_avatar: getClientAvatar(files),
    start_date: formData.startDate,
    due_date: formData.dueDate,
    platform: formData.platform,
    price: formData.price,
    progress: 0,
    status: 'Pending',
    description: formData.description,
    slug: formData.projectName.toLowerCase().replace(/ /g, '-'),
    files,
  };
};
