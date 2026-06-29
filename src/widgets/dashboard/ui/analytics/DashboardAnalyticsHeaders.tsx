'use client';

import { useTranslation } from 'react-i18next';

import { DashboardAnalyticsHeader, getHeaderTitles } from '@/widgets/dashboard';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';

export const DashboardAnalyticsHeaders = () => {
  const { t } = useTranslation(NS.DASHBOARD);

  const titles = getHeaderTitles(t);

  return (
    <>
      {titles.map((title) => (
        <DashboardAnalyticsHeader {...title} key={title.id} />
      ))}
    </>
  );
};
