'use client';

import type { SubmitHandler } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  registerFormFields,
  type RegisterFormSchema,
  signUpFormSchema,
} from '@/features/auth/registration';
import { useAppForm } from '@/shared/lib/hooks';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import {
  AppForm,
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
  const { t } = useTranslation(NS.SIGN_UP_FORM);

  const form = useAppForm<RegisterFormSchema>({
    schema: signUpFormSchema,
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
      confirmPassword: '',
      contact: '',
      birthDate: '',
    },
  });

  const {
    formState: { isValid },
  } = form;

  // TODO: [Waitign for form implementation]
  const onSubmit: SubmitHandler<RegisterFormSchema> = (data) => {
    console.log('Login Form Data:', data);
  };

  const personalFields = registerFormFields.slice(0, 2);
  const securityFields = registerFormFields.slice(2, 4);
  const additionalFields = registerFormFields.slice(4, 6);

  const formFieldsProps = {
    translationNamespace: NS.SIGN_UP_FORM,
    isValid,
  };

  return (
    <AppForm form={form} onSubmit={onSubmit}>
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
        <FormFields fields={personalFields} {...formFieldsProps} />

        <Box className={styles.box}>
          <FormFields fields={securityFields} {...formFieldsProps} />
        </Box>

        <Box className={styles.box}>
          <FormFields fields={additionalFields} {...formFieldsProps} />
        </Box>

        <AuthButton
          label={t('registration')}
          disabled={!isValid}
          maxWidth={LG}
        />
      </AuthWrapper>
    </AppForm>
  );
};
