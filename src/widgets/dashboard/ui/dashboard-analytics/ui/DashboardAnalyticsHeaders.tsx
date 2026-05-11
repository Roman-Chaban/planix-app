'use client';

import { useTranslation } from 'react-i18next';

import { dashboardHeaderTitles } from '@/widgets/dashboard/lib/dashboard-header-titles/dashboard-header-titles';

import styles from '@/widgets/dashboard/ui/dashboard-analytics/styles/dashboard-analytics.module.scss';
import { DashboardAnalyticsHeader } from '@/widgets/dashboard/ui/dashboard-analytics/ui/DashboardAnalyticsHeader';
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
