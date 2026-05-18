'use client';

import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { HeaderProps } from '@/widgets/header/model/types';
import styles from '@/widgets/header/styles/header.module.scss';
import { LanguageSelect } from '@/features/change-language';
import { BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/config/ui/buttons';
import { Avatar, Box, Button, Typography } from '@/shared/ui';

import { PlanixLogoIcon, NotificationErrorIcon, NotificationIcon } from '@/shared/ui/icons';

const { CIRCLE } = BUTTON_VARIANTS;
const { BUTTON } = BUTTON_TYPES;

const FALLBACK_PROFILE_AVATAR = 'RC';

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

            {/* TODO: [Waiting for implementation AuthLogic] */}
            <Avatar className={styles.avatar} fallback={FALLBACK_PROFILE_AVATAR} />
          </Box>
        </Box>
      </Box>
    </header>
  );
};
