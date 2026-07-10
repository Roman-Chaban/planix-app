'use client';

import { useTranslation } from 'react-i18next';

import { LanguageSelect } from '@/features/language-switcher';
import { ChangePasswordForm } from '@/features/profile/change-password';
import { SettingSwitchList } from '@/features/profile/settings-switch';
import { NAMESPACE as NS } from '@/shared/i18n';
import { Box } from '@/shared/ui';

import { securityList } from '../lib/security-list';

import styles from './System.module.scss';
import { SystemSection } from './SystemSection';

export const System = () => {
  const { t } = useTranslation(NS.SETTINGS);

  return (
    <Box className={styles.system}>
      <SystemSection title={t('system.languageTitle')}>
        <Box className={styles.content}>
          <LanguageSelect />
        </Box>
      </SystemSection>

      <SystemSection title={t('system.securityTitle')}>
        <SettingSwitchList list={securityList} />
      </SystemSection>

      <SystemSection title={t('system.changePasswordTitle')}>
        <Box className={styles.content}>
          <ChangePasswordForm
            translationNamespace={NS.SETTINGS}
            buttonLabel={t('system.savePassword')}
          />
        </Box>
      </SystemSection>
    </Box>
  );
};
