'use client';

import type { UseAppFormProps } from './model/types';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type FieldValues } from 'react-hook-form';


export function useAppForm<T extends FieldValues>({
  schema,
  mode = 'onChange',
  ...options
}: UseAppFormProps<T>) {
  return useForm<T>({
    ...options,
    resolver: zodResolver(schema),
    mode,
  });
}
