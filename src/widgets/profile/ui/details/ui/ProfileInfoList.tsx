import type { ProfileInfoListProps } from '../model/types';

import type { FC } from 'react';

import { Box } from '@/shared/ui';

import { getProfileInfoFields } from '../lib/profileFields';

import styles from './ProfileDetails.module.scss';

import { ProfileInfoItem } from './ProfileInfoItem';

export const ProfileInfoList: FC<ProfileInfoListProps> = ({ profile, t }) => {
  if (!profile) return null;

  const fields = getProfileInfoFields(profile, t);

  return (
    <Box className={styles.information}>
      {fields.map((field) => (
        <ProfileInfoItem
          key={field.key}
          label={field.label}
          value={field.value}
        />
      ))}
    </Box>
  );
};
