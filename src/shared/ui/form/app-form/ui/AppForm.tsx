'use client';

import { FormProvider, type FieldValues } from 'react-hook-form';

import type { AppFormProps } from '@/shared/ui/form/app-form';

import styles from './AppForm.module.scss';

export function AppForm<T extends FieldValues>({
  form,
  onSubmit,
  children,
}: AppFormProps<T>) {
  const submitHandler = form.handleSubmit(onSubmit);

  return (
    <FormProvider {...form}>
      <form onSubmit={submitHandler} className={styles.appForm} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}
