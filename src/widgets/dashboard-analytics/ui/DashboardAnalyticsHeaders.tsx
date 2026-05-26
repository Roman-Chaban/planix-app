'use client';

import { useTranslation } from 'react-i18next';

import { DashboardAnalyticsHeader } from '@/widgets/dashboard-analytics';
import { dashboardHeaderTitles } from '@/widgets/dashboard-analytics/data/dashboard-header-titles';

import { Box } from '@/shared/ui';

import styles from './DashboardAnalytics.module.scss';

export const DashboardAnalyticsHeaders = () => {
  const { t } = useTranslation('dashboardAnalytics');

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
