import { forwardRef } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import type { FormInputProps } from '@/shared/ui/form-field/model/types';

import styles from '@/shared/ui/input/Input.module.scss';

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={buildClassName(styles.input, className)} {...props} />;
  },
);

Input.displayName = 'Input';
