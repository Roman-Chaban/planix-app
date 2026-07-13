import type { WithChildren, WithClassName } from '@types';

import type { ElementType, ComponentPropsWithoutRef } from 'react';

type BoxOwnProps<T extends ElementType> = WithChildren &
  WithClassName & {
    as?: T;
  };

export type BoxProps<T extends ElementType = 'div'> = BoxOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BoxOwnProps<T>>;
