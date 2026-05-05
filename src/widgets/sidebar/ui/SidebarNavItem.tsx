import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { SidebarNavItem as SidebarNavItemProps } from '@/widgets/sidebar/model/types';
import { buildClassName } from '@/shared/lib/helpers/buildClassName/buildClassName';
import { AppLink, Box } from '@/shared/ui';

import styles from '../styles/styles.module.scss';

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
