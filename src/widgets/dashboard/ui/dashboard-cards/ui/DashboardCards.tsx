import { dashboardCards } from '@/widgets/dashboard/lib/dashboard-cards/dashboardCards';
import { Box, List } from '@/shared/ui';

import { Card } from '@/shared/ui/dashboardCard/ui/Card';

import styles from '../styles/styles.module.scss';

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
            />
          );
        }}
      />
    </Box>
  );
};
