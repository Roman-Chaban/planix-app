'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-management/ui/header';
import {
  ToolbarHeaderItem,
  type ToolbarHeaderProps,
} from '@/widgets/project-management/ui/toolbar';

import { NAMESPACE as NS } from '@/shared/i18n';
import { buildClassName } from '@/shared/lib';
import { Box, List } from '@/shared/ui';

import styles from './Toolbar.module.scss';

export const ToolbarHeader: FC<ToolbarHeaderProps> = ({
  activeId,
  setActiveId,
  isSidebarOpen,
}) => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);

  const headerItems = getHeaderItems(t);

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
          <ToolbarHeaderItem
            {...item}
            isActive={item.id === activeId}
            onClick={() => setActiveId(item.id)}
          />
        )}
      />
    </Box>
  );
};
