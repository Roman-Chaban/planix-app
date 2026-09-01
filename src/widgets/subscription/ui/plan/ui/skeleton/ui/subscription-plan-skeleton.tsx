'use client';

import { Box, List, Skeleton } from '@/shared/ui';

import { FEATURES } from '../../../model/constants';
import styles from '../../subscription-plan.module.scss';

import { SubscriptionPlanFeatureSkeleton } from './subscription-plan-feature-skeleton';

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
