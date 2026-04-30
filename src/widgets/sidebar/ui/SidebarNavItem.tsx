import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { SidebarNavItem as SidebarNavItemProps } from '@/widgets/sidebar/model/types';
import { classNames } from '@/shared/lib/helpers/class-names';
import { AppLink, Box } from '@/shared/ui';

import styles from './styles.module.scss';

export const SidebarNavItem: FC<SidebarNavItemProps> = ({
  id: key,
  icon: Icon,
  label,
  href,
  isActive,
}) => {
  const { t } = useTranslation();

  return (
    <Box className={classNames(styles.item, isActive && styles.active)} key={key}>
      <Icon />
      <AppLink href={href}>{t(label)}</AppLink>
    </Box>
  );
};
