import type { ButtonProps } from './model/types';

import type { FC } from 'react';

import { classNames } from '@/shared/lib/helpers/classNames/classNames';

import { Box, Typography } from '@/shared/ui/index';

import styles from './styles.module.scss';

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  outline = 'primary',
  size = 'none',
  className,
  startIcon,
  endIcon,
  startIconClassName,
  endIconClassName,
  disabled,
  children,
  type,
}) => {
  const classes = classNames(
    styles.button,
    styles[variant],
    styles[size],
    styles[outline],
    className,
  );

  return (
    <button className={classes} disabled={disabled} type={type}>
      {startIcon && (
        <Typography as="span" className={classNames(styles.icon, startIconClassName)}>
          {startIcon}
        </Typography>
      )}

      <Box className={styles.iconWrapper}>
        {children}

        {endIcon && (
          <Typography as="span" className={classNames(styles.icon, endIconClassName)}>
            {endIcon}
          </Typography>
        )}
      </Box>
    </button>
  );
};
