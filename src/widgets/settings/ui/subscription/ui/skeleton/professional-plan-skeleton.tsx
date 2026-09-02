import { Box, Skeleton } from '@/shared/ui';

import styles from '../subscription.module.scss';

export const ProfessionalPlanSkeleton = () => {
  return (
    <Box className={styles.professionalPlan}>
      <Box className={styles.planContainer}>
        <Box className={styles.planHeader}>
          <Skeleton width={195} height={30} />
          <Skeleton width={270} height={24} />
        </Box>

        <Box className={styles.planContent}>
          <Box className={styles.planPrice}>
            <Skeleton width={60} height={21} />
            <Skeleton width={70} height={21} />
          </Box>

          <Skeleton width={180} height={16} />
        </Box>
      </Box>
    </Box>
  );
};
