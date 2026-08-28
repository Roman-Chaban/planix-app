import type { FormErrorProps } from '../model/types';

import { buildClassName } from '@/shared/lib';
import { Typography } from '@/shared/ui';

import styles from './form-field.module.scss';

export const FormError = ({ className, error }: FormErrorProps) => {
  if (!error) return null;

  return <Typography className={buildClassName(styles.errorText, className)}>{error}</Typography>;
};
