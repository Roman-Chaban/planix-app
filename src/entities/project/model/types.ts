import { type ProjectDetailsFormData } from '@/features/project-add';

export type CreateProjectPayload = ProjectDetailsFormData;
export type UpdateProjectPayload = { id: string; data: Partial<ProjectDetailsFormData> };
export type DeleteProjectPayload = { id: string };
