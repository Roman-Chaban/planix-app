import type { BuildButtonClassNameParams, ButtonProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { BUTTON_DEFAULTS } from '../model/defaults';

import styles from '../ui/button.module.scss';

import { BUTTON_PRESETS } from './presets';

export const resolveButtonProps = (props: ButtonProps): ButtonProps => {
  const { preset, ...explicitProps } = props;

  const presetProps = preset ? BUTTON_PRESETS[preset] : {};
  const definedExplicitProps = Object.fromEntries(
    Object.entries(explicitProps).filter(([, value]) => value !== undefined),
  );

  return {
    ...BUTTON_DEFAULTS,
    ...presetProps,
    ...definedExplicitProps,
  };
};

export const splitButtonProps = (props: ButtonProps) => {
  const {
    variant,
    size,
    shape,
    fullWidth,
    minWidth,

    startIcon,
    endIcon,
    startIconClassName,
    endIconClassName,

    isLoading,

    children,

    ...buttonProps
  } = props;

  return {
    uiProps: {
      variant,
      size,
      shape,
      fullWidth,
      minWidth,
      startIcon,
      endIcon,
      startIconClassName,
      endIconClassName,
      isLoading,
      children,
    },

    buttonProps,
  };
};

export const buildButtonClassName = ({
  variant,
  size,
  shape,
  fullWidth,
  minWidth,
  className,
}: BuildButtonClassNameParams) =>
  buildClassName(
    styles.button,
    styles[variant],
    styles[size],
    styles[shape],
    minWidth && styles[`minWidth_${minWidth}`],
    fullWidth && styles.fullWidth,
    className,
  );
