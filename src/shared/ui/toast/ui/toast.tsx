import type { ToastProps } from '../model/types';

import { buildClassName } from '@/shared/lib';

import { Box } from '../../box';
import { Button, BUTTON_VARIANTS } from '../../button';
import { CloseToastIcon } from '../../icons';
import { Typography } from '../../typography';
import { toastConfig } from '../lib/config';

import { TOAST_VARIANT } from '../model/constants';

import styles from './toast.module.scss';

export const Toast = ({
  variant = TOAST_VARIANT.DEFAULT,
  description,
  className,
  isClosing,
  onClose,
  onAnimationEnd,
}: ToastProps) => {
  const { Icon, tone, role, ariaLive } = toastConfig[variant];

  const wrapperClassNames = buildClassName(
    styles.toast,
    tone,
    { [styles.closing]: isClosing },
    className,
  );

  const buttonClassNames = buildClassName(styles.close, tone);

  return (
    <Box role={role} aria-live={ariaLive} className={wrapperClassNames} onClick={onAnimationEnd}>
      <Box className={styles.content}>
        <Icon className={styles.icon} aria-hidden />

        <Typography className={styles.description}>{description}</Typography>
      </Box>

      {onClose && (
        <Button
          className={buttonClassNames}
          variant={BUTTON_VARIANTS.TRANSPARENT}
          aria-label="Close notification"
          onClick={onClose}
        >
          <CloseToastIcon aria-hidden />
        </Button>
      )}
    </Box>
  );
};
