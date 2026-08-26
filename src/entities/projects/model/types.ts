import type { Status } from '@types';

import type { ProjectDetailsSchema } from '@/features/project-create';

export type ProjectId = string | number;

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
  progress: string | number;
  price: string;
  status: Status;
  slug: string;
  description: string;
  description_uk: string;
  files: (ProjectFile | File)[];
  user_id: string;
};

export type CreateProjectPayload = ProjectDetailsSchema;
export type UpdateProjectPayload = {
  id: ProjectId;
  data: Partial<ProjectDetailsSchema>;
};
export type DeleteProjectPayload = { id: ProjectId };
