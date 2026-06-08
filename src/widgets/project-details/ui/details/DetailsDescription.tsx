import type { FC } from 'react';

import { type DetailsDescriptionProps, FileItem } from '@/widgets/project-details/ui/details';

import { Box, Typography } from '@/shared/ui';

import styles from './Details.module.scss';

export const DetailsDescription: FC<DetailsDescriptionProps> = ({
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
