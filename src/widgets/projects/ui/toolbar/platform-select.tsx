import type { PlatformOption, PlatformSelectProps } from './model/types';

import { useTranslation } from 'react-i18next';

import { NAMESPACE as NS } from '@/shared/i18n';
import { Select, CustomDropdownIndicator } from '@/shared/ui';

import { PlatformDropdownIcon } from '@/shared/ui/icons';

import { usePlaformSelect } from '../../model/use-platform-select';

export const PlatformSelect = ({ activeId, setActiveId, projects }: PlatformSelectProps) => {
  const { t } = useTranslation(NS.PROJECT_MANAGEMENT);

  const { options, selectedOption, selectStyles, handleChange } = usePlaformSelect({
    activeId,
    setActiveId,
    projects,
  });

  return (
    <Select<PlatformOption>
      options={options}
      value={selectedOption}
      styles={selectStyles}
      placeholder={t('platformPlaceholder')}
      components={{
        DropdownIndicator: (props) => (
          <CustomDropdownIndicator {...props} icon={<PlatformDropdownIcon />} />
        ),
      }}
      onChange={handleChange}
      isSearchable={false}
    />
  );
};
