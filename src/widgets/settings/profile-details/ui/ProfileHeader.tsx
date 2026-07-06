'use client';

import type { ProfileHeaderProps } from '../model/types';

import { Box, Tooltip, Typography } from '@/shared/ui';

import { Button } from '@/shared/ui/button';

import { UploadAvatarIcon } from '@/shared/ui/icons';
import { TOOLTIP_POSITION } from '@/shared/ui/tooltip';

import styles from './ProfileDetails.module.scss';

const { BOTTOM } = TOOLTIP_POSITION;

export const ProfileHeader = ({ profile, t, onMode }: ProfileHeaderProps) => {
  if (!profile) return null;

  return (
    <Box className={styles.profile}>
      <Box className={styles.profileInfo}>
        <Box className={styles.profileBox}>
          {/* TODO: [Temporary mock Avatar, the image will be added soon] */}
          <Box className={styles.avatar}>
            Avatar
            <Button preset="UPLOAD_AVATAR" className={styles.avatarUpload}>
              <UploadAvatarIcon />
            </Button>
          </Box>

          <Box className={styles.info}>
            <Typography as="h2" className={styles.fullName}>
              {profile.fullName}
            </Typography>
            <Typography as="span" className={styles.email}>
              {profile.email}
            </Typography>
          </Box>
        </Box>

        <Tooltip position={BOTTOM} message={t('profileDetails.edit')}>
          <Button preset="EDIT" onClick={onMode}>
            {t('profileDetails.editLabel')}
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};
