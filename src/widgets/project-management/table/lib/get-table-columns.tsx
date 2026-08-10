import type { TableItem } from '../model/types';
import type { TranslateFn } from '@types';

import { ActionsBar, MetricBadge, StatusBadge } from '@/shared/ui';
import type { ActionItem } from '@/shared/ui/actions-bar/model/types';
import { CalendarIcon } from '@/shared/ui/icons';
import type { TableColumn } from '@/shared/ui/table/model/types';

export const getTableColumns = (
  t: TranslateFn,
  actionsFactory: (slug: string, id: string | number) => ActionItem[],
): TableColumn<TableItem>[] => {
  const buildActionCell = (row: TableItem) => (
    <ActionsBar actions={actionsFactory(row.slug, row.id)} />
  );

  const buildProgressCell = (row: TableItem) => (
    <MetricBadge variant="warning">{row.progress}</MetricBadge>
  );

  const buildPriceCell = (row: TableItem) => (
    <MetricBadge variant="success">{row.price}</MetricBadge>
  );

  return [
    { key: 'client_name', title: t('tableHeader.clientName'), width: '9.563rem' },
    { key: 'project_name', title: t('tableHeader.projectName'), width: '12.5rem  ' },
    {
      key: 'due_date',
      title: t('tableHeader.dueDate'),
      width: '10.625rem',
      icon: CalendarIcon,
    },
    { key: 'platform', title: t('tableHeader.platform') },
    {
      key: 'progress',
      title: t('tableHeader.progress'),
      render: buildProgressCell,
    },
    {
      key: 'price',
      title: t('tableHeader.price'),
      render: buildPriceCell,
    },
    {
      key: 'status',
      title: t('tableHeader.status'),
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      key: 'actions',
      title: t('tableHeader.action'),
      render: buildActionCell,
    },
  ];
};
