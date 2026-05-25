'use client';

import type { FC } from 'react';

import { ProjectsHeaderItem } from '@/widgets/projects-header';
import { headerItems } from '@/widgets/projects-header/model/constants';

import type { ProjectsHeaderProps } from '@/widgets/projects-header/model/types';

import { Box, List } from '@/shared/ui';

import styles from './ProjectsHeader.module.scss';

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
