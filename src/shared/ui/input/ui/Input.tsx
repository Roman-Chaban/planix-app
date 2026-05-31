import { forwardRef } from 'react';

import { buildClassName } from '@/shared/lib';
import type { FormInputProps } from '@/shared/ui/form-field/model/types';

import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={buildClassName(styles.input, className)}
        onChange={onChange}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
