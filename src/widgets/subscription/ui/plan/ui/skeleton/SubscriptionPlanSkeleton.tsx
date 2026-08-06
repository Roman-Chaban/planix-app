'use client';

import { Box, List, Skeleton } from '@/shared/ui';

import { FEATURES } from '../lib/plan.constants';
import styles from '../ui/SubscriptionPlan.module.scss';

import { SubscriptionPlanFeatureSkeleton } from './SubscriptionPlanFeatureSkeleton';

export const SubscriptionPlanSkeleton = () => {
  return (
    <Box className={styles.planCard}>
      <Box className={styles.planHeader}>
        <Box className={styles.planHeaderBox}>
          <Skeleton width={68} height={30} radius={12} />
          <Skeleton width={192} height={21} radius={12} />
        </Box>
      </Box>

      <Box className={styles.planContent}>
        <Box className={styles.planPrice}>
          <Skeleton width={104} height={45} radius={12} />
        </Box>

        <List
          itemClassName={styles.featuresListItem}
          className={styles.featuresList}
          renderList={FEATURES}
          getItemKey={(item) => item}
          renderItem={() => <SubscriptionPlanFeatureSkeleton />}
        />
      </Box>
    </Box>
  );
};
