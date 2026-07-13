import type { ElementType, ComponentPropsWithoutRef } from 'react';

import type { WithChildren, WithClassName } from '@types';

type BoxOwnProps<T extends ElementType> = WithChildren &
  WithClassName & {
    as?: T;
  };

export type BoxProps<T extends ElementType = 'div'> = BoxOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof BoxOwnProps<T>>;
