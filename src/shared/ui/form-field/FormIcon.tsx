import { type FC } from 'react';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import styles from '@/shared/ui/form-field/FormField.module.scss';
import type { FormIconProps } from '@/shared/ui/form-field/FormField.types';
import { Typography } from '@/shared/ui/index';

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
