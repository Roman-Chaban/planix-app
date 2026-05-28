import type { Platform } from '@/widgets/project-table/model/types';

export type ProjectDetailsFormData = {
  projectName: string;
  clientName: string;
  startDate: string;
  dueDate: string;
  price: number | '';
  platform: Platform | null;
  description: string;
};

export type ProjectDetailsFormProps = {
  onSubmit?: (data: ProjectDetailsFormData) => void;
  defaultValues?: Partial<ProjectDetailsFormData>;
};
