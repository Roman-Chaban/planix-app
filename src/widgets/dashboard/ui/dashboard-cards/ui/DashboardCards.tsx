import { dashboardCards } from '@/widgets/dashboard/config/dashboard-cards/dashboard-cards';
import styles from '@/widgets/dashboard/ui/dashboard-cards/styles/dashboard-cards.module.scss';
import { Box, List } from '@/shared/ui';

import { Card } from '@/shared/ui/card/ui/Card';

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
