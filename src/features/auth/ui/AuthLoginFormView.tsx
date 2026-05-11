'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { AuthFooter } from '@/widgets/auth/ui/AuthFooter';
import { AuthHeader } from '@/widgets/auth/ui/AuthHeader';

import type { AuthLoginFormViewProps } from '@/features/auth/model/types';

import styles from '@/features/auth/styles/auth.module.scss';
import { Box } from '@/shared/ui/index';

import { AuthLoginFields } from './AuthLoginFields';
import { AuthLoginMain } from './AuthLoginMain';

export const AuthLoginFormView: FC<AuthLoginFormViewProps> = ({
  register,
  control,
  onSubmit,
  errors,
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
          <AuthLoginFields register={register} errors={errors} />
          <AuthLoginMain control={control} />
        </form>
      </Box>

      <AuthFooter
        title={t('AuthLoginForm.footer.noAccount')}
        link={t('AuthLoginForm.footer.registration')}
      />
    </Box>
  );
};
