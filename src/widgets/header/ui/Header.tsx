'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';
import type { HeaderProps } from '@/widgets/header';

import { LanguageSelect } from '@/features/change-language';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { AppLink, Box, Button, Typography } from '@/shared/ui';
import { BUTTON_SHAPES, BUTTON_SIZES, BUTTON_TYPES } from '@/shared/ui/button';

import { NotificationErrorIcon, NotificationIcon } from '@/shared/ui/icons';

import styles from './Header.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { CIRCLE, ROUNDED } = BUTTON_SHAPES;
const { SMALL, MEDIUM } = BUTTON_SIZES;

const { LOGIN } = ROUTES;

export const Header: FC<HeaderProps> = ({ title }) => {
  const { t } = useTranslation(NS.HEADER);

  return (
    <header className={styles.header}>
      <Box className={styles.wrapper}>
        <Box className={styles.headerRightSide}>
          <Typography as="h1" className={styles.title}>
            {t(title)}
          </Typography>
          <Box className={styles.headerAuth}>
            <LanguageSelect />

            <Button
              type={BUTTON}
              shape={CIRCLE}
              size={SMALL}
              className={styles.button}
              endIcon={<NotificationErrorIcon />}
              endIconClassName={styles.endIcon}
            >
              <NotificationIcon />
            </Button>

            <Button type={BUTTON} size={MEDIUM} shape={ROUNDED}>
              <AppLink href={LOGIN} className={styles.link}>
                {t('login')}
              </AppLink>
            </Button>
          </Box>
        </Box>
      </Box>
    </header>
  );
};
