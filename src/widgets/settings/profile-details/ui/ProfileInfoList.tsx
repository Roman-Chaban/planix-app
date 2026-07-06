import type { ProfileInfoListProps } from '../model/types';

import { Box } from '@/shared/ui';

import { getInfoFields } from '../lib/get-info-fields';

import styles from './ProfileDetails.module.scss';

import { ProfileInfoItem } from './ProfileInfoItem';

export const ProfileInfoList = ({ profile, t }: ProfileInfoListProps) => {
  if (!profile) return null;

  const fields = getInfoFields(profile, t);

  return (
    <Box className={styles.information}>
      {fields.map((field) => (
        <ProfileInfoItem key={field.key} label={field.label} value={field.value} />
      ))}
    </Box>
  );
};
