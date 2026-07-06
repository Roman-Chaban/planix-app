import type { Billing } from '@/entities/billing';
import type { TranslateFn } from '@/shared/types/types';
import { StatusBadge } from '@/shared/ui';
import { CalendarIcon } from '@/shared/ui/icons';
import type { TableColumn } from '@/shared/ui/table/model/types';

export const getBillingHistoryColumns = (t: TranslateFn): TableColumn<Billing>[] => [
  {
    key: 'formattedDate',
    title: t('subscriptionAndBilling.billingTable.columns.date'),
    icon: CalendarIcon,
  },
  {
    key: 'duration',
    title: t('subscriptionAndBilling.billingTable.columns.duration'),
  },
  {
    key: 'formattedAmount',
    title: t('subscriptionAndBilling.billingTable.columns.amount'),
  },
  {
    key: 'paymentMethod',
    title: t('subscriptionAndBilling.billingTable.columns.paymentMethod'),
  },
  {
    key: 'status',
    title: t('subscriptionAndBilling.billingTable.columns.status'),
    render: (row) => <StatusBadge status={row.status} />,
  },
];
