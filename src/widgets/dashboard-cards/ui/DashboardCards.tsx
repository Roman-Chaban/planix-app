'use client';

import { useTranslation } from 'react-i18next';

import { getDashboardCards } from '@/widgets/dashboard-cards';
import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';

import { Box, List, Card } from '@/shared/ui';

import styles from './DashboardCards.module.scss';

export const DashboardCards = () => {
  const { t } = useTranslation(NS.DASHBOARD_CARDS);

  const cards = getDashboardCards(t);

  return (
    <Box className={styles.cardsWrapper}>
      <List
        className={styles.cards}
        itemClassName={styles.card}
        getItemKey={(key) => key.id}
        renderList={cards}
        renderItem={(card) => <Card {...card} />}
      />
    </Box>
  );
};
