export type ProjectDetailsFormData = {
  created_at?: string;
  projectName: string;
  clientName: string;
  startDate: string;
  dueDate: string;
  price: string;
  platform: string;
  description: string;
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
