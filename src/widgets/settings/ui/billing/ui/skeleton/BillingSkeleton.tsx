import type { TranslateFn } from '@types';

import { TableSkeleton } from '@/shared/ui';
import { TABLE_SKELETON_ROW_COUNT } from '@/shared/ui/skeletons/table';
import type { TableSize } from '@/shared/ui/table/model/types';

import { getBillingHistoryColumns } from '../../lib/get-billing-history-columns';

const { sm } = TABLE_SKELETON_ROW_COUNT;

type BillingSkeletonProps = {
  t: TranslateFn;
  size: TableSize;
};

export const BillingTableSkeleton = ({ t, size }: BillingSkeletonProps) => {
  const columns = getBillingHistoryColumns(t);

  return <TableSkeleton columns={columns} rowCount={sm} size={size} />;
};
