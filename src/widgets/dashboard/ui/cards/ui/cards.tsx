'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';

import { Box, List, Card } from '@/shared/ui';

import { getDashboardCards } from '../lib/get-dashboard-cards';

import styles from './cards.module.scss';

export const Cards = () => {
  const { t } = useTranslation(NS.DASHBOARD);

  const cards = getDashboardCards(t);

  return (
    <Box className={styles.cardsWrapper}>
      <List
        className={styles.cards}
        itemClassName={styles.card}
        getItemKey={({ id }) => id}
        renderList={cards}
        renderItem={(card) => <Card {...card} />}
      />
    </Box>
  );
};
