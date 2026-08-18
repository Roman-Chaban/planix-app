import { Box, Button } from '@/shared/ui';
import type { ActionsBarProps } from '@/shared/ui/actions-bar';

import styles from './actions-bar.module.scss';

export const ActionsBar = ({ actions }: ActionsBarProps) => {
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
