import type { ProjectApiPayload } from '@/features/project-add/model/types';
import type { UpdateProjectPayload, Project } from '@/entities/project';

export const mapCreateProject = (formData: ProjectApiPayload): Partial<Project> => {
  return {
    project_name: formData.projectName,
    name_uk: formData.projectName,
    client_id: String(Date.now()),
    client_name: formData.clientName,
    client_avatar: '',
    start_date: formData.startDate,
    due_date: formData.dueDate,
    platform: formData.platform,
    price: Number(formData.price) || 0,
    progress: 0,
    status: 'Pending',
    description: formData.description,
    description_uk: formData.description,
    slug: formData.projectName.toLowerCase().replace(/ /g, '-'),
    files: formData.files,
  };
};

export const mapUpdateProject = (data: UpdateProjectPayload) => {
  return {
    name: data.data.projectName,
    dueDate: data.data.dueDate,
    price: Number(data.data.price),
    platform: data.data.platform,
  };
};
