import { forwardRef } from 'react';

import { buildClassName } from '@/shared/lib';
import type { FormInputProps } from '@/shared/ui/form-field/model/types';

import styles from './Input.module.scss';

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={buildClassName(styles.input, className)} {...props} />;
  },
);

Input.displayName = 'Input';
