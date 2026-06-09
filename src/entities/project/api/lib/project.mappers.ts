import type { ProjectFormData } from '@/features/project-add/model/types';
import type { UpdateProjectPayload, Project } from '@/entities/project';

export const mapCreateProject = (formData: ProjectFormData): Partial<Project> => {
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

export const mapUpdateProject = (data: UpdateProjectPayload) => {
  return {
    name: data.data.projectName,
    dueDate: data.data.dueDate,
    price: data.data.price,
    platform: data.data.platform,
  };
};
