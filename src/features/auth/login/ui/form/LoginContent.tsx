'use client';

import type { FC } from 'react';
import { Controller } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import { type LoginContentProps } from '@/features/auth/login';

import { Box, Checkbox, AppLink, AuthButton } from '@/shared/ui';

import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

import styles from './LoginForm.module.scss';

const { FORGOT_PASSWORD } = ROUTES;
const { SM } = BUTTON_MAX_WIDTH;

export const LoginContent: FC<LoginContentProps> = ({ control, isValid }) => {
  const { t } = useTranslation('login');

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

      <AuthButton label={t('submitButton')} disabled={!isValid} maxWidth={SM} />
    </Box>
  );
};
