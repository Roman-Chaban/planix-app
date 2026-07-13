'use client';

import { useTranslation } from 'react-i18next';

import { ProfileUpdateForm } from '@/features/profile/update';
import { useProfile } from '@/entities/profile';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box } from '@/shared/ui';

import { useChangeMode } from '../model/useChangeMode';

import styles from './ProfileDetails.module.scss';
import { ProfileHeader } from './ProfileHeader';
import { ProfileInfoList } from './ProfileInfoList';
import { ProfileDetailsSkeleton } from './skeleton/ProfileDetailsSkeleton';

export const ProfileDetails = () => {
  const { t } = useTranslation(NS.SETTINGS);

  const { profile, isLoading } = useProfile();
  const { toggleMode, isView, hydrated } = useChangeMode();

  if (!hydrated) return null;

  if (isLoading) return <ProfileDetailsSkeleton />;

  if (!profile) return null;

  return (
    <Box className={styles.details}>
      <Box className={styles.profileDetails}>
        <ProfileHeader profile={profile} t={t} onMode={toggleMode} />

        {isView ? (
          <ProfileInfoList profile={profile} t={t} />
        ) : (
          <ProfileUpdateForm onSuccess={toggleMode} />
        )}
      </Box>
    </Box>
  );
};
