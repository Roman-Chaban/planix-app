import { type SingleValueProps, components } from 'react-select';

import type { LanguageOption } from '@/features/change-language';
import { Box, Typography } from '@/shared/ui';
import { OPTION_STYLES, OPTION_ICON_SHRINK } from '@/shared/ui/theme/model/styles';

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
