import type { FC } from 'react';

import type { ProjectDetailsCardProps } from '@/widgets/project-details';
import { Box, Typography } from '@/shared/ui';

export const ProjectDetailsCard: FC<ProjectDetailsCardProps> = ({
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
