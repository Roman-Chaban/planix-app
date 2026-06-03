import type { FC } from 'react';

import type { DetailsDescriptionProps } from '@/widgets/project-details/ui/details';

import { Box, Typography } from '@/shared/ui';

import styles from './Details.module.scss';

export const DetailsDescription: FC<DetailsDescriptionProps> = ({ description, documentTitle }) => {
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
    </>
  );
};
