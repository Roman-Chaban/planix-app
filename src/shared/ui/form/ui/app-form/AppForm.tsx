'use client';

import type { ReactNode } from 'react';
import {
  FormProvider,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';

type AppFormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
  className?: string;
};

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
