'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { HeaderProps } from '@/widgets/header';

import { LanguageSelect } from '@/features/change-language';
import { Avatar, Box, Button, Typography } from '@/shared/ui';
import { BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/ui/button/model/constants';

import { PlanixLogoIcon, NotificationErrorIcon, NotificationIcon } from '@/shared/ui/icons';

import styles from './Header.module.scss';

const { CIRCLE } = BUTTON_VARIANTS;
const { BUTTON } = BUTTON_TYPES;

const FALLBACK_PROFILE_AVATAR = 'RC';

export const Header: FC<HeaderProps> = ({ title }) => {
  const { t } = useTranslation('header');

  return (
    <header className={styles.header}>
      <Box className={styles.wrapper}>
        <Box className={styles.headerLeftSide}>
          <PlanixLogoIcon width={44} height={44} />
          <Typography as="span" className={styles.logoTitle}>
            {t('title')}
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

            {/* TODO: [Waiting for implementation AuthLogic] */}
            <Avatar className={styles.avatar} fallback={FALLBACK_PROFILE_AVATAR} />
          </Box>
        </Box>
      </Box>
    </header>
  );
};
