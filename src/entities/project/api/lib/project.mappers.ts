import type { Project } from '@/widgets/project-table/model/types';
import type { CreateProjectPayload, UpdateProjectPayload } from '@/entities/project';

export const mapCreateProject = (formData: CreateProjectPayload): Partial<Project> => {
  return {
    name: formData.projectName,
    client: {
      id: String(Date.now()),
      name: formData.clientName,
      avatar: '',
    },
    dueDate: formData.dueDate,
    platform: formData.platform,
    price: Number(formData.price),
    progress: 0,
    status: 'Pending',
    slug: formData.projectName.toLowerCase().replace(/ /g, '-'),
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
