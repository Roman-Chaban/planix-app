'use client';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { AuthFooter } from '@/widgets/auth/ui/auth-footer/AuthFooter';
import { AuthHeader } from '@/widgets/auth/ui/auth-header/AuthHeader';

import type { AuthLoginFormViewProps } from '@/features/auth/model/types';

import styles from '@/features/auth/styles/auth.module.scss';

import { LoginFields } from '@/features/auth/ui/login-fields/LoginFields';
import { LoginMain } from '@/features/auth/ui/login-main/LoginMain';
import { Box } from '@/shared/ui/index';

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
