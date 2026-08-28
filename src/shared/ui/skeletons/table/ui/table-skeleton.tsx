import type { TableSkeletonProps } from '../model/types';

import { Skeleton } from '../../../skeleton';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeadCell,
  TableRow,
} from '../../../table';

import {
  DEFAULT_CELL_HEIGHT,
  DEFAULT_CELL_RADIUS,
  TABLE_SKELETON_ROW_COUNT,
} from '../model/constants';

export const TableSkeleton = ({
  columns,
  rowCount,
  cellHeight = DEFAULT_CELL_HEIGHT,
  cellRadius = DEFAULT_CELL_RADIUS,
  variant,
  size,
}: TableSkeletonProps) => {
  const resolvedRowCount = rowCount ?? TABLE_SKELETON_ROW_COUNT[size];

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
          {Array.from({ length: resolvedRowCount }, (_, rowIndex) => (
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
