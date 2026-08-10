import type { TableItem } from '../model/types';
import type { TranslateFn } from '@types';

import { ActionsBar, MetricBadge, StatusBadge } from '@/shared/ui';
import type { ActionItem } from '@/shared/ui/actions-bar/model/types';
import { CalendarIcon } from '@/shared/ui/icons';
import { METRIC_STATUSES } from '@/shared/ui/metric-badge';
import type { TableColumn } from '@/shared/ui/table/model/types';

const { SUCCESS, WARNING } = METRIC_STATUSES;

export const getProjectsTableColumns = (
  t: TranslateFn,
  actionsFactory: (slug: string, id: string | number) => ActionItem[],
): TableColumn<TableItem>[] => {
  
  const buildActionCell = (row: TableItem) => (
    <ActionsBar actions={actionsFactory(row.slug, row.id)} />
  );

  const buildProgressCell = (row: TableItem) => (
    <MetricBadge variant={WARNING}>{row.progress}</MetricBadge>
  );

  const buildPriceCell = (row: TableItem) => (
    <MetricBadge variant={SUCCESS}>{row.price}</MetricBadge>
  );

  return [
    { key: 'client_name', title: t('tableHeader.clientName'), width: 'max-content' },
    { key: 'project_name', title: t('tableHeader.projectName'), width: 'max-content' },
    {
      key: 'due_date',
      title: t('tableHeader.dueDate'),
      width: 'max-content',
      icon: CalendarIcon,
    },
    { key: 'platform', title: t('tableHeader.platform'), width: 'max-content' },
    {
      key: 'progress',
      title: t('tableHeader.progress'),
      render: buildProgressCell,
      width: 'max-content',
    },
    {
      key: 'price',
      title: t('tableHeader.price'),
      render: buildPriceCell,
      width: 'max-content',
    },
    {
      key: 'status',
      title: t('tableHeader.status'),
      render: (row) => <StatusBadge status={row.status} />,
      width: 'max-content',
    },
    {
      key: 'actions',
      title: t('tableHeader.action'),
      render: buildActionCell,
      width: 'max-content',
    },
  ];
};
