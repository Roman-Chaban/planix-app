import type { ReactNode } from 'react';

type AvatarSize = 'sm' | 'md' | 'lg';
type AvatarVariant = 'circle' | 'square';

export type AvatarProps = {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
  fallback?: ReactNode;
  icon?: ReactNode;
  className?: string;
};
