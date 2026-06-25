import type { FC } from 'react';

import {
  ProfileInfoItem,
  type ProfileInfoListProps,
} from '@/widgets/profile/ui/details';
import { getProfileInfoFields } from '@/widgets/profile/ui/details/lib/profileFields';
import { Box } from '@/shared/ui';

import styles from './ProfileDetails.module.scss';

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
