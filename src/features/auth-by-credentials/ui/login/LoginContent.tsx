'use client';

import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { useLogin } from '@/features/auth-by-credentials';
import type { LoginContentProps } from '@/features/auth-by-credentials/model/types';

import { Box, Checkbox, AppLink, AuthButton } from '@/shared/ui';

import styles from './LoginForm.module.scss';

const { FORGOT_PASSWORD } = ROUTES;

export const LoginContent: FC<LoginContentProps> = ({ control }) => {
  const { t } = useTranslation('login');

  const { isValid } = useLogin();

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
              label={t('rememberMe')}
            />
          )}
        />

        <AppLink href={FORGOT_PASSWORD} className={styles.loginFormLink}>
          {t('forgotPassword')}
        </AppLink>
      </Box>

      <AuthButton label={t('submitButton')} disabled={!isValid} />
    </Box>
  );
};
