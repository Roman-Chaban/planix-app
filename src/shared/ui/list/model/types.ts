import type { WithClassName } from '@types';

import type { JSX, Key, ReactNode } from 'react';

export type ListProps<T> = WithClassName & {
  renderList: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getItemKey: (item: T) => Key;
  tag?: keyof JSX.IntrinsicElements;
  itemClassName?: string;
};
