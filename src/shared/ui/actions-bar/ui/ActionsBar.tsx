import type { FC } from 'react';

import { createActions } from '@/shared/ui/actions-bar/model/actions';
import type { ActionsBarProps } from '@/shared/ui/actions-bar/model/types';
import styles from '@/shared/ui/actions-bar/ui/ActionsBar.module.scss';
import { Box, Button } from '@/shared/ui/index';

export const ActionsBar: FC<ActionsBarProps> = ({ onTrashClick }) => {
  const actions = createActions(onTrashClick);

  return (
    <Box className={styles.actions}>
      {actions.map(({ id, icon: Icon, onClick }) => {
        return (
          <Button key={id} className={styles.action} onClick={onClick}>
            <Icon />
          </Button>
        );
      })}
    </Box>
  );
};
