import type { Status } from '@/shared/ui/status-badge/model/types';

export type ProjectDetailsFormData = {
  projectName: string;
  clientName: string;
  startDate: string;
  dueDate: string;
  price: string;
  platform: string;
  description: string;
  status: Status;
  files: File[];
};

export type ProjectDetailsFormProps = {
  onSubmit?: (data: ProjectDetailsFormData) => void;
  defaultValues?: Partial<ProjectDetailsFormData>;
};

export type ProjectDetailsFieldsProps = {
  isProjectActionPending: boolean;
  isDisabled: boolean;
};
