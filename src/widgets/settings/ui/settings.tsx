'use client';

import { Header } from '@/widgets/header';
import { LogoutModal } from '@/features/profile/logout';
import { PageWrapper } from '@/shared/ui';

import { useSettingsModel } from '../model/use-settings-model';

import { ProfileMenu } from './menu';

import styles from './settings.module.scss';

export const Settings = () => {
  const { activeId, ActiveComponent, handleTabChange, isAuthenticated } = useSettingsModel();

  return (
    <PageWrapper header={<Header title="setting" />} sectionClassName={styles.settings}>
      <ProfileMenu
        isAuthenticated={isAuthenticated}
        activeId={activeId}
        setActiveId={handleTabChange}
      />

      <ActiveComponent />

      <LogoutModal />
    </PageWrapper>
  );
};
