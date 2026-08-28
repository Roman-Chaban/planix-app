import { type OptionProps, components } from 'react-select';

import type { LanguageOption } from '@/features/language-switcher';
import { Box, Typography } from '@/shared/ui';

export const Option = (selectProps: OptionProps<LanguageOption>) => {
  const Icon = selectProps.data.icon;

  return (
    <components.Option {...selectProps}>
      <Box>
        <Icon />
        <Typography as="span">{selectProps.data.label}</Typography>
      </Box>
    </components.Option>
  );
};
