import type { FC } from 'react';

import { buildClassName } from '@/shared/lib';

import { Box, Typography } from '@/shared/ui';
import type { ButtonProps } from '@/shared/ui/button';

import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
  variant = 'default',
  size = 'compact',
  shape = 'default',
  fullWidth = false,
  maxWidth = 'md',
  className,
  startIcon,
  endIcon,
  startIconClassName,
  endIconClassName,
  disabled,
  children,
  type,
  isLoading,
  onClick,
  ...buttonProps
}) => {
  const buttonClasses = buildClassName(
    styles.button,
    styles[variant],
    styles[size],
    styles[shape],
    maxWidth && styles[`maxWidth_${maxWidth}`],
    fullWidth && styles.fullWidth,
    className,
  );

  return (
    <button
      {...buttonProps}
      className={buttonClasses}
      disabled={disabled || isLoading}
      type={type}
      onClick={onClick}
    >
      {startIcon && (
        <Typography
          as="span"
          className={buildClassName(styles.icon, startIconClassName)}
        >
          {startIcon}
        </Typography>
      )}

      <Box className={styles.content}>
        {children}

        {endIcon && (
          <Typography
            as="span"
            className={buildClassName(styles.icon, endIconClassName)}
          >
            {endIcon}
          </Typography>
        )}
      </Box>
    </button>
  );
};
