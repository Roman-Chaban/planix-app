import type { JSX, Key, ReactNode } from 'react';

export type ListProps<T> = {
  renderList: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getItemKey: (item: T) => Key;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  itemClassName?: string;
};
