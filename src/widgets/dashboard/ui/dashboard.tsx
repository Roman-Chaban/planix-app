import { Header } from '@/widgets/header';
import { PageWrapper } from '@/shared/ui';

import { Analytics } from './analytics';
import { Cards } from './cards';

import styles from './dashboard.module.scss';

export const Dashboard = () => {
  return (
    <PageWrapper header={<Header title={'dashboard'} />} sectionClassName={styles.dashboard}>
      <Cards />
      <Analytics />
    </PageWrapper>
  );
};
