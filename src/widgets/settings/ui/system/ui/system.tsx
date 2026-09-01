'use client';

import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/features/language-switcher';
import { ChangePasswordForm } from '@/features/profile/change-password';
import { SettingsSwitchList } from '@/features/profile/settings-switch';
import { useProfile } from '@/entities/profile';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box } from '@/shared/ui';

import { securityList } from '../lib/security-list';

import { SystemSection } from './system-section';
import styles from './system.module.scss';

export const System = () => {
  const { t } = useTranslation(NS.SETTINGS);

  const { profile } = useProfile();

  const visibleSecurityList = securityList.filter((item) => !item.requiresAuth || profile);

  return (
    <Box className={styles.system}>
      <SystemSection title={t('system.languageTitle')}>
        <Box className={styles.content}>
          <LanguageSwitcher />
        </Box>
      </SystemSection>

      <SystemSection title={t('system.securityTitle')}>
        <SettingsSwitchList list={visibleSecurityList} />
      </SystemSection>

      {profile && (
        <SystemSection title={t('system.changePasswordTitle')}>
          <Box className={styles.content}>
            <ChangePasswordForm
              translationNamespace={NS.SETTINGS}
              buttonLabel={t('system.savePassword')}
              successMessage={t('system.toast.changePasswordSuccess')}
              errorMessage={t('system.toast.changePasswordError')}
            />
          </Box>
        </SystemSection>
      )}
    </Box>
  );
};
