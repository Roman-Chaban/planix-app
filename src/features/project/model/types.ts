import type { ComponentProps } from 'react';

import type { FormInputField } from '@/shared/ui';

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

export type DateFormFieldProps = Omit<
  ComponentProps<typeof FormInputField>,
  'inputProps' | 'startIcon'
> & {
  inputProps: Omit<ComponentProps<typeof FormInputField>['inputProps'], 'type'> & {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    min?: string;
    max?: string;
  };
};
