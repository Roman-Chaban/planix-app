'use client';

import { useTranslation } from 'react-i18next';

import { HeaderActions, type HeaderProps } from '@/widgets/header';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { Box, Typography } from '@/shared/ui';

import styles from './Header.module.scss';

export const Header = ({ title }: HeaderProps) => {
  const { t } = useTranslation(NS.HEADER);

  return (
    <header className={styles.header}>
      <Box className={styles.wrapper}>
        <Box className={styles.headerRightSide}>
          <Typography as="h1" className={styles.title}>
            {t(title)}
          </Typography>
          <HeaderActions />
        </Box>
      </Box>
    </header>
  );
};
