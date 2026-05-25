import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Box, Typography } from '@/shared/ui';
import type { ButtonProps } from '@/shared/ui/button';

import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
  variant = '',
  size = 'compact',
  fullWidth = false,
  className,
  startIcon,
  endIcon,
  startIconClassName,
  endIconClassName,
  disabled,
  children,
  type,
  onClick,
}) => {
  const buttonClasses = buildClassName(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  );

  return (
    <button className={buttonClasses} disabled={disabled} type={type} onClick={onClick}>
      {startIcon && (
        <Typography as="span" className={buildClassName(styles.icon, startIconClassName)}>
          {startIcon}
        </Typography>
      )}

      <Box className={styles.iconWrapper}>
        {children}

        {endIcon && (
          <Typography as="span" className={buildClassName(styles.icon, endIconClassName)}>
            {endIcon}
          </Typography>
        )}
      </Box>
    </button>
  );
};
