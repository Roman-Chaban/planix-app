'use client';

import type { FormContextValue } from './model/types';

import { createContext, useContext } from 'react';

export const FormContext = createContext<FormContextValue | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('Form components must be used within a FormField provider');
  }

  return context;
};
