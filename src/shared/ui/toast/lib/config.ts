import type { ToastConfigOptions } from '../model/types';

import { DefaultToastIcon, ErrorToastIcon, SuccessToastIcon } from '../../icons';

import styles from '../ui/toast.module.scss';

export const toastConfig: ToastConfigOptions = {
  default: {
    Icon: DefaultToastIcon,
    tone: styles.default,
    role: 'status',
    ariaLive: 'polite',
  },

  info: {
    Icon: DefaultToastIcon,
    tone: styles.info,
    role: 'status',
    ariaLive: 'polite',
  },

  success: {
    Icon: SuccessToastIcon,
    tone: styles.success,
    role: 'status',
    ariaLive: 'polite',
  },

  error: {
    Icon: ErrorToastIcon,
    tone: styles.error,
    role: 'alert',
    ariaLive: 'assertive',
  },

  warning: {
    Icon: DefaultToastIcon,
    tone: styles.warning,
    role: 'status',
    ariaLive: 'polite',
  },
};
