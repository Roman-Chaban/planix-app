'use client';

import { useTranslation } from 'react-i18next';

import { useProfile } from '@/entities/profile';
import { ROUTES } from '@/shared/config';

import { NAMESPACE as NS } from '@/shared/i18n/namespaces/namespaces';
import { BREAKPOINTS } from '@/shared/lib';
import { useMediaQuery } from '@/shared/lib/hooks';
import { AppLink, Avatar, Box, Button, Tooltip } from '@/shared/ui';

import { AVATAR_VARIANTS } from '@/shared/ui/avatar';
import { BUTTON_SIZES } from '@/shared/ui/button';
import { NotificationErrorIcon, NotificationIcon } from '@/shared/ui/icons';

import { TOOLTIP_POSITION } from '@/shared/ui/tooltip';

import styles from './header.module.scss';
import { HeaderActionsSkeleton } from './skeleton/header-actions-skeleton';

const { AUTH, SETTINGS } = ROUTES;
const { BOTTOM, LEFT } = TOOLTIP_POSITION;
const { CIRCLE } = AVATAR_VARIANTS;
const { MOBILE_LARGE } = BREAKPOINTS;
const { SMALL, MEDIUM } = BUTTON_SIZES;

export const HeaderActions = () => {
  const { t } = useTranslation(NS.HEADER);

  const { profile, isLoading } = useProfile();

  const isMobileLargeScreen = useMediaQuery(MOBILE_LARGE);

  const authButtonSize = isMobileLargeScreen ? SMALL : MEDIUM;

  return (
    <Box className={styles.headerAuth}>
      <Button
        preset="NOTIFICATION"
        className={styles.button}
        endIcon={<NotificationErrorIcon />}
        endIconClassName={styles.endIcon}
      >
        <NotificationIcon />
      </Button>

      {isLoading ? (
        <HeaderActionsSkeleton />
      ) : !profile ? (
        <Tooltip position={BOTTOM} message={t('logIn')}>
          <Button preset="HEADER_LOGIN" size={authButtonSize}>
            <AppLink href={AUTH} className={styles.link}>
              {t('login')}
            </AppLink>
          </Button>
        </Tooltip>
      ) : (
        <Tooltip position={LEFT} message={t('settingsTooltip')}>
          <AppLink href={SETTINGS}>
            <Avatar
              width={48}
              height={48}
              variant={CIRCLE}
              alt={profile.fullName}
              src={profile.avatarUrl}
              fallback={profile.initials}
              className={styles.avatar}
            />
          </AppLink>
        </Tooltip>
      )}
    </Box>
  );
};
