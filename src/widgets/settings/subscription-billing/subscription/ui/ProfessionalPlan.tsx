'use client';

import type { ProfessionalPlanProps } from '../model/types';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { formatCurrency } from '@/shared/lib/formatters/formatters';
import { Box, Typography } from '@/shared/ui';

import styles from './Subscription.module.scss';

export const ProfessionalPlan: FC<ProfessionalPlanProps> = ({
  planName,
  planPrice = 0,
  nextBillingDateFormatted,
  skeleton: Skeleton,
  isLoading,
}) => {
  const { t, i18n } = useTranslation(NS.SETTINGS);
  const currentLocale = i18n.language;

  const formattedPrice = formatCurrency(planPrice, 'USD', currentLocale);

  return (
    <>
      {isLoading ? (
        Skeleton
      ) : (
        <Box className={styles.professionalPlan}>
          <Box className={styles.planContainer}>
            <Box className={styles.planHeader}>
              <Typography as="h3" className={styles.planTitle}>
                {planName}
              </Typography>

              <Typography as="p" className={styles.planSubtitle}>
                {t('subscriptionAndBilling.professionalPlan.subtitle')}
              </Typography>
            </Box>

            <Box className={styles.planContent}>
              <Box className={styles.planPrice}>
                <Typography as="span" className={styles.price}>
                  {formattedPrice}
                </Typography>
                <Typography as="span" className={styles.priceDescription}>
                  {t('subscriptionAndBilling.professionalPlan.perMonth')}
                </Typography>
              </Box>

              <Typography as="span" className={styles.planNextBilling}>
                {t('subscriptionAndBilling.professionalPlan.nextBilling', {
                  date: nextBillingDateFormatted,
                })}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
