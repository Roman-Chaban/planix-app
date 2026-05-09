'use client';

import type { FormProviderProps } from './model/types';

import { type FC, useId, useMemo } from 'react';

import { FormContext } from '@/shared/context/form-context';

export const FormProvider: FC<FormProviderProps> = ({
  error,
  variant,
  inputSize,
  disabled,
  children,
}) => {
  const id = useId();
  const hasError = Boolean(error);

  const contextValue = useMemo(
    () => ({
      id,
      hasError,
      error,
      variant,
      inputSize,
      disabled,
    }),
    [id, hasError, error, variant, inputSize, disabled],
  );

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
};
