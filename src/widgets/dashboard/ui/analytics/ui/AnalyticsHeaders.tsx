'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';

import { getHeaderTitles } from '../lib/get-header-titles';

import { AnalyticsHeader } from './AnalyticsHeader';

export const AnalyticsHeaders = () => {
  const { t } = useTranslation(NS.DASHBOARD);

  const titles = getHeaderTitles(t);

  return (
    <>
      {titles.map((title) => (
        <AnalyticsHeader {...title} key={title.id} />
      ))}
    </>
  );
};
