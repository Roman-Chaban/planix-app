import { Header } from '@/widgets/header';
import { ProfileDetails } from '@/widgets/profile';
import { PageWrapper } from '@/shared/ui';

import styles from './ProfileLayout.module.scss';

export const ProfileLayout = () => {
  return (
    <PageWrapper
      header={<Header title="profile" />}
      sectionClassName={styles.profile}
    >
      <ProfileDetails />
    </PageWrapper>
  );
};
