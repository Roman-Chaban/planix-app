export const AVATAR_VARIANTS = {
  CIRCLE: 'circle',
  SQUARE: 'square',
} as const;

export type AvatarVariants = (typeof AVATAR_VARIANTS)[keyof typeof AVATAR_VARIANTS];

export const AVATAR_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type AvatarSizes = (typeof AVATAR_SIZES)[keyof typeof AVATAR_SIZES];

export const AVATAR_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i;

export const DEFAULT_AVATAR_FALLBACK = 'Fallback';
export const DEFAULT_AVATAR_ALT = 'Fallback Alternative text';
