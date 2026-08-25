'use client';

import type { PlatformOption, PlatformSelectProps } from './model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Select } from '@/shared/ui';

import { usePlatformSelect } from '../../model/use-platform-select';

import { DropdownIndicator } from './custom-dropdown-indicator';
import styles from './toolbar.module.scss';

export const PlatformSelect = ({ platformId, projects, setPlatformId }: PlatformSelectProps) => {
  const { t } = useTranslation(NS.PROJECTS);

  const { options, selectedOption, selectStyles, handleChange } = usePlatformSelect({
    platformId,
    setPlatformId,
    projects,
  });

  return (
    <Select<PlatformOption>
      className={styles.platformSelect}
      options={options}
      value={selectedOption}
      styles={selectStyles}
      placeholder={t('select.platformPlaceholder')}
      components={{ DropdownIndicator }}
      onChange={handleChange}
      isSearchable={false}
    />
  );
};
