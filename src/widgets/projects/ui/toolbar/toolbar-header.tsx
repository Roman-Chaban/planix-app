'use client';

import type { ToolbarHeaderProps } from './model/types';

import { useTranslation } from 'react-i18next';

import { getHeaderItems } from '@/widgets/project-details/ui/header/lib/get-header-items';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, List } from '@/shared/ui';

import { ToolbarHeaderItem } from './toolbar-header-item';
import styles from './toolbar.module.scss';

export const ToolbarHeader = ({ statusId, setStatusId }: ToolbarHeaderProps) => {
  const { t } = useTranslation(NS.PROJECTS);

  const headerItems = getHeaderItems(t);

  return (
    <Box className={styles.scrollContainer}>
      <List
        className={styles.list}
        renderList={headerItems}
        getItemKey={({ id }) => id}
        renderItem={(item) => (
          <ToolbarHeaderItem
            {...item}
            isActive={item.id === statusId}
            onClick={() => setStatusId(item.id)}
          />
        )}
      />
    </Box>
  );
};
