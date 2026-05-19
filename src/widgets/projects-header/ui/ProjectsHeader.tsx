'use client';

import type { FC } from 'react';

import { ProjectsHeaderItem } from '@/widgets/projects-header/index';
import { headerItems } from '@/widgets/projects-header/model/constants';

import type { ProjectsHeaderProps } from '@/widgets/projects-header/model/types';
import styles from '@/widgets/projects-header/ui/ProjectsHeader.module.scss';
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
