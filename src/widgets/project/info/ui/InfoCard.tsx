import type { InfoCardProps } from '../model/types';

import type { FC } from 'react';

import { Box, Typography } from '@/shared/ui';

export const InfoCard: FC<InfoCardProps> = ({
  className,
  title,
  titleClassName,
  children,
}) => {
  return (
    <Box as="article" className={className}>
      <Typography as="h2" className={titleClassName}>
        {title}
      </Typography>

      {children}
    </Box>
  );
};
