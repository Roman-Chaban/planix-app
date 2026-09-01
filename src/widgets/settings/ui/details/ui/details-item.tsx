import type { DetailsItemProps } from '../model/types';

import { Box, Typography } from '@/shared/ui';

import styles from '../details.module.scss';

export const DetailsItem = ({ label, value, t, children }: DetailsItemProps) => {
  return (
    <Box className={styles.field}>
      <Typography as="span" className={styles.label}>
        {label && (t ? t(label) : label)}
      </Typography>
      <Typography as="span" className={styles.value}>
        {value}
      </Typography>

      {children}
    </Box>
  );
};
