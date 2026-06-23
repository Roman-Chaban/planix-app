import { ProfileMenu } from '@/widgets/profile';
import { Box } from '@/shared/ui';

import styles from './ProfileDetails.module.scss';

export const ProfileDetails = () => {
  return (
    <Box className={styles.details}>
      <ProfileMenu />
    </Box>
  );
};
