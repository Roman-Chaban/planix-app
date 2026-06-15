'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  projectDetailsSchema,
  type ProjectDetailsSchema,
} from '@/features/project-add';

export const useProjectDetailsForm = (
  defaultValues?: Partial<ProjectDetailsSchema>,
) => {
  return useForm<ProjectDetailsSchema>({
    resolver: zodResolver(projectDetailsSchema),
    mode: 'onChange',
    defaultValues: {
      projectName: '',
      clientName: '',
      startDate: '',
      dueDate: '',
      price: '',
      platform: '',
      description: '',
      status: 'Pending',
      files: [],
      ...defaultValues,
    },
  });
};
