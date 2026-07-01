import type { ProjectDetailsSchema } from '@/features/project-add';

export type ProjectId = string | number;
export type Status = 'Pending' | 'In Progress' | 'Completed' | 'Canceled';

export type Client = {
  id: string;
  name: string;
  avatar: string;
};

export type ProjectFile = {
  name: string;
  url: string;
};

export type Project = {
  id: string | number;
  project_name: string;
  project_name_uk: string;
  client_id: string;
  client_name: string;
  client_avatar: string;
  start_date: string;
  due_date: string;
  platform: string;
  progress: string;
  price: string;
  status: Status;
  slug: string;
  description: string;
  description_uk: string;
  files: (ProjectFile | File)[];
};

export type CreateProjectPayload = ProjectDetailsSchema;
export type UpdateProjectPayload = {
  id: ProjectId;
  data: Partial<ProjectDetailsSchema>;
};
export type DeleteProjectPayload = { id: ProjectId };
