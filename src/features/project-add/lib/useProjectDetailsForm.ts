'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { projectDetailsSchema, type ProjectDetailsSchema } from '@/features/project-add';

export const useProjectDetailsForm = (defaultValues?: Partial<ProjectDetailsSchema>) => {
  const { t } = useTranslation('projectAdd');

  return useForm<ProjectDetailsSchema>({
    resolver: zodResolver(projectDetailsSchema(t)),
    mode: 'onChange',
    defaultValues: {
      projectName: '',
      clientName: '',
      startDate: '',
      dueDate: '',
      price: '',
      platform: '',
      description: '',
      files: [],
      ...defaultValues,
    },
  });
};
