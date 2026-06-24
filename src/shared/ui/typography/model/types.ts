import type { ElementType, ComponentPropsWithoutRef, ReactNode, HTMLAttributes } from 'react';

export type TypographyTag = ElementType;

type OwnProps = {
  as?: TypographyTag;
  children?: ReactNode;
  className?: string;
  testId?: string;
} & HTMLAttributes<HTMLElement>;

export type TypographyProps<T extends TypographyTag = 'span'> = OwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof OwnProps>;
