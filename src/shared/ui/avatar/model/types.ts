import type { AvatarSizes, AvatarVariants } from './constants';
import type { WithClassName } from '@types';

import type { ReactNode } from 'react';

type BaseAvatarProps = {
  width?: number;
  height?: number;
  alt?: string;
  size?: AvatarSizes;
  variant?: AvatarVariants;
} & WithClassName;

export type AvatarProps = {
  src?: string | null;
  icon?: ReactNode;
  fallback?: ReactNode;
} & BaseAvatarProps;
