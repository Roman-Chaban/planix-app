import { buildClassName } from '@/shared/lib';

import { Box } from '@/shared/ui';
import type { ButtonProps } from '@/shared/ui/button';

import { getButtonProps } from '../lib/helpers';

import styles from './button.module.scss';

export const Button = (props: ButtonProps) => {
  const { allProps, htmlProps } = getButtonProps(props);

  const {
    variant = 'default',
    size = 'compact',
    shape = 'normal',
    fullWidth = false,
    minWidth,
    className,
    startIcon,
    endIcon,
    startIconClassName,
    endIconClassName,
    children,
    disabled,
    isLoading,
    type,
  } = allProps;

  const buttonClasses = buildClassName(
    styles.button,
    styles[variant],
    styles[size],
    styles[shape],
    minWidth && styles[`minWidth_${minWidth}`],
    fullWidth && styles.fullWidth,
    className,
  );

  return (
    <button {...htmlProps} className={buttonClasses} disabled={disabled || isLoading} type={type}>
      {startIcon && (
        <Box className={buildClassName(styles.icon, startIconClassName)}>{startIcon}</Box>
      )}

      {children}

      {endIcon && <Box className={buildClassName(styles.icon, endIconClassName)}>{endIcon}</Box>}
    </button>
  );
};
