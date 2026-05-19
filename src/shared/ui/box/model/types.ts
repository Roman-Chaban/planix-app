import type { ElementType, ComponentPropsWithoutRef } from 'react';

export type BoxProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;
