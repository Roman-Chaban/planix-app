import { type ReactNode } from 'react';

export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom';

export type TooltipProps = {
  message: string;
  position?: TooltipPosition;
  children: ReactNode;
};
