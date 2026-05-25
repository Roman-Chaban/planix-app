import { type FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Typography } from '@/shared/ui';
import type { FormIconProps } from '@/shared/ui/form-field/model/types';

import styles from './FormField.module.scss';

export const FormIcon: FC<FormIconProps> = ({
  children,
  position = 'start',
  onClick,
  className,
}) => {
  const positionClass = position === 'start' ? styles.slotStart : styles.slotEnd;
  const isClickable = Boolean(onClick);

  return (
    <Typography
      as="span"
      className={buildClassName(positionClass, { [styles.clickable]: isClickable }, className)}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};
