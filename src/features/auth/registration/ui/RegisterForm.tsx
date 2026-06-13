'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  registerFormFields,
  type RegisterFormValues,
  useSignUp,
} from '@/features/auth/registration';
import {
  AuthButton,
  AuthFooter,
  AuthHeader,
  AuthRedirect,
  Box,
  FormFields,
} from '@/shared/ui';
import { AuthWrapper } from '@/shared/ui/auth-wrapper';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

import styles from './RegisterForm.module.scss';

const { REGISTER } = ROUTES;

const { LG } = BUTTON_MAX_WIDTH;

export const RegisterForm = () => {
  const { t } = useTranslation('signUpForm');

  const { register, errors, isValid } = useSignUp();

  const personalFields = registerFormFields.slice(0, 2);
  const securityFields = registerFormFields.slice(2, 4);
  const additionalFields = registerFormFields.slice(4, 6);

  const formFieldsProps = {
    translationNamespace: 'signUpForm',
    register,
    errors,
    isValid,
  };

  return (
    <AuthWrapper
      header={
        <AuthHeader
          title={t('title')}
          subtitle={t('subtitle')}
          isHighlightedIcon
        />
      }
      footer={
        <AuthFooter>
          <AuthRedirect
            title={t('noAccount')}
            linkText={t('registration')}
            href={REGISTER}
          />
        </AuthFooter>
      }
    >
      <FormFields<RegisterFormValues>
        fields={personalFields}
        {...formFieldsProps}
      />

      <Box className={styles.box}>
        <FormFields<RegisterFormValues>
          fields={securityFields}
          {...formFieldsProps}
        />
      </Box>

      <Box className={styles.box}>
        <FormFields<RegisterFormValues>
          fields={additionalFields}
          {...formFieldsProps}
        />
      </Box>

      <AuthButton label={t('registration')} disabled={!isValid} maxWidth={LG} />
    </AuthWrapper>
  );
};
