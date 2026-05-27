import { useForm } from 'react-hook-form';

import type { ProjectDetailsFormData } from '@/features/project/model/types';

export const useProjectDetailsForm = (defaultValues?: Partial<ProjectDetailsFormData>) => {
  return useForm<ProjectDetailsFormData>({
    defaultValues: {
      projectName: '',
      clientName: '',
      startDate: '',
      dueDate: '',
      price: '',
      platform: '',
      description: '',
      ...defaultValues,
    },
    mode: 'onBlur',
  });
};
