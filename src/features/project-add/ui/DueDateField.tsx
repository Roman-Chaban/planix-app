'use client';

import { useController, useFormContext } from 'react-hook-form';

import type { ProjectDetailsSchema } from '@/features/project-add';

import { FormDateField } from '@/shared/ui';

export const DueDateField = () => {
  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'dueDate',
    control,
  });

  return (
    <FormDateField
      id="dueDate"
      label="dueDateLabel"
      placeholder="dueDatePlaceholder"
      error={fieldState.error?.message}
      inputProps={field}
    />
  );
};
