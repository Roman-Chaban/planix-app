import type { DescriptionProps } from '../model/description.types';

import { Box, Typography } from '@/shared/ui';

import { FileItem } from '../../../../project/files';

import styles from './Description.module.scss';

export const Description = ({ description, documentTitle, files }: DescriptionProps) => {
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
