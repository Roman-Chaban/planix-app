'use client';

import { useForm } from 'react-hook-form';

import type { ProjectDetailsFormData } from '@/features/project-add';

export const useProjectDetailsForm = (defaultValues?: Partial<ProjectDetailsFormData>) => {
  return useForm<ProjectDetailsFormData>({
    defaultValues: {
      projectName: defaultValues?.projectName ?? '',
      clientName: defaultValues?.clientName ?? '',
      startDate: defaultValues?.startDate ?? '',
      dueDate: defaultValues?.dueDate ?? '',
      price: defaultValues?.price ?? '',
      platform: defaultValues?.platform ?? null,
      description: defaultValues?.description ?? '',
    },
    mode: 'onBlur',
  });
};
