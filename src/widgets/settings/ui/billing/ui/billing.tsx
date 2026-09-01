'use client';

import type { BillingProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { useBillingHistory } from '@/entities/billing';
import { NAMESPACE as NS } from '@/shared/i18n';
import { AXIS } from '@/shared/lib/hooks';
import { Box, DataTable, SettingsHeader } from '@/shared/ui';

import { getBillingHistoryColumns } from '../lib/get-billing-history-columns';

import styles from './billing.module.scss';

const { X } = AXIS;

export const Billing = ({ skeleton: Skeleton }: BillingProps) => {
  const { t } = useTranslation(NS.SETTINGS);

  const { data: billing, isLoading } = useBillingHistory();

  const columns = getBillingHistoryColumns(t);

  console.log(billing);

  if (!isLoading && !billing) {
    return null;
  }

  return (
    <Box className={styles.billing}>
      <SettingsHeader title={t('subscriptionAndBilling.billingTable.title')} />

      {isLoading ? (
        Skeleton
      ) : (
        <DataTable
          data={billing ?? []}
          columns={columns}
          getRowKey={(key) => key.id}
          size="sm"
          variant="default"
          dragAxis={X}
        />
      )}
    </Box>
  );
};
