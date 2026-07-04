import type { ComponentType, Key, ReactNode, SVGProps } from 'react';

import type { WithChildren, WithClassName } from '@/shared/types/types';

type BaseTableComponentProps = WithChildren & WithClassName;
type BaseTableAppearanceProps = BaseTableComponentProps & TableStylesProps;
export type TableProps = BaseTableAppearanceProps;
export type TableHeadProps = BaseTableComponentProps;
export type TableRowProps = BaseTableComponentProps;
export type TableCellProps = BaseTableAppearanceProps;
export type TableHeadCellProps = BaseTableAppearanceProps;
export type TableBodyProps = BaseTableComponentProps;
export type TableContainerProps = BaseTableAppearanceProps;

export type TableStylesProps = {
  size?: TableSize;
  variant?: TableVariant;
  // hoverable?: boolean;
};

export type TableColumn<T> = {
  key: Extract<keyof T, string>;
  title: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  render?: (row: T) => ReactNode;
};

export type DataTableProps<T extends Record<string, ReactNode>> =
  TableStylesProps & {
    data: T[];
    columns: TableColumn<T>[];
    getRowKey: (row: T) => Key;
  };

/* Design System Types */

export type TableSize = 'sm' | 'md' | 'lg';
export type TableVariant = 'default' | 'bordered' | 'minimal' | 'card';
