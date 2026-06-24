import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react';

export type TypographyTag = ElementType;

type OwnProps = {
  as?: TypographyTag;
  children?: ReactNode;
  className?: string;
  testId?: string;
};

export type TypographyProps<T extends TypographyTag = 'span'> = OwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof OwnProps>;
