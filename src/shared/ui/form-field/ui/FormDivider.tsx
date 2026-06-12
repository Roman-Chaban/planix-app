import { type FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Typography } from '@/shared/ui';

import styles from './FormField.module.scss';

export const FormDivider: FC<{ className?: string }> = ({ className }) => {
  return (
    <Typography
      as="span"
      className={buildClassName(styles.divider, className)}
    />
  );
};
