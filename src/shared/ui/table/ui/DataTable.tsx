import type { DataTableProps } from '../model/types';

import { type ReactNode } from 'react';

import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableContainer } from './TableContainer';
import { TableHead } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';

export const DataTable = <T extends Record<string, ReactNode>>({
  data,
  columns,
  getRowKey,
  size = 'md',
  variant = 'default',
}: DataTableProps<T>) => {
  return (
    <TableContainer variant={variant}>
      <Table>
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
                const renderedValue = column.render ? column.render(row) : row[column.key];

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
