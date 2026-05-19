import type { ReactNode } from 'react';

type AvatarSize = 'sm' | 'md' | 'lg';
type AvatarVariant = 'circle' | 'square';

type BaseAvatarProps = {
  width?: number;
  height?: number;
  alt?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  className?: string;
};

export type AvatarProps = BaseAvatarProps & {
  src?: string;
  icon?: ReactNode;
  fallback?: ReactNode;
};
