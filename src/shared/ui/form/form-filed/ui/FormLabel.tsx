import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import type { FormLabelProps } from '@/shared/ui/form/form-filed';

import styles from './FormField.module.scss';

export const FormLabel: FC<FormLabelProps> = ({
  children,
  className,
  error,
  ...labelProps
}) => {
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
