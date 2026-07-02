import type { DescriptionProps } from '../model/types';

import type { FC } from 'react';

import { Box, Typography } from '@/shared/ui';

import { FileItem } from '../../files';

import styles from './Description.module.scss';

export const Description: FC<DescriptionProps> = ({
  description,
  documentTitle,
  files,
}) => {
  return (
    <>
      <Typography as="span" className={styles.text}>
        {description}
      </Typography>

      <Box>
        <Typography as="h2" className={styles.title}>
          {documentTitle}
        </Typography>
      </Box>

      <Box className={styles.files}>
        {files.map((file, index) => (
          <FileItem file={file} key={`${file.name}-${index}`} />
        ))}
      </Box>
    </>
  );
};
