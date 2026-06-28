import type { ReactNode } from 'react';

import type { WithClassName } from '@/shared/types/types';

type AvatarSize = 'sm' | 'md' | 'lg';
type AvatarVariant = 'circle' | 'square';

type BaseAvatarProps = WithClassName & {
  width?: number;
  height?: number;
  alt?: string;
  size?: AvatarSize;
  variant?: AvatarVariant;
};

export type AvatarProps = BaseAvatarProps & {
  src?: string;
  icon?: ReactNode;
  fallback?: ReactNode;
};
