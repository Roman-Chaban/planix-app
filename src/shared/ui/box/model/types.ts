import type { ElementType, ComponentPropsWithoutRef } from 'react';

type BoxOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
};

export type BoxProps<T extends ElementType = 'div'> = BoxOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BoxOwnProps<T>>;
