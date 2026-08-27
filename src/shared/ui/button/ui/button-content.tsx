import type { ButtonContentProps } from '../model/types';

import { ButtonIcon } from './button-icon';

export const ButtonContent = ({
  startIcon,
  endIcon,
  startIconClassName,
  endIconClassName,
  children,
}: ButtonContentProps) => {
  return (
    <>
      {startIcon && <ButtonIcon className={startIconClassName}>{startIcon}</ButtonIcon>}

      {children}

      {endIcon && <ButtonIcon className={endIconClassName}>{endIcon}</ButtonIcon>}
    </>
  );
};
