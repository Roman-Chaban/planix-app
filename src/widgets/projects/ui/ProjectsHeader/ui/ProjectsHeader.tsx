'use client';

import { useState } from 'react';

import { headerItems } from '@/widgets/projects/lib/headerItems/headerItems';
import styles from '@/widgets/projects/ui/ProjectsHeader/styles/projects-header.module.scss';
import { ProjectsHeaderItem } from '@/widgets/projects/ui/ProjectsHeader/ui/ProjectsHeaderItem';
import { Box, List } from '@/shared/ui';

export const ProjectsHeader = () => {
  const [activeId, setActiveId] = useState<string>(headerItems[0].id);

  return (
    <Box>
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
