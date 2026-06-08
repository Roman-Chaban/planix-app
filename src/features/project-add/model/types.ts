import type { Status } from '@/entities/project';

export type ProjectDetailsFormData = {
  projectName: string;
  clientName: string;
  startDate: Date | null;
  dueDate: Date | null;
  price: number;
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
