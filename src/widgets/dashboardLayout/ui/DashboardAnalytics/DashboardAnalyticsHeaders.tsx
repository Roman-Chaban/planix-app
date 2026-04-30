import { useTranslation } from 'react-i18next';

import { dashboardHeaderTitles } from '@/widgets/dashboardLayout/lib/dashboardHeaderTitles';

import { DashboardAnalyticsHeader } from '@/widgets/dashboardLayout/ui/DashboardAnalytics/DashboardAnalyticsHeader';
import { Box } from '@/shared/ui';

import styles from '../styles.module.scss';

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
