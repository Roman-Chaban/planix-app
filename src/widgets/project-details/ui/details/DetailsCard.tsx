import type { FC } from 'react';

import type { DetailsCardProps } from '@/widgets/project-details/ui/details';
import { Box, Typography } from '@/shared/ui';

export const DetailsCard: FC<DetailsCardProps> = ({
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
