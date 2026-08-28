'use client';

import type { AppFormProps } from '../model/types';

import { FormProvider, type FieldValues } from 'react-hook-form';

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
