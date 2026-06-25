'use client';

import { type FC } from 'react';

import type { ProfileDetailsProps } from '@/widgets/profile/ui/details';

import { Box, Tooltip, Typography } from '@/shared/ui';

import {
  Button,
  BUTTON_MAX_WIDTH,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from '@/shared/ui/button';

import { TOOLTIP_POSITION } from '@/shared/ui/tooltip';

import styles from './ProfileDetails.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { ROUNDED } = BUTTON_SHAPES;
const { DEFAULT } = BUTTON_VARIANTS;
const { SMALL } = BUTTON_SIZES;
const { XS } = BUTTON_MAX_WIDTH;

const { BOTTOM } = TOOLTIP_POSITION;

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

        <Tooltip position={BOTTOM} message={t('profileDetails.edit')}>
          <Button
            fullWidth
            type={BUTTON}
            size={SMALL}
            maxWidth={XS}
            shape={ROUNDED}
            variant={DEFAULT}
          >
            {t('profileDetails.editLabel')}
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
};
