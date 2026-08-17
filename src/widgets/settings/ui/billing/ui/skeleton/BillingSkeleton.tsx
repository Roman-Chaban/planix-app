import type { TranslateFn } from '@types';

import { TableSkeleton } from '@/shared/ui';
import { TABLE_SKELETON_ROWS } from '@/shared/ui/skeletons/table';
import type { TableSize } from '@/shared/ui/table/model/types';

import { getBillingHistoryColumns } from '../../lib/get-billing-history-columns';

const { SM } = TABLE_SKELETON_ROWS;

type BillingSkeletonProps = {
  t: TranslateFn;
  size: TableSize;
};

export const BillingTableSkeleton = ({ t, size }: BillingSkeletonProps) => {
  const columns = getBillingHistoryColumns(t);

  return <TableSkeleton columns={columns} rowsCount={SM} size={size} />;
};
