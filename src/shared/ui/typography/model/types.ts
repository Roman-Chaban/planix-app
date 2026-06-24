import type { ElementType, ComponentPropsWithoutRef } from 'react';

type OwnProps = {
  as?: ElementType;
  testId?: string;
};

export type TypographyProps<T extends ElementType = 'span'> = OwnProps &
  ComponentPropsWithoutRef<T>;
