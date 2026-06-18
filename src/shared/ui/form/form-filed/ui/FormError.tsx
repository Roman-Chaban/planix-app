import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';
import { Typography } from '@/shared/ui';

import type { FormErrorProps } from '@/shared/ui/form/form-filed';

import styles from './FormField.module.scss';

export const FormError: FC<FormErrorProps> = ({ className, error }) => {
  if (!error) return null;

  return (
    <Typography className={buildClassName(styles.errorText, className)}>
      {error}
    </Typography>
  );
};
