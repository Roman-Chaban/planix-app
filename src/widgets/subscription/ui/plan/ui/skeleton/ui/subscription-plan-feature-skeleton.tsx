'use client';

import { Box, Skeleton } from '@/shared/ui';

import styles from '../../subscription-plan.module.scss';

export const SubscriptionPlanFeatureSkeleton = () => {
  return (
    <Box className={styles.feature}>
      <Skeleton width={26} height={24} radius="100%" />
      <Skeleton width="100%" height={24} radius={12} />
    </Box>
  );
};
