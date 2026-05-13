import { type FC } from 'react';

import { CloseIcon } from '@/shared/ui/icons/index';
import { Box, Button, Typography } from '@/shared/ui/index';

import styles from '@/shared/ui/modal/styles/modal.module.scss';

type ModalHeaderProps = {
  onClose: () => void;
};

export const ModalHeader: FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <Box className={styles.header}>
      <Typography as="h3" className={styles.title}>
        Reason For Cancel
      </Typography>

      <Button className={styles.button} onClick={onClose}>
        <CloseIcon />
      </Button>
    </Box>
  );
};
