import { forwardRef } from 'react';

import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';

import type { FormInputProps } from '@/shared/ui/form-field/model/types';

import styles from '@/shared/ui/input/styles/input.module.scss';

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={buildClassName(styles.input, className)} {...props} />;
  },
);

Input.displayName = 'Input';
