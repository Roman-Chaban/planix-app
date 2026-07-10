import { Box } from '@/shared/ui';

import { LogoutGraphicIcon } from '@/shared/ui/icons';

import styles from './LogoutModal.module.scss';

export const LogoutModalGraphic = () => {
  return (
    <Box className={styles.graphic}>
      <LogoutGraphicIcon />
    </Box>
  );
};
