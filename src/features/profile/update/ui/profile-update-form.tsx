'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { AppForm, Button, FormFields } from '@/shared/ui';

import { updateFields } from '../lib/config';

import { useUpdateProfile } from '../model/use-update-profile';

import styles from './profile-update-form.module.scss';

export type ProfileUpdateFormProps = {
  onSuccess?: () => void;
};

export const ProfileUpdateForm = ({ onSuccess }: ProfileUpdateFormProps) => {
  const { t } = useTranslation(NS.SETTINGS);

  const { form, onSubmit, isLoading, isValid } = useUpdateProfile({ onSuccess });

  return (
    <AppForm form={form} onSubmit={onSubmit} className={styles.form}>
      <FormFields fields={updateFields} translationNamespace={NS.SETTINGS} />

      <Button
        preset="SUBMIT"
        className={styles.save}
        disabled={!isValid || isLoading}
        isLoading={isLoading}
      >
        {t('profileDetails.save')}
      </Button>
    </AppForm>
  );
};
