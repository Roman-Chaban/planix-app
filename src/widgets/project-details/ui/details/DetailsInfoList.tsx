import type { FC } from 'react';

import type { DetailsInfoListProps } from '@/widgets/project-details/ui/details';
import { Box, List, Typography } from '@/shared/ui';

import styles from './Details.module.scss';

export const DetailsInfoList: FC<DetailsInfoListProps> = ({ details }) => {
  return (
    <List
      className={styles.list}
      itemClassName={styles.item}
      getItemKey={(item) => item.id}
      renderList={details}
      renderItem={(item) => (
        <Box className={styles.box}>
          <Typography as="span" className={styles.label}>
            {item.label}
          </Typography>

          <Typography as="span" className={styles.value}>
            {item.value}
          </Typography>
        </Box>
      )}
    />
  );
};
