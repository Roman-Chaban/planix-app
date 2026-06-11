import type { FC } from 'react';

import { useMediaQuery } from '@/shared/lib/hooks';
import { Box, Button } from '@/shared/ui';

import {
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button/model/constants';
import { BREAKPOINTS } from '@/shared/ui/theme/model/breakpoints';

const { SUBMIT } = BUTTON_TYPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { MOBILE_LARGE } = BREAKPOINTS;
const { SMALL, MEDIUM } = BUTTON_SIZES;
const { ROUNDED } = BUTTON_SHAPES;

type AuthButtonProps = {
  label: string;
  className?: string;
};

export const AuthButton: FC<AuthButtonProps> = ({ label, className }) => {
  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const buttonSizes = isMobileLargeScreen ? SMALL : MEDIUM;
  return (
    <Box className={className}>
      <Button type={SUBMIT} variant={DEFAULT} size={buttonSizes} shape={ROUNDED} fullWidth>
        {label}
      </Button>
    </Box>
  );
};
