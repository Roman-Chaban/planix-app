import type { TableSizes, TableVariants } from './constants';
import type { SVGComponent, WithChildren, WithClassName, WithRef } from '@types';

import type { Key, ReactNode } from 'react';

import type { Axis } from '@/shared/lib/hooks/model/constants';

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
  size?: TableSizes;
  variant?: TableVariants;
  // hoverable?: boolean;
};

export type TableColumn<T> = {
  key: string;
  title: string;
  icon?: SVGComponent;
  width?: string | number;
  render?: (row: T) => ReactNode;
};

export type DataTableProps<T extends Record<string, unknown>> = TableStylesProps & {
  data: T[];
  columns: TableColumn<T>[];
  dragAxis?: Axis;
  getRowKey: (row: T) => Key;
};
