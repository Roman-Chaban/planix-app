import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import type { FormLabelProps } from '@/shared/ui/form-field/model/types';

import styles from '@/shared/ui/form-field/styles/form-field.module.scss';

export const FormLabel: FC<FormLabelProps> = ({ children, className, ...props }) => {
  return (
    <label className={buildClassName(styles.label, className)} {...props}>
      {children}
    </label>
  );
};
