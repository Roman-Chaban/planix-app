'use client';

import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/app/routes';

import { LanguageSelect } from '@/features/change-language';
import { useProfile } from '@/entities/profile/api';
import { NAMESPACE as NS } from '@/shared/lib/i18n/namespaces';
import { AppLink, Avatar, Box, Button, Tooltip } from '@/shared/ui';
import { BUTTON_SHAPES, BUTTON_SIZES, BUTTON_TYPES } from '@/shared/ui/button';

import { NotificationErrorIcon, NotificationIcon } from '@/shared/ui/icons';

import { TOOLTIP_POSITION } from '@/shared/ui/tooltip';

import styles from './Header.module.scss';

const { BUTTON } = BUTTON_TYPES;
const { CIRCLE, ROUNDED } = BUTTON_SHAPES;
const { SMALL, MEDIUM } = BUTTON_SIZES;

const { AUTH, SETTINGS } = ROUTES;
const { BOTTOM, LEFT } = TOOLTIP_POSITION;

export const HeaderActions = () => {
  const { t } = useTranslation(NS.HEADER);
  const { data: profile, isLoading } = useProfile();

  if (isLoading) return null;

  return (
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

      {!profile ? (
        <Tooltip position={BOTTOM} message={t('logIn')}>
          <Button type={BUTTON} size={MEDIUM} shape={ROUNDED}>
            <AppLink href={AUTH} className={styles.link}>
              {t('login')}
            </AppLink>
          </Button>
        </Tooltip>
      ) : (
        <Tooltip position={LEFT} message={t('settingsTooltip')}>
          <AppLink href={SETTINGS}>
            <Avatar
              alt={profile.fullName}
              fallback={profile.initials}
              className={styles.avatar}
            />
          </AppLink>
        </Tooltip>
      )}
    </Box>
  );
};
