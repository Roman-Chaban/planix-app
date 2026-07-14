'use client';

import type { LoginActionsProps } from '../model/types';

import { Controller } from 'react-hook-form';

import { AuthButton, Box, Checkbox } from '@/shared/ui';

import { Button } from '@/shared/ui/button';

import styles from './LoginForm.module.scss';

export const LoginActions = ({
  control,
  rememberMeLabel,
  forgotPasswordLabel,
  submitLabel,
  isValid,
  isLoading,
  onForgotPassword,
}: LoginActionsProps) => {
  return (
    <Box className={styles.loginFormMainWrapper}>
      <Box className={styles.loginFormMain}>
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <Checkbox checked={field.value} onChange={field.onChange} label={rememberMeLabel} />
          )}
        />

        <Button preset="AUTH_FORGOT" className={styles.forgotButton} onClick={onForgotPassword}>
          {forgotPasswordLabel}
        </Button>
      </Box>

      <AuthButton
        preset="AUTH_LOGIN"
        label={submitLabel}
        disabled={isValid}
        isLoading={isLoading}
      />
    </Box>
  );
};
