'use client';

import { Header } from '@/widgets/header';
import { PageWrapper } from '@/shared/ui';

import { useProfileModel } from '../../../../settings/model/useProfileModel';
import { ProfileMenu } from '../../menu';

import styles from './ProfileLayout.module.scss';

export const ProfileLayout = () => {
  const { activeId, ActiveComponent, handleTabChange } = useProfileModel();

  return (
    <PageWrapper
      header={<Header title="profile" />}
      sectionClassName={styles.profile}
    >
      <ProfileMenu activeId={activeId} setActiveId={handleTabChange} />

      <ActiveComponent />
    </PageWrapper>
  );
};
