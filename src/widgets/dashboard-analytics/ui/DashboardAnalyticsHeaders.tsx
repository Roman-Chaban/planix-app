'use client';

import { useTranslation } from 'react-i18next';

import {
  dashboardHeaderTitles,
  DashboardAnalyticsHeader,
} from '@/widgets/dashboard-analytics';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';

import { Box } from '@/shared/ui';

import styles from './DashboardAnalytics.module.scss';

export const DashboardAnalyticsHeaders = () => {
  const { t } = useTranslation(NS.DASHBOARD_ANALYTICS);

  return (
    <>
      {dashboardHeaderTitles.map(({ id, title, variant, content }) => (
        <Box key={id} className={styles[variant]}>
          <DashboardAnalyticsHeader title={t(title)} />
          {content}
        </Box>
      ))}
    </>
  );
};
