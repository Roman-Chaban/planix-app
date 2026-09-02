import type { AuthButtonProps } from '../model/types';

import { BREAKPOINTS } from '@/shared/lib';

import { useMediaQuery } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui';

import { BUTTON_SIZES } from '@/shared/ui/button/model/constants';

const { MOBILE_LARGE } = BREAKPOINTS;
const { SMALL, MEDIUM } = BUTTON_SIZES;

export const AuthButton = ({ label, disabled, isLoading, preset, className }: AuthButtonProps) => {
  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const buttonSizes = isMobileLargeScreen ? SMALL : MEDIUM;

  const isButtonDisabled = disabled || isLoading;

  return (
    <Button className={className} preset={preset} size={buttonSizes} disabled={isButtonDisabled}>
      {label}
    </Button>
  );
};
