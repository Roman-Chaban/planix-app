'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginHeader, LoginFooter } from '@/widgets/login';
import { LoginFormMain, LoginFormFields } from '@/features/auth-by-credentials';
import { useAuthLogin } from '@/features/auth-by-credentials/model/useAuthLogin';

import { Box } from '@/shared/ui';

import styles from './LoginForm.module.scss';

export const LoginForm: FC = () => {
  const { t } = useTranslation('login');

  const form = useAuthLogin();

  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginContent}>
        <LoginHeader
          title={t('title')}
          subtitle={t('subtitle')}
          highlightedText={t('highlightedText')}
        />

        <form className={styles.loginForm} onSubmit={form.onSubmit}>
          <LoginFormFields
            emailField={form.register('email')}
            passwordField={form.register('password')}
            emailError={form.errors.email?.message}
            passwordError={form.errors.password?.message}
          />

          <LoginFormMain control={form.control} />
        </form>
      </Box>

      <LoginFooter title={t('noAccount')} link={t('registration')} />
    </Box>
  );
};
