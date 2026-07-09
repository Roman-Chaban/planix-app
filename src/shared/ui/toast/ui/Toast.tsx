import type { ToastProps } from '../model/toast.types';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';
import { Button, BUTTON_VARIANTS } from '../../button';
import { CloseToastIcon } from '../../icons';
import { Typography } from '../../typography';
import { toastConfig } from '../lib/toast.config';

import styles from './Toast.module.scss';

const { TRANSPARENT } = BUTTON_VARIANTS;

export const Toast = ({ variant, description, className, onClose }: ToastProps) => {
  const { Icon, tone, role, ariaLive } = toastConfig[variant];

  return (
    <Box role={role} aria-live={ariaLive} className={buildClassName(styles.toast, tone, className)}>
      <Box className={styles.content}>
        <Icon className={styles.icon} aria-hidden />

        <Typography className={styles.description}>{description}</Typography>
      </Box>

      {onClose && (
        <Button
          onClick={onClose}
          className={styles.close}
          variant={TRANSPARENT}
          aria-label="Close notification"
        >
          <CloseToastIcon aria-hidden className={styles.icon} />
        </Button>
      )}
    </Box>
  );
};
