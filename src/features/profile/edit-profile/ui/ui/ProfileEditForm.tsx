import type { ProfileEditFormProps } from '../model/types';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { AppForm, Button, FormFields } from '@/shared/ui';

import { editFields } from '../lib/config';

import { useEditProfile } from '../model/useEditProfile';

import styles from './ProfileEditForm.module.scss';

export const ProfileEditForm: FC<ProfileEditFormProps> = ({ onSuccess }) => {
  const { t } = useTranslation(NS.SETTINGS);

  const { form, onSubmit } = useEditProfile({ onSuccess });

  return (
    <AppForm form={form} onSubmit={onSubmit} className={styles.form}>
      <FormFields fields={editFields} translationNamespace={NS.SETTINGS} />

      <Button preset="SUBMIT">{t('profileDetails.save')}</Button>
    </AppForm>
  );
};
