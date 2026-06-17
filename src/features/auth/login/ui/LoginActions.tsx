import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { ROUTES } from '@/app/routes';

import type { LoginContentProps } from '@/features/auth/login';
import { AppLink, AuthButton, Box, Checkbox } from '@/shared/ui';

import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

import styles from './LoginForm.module.scss';

const { FORGOT_PASSWORD } = ROUTES;
const { SM } = BUTTON_MAX_WIDTH;

export const LoginActions: FC<LoginContentProps> = ({
  control,
  rememberMeLabel,
  forgotPasswordLabel,
  submitLabel,
  isValid,
}) => {
  return (
    <Box className={styles.loginFormMainWrapper}>
      <Box className={styles.loginFormMain}>
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <Checkbox
              checked={field.value}
              onChange={field.onChange}
              label={rememberMeLabel}
            />
          )}
        />

        <AppLink href={FORGOT_PASSWORD} className={styles.loginFormLink}>
          {forgotPasswordLabel}
        </AppLink>
      </Box>

      <AuthButton label={submitLabel} disabled={!isValid} maxWidth={SM} />
    </Box>
  );
};
