'use client';

import { useTranslation } from 'react-i18next';

import { DashboardAnalyticsHeader } from '@/widgets/dashboard-analytics';
import { dashboardHeaderTitles } from '@/widgets/dashboard-analytics/data/dashboard-header-titles';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';

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
