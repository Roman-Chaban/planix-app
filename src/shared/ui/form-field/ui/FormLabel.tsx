import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import type { FormLabelProps } from '@/shared/ui/form-field/model/types';

import styles from './FormField.module.scss';

export const FormLabel: FC<FormLabelProps> = ({ children, className, ...props }) => {
  return (
    <label className={buildClassName(styles.label, className)} {...props}>
      {children}
    </label>
  );
};
