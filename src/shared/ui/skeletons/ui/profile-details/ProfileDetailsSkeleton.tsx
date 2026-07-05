import { ProfileInfoItem } from '@/widgets/settings';
import styles from '@/widgets/settings/profile-details/ui/ProfileDetails.module.scss';
import { Box } from '@/shared/ui';

import { Skeleton } from '@/shared/ui/skeleton/ui/Skeleton';

const ROWS_COUNT = 5;

export const ProfileDetailsSkeleton = () => {
  const rows = Array.from({ length: ROWS_COUNT });

  return (
    <Box className={styles.details}>
      <Box className={styles.profileDetails}>
        <Box className={styles.profile}>
          <Box className={styles.profileInfo}>
            <Box className={styles.profileBox}>
              <Box className={styles.avatar}>
                <Skeleton width="100%" height="100%" />
              </Box>

              <Box className={styles.info}>
                <Skeleton width={180} height={30} />

                <Skeleton width={240} height={27} />
              </Box>
            </Box>

            <Skeleton width={90} height={36} />
          </Box>
        </Box>
        <Box className={styles.information}>
          {rows.map((_, rowIndex) => (
            <ProfileInfoItem key={rowIndex}>
              <Skeleton height={30} />
            </ProfileInfoItem>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
