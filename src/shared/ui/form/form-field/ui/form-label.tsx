import { buildClassName } from '@/shared/lib';

import type { FormLabelProps } from '@/shared/ui/form/form-field';

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
