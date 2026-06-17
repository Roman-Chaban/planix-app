'use client';

import { useController, useFormContext } from 'react-hook-form';

import type { ProjectDetailsSchema } from '@/features/project-add';

import { DateFormField } from './DateFormField';

export const StartDateField = () => {
  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'startDate',
    control,
  });

  return (
    <DateFormField
      id="startDate"
      label="startDateLabel"
      placeholder="startDatePlaceholder"
      error={fieldState.error?.message}
      inputProps={field}
    />
  );
};
