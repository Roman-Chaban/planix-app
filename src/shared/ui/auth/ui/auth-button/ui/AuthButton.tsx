import { useMediaQuery } from '@/shared/lib/hooks';
import { Button, Loader } from '@/shared/ui';

import type { AuthButtonProps } from '@/shared/ui/auth/ui/auth-button';
import { BUTTON_SIZES } from '@/shared/ui/button/lib/button.constants';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

const { MOBILE_LARGE } = BREAKPOINTS;
const { SMALL, MEDIUM } = BUTTON_SIZES;

export const AuthButton = ({ label, disabled, isLoading, preset, className }: AuthButtonProps) => {
  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const buttonSizes = isMobileLargeScreen ? SMALL : MEDIUM;

  const isButtonDisabled = disabled || isLoading;

  return (
    <Button className={className} preset={preset} size={buttonSizes} disabled={isButtonDisabled}>
      {isLoading ? <Loader /> : label}
    </Button>
  );
};
