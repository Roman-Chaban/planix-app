'use client';

import { useTranslation } from 'react-i18next';

import { useProfile } from '@/entities/settings';
import { NAMESPACE as NS } from '@/shared/lib/i18n';
import { Box } from '@/shared/ui';

import styles from './ProfileDetails.module.scss';
import { ProfileHeader } from './ProfileHeader';
import { ProfileInfoList } from './ProfileInfoList';

export const ProfileDetails = () => {
  const { t } = useTranslation(NS.PROFILE);

  const { data: profile } = useProfile();

  if (!profile) return null;

  return (
    <Box className={styles.details}>
      <Box className={styles.profileDetails}>
        <ProfileHeader profile={profile} t={t} />
        <ProfileInfoList profile={profile} t={t} />
      </Box>
    </Box>
  );
};
