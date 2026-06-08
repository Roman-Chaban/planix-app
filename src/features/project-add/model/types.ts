import type { ProjectFile, Status } from '@/entities/project';

export type ProjectFormData = {
  projectName: string;
  clientName: string;
  startDate: string;
  dueDate: string;
  price: string;
  platform: string;
  description: string;
  status: Status;
  files: (ProjectFile | File)[];
};

export type ProjectDetailsFormProps = {
  onSubmit?: (data: ProjectFormData) => void;
  defaultValues?: Partial<ProjectFormData>;
};

export type ProjectDetailsFieldsProps = {
  isProjectActionPending: boolean;
  isDisabled: boolean;
};
