import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import type { DashboardHeaderProps } from '@/widgets/dashboard/model/types';
import { BUTTON_TYPES, BUTTON_VARIANTS } from '@/shared/constants/buttons';
import { Avatar, Box, Button, LanguageSelect, Typography } from '@/shared/ui';

import { PlanixLogoIcon, NotificationErrorIcon } from '@/shared/ui/icons';

import styles from './styles.module.scss';

const { CIRCLE } = BUTTON_VARIANTS;
const { BUTTON } = BUTTON_TYPES;

const FALLBACK_PROFILE_AVATAR = 'RC';

export const DashboardHeader: FC<DashboardHeaderProps> = ({ title, icon }) => {
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
            {title}
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
              {icon}
            </Button>

            {/* Mock: [Waiting for implementation AuthLogic] */}
            <Avatar className={styles.avatar} fallback={FALLBACK_PROFILE_AVATAR} />
          </Box>
        </Box>
      </Box>
    </header>
  );
};
