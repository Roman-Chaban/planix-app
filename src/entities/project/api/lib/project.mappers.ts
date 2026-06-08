import type { CreateProjectPayload, UpdateProjectPayload, Project } from '@/entities/project';

export const mapCreateProject = (formData: CreateProjectPayload): Partial<Project> => {
  return {
    projectName: formData.projectName,
    client: {
      id: String(Date.now()),
      name: formData.clientName,
      avatar: '',
    },
    startDate: formData.startDate,
    dueDate: formData.dueDate,
    platform: formData.platform,
    price: Number(formData.price),
    progress: 0,
    status: 'Pending',
    description: formData.description,
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
