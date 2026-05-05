import type { ReactNode } from 'react';

type AvatarSize = 'sm' | 'md' | 'lg';
type AvatarVariant = 'circle' | 'square';

type BaseAvatarProps = {
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
