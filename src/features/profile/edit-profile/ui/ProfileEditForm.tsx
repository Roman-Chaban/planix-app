'use client';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { AppForm, Button, FormFields } from '@/shared/ui';

import { editFields } from '../lib/fields';

import { useEditProfile } from '../model/useEditProfile';

import styles from './ProfileEditForm.module.scss';

export type ProfileEditFormProps = {
  onSuccess?: () => void;
};

export const ProfileEditForm = ({ onSuccess }: ProfileEditFormProps) => {
  const { t } = useTranslation(NS.SETTINGS);

  const { form, onSubmit } = useEditProfile({ onSuccess });

  return (
    <AppForm form={form} onSubmit={onSubmit} className={styles.form}>
      <FormFields fields={editFields} translationNamespace={NS.SETTINGS} />

      <Button preset="SUBMIT" className={styles.save}>
        {t('profileDetails.save')}
      </Button>
    </AppForm>
  );
};
