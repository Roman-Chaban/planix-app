import { type SingleValueProps, components } from 'react-select';

import { OPTION_STYLES, OPTION_ICON_SHRINK } from '@/shared/constants/styles';
import { Box, Typography } from '@/shared/ui/index';
import type { LanguageOption } from '@/shared/ui/language-select/model/types';

export const SingleValue = (valueProps: SingleValueProps<LanguageOption>) => {
  const Icon = valueProps.data.icon;

  return (
    <components.SingleValue {...valueProps}>
      <Box style={OPTION_STYLES}>
        <Icon style={OPTION_ICON_SHRINK} />
        <Typography as="span">{valueProps.data.label}</Typography>
      </Box>
    </components.SingleValue>
  );
};
