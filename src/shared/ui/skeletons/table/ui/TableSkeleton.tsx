import type { TableSkeletonProps } from '../model/table.types';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/shared/ui';
import { Skeleton } from '@/shared/ui/skeleton/ui/Skeleton';

import {
  DEFAULT_CELL_HEIGHT,
  DEFAULT_CELL_RADIUS,
  DEFAULT_ROWS_COUNT,
} from '../lib/table.constants';

export const TableSkeleton = ({
  columns,
  rowsCount = DEFAULT_ROWS_COUNT,
  cellHeight = DEFAULT_CELL_HEIGHT,
  cellRadius = DEFAULT_CELL_RADIUS,
  variant,
  size,
}: TableSkeletonProps) => {
  const rows = Array.from({ length: rowsCount });

  return (
    <TableContainer>
      <Table variant={variant}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableHeadCell key={column.key}>{column.title}</TableHeadCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.key} size={size}>
                  <Skeleton height={cellHeight} radius={cellRadius} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
