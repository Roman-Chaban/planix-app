'use client';

import { useForm } from 'react-hook-form';

import type { ProjectsLayoutFormValues } from '@/entities/project/model/types';

export const useProjectsFilters = () => {
  const form = useForm<ProjectsLayoutFormValues>({
    defaultValues: {
      search: '',
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log('Search:', data);
  });

  return {
    control: form.control,
    register: form.register,
    watch: form.watch,
    onSubmit,
  };
};
