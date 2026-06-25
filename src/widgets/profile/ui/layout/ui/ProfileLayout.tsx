'use client';

import { Header } from '@/widgets/header';
import { useProfileModel } from '@/widgets/profile';
import { ProfileMenu } from '@/widgets/profile/ui/menu';
import { PageWrapper } from '@/shared/ui';

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
