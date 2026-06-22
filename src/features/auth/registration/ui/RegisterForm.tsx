'use client';

import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import {
  registerFormFields,
  useRegistration,
} from '@/features/auth/registration';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import {
  AppForm,
  AuthButton,
  AuthFooter,
  AuthHeader,
  AuthRedirect,
  Box,
  FormFields,
  AuthWrapper,
  FormDateField,
} from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

import styles from './RegisterForm.module.scss';

const { REGISTER } = ROUTES;
const { LG } = BUTTON_MAX_WIDTH;

export const RegisterForm = () => {
  const { t } = useTranslation(NS.SIGN_UP_FORM);
  const { isValid, isSubmitting, onSubmit, form, control } = useRegistration();

  const personalFields = registerFormFields.slice(0, 2);
  const securityFields = registerFormFields.slice(2, 4);
  const additionalFields = registerFormFields.slice(4, 6);

  const formFieldsProps = {
    translationNamespace: NS.SIGN_UP_FORM,
    isValid,
  };

  const header = (
    <AuthHeader title={t('title')} subtitle={t('subtitle')} isHighlightedIcon />
  );

  const footer = (
    <AuthFooter>
      <AuthRedirect
        title={t('noAccount')}
        linkText={t('registration')}
        href={REGISTER}
      />
    </AuthFooter>
  );

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <AuthWrapper header={header} footer={footer}>
        <FormFields fields={personalFields} {...formFieldsProps} />

        <Box className={styles.box}>
          <FormFields fields={securityFields} {...formFieldsProps} />
        </Box>

        <Box className={styles.box}>
          <FormFields fields={additionalFields} {...formFieldsProps} />

          <Controller
            control={control}
            name="birthDate"
            render={({ field, fieldState }) => (
              <FormDateField
                id="birthDate"
                label={t('birthDate')}
                placeholder={t('birthDatePlaceholder')}
                inputProps={{
                  value: field.value ?? '',
                  onChange: field.onChange,
                  ref: field.ref,
                }}
                error={fieldState.error?.message}
              />
            )}
          />
        </Box>

        <AuthButton
          label={t('registration')}
          disabled={!isValid}
          maxWidth={LG}
          isLoading={isSubmitting}
        />
      </AuthWrapper>
    </AppForm>
  );
};
