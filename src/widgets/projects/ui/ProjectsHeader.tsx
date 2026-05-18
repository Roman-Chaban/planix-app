'use client';

import type { FC } from 'react';

import { headerItems } from '@/widgets/projects/config/HeaderItems.constants';

import type { ProjectsHeaderProps } from '@/widgets/projects/config/ProjectsHeader.types';
import styles from '@/widgets/projects/ui/ProjectsHeader.module.scss';
import { ProjectsHeaderItem } from '@/widgets/projects/ui/ProjectsHeaderItem';
import { Box, List } from '@/shared/ui';

export const ProjectsHeader: FC<ProjectsHeaderProps> = ({ activeId, setActiveId }) => {
  return (
    <Box className={styles.scrollContainer}>
      <List
        className={styles.list}
        renderList={headerItems}
        getItemKey={(key) => key.id}
        renderItem={(item) => (
          <ProjectsHeaderItem
            id={item.id}
            label={item.label}
            isActive={item.id === activeId}
            onClick={() => setActiveId(item.id)}
          />
        )}
      />
    </Box>
  );
};
