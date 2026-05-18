'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '@/features/auth-by-credentials/Auth.module.scss';
import type { AuthLoginFormViewProps } from '@/features/auth-by-credentials/AuthByCredentials.types';

import { LoginFields } from '@/features/auth-by-credentials/LoginFields';
import { LoginMain } from '@/features/auth-by-credentials/LoginMain';
import { Box } from '@/shared/ui/index';
import { AuthFooter } from '@/pages/auth/ui/AuthFooter';
import { AuthHeader } from '@/pages/auth/ui/AuthHeader';

export const LoginFormView: FC<AuthLoginFormViewProps> = ({
  onSubmit,
  emailField,
  passwordField,
  emailError,
  passwordError,
  control,
}) => {
  const { t } = useTranslation();

  return (
    <Box className={styles.loginWrapper}>
      <Box className={styles.loginContent}>
        <AuthHeader
          title={t('AuthLoginForm.header.title')}
          subtitle={t('AuthLoginForm.header.subtitle')}
          highlightedText={t('AuthLoginForm.header.decorationText')}
        />

        <form className={styles.loginForm} onSubmit={onSubmit}>
          <LoginFields
            emailField={emailField}
            passwordField={passwordField}
            emailError={emailError}
            passwordError={passwordError}
          />

          <LoginMain control={control} />
        </form>
      </Box>

      <AuthFooter
        title={t('AuthLoginForm.footer.noAccount')}
        link={t('AuthLoginForm.footer.registration')}
      />
    </Box>
  );
};
