import { type ReactNode } from 'react';

import type { TOOLTIP_POSITION } from '@/shared/ui/tooltip';

export type TooltipProps = {
  message: string;
  position?: TooltipPosition;
  children: ReactNode;
};

export type TooltipPosition =
  (typeof TOOLTIP_POSITION)[keyof typeof TOOLTIP_POSITION];
