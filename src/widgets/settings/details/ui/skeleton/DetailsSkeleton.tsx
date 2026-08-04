import { Box } from '@/shared/ui';

import { Skeleton } from '@/shared/ui/skeleton/ui/Skeleton';

import styles from '../Details.module.scss';
import { DetailsItem } from '../DetailsItem';

const ROWS_COUNT = 5;

export const DetailsSkeleton = () => {
  const rows = Array.from({ length: ROWS_COUNT });

  return (
    <Box className={styles.details}>
      <Box className={styles.profileDetails}>
        <Box className={styles.profile}>
          <Box className={styles.profileInfo}>
            <Box className={styles.profileBox}>
              <Box className={styles.avatar}>
                <Skeleton width={74} height={74} radius="100%" />
              </Box>

              <Box className={styles.info}>
                <Skeleton width={180} height={30} radius="20" />

                <Skeleton width={240} height={27} radius="20" />
              </Box>
            </Box>

            <Skeleton width={90} height={36} radius="20" />
          </Box>
        </Box>
        <Box className={styles.information}>
          {rows.map((_, rowIndex) => (
            <DetailsItem key={rowIndex}>
              <Skeleton height={30} radius="20" />
            </DetailsItem>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
