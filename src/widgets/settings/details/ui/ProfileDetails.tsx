'use client';

import { useTranslation } from 'react-i18next';

import { ProfileEditForm } from '@/features/profile/edit-profile';
import { useProfile } from '@/entities/settings';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box } from '@/shared/ui';

import { useChangeMode } from '../model/useChangeMode';

import styles from './ProfileDetails.module.scss';
import { ProfileHeader } from './ProfileHeader';
import { ProfileInfoList } from './ProfileInfoList';

export const ProfileDetails = () => {
  const { t } = useTranslation(NS.SETTINGS);

  const { data: profile } = useProfile();
  const { toggleMode, isView, hydrated } = useChangeMode();

  if (!profile) return null;
  if (!hydrated) return null;

  return (
    <Box className={styles.details}>
      <Box className={styles.profileDetails}>
        <ProfileHeader profile={profile} t={t} onMode={toggleMode} />

        {isView ? (
          <ProfileInfoList profile={profile} t={t} />
        ) : (
          <ProfileEditForm onSuccess={toggleMode} />
        )}
      </Box>
    </Box>
  );
};
