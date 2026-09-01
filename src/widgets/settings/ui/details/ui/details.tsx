'use client';

import { useTranslation } from 'react-i18next';

import { ProfileUpdateForm } from '@/features/profile/update';
import { useProfile } from '@/entities/profile';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box } from '@/shared/ui';

import { useChangeMode } from '../model/use-change-mode';

import { DetailsHeader } from './details-header';
import { DetailsList } from './details-list';
import styles from './details.module.scss';

import { DetailsSkeleton } from './skeleton/details-skeleton';

export const Details = () => {
  const { t } = useTranslation(NS.SETTINGS);

  const { profile, isLoading } = useProfile();
  const { toggleMode, isView, hydrated } = useChangeMode();

  if (!hydrated) return null;

  if (isLoading) return <DetailsSkeleton />;

  if (!profile) return null;

  return (
    <Box className={styles.details}>
      <Box className={styles.profileDetails}>
        <DetailsHeader profile={profile} t={t} onMode={toggleMode} />

        {isView ? (
          <DetailsList profile={profile} t={t} />
        ) : (
          <ProfileUpdateForm onSuccess={toggleMode} />
        )}
      </Box>
    </Box>
  );
};
