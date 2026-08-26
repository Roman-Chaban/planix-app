import type { FilePreviewProps } from '../model/types';

import { Box, Button, Typography } from '@/shared/ui';

import { BUTTON_TYPES } from '@/shared/ui/button/lib/constants';
import { CloseIcon, PdfIcon, UploadIcon } from '@/shared/ui/icons';

import styles from './file-upload.module.scss';

const { BUTTON } = BUTTON_TYPES;

export const FilePreview = ({ file, onRemove }: FilePreviewProps) => {
  const isPdf =
    file instanceof File
      ? file.type === 'application/pdf'
      : file.name.toLowerCase().endsWith('.pdf');

  return (
    <Box className={styles.fileCard}>
      <Button
        type={BUTTON}
        className={styles.removeButton}
        onClick={onRemove}
        aria-label={`Remove ${file.name}`}
      >
        <CloseIcon width={12} height={12} />
      </Button>

      <Box className={`${styles.fileIconWrapper} ${isPdf ? styles.pdfType : styles.photoType}`}>
        {isPdf ? <PdfIcon /> : <UploadIcon />}
      </Box>

      <Box className={styles.fileNameBadge}>
        <Typography as="span" className={styles.fileNameText}>
          {file.name}
        </Typography>
      </Box>
    </Box>
  );
};
