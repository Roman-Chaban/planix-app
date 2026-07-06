import { getBillingHistoryColumns } from '@/widgets/settings/subscription-billing';
import type { TranslateFn } from '@/shared/types/types';
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

import type { TableSize } from '@/shared/ui/table/model/types';

type BillingSkeletonProps = {
  t: TranslateFn;
  size: TableSize;
};

const ROWS_COUNT = 5;

export const BillingTableSkeleton = ({ t, size }: BillingSkeletonProps) => {
  const columns = getBillingHistoryColumns(t);

  const rows = Array.from({ length: ROWS_COUNT });

  return (
    <TableContainer>
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
          {rows.map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell key={column.key} size={size}>
                  <Skeleton height={25} radius={30} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
