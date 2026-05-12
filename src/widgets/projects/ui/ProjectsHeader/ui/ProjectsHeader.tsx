'use client';

import type { FC } from 'react';

import { headerItems } from '@/widgets/projects/lib/header-items/header-items';

import styles from '@/widgets/projects/styles/projects.module.scss';
import type { ProjectsHeaderProps } from '@/widgets/projects/ui/ProjectsHeader/model/types';
import { ProjectsHeaderItem } from '@/widgets/projects/ui/ProjectsHeader/ui/ProjectsHeaderItem';
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
