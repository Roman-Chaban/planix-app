'use client';

import { useTranslation } from 'react-i18next';

import { dashboardHeaderTitles } from '@/widgets/dashboard/lib/dashboardHeaderTitles/dashboardHeaderTitles';

import { DashboardAnalyticsHeader } from '@/widgets/dashboard/ui/DashboardAnalytics/ui/DashboardAnalyticsHeader';
import { Box } from '@/shared/ui';

import styles from '../styles/styles.module.scss';

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
