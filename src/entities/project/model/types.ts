import type { PROJECT_REASONS } from '@/widgets/project-table';
import { type ProjectDetailsFormData } from '@/features/project-add';

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
  client_id: string;
  client_name: string;
  client_avatar: string;
  start_date: string;
  due_date: string;
  platform: string;
  progress: number;
  price: number;
  status: Status;
  reason: RejectReason;
  slug: string;
  description: string;
  description_uk: string;
  name_uk: string;
  files: ProjectFile[];
};

export type CreateProjectPayload = ProjectDetailsFormData;
export type UpdateProjectPayload = { id: ProjectId; data: Partial<ProjectDetailsFormData> };
export type DeleteProjectPayload = { id: ProjectId };
export type RejectReason = (typeof PROJECT_REASONS)[keyof typeof PROJECT_REASONS];
