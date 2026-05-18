import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { SidebarNavItem as SidebarNavItemProps } from '@/widgets/sidebar/model/types';
import styles from '@/widgets/sidebar/styles/sidebar.module.scss';

import { buildClassName } from '@/shared/lib/classnames/buildClassName';
import { AppLink, Box } from '@/shared/ui';

export const SidebarNavItem: FC<SidebarNavItemProps> = ({
  id: key,
  icon: Icon,
  label,
  href,
  isActive,
}) => {
  const { t } = useTranslation();

  return (
    <Box className={buildClassName(styles.item, isActive && styles.active)} key={key}>
      <Icon />
      <AppLink href={href}>{t(label)}</AppLink>
    </Box>
  );
};
