'use client';

import { useController, useFormContext } from 'react-hook-form';

import type { ProjectDetailsSchema } from '@/features/project-add';

import { DateFormField } from './DateFormField';

export const DueDateField = () => {
  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'dueDate',
    control,
  });

  return (
    <DateFormField
      id="dueDate"
      label="dueDateLabel"
      placeholder="dueDatePlaceholder"
      error={fieldState.error?.message}
      inputProps={field}
    />
  );
};
