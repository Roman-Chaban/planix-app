import type { InfoListProps } from '../model/types';

import type { FC } from 'react';

import { Box, List, Typography } from '@/shared/ui';

import styles from './Info.module.scss';

export const InfoList: FC<InfoListProps> = ({ details }) => {
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
