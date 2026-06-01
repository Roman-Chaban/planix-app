import { type FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Typography } from '@/shared/ui';
import type { FormIconProps } from '@/shared/ui/form-field';

import styles from './FormField.module.scss';

export const FormIcon: FC<FormIconProps> = ({
  children,
  position = 'start',
  onClick,
  error,
  className,
}) => {
  const positionClass = position === 'start' ? styles.slotStart : styles.slotEnd;
  const isClickable = Boolean(onClick);

  return (
    <Typography
      as="span"
      className={buildClassName(
        positionClass,
        { [styles.clickable]: isClickable },
        { [styles.errorIcon]: !!error },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Typography>
  );
};
