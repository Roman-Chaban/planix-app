import type { ButtonProps } from '../model/types';

import { resolveButtonProps, splitButtonProps, buildButtonClassName } from '../lib/helpers';
import { BUTTON_SHAPES, BUTTON_SIZES, BUTTON_VARIANTS } from '../model/constants';

import { ButtonContent } from './button-content';

export const Button = (props: ButtonProps) => {
  const resolvedProps = resolveButtonProps(props);

  const { uiProps, htmlProps } = splitButtonProps(resolvedProps);

  const {
    variant = BUTTON_VARIANTS.DEFAULT,
    size = BUTTON_SIZES.COMPACT,
    shape = BUTTON_SHAPES.DEFAULT,
    fullWidth = false,
    minWidth,
    startIcon,
    endIcon,
    startIconClassName,
    endIconClassName,
    isLoading,
    children,
  } = uiProps;

  const isDisabled = htmlProps.disabled || isLoading;

  const className = buildButtonClassName({
    variant,
    size,
    shape,
    fullWidth,
    minWidth,
    className: htmlProps.className,
  });

  return (
    <button {...htmlProps} className={className} disabled={isDisabled}>
      <ButtonContent
        startIcon={startIcon}
        endIcon={endIcon}
        startIconClassName={startIconClassName}
        endIconClassName={endIconClassName}
      >
        {children}
      </ButtonContent>
    </button>
  );
};
