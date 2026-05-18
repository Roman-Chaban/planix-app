import { type OptionProps, components } from 'react-select';

import type { LanguageOption } from '@/features/change-language/model/types';
import { Box, Typography } from '@/shared/ui/index';
import { OPTION_STYLES, OPTION_ICON_SHRINK } from '@/shared/ui/theme/styles';

export const Option = (selectProps: OptionProps<LanguageOption>) => {
  const Icon = selectProps.data.icon;

  return (
    <components.Option {...selectProps}>
      <Box style={OPTION_STYLES}>
        <Icon style={OPTION_ICON_SHRINK} />
        <Typography as="span">{selectProps.data.label}</Typography>
      </Box>
    </components.Option>
  );
};
