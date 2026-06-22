'use client';

import type { FC } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  registerFormFields,
  useRegistration,
} from '@/features/auth/registration';
import type { AuthStep } from '@/features/auth/stepper';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import {
  AppForm,
  AuthButton,
  Box,
  FormFields,
  FormDateField,
} from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

import styles from './RegisterForm.module.scss';

const { LG } = BUTTON_MAX_WIDTH;

type RegisterFormProps = {
  onNavigate: (step: AuthStep) => void;
};

export const RegisterForm: FC<RegisterFormProps> = () => {
  const { t } = useTranslation(NS.AUTH);
  const { isValid, isSubmitting, onSubmit, form, control } = useRegistration();

  const personalFields = registerFormFields.slice(0, 2);
  const securityFields = registerFormFields.slice(2, 4);
  const additionalFields = registerFormFields.slice(4, 6);

  const formFieldsProps = {
    translationNamespace: NS.AUTH,
    isValid,
  };

  return (
    <AppForm form={form} onSubmit={onSubmit}>
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
    </AppForm>
  );
};
