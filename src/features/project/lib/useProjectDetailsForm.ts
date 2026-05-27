import dayjs from 'dayjs';
import { useForm, type UseFormReturn } from 'react-hook-form';

import type { ProjectDetailsFormData } from '@/features/project/model/types';

export const useProjectDetailsForm = (defaultValues?: Partial<ProjectDetailsFormData>) => {
  const form = useForm<ProjectDetailsFormData>({
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

  const { watch } = form;

  // eslint-disable-next-line react-hooks/incompatible-library
  const startDateValue = watch('startDate');
  const dueDateValue = watch('dueDate');

  const formatDateDisplay = (dateStr: string | undefined): string => {
    if (!dateStr) return '';
    const date = dayjs(dateStr);
    return date.isValid() ? date.format('MMM DD, YYYY') : '';
  };

  const onSubmitHandler = (data: ProjectDetailsFormData) => {
    console.log('Project Details Submitted:', data);
  };

  return {
    ...form,
    onSubmit: onSubmitHandler,
    formatDateDisplay,
    startDateValue,
    dueDateValue,
  } as UseFormReturn<ProjectDetailsFormData> & {
    onSubmit: (data: ProjectDetailsFormData) => void;
    formatDateDisplay: (dateStr: string | undefined) => string;
    startDateValue: string;
    dueDateValue: string;
  };
};
