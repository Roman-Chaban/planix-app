import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { SidebarNavItem as SidebarNavItemProps } from '@/widgets/sidebar/model/types';
import styles from '@/widgets/sidebar/ui/Sidebar.module.scss';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import { AppLink, Box, Typography } from '@/shared/ui';

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
