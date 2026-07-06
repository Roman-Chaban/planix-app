'use client';

import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { AppForm, AuthButton, Box, FormFields, FormDateField, Tooltip } from '@/shared/ui';
import { BUTTON_MAX_WIDTH } from '@/shared/ui/button';

import { registerFormFields } from '../lib/form-config';
import { useRegistration } from '../model/useRegistration';

import styles from './RegisterForm.module.scss';

const { LG } = BUTTON_MAX_WIDTH;

export const RegisterForm = () => {
  const { t } = useTranslation(NS.AUTH);
  const { isValid, isSubmitting, handleSubmit, registrationForm, control } = useRegistration();

  const personalFields = registerFormFields.slice(0, 2);
  const securityFields = registerFormFields.slice(2, 4);
  const additionalFields = registerFormFields.slice(4, 6);

  const formFieldsProps = {
    translationNamespace: NS.AUTH,
    isValid,
  };

  return (
    <AppForm form={registrationForm} onSubmit={handleSubmit}>
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
              label={t('register.birthDate')}
              placeholder={t('register.birthDatePlaceholder')}
              inputProps={{
                value: field.value ?? '',
                onChange: field.onChange,
                ref: field.ref,
                required: true,
              }}
              error={t(fieldState.error?.message ?? '')}
            />
          )}
        />
      </Box>

      <Tooltip position="bottom" message={t('register.tooltipMessage')}>
        <AuthButton
          label={t('register.registration')}
          disabled={!isValid}
          maxWidth={LG}
          isLoading={isSubmitting}
        />
      </Tooltip>
    </AppForm>
  );
};
