'use client';

import { type FC } from 'react';

import type { ProfileDetailsProps } from '@/widgets/profile/details';

import { Box, Typography } from '@/shared/ui';

import {
  Button,
  BUTTON_MAX_WIDTH,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button';

import styles from './ProfileDetails.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { ROUNDED } = BUTTON_SHAPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { SMALL } = BUTTON_SIZES;
const { LG } = BUTTON_MAX_WIDTH;

export const ProfileHeader: FC<ProfileDetailsProps> = ({ profile, t }) => {
  if (!profile) return null;

  return (
    <Box className={styles.profile}>
      <Box className={styles.profileInfo}>
        <Box className={styles.profileBox}>
          <Box className={styles.avatar}>Avatar</Box>

          <Box className={styles.info}>
            <Typography as="h2" className={styles.fullName}>
              {profile.fullName}
            </Typography>
            <Typography as="span" className={styles.email}>
              {profile.email}
            </Typography>
          </Box>
        </Box>

        <Button
          type={BUTTON}
          size={SMALL}
          maxWidth={LG}
          shape={ROUNDED}
          variant={DEFAULT}
        >
          {t('profileDetails.editLabel')}
        </Button>
      </Box>
    </Box>
  );
};
