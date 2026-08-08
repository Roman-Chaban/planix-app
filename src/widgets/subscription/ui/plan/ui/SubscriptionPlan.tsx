'use client';

import type { SubscriptionPlanProps } from '../model/subscription-plan.types';

import { buildClassName } from '@/shared/lib';
import { Box, List, Typography } from '@/shared/ui';

import styles from './SubscriptionPlan.module.scss';
import { SubscriptionPlanFeature } from './SubscriptionPlanFeature';

export const SubscriptionPlan = ({
  plan,
  monthLabel,
  isActive,
  onActive,
}: SubscriptionPlanProps) => {
  return (
    <Box
      role="button"
      className={buildClassName(styles.planCard, { [styles.activeCard]: isActive })}
      onClick={onActive}
    >
      <Box className={styles.planHeader}>
        <Box
          className={buildClassName(styles.planHeaderBox, { [styles.activeHeaderBox]: isActive })}
        >
          <Typography as="h3" className={styles.planTitle}>
            {plan.name}
          </Typography>
          <Typography as="p" className={styles.planSubtitle}>
            {plan.description}
          </Typography>
        </Box>
      </Box>

      <Box className={styles.planContent}>
        <Typography as="p">
          <Typography as="strong" className={styles.planPrice}>
            {plan.price}
          </Typography>
          <Typography as="span" className={styles.planMonth}>
            {monthLabel}
          </Typography>
        </Typography>

        <List
          itemClassName={styles.featuresListItem}
          className={styles.featuresList}
          renderList={plan.features}
          getItemKey={(feature) => feature}
          renderItem={(feature) => (
            <SubscriptionPlanFeature isActive={isActive} feature={feature} />
          )}
        />
      </Box>
    </Box>
  );
};
