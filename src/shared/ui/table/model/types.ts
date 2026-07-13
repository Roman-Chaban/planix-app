import type { SVGComponent, WithChildren, WithClassName, WithRef } from '@types';

import type { Key, ReactNode } from 'react';

import type { Axis } from '@/shared/lib/hooks/model/types';

type BaseTableComponentProps = WithChildren & WithClassName;
type BaseTableAppearanceProps = BaseTableComponentProps & TableStylesProps;
export type TableContainerProps = WithRef<BaseTableAppearanceProps, HTMLDivElement>;
export type TableProps = BaseTableAppearanceProps;
export type TableHeadProps = BaseTableComponentProps;
export type TableRowProps = BaseTableComponentProps;
export type TableCellProps = BaseTableAppearanceProps;
export type TableHeadCellProps = BaseTableAppearanceProps;
export type TableBodyProps = BaseTableComponentProps;

export type TableStylesProps = {
  size?: TableSize;
  variant?: TableVariant;
  // hoverable?: boolean;
};

export type TableColumn<T> = {
  key: Extract<keyof T, string>;
  title: string;
  icon?: SVGComponent;
  render?: (row: T) => ReactNode;
};

export type DataTableProps<T extends Record<string, ReactNode>> = TableStylesProps & {
  data: T[];
  columns: TableColumn<T>[];
  getRowKey: (row: T) => Key;
  dragAxis?: Axis;
};

/* Design System Types */

export type TableSize = 'sm' | 'md' | 'lg';
export type TableVariant = 'default' | 'bordered' | 'minimal' | 'card';
