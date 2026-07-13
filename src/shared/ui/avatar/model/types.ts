import type { ReactNode } from 'react';

import type { WithClassName } from '@types';

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
  src?: string | null;
  icon?: ReactNode;
  fallback?: ReactNode;
};
