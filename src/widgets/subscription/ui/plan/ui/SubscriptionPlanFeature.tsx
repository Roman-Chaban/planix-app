import type { SubscriptionPlanFeatureProps } from '../model/subscription-plan.types';

import { buildClassName } from '@/shared/lib';
import { Box, Typography } from '@/shared/ui';
import { PlanCheckIcon } from '@/shared/ui/icons';

import styles from './SubscriptionPlan.module.scss';

export const SubscriptionPlanFeature = ({ feature, isActive }: SubscriptionPlanFeatureProps) => {
  return (
    <Box className={styles.feature}>
      <PlanCheckIcon
        className={buildClassName(styles.featureIcon, {
          [styles.activeFeature]: isActive,
        })}
      />
      <Typography as="span" className={styles.featureText}>
        {feature}
      </Typography>
    </Box>
  );
};
