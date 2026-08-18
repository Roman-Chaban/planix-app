'use client';

import { FormProvider, type FieldValues } from 'react-hook-form';

import type { AppFormProps } from '@/shared/ui/form/app-form';

export function AppForm<T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
}: AppFormProps<T>) {
  const submitHandler = form.handleSubmit(onSubmit);

  return (
    <FormProvider {...form}>
      <form onSubmit={submitHandler} className={className} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}
