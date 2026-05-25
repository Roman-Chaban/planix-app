import type { FC } from 'react';

import type { ActionsBarProps } from '@/shared/ui/actions-bar/model/types';

import { Box, Button } from '@/shared/ui/index';

import styles from './ActionsBar.module.scss';

export const ActionsBar: FC<ActionsBarProps> = ({ actions }) => {
  return (
    <Box className={styles.actions}>
      {actions.map(({ id, icon: Icon, onClick }) => (
        <Button key={id} className={styles.action} onClick={onClick}>
          <Icon />
        </Button>
      ))}
    </Box>
  );
};
