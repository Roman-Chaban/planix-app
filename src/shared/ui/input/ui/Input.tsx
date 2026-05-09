import { forwardRef, type InputHTMLAttributes } from 'react';

import { useFormContext } from '@/shared/context/form-context';
import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';

import styles from '../styles/styles.module.scss';

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...inputProps }, ref) => {
    const { id, disabled } = useFormContext();

    return (
      <input
        id={id}
        ref={ref}
        disabled={disabled}
        className={buildClassName(styles.input, className)}
        {...inputProps}
      />
    );
  },
);

Input.displayName = 'Input';
