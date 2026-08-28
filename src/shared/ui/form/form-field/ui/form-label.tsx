import type { FormLabelProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import styles from './form-field.module.scss';

export const FormLabel = ({ children, className, error, ...labelProps }: FormLabelProps) => {
  return (
    <label
      className={buildClassName(styles.label, className, {
        [styles.errorLabel]: !!error,
      })}
      {...labelProps}
    >
      {children}
    </label>
  );
};
