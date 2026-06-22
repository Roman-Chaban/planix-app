import type { FC } from 'react';

import { Box, Button, Typography } from '@/shared/ui';
import type { AuthRedirectProps } from '@/shared/ui/auth/ui/auth-redirect';

import { BUTTON_VARIANTS } from '@/shared/ui/button';

import styles from './AuthRedirect.module.scss';

const { TRANSPARENT } = BUTTON_VARIANTS;

export const AuthRedirect: FC<AuthRedirectProps> = ({
  title,
  label,
  icon,
  step,
  onNavigate,
}) => (
  <Box className={styles.box}>
    {icon && icon}
    <Typography as="span" className={styles.text}>
      {title}
    </Typography>

    <Button variant={TRANSPARENT} onClick={() => onNavigate(step)} className={styles.button} >
      {label}
    </Button>
  </Box>
);
