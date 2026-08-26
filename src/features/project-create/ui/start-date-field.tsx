'use client';

import { useController, useFormContext } from 'react-hook-form';

import type { ProjectDetailsSchema } from '@/features/project-create';

import { FormDateField } from '@/shared/ui';

export const StartDateField = () => {
  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'startDate',
    control,
  });

  return (
    <FormDateField
      id="startDate"
      label="startDateLabel"
      placeholder="startDatePlaceholder"
      error={fieldState.error?.message}
      inputProps={field}
    />
  );
};
