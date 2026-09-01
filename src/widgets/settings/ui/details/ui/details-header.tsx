'use client';

import type { ProfileHeaderProps } from '../model/types';

import { Avatar, Box, Input, Tooltip, Typography } from '@/shared/ui';

import { AVATAR_VARIANTS } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';

import { FORM_FIELD_TYPES } from '@/shared/ui/form/form-field';
import { UploadAvatarIcon } from '@/shared/ui/icons';
import { TOOLTIP_POSITION } from '@/shared/ui/tooltip';

import { useUploadAvatar } from '../model/use-upload-avatar';

import styles from './details.module.scss';

const { BOTTOM } = TOOLTIP_POSITION;
const { FILE } = FORM_FIELD_TYPES;
const { CIRCLE } = AVATAR_VARIANTS;

export const DetailsHeader = ({ profile, t, onMode }: ProfileHeaderProps) => {
  const { uploadAvatarRef, handleFileChange, handleUploadClick } = useUploadAvatar();

  if (!profile) return null;

  return (
    <Box className={styles.profile}>
      <Box className={styles.profileInfo}>
        <Box className={styles.profileBox}>
          <Box className={styles.avatarBox}>
            <Input
              type={FILE}
              hidden
              ref={uploadAvatarRef}
              onChange={(event) => handleFileChange(profile.id, event)}
            />

            <Avatar
              width={74}
              height={74}
              src={profile.avatarUrl}
              alt={profile.fullName}
              fallback={profile.initials}
              variant={CIRCLE}
              className={styles.avatarImage}
            />

            <Button
              preset="UPLOAD_AVATAR"
              className={styles.avatarUpload}
              onClick={handleUploadClick}
            >
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
