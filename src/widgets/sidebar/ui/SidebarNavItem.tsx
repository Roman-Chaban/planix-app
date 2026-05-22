import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { SidebarNavItem as SidebarNavItemProps } from '@/widgets/sidebar/model/types';

import { buildClassName } from '@/shared/lib';
import { AppLink, Box, Typography } from '@/shared/ui';

import styles from './Sidebar.module.scss';

export const SidebarNavItem: FC<SidebarNavItemProps> = ({
  id: key,
  icon: Icon,
  label,
  href,
  isActive,
}) => {
  const { t } = useTranslation();

  return (
    <AppLink href={href} key={key}>
      <Box className={buildClassName(styles.item, isActive && styles.active)}>
        <Icon />
        <Typography className={styles.label}>{t(label)}</Typography>
      </Box>
    </AppLink>
  );
};
