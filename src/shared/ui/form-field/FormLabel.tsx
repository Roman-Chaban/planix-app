import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import styles from '@/shared/ui/form-field/FormField.module.scss';
import type { FormLabelProps } from '@/shared/ui/form-field/model/types';

export const FormLabel: FC<FormLabelProps> = ({ children, className, ...props }) => {
  return (
    <label className={buildClassName(styles.label, className)} {...props}>
      {children}
    </label>
  );
};
