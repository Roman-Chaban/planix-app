'use client';

import { useTranslation } from 'react-i18next';

import { dashboardHeaderTitles } from '@/widgets/dashboard-analytics/model/constants';
import styles from '@/widgets/dashboard-analytics/ui/DashboardAnalytics.module.scss';
import { DashboardAnalyticsHeader } from '@/widgets/dashboard-analytics/ui/DashboardAnalyticsHeader';
import { Box } from '@/shared/ui';

export const DashboardAnalyticsHeaders = () => {
  const { t } = useTranslation();

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
