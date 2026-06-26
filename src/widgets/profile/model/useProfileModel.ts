'use client';

import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

import { ROUTES } from '@/app/routes';
import { useLocalizedRouter } from '@/shared/lib/hooks';

import { resolveProfileTab } from '../lib/resolve-profile-tab';
import { PROFILE_TABS } from '../lib/tabs-content';

const { SETTINGS } = ROUTES;

export const useProfileModel = () => {
  const searchParams = useSearchParams();
  const localizedRouter = useLocalizedRouter();

  const activeId = resolveProfileTab(searchParams.get('tab'));
  const ActiveComponent = PROFILE_TABS[activeId] ?? PROFILE_TABS.personal;

  const handleTabChange = useCallback(
    (id: string) => {
      localizedRouter.push(`${SETTINGS}?tab=${id}`);
    },
    [localizedRouter],
  );

  return {
    activeId,
    ActiveComponent,
    handleTabChange,
  };
};
