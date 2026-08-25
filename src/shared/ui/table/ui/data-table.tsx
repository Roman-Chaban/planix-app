import type { DataTableProps } from '../model/types';

import { type ReactNode } from 'react';

import { useDragScroll } from '@/shared/lib/hooks';

import { Table } from './table';
import { TableBody } from './table-body';
import { TableCell } from './table-cell';
import { TableContainer } from './table-container';
import { TableHead } from './table-head';
import { TableHeadCell } from './table-head-cell';
import { TableRow } from './table-row';

export const DataTable = <T extends Record<string, unknown>>({
  data,
  columns,
  getRowKey,
  size = 'md',
  variant = 'default',
  dragAxis,
}: DataTableProps<T>) => {
  const drafRef = useDragScroll<HTMLDivElement>({
    axis: dragAxis,
  });

  return (
    <TableContainer ref={drafRef} variant={variant}>
      <Table>
        <colgroup>
          {columns.map((column) => (
            <col key={column.key} style={column.width ? { width: column.width } : undefined} />
          ))}
        </colgroup>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableHeadCell size={size} key={column.key}>
                {column.title}
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={getRowKey(row)}>
              {columns.map((column) => {
                const renderedValue = column.render
                  ? column.render(row)
                  : (row[column.key] as ReactNode);

                const Icon = column.icon;

                return (
                  <TableCell key={column.key} size={size}>
                    {Icon && <Icon />}
                    {renderedValue}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
