export const TOOLTIP_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export type TooltipPosition = (typeof TOOLTIP_POSITION)[keyof typeof TOOLTIP_POSITION];
