'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/constants/buttons';
import { Avatar, Box, Button, LanguageSelect, Typography } from '@/shared/ui';

import { PlanixLogoIcon, NotificationErrorIcon, NotificationIcon } from '@/shared/ui/icons';

import styles from '../styles/styles.module.scss';

const { CIRCLE } = BUTTON_VARIANTS;
const { BUTTON } = BUTTON_TYPES;

const FALLBACK_PROFILE_AVATAR = 'RC';

export type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <Box className={styles.wrapper}>
        <Box className={styles.headerLeftSide}>
          <PlanixLogoIcon width={44} height={44} />
          <Typography as="span" className={styles.logoTitle}>
            {t('BrandBanner.title')}
          </Typography>
        </Box>

        <Box className={styles.headerRightSide}>
          <Typography as="h2" className={styles.title}>
            {t(title)}
          </Typography>
          <Box className={styles.headerAuth}>
            <LanguageSelect />

            <Button
              type={BUTTON}
              variant={CIRCLE}
              className={styles.button}
              endIcon={<NotificationErrorIcon />}
              endIconClassName={styles.endIcon}
            >
              <NotificationIcon />
            </Button>

            {/* Mock: [Waiting for implementation AuthLogic] */}
            <Avatar className={styles.avatar} fallback={FALLBACK_PROFILE_AVATAR} />
          </Box>
        </Box>
      </Box>
    </header>
  );
};
