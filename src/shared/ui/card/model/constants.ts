export const CARD_TREND_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  NEUTRAL: 'neutral',
} as const;

export type CardTrendType = (typeof CARD_TREND_TYPE)[keyof typeof CARD_TREND_TYPE];
