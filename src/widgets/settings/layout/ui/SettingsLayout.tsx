'use client';

import { Header } from '@/widgets/header';
import { PageWrapper } from '@/shared/ui';

import { ProfileMenu } from '../../menu';
import { useProfileModel } from '../model/useProfileModel';

import styles from './SettingsLayout.module.scss';

export const SettingsLayout = () => {
  const { activeId, ActiveComponent, handleTabChange } = useProfileModel();

  return (
    <PageWrapper header={<Header title="profile" />} sectionClassName={styles.profile}>
      <ProfileMenu activeId={activeId} setActiveId={handleTabChange} />

      <ActiveComponent />
    </PageWrapper>
  );
};
