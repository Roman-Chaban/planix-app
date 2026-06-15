'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type UseFormProps, type FieldValues } from 'react-hook-form';

import type { UseAppFormProps } from '@/shared/lib/hooks/model/types';

export const useAppForm = <T extends FieldValues>({
  schema,
  mode = 'onChange',
  ...formOptions
}: UseAppFormProps<T>) => {
  return useForm<T>({
    ...formOptions,
    resolver: zodResolver(schema) as UseFormProps<T>['resolver'],
    mode,
  });
};
