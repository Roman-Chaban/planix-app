import type { PROJECT_REASONS } from '@/widgets/project-table';
import { type ProjectDetailsFormData } from '@/features/project-add';
import type { Status } from '@/shared/ui/status-badge/model/types';

export type CreateProjectPayload = ProjectDetailsFormData;
export type UpdateProjectPayload = { id: string | number; data: Partial<ProjectDetailsFormData> };
export type DeleteProjectPayload = { id: string | number };
export type RejectReason = (typeof PROJECT_REASONS)[keyof typeof PROJECT_REASONS];

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
  client: Client;
  name: string;
  dueDate: string;
  platform: string;
  progress: number;
  price: number;
  status: Status;
  created_at?: string;
  updatedAt?: string;
  description: string;
  reason?: RejectReason;
  slug: string;
  name_uk?: string;
  description_uk?: string;
  files: ProjectFile[];
};
