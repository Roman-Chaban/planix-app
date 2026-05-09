import { type SingleValueProps, components } from 'react-select';

import { OPTION_STYLES, OPTION_ICON_SHRINK } from '@/shared/constants/styles';
import { Box, Typography } from '@/shared/ui/index';
import type { LanguageOption } from '@/shared/ui/language-select/model/types';

export const SingleValue = (props: SingleValueProps<LanguageOption>) => {
  const Icon = props.data.icon;

  return (
    <components.SingleValue {...props}>
      <Box style={OPTION_STYLES}>
        <Icon style={OPTION_ICON_SHRINK} />
        <Typography as="span">{props.data.label}</Typography>
      </Box>
    </components.SingleValue>
  );
};
