'use client';

import type { FC } from 'react';

import {
  ProjectHeaderItem,
  type ProjectHeaderProps,
} from '@/widgets/projects-toolbar';
import { headerItems } from '@/widgets/projects-toolbar/model/constants';

import { buildClassName } from '@/shared/lib';
import { Box, List } from '@/shared/ui';

import styles from './ProjectsToolbar.module.scss';

export const ProjectHeader: FC<ProjectHeaderProps> = ({
  activeId,
  setActiveId,
  isSidebarOpen,
}) => {
  return (
    <Box
      className={buildClassName(styles.scrollContainer, {
        [styles.collapsed]: !isSidebarOpen,
      })}
    >
      <List
        className={styles.list}
        renderList={headerItems}
        getItemKey={(item) => item.id}
        renderItem={(item) => (
          <ProjectHeaderItem
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
