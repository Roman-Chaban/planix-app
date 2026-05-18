import type { FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import { Typography } from '@/shared/ui';
import type { FormErrorProps } from '@/shared/ui/form-field/model/types';

import styles from '@/shared/ui/form-field/styles/form-field.module.scss';

export const FormError: FC<FormErrorProps> = ({ className, error }) => {
  if (!error) return null;

  return <Typography className={buildClassName(styles.errorText, className)}>{error}</Typography>;
};
