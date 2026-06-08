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
  id: ProjectId;
  client: {
    id: string;
    name: string;
    avatar: string;
  };
  projectName: string;
  startDate: string;
  dueDate: string;
  platform: string;
  progress: number;
  price: number;
  status: Status;
  slug: string;
  description: string;
  name_uk?: string;
  description_uk?: string;
  created_at?: string;
};

export type CreateProjectPayload = ProjectDetailsFormData;
export type UpdateProjectPayload = { id: ProjectId; data: Partial<ProjectDetailsFormData> };
export type DeleteProjectPayload = { id: ProjectId };
export type RejectReason = (typeof PROJECT_REASONS)[keyof typeof PROJECT_REASONS];
