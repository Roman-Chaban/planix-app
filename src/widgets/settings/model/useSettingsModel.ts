'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { ROUTES } from '@/shared/config/routes';
import { useAuth, useLocalizedRouter } from '@/shared/lib/hooks';

import { type ProfileTabId, SETTINGS_MENU } from '../ui/menu';

const { SETTINGS } = ROUTES;

export const useSettingsModel = () => {
  const { isAuthenticated, isLoading } = useAuth();

  const searchParams = useSearchParams();
  const localizedRouter = useLocalizedRouter();

  const requestedTabId = searchParams.get('tab');

  const profileTabs = useMemo(() => SETTINGS_MENU.filter((item) => item.type === 'tab'), []);

  const availableTabs = useMemo(
    () => profileTabs.filter((tab) => isAuthenticated || !tab.requiresAuth),
    [profileTabs, isAuthenticated],
  );

  const activeTab = useMemo(() => {
    return availableTabs.find((tab) => tab.id === requestedTabId) ?? availableTabs[0];
  }, [availableTabs, requestedTabId]);

  useEffect(() => {
    if (isLoading) return;

    if (requestedTabId && requestedTabId !== activeTab.id) {
      localizedRouter.replace(`${SETTINGS}?tab=${activeTab.id}`);
    }
  }, [requestedTabId, activeTab.id, localizedRouter, isLoading]);

  const handleTabChange = useCallback(
    (id: ProfileTabId) => {
      localizedRouter.push(`${SETTINGS}?tab=${id}`);
    },
    [localizedRouter],
  );

  return {
    activeId: activeTab.id,
    ActiveComponent: activeTab.component,
    handleTabChange,
    isAuthenticated,
  };
};
