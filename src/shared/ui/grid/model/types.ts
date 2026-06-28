import type { WithChildren, WithClassName } from '@/shared/types/types';

type SpanItems = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridProps = WithChildren & WithClassName;

export type GridItemProps = WithChildren &
  WithClassName & {
    span?: SpanItems;
  };
