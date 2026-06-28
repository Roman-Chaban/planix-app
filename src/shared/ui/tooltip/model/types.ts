import type { WithChildren } from '@/shared/types/types';
import type { TOOLTIP_POSITION } from '@/shared/ui/tooltip';

export type TooltipProps = WithChildren & {
  message: string;
  position?: TooltipPosition;
};

export type TooltipPosition =
  (typeof TOOLTIP_POSITION)[keyof typeof TOOLTIP_POSITION];
