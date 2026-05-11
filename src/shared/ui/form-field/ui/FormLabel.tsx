import { type FC } from 'react';

import { useFormContext } from '@/shared/context/form-context';
import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';

import type { FormLabelProps } from '@/shared/ui/form-field/model/types';

import styles from '@/shared/ui/form-field/styles/form-field.module.scss';

export const FormLabel: FC<FormLabelProps> = ({ children, className }) => {
  const { id } = useFormContext();

  return (
    <label htmlFor={id} className={buildClassName(styles.label, className)}>
      {children}
    </label>
  );
};
