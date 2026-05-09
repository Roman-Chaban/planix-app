import type { FC } from 'react';

import { useFormContext } from '@/shared/context/form-context';
import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import { Typography } from '@/shared/ui/index';

import styles from '../styles/styles.module.scss';

export const FormError: FC<{ className?: string }> = ({ className }) => {
  const { hasError, error } = useFormContext();

  if (!hasError || !error) return null;

  return <Typography className={buildClassName(styles.errorText, className)}>{error}</Typography>;
};
