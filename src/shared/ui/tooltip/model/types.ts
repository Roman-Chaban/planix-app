import type { TooltipPosition } from './constants';
import type { WithChildren } from '@types';

export type TooltipProps = {
  message: string;
  position?: TooltipPosition;
} & WithChildren;
