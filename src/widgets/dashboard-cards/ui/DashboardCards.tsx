import { dashboardCards } from '@/widgets/dashboard-cards';

import { Box, List, Card } from '@/shared/ui';

import styles from './DashboardCards.module.scss';

export const DashboardCards = () => {
  return (
    <Box className={styles.cardsWrapper}>
      <List
        className={styles.cards}
        itemClassName={styles.card}
        getItemKey={(key) => key.id}
        renderList={dashboardCards}
        renderItem={(card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              label={card.label}
              value={card.value}
              name={card.name}
              trend={card.trend}
              trendType={card.trendType}
              translationNamescape="dashboardCards"
            />
          );
        }}
      />
    </Box>
  );
};
