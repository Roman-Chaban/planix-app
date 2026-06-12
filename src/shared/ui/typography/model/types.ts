import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

export type TypographyTag = ElementType;

type TypographyOwnProps<T extends TypographyTag> = {
  as?: T;
  children?: ReactNode;
  className?: string;
  testId?: string;
};

export type TypographyProps<T extends TypographyTag = 'span'> =
  TypographyOwnProps<T> & ComponentPropsWithoutRef<T>;
