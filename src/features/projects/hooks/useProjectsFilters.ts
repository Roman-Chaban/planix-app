'use client';

import type { ProjectsLayoutFormValues } from '../model/types';

import { useForm } from 'react-hook-form';

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
