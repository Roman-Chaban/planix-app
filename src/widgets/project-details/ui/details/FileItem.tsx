import type { FC } from 'react';

import { type FileItemProps, getFileIcon } from '@/widgets/project-details/ui/details';
import { LINK_TARGETS } from '@/shared/constants';
import { Box } from '@/shared/ui';

import styles from './Details.module.scss';

const { BLANK } = LINK_TARGETS;

export const FileItem: FC<FileItemProps> = ({ file }) => {
  const { icon, type, ext } = getFileIcon(file.name);
  const isImage = type === 'image';

  return (
    <Box className={`${styles.file} ${styles[`file-${ext}`]}`}>
      <Box className={`${styles.iconBox} ${isImage ? styles.iconBoxImage : ''}`}>{icon}</Box>
      <a href={file.url} target={BLANK} rel="noopener noreferrer" className={styles.link}>
        {file.name}
      </a>
    </Box>
  );
};
