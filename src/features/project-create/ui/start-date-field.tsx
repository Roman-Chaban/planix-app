'use client';

import { useController, useFormContext } from 'react-hook-form';

import type { ProjectDetailsSchema } from '@/features/project-create';

import { FormDateField } from '@/shared/ui';
import type { FormFieldSizes } from '@/shared/ui/form/form-field';

type StartDateFieldProps = {
  size?: FormFieldSizes;
};

export const StartDateField = ({ size }: StartDateFieldProps) => {
  const { control } = useFormContext<ProjectDetailsSchema>();

  const { field, fieldState } = useController({
    name: 'startDate',
    control,
  });

  return (
    <FormDateField
      size={size}
      id="startDate"
      label="startDateLabel"
      placeholder="startDatePlaceholder"
      error={fieldState.error?.message}
      inputProps={field}
    />
  );
};
