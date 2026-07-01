import type { LoginActionsProps } from '../model/types';

import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { AuthButton, Box, Checkbox } from '@/shared/ui';

import { Button, BUTTON_MAX_WIDTH, BUTTON_VARIANTS } from '@/shared/ui/button';

import styles from './LoginForm.module.scss';

const { SM, LG } = BUTTON_MAX_WIDTH;
const { TRANSPARENT } = BUTTON_VARIANTS;

export const LoginActions: FC<LoginActionsProps> = ({
  control,
  rememberMeLabel,
  forgotPasswordLabel,
  submitLabel,
  isValid,
  isLoading,
  onForgotPassword,
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

        <Button
          variant={TRANSPARENT}
          maxWidth={LG}
          className={styles.loginButton}
          onClick={onForgotPassword}
        >
          {forgotPasswordLabel}
        </Button>
      </Box>

      <AuthButton
        label={submitLabel}
        disabled={isValid}
        maxWidth={SM}
        isLoading={isLoading}
      />
    </Box>
  );
};
