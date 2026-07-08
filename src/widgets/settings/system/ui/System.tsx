'use client';

import { useTranslation } from 'react-i18next';

import { LanguageSelect } from '@/features/language-switcher';
import { ChangePasswordForm } from '@/features/profile/change-password';
import { SettingSwitchList } from '@/features/profile/settings-switch';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box, SettingsHeader } from '@/shared/ui';

import { securityList } from '../lib/security-list';

import styles from './System.module.scss';

export const System = () => {
  const { t } = useTranslation(NS.SETTINGS);

  return (
    <Box className={styles.system}>
      <Box className={styles.systemContainer}>
        <SettingsHeader title={t('system.languageTitle')} />
        <Box className={styles.content}>
          <LanguageSelect />
        </Box>
      </Box>
      <Box className={styles.systemContainer}>
        <SettingsHeader title={t('system.securityTitle')} />
        <SettingSwitchList list={securityList} t={t} />
      </Box>
      <Box className={styles.systemContainer}>
        <SettingsHeader title={t('system.changePasswordTitle')} />
        <Box className={styles.content}>
          <ChangePasswordForm
            translationNamespace={NS.SETTINGS}
            buttonLabel={t('system.savePassword')}
          />
        </Box>
      </Box>
    </Box>
  );
};
