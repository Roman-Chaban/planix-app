import type { ReactNode } from 'react';

type SpanItems = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type WithChildren = {
  children: ReactNode;
  className?: string;
};

export type GridProps = WithChildren;

export type GridItemProps = {
  span?: SpanItems;
} & WithChildren;
