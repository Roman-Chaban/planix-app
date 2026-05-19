import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import { Typography } from '@/shared/ui';
import styles from '@/shared/ui/form-field/FormField.module.scss';
import type { FormErrorProps } from '@/shared/ui/form-field/model/types';

export const FormError: FC<FormErrorProps> = ({ className, error }) => {
  if (!error) return null;

  return <Typography className={buildClassName(styles.errorText, className)}>{error}</Typography>;
};
