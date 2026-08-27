'use client';

import { useController, useFormContext } from 'react-hook-form';

import type { ProjectDetailsSchema } from '@/features/project-create';

import { FormDateField } from '@/shared/ui';
import type { FormFieldSize } from '@/shared/ui/input/lib/constants';

type DueDateFieldProps = {
  size?: FormFieldSize;
};

export const DueDateField = ({ size }: DueDateFieldProps) => {
  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'dueDate',
    control,
  });

  return (
    <FormDateField
      size={size}
      id="dueDate"
      label="dueDateLabel"
      placeholder="dueDatePlaceholder"
      error={fieldState.error?.message}
      inputProps={field}
    />
  );
};
