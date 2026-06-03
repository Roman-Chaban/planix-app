import type { Client, RejectReason } from '@/widgets/project-table';
import { type ProjectDetailsFormData } from '@/features/project-add';
import type { Status } from '@/shared/ui/status-badge/model/types';

export type CreateProjectPayload = ProjectDetailsFormData;
export type UpdateProjectPayload = { id: string | number; data: Partial<ProjectDetailsFormData> };
export type DeleteProjectPayload = { id: string | number };

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
};
