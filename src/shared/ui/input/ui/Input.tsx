import { forwardRef } from 'react';

import type { FormInputProps } from '@/shared/ui/form/form-filed/model/types';

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...props }, ref) => {
    return <input {...props} ref={ref} className={className} />;
  },
);

Input.displayName = 'Input';
