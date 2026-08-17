import type { ProfileInfoListProps } from '../model/details.types';

import { Box } from '@/shared/ui';

import { profileFields } from '../lib/get-info-fields';

import styles from './Details.module.scss';
import { DetailsItem } from './DetailsItem';

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
