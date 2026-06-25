'use client';

import { useTranslation } from 'react-i18next';

import { ProfileMenu } from '@/widgets/profile';
import { ProfileHeader, ProfileInfoList } from '@/widgets/profile/details';
import { useProfile } from '@/entities/profile/api';

import { NAMESPACE as NS } from '@/shared/lib/i18n';
import { Box } from '@/shared/ui';

import styles from './ProfileDetails.module.scss';

export const ProfileDetails = () => {
  const { data: profile } = useProfile();
  const { t } = useTranslation(NS.PROFILE);

  if (!profile) return null;

  return (
    <Box className={styles.details}>
      <ProfileMenu />
      <Box className={styles.profileDetails}>
        <ProfileHeader profile={profile} t={t} />
        <ProfileInfoList profile={profile} t={t} />
      </Box>
    </Box>
  );
};
