import type { FC } from 'react';

import { useMediaQuery } from '@/shared/lib/hooks';
import { Button, Loader } from '@/shared/ui';

import type { AuthButtonProps } from '@/shared/ui/auth/ui/auth-button';
import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/lib/constants';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { MOBILE_LARGE } = BREAKPOINTS;
const { SMALL, MEDIUM } = BUTTON_SIZES;
const { ROUNDED } = BUTTON_SHAPES;

export const AuthButton: FC<AuthButtonProps> = ({
  label,
  disabled,
  maxWidth,
  isLoading,
}) => {
  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);
  const buttonSizes = isMobileLargeScreen ? SMALL : MEDIUM;
  const isButtonDisabled = disabled || isLoading;

  return (
    <Button
      type={SUBMIT}
      variant={DEFAULT}
      size={buttonSizes}
      shape={ROUNDED}
      disabled={isButtonDisabled}
      maxWidth={maxWidth}
    >
      {isLoading ? <Loader /> : label}
    </Button>
  );
};
