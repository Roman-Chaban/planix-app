import type { ProfileInfoListProps } from '../model/types';

import { Box } from '@/shared/ui';

import { profileFields } from '../lib/get-info-fields';

import { DetailsItem } from './details-item';
import styles from './details.module.scss';

export const DetailsList = ({ profile, t }: ProfileInfoListProps) => {
  if (!profile) return null;

  return (
    <Box className={styles.information}>
      {profileFields.map((field) => (
        <DetailsItem key={field.key} t={t} label={field.label} value={field.getter(profile)} />
      ))}
    </Box>
  );
};
