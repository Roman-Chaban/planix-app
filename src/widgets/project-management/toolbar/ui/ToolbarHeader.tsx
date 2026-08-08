'use client';

import type { ToolbarHeaderProps } from '../model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { buildClassName } from '@/shared/lib';
import { Box, List } from '@/shared/ui';

import { getHeaderItems } from '../../header/lib/get-header-items';

import styles from './Toolbar.module.scss';

import { ToolbarHeaderItem } from './ToolbarHeaderItem';

export const ToolbarHeader = ({ activeId, setActiveId, isSidebarOpen }: ToolbarHeaderProps) => {
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
