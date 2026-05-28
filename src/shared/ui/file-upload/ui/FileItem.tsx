import type { FC } from 'react';

import { Box, Button, Typography } from '@/shared/ui';

import { CloseIcon, PdfIcon, UploadIcon } from '@/shared/ui/icons';

import styles from './FileUpload.module.scss';

type FileItemProps = {
  file: File;
  onRemove: () => void;
};

export const FileItem: FC<FileItemProps> = ({ file, onRemove }) => {
  const isPdf = file.type === 'application/pdf' || file.name.endsWith('.pdf');

  return (
    <Box className={styles.fileCard}>
      <Button type="button" className={styles.removeButton} onClick={onRemove}>
        <CloseIcon width={12} height={12} />
      </Button>

      <Box className={`${styles.fileIconWrapper} ${isPdf ? styles.pdfType : styles.photoType}`}>
        {isPdf ? <PdfIcon /> : <UploadIcon />}
      </Box>

      <Box className={styles.fileNameBadge}>
        <Typography className={styles.fileNameText}>{file.name}</Typography>
      </Box>
    </Box>
  );
};
