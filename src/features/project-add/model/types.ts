export type ProjectDetailsFormData = {
  projectName: string;
  clientName: string;
  startDate: string;
  dueDate: string;
  price: number | '';
  platform: string;
  description: string;
};

export type ProjectDetailsFormProps = {
  onSubmit?: (data: ProjectDetailsFormData) => void;
  defaultValues?: Partial<ProjectDetailsFormData>;
};
