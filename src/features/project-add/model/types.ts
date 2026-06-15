import type { ProjectFile, Status } from '@/entities/project';

export type FormValues = {
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

export type ProjectDetailsFieldsProps = {
  isProjectActionPending: boolean;
  isDisabled: boolean;
};
