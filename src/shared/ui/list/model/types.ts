import type { JSX, Key, ReactNode } from 'react';

import type { WithClassName } from '@/shared/types/types';

export type ListProps<T> = WithClassName & {
  renderList: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getItemKey: (item: T) => Key;
  tag?: keyof JSX.IntrinsicElements;
  itemClassName?: string;
};
