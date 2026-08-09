import type { InfoCardProps } from '../model/info.types';

import { Box, Typography } from '@/shared/ui';

export const InfoCard = ({ className, title, titleClassName, children }: InfoCardProps) => {
  return (
    <Box as="article" className={className}>
      <Typography as="h2" className={titleClassName}>
        {title}
      </Typography>

      {children}
    </Box>
  );
};
