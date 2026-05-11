import { type FC } from 'react';

import { FormProvider } from '@/shared/providers/FormProvider';
import type { FormFieldProps } from '@/shared/ui/form-field/model/types';

export const FormField: FC<FormFieldProps> = ({
  children,
  variant = 'default',
  inputSize = 'md',
  error,
  disabled,
}) => {
  return (
    <FormProvider variant={variant} inputSize={inputSize} error={error} disabled={disabled}>
      {children}
    </FormProvider>
  );
};
