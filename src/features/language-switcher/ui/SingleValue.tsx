import { type SingleValueProps, components } from 'react-select';

import type { LanguageOption } from '@/features/language-switcher';
import { Box, Typography } from '@/shared/ui';
import { LanguageIcon } from '@/shared/ui/icons';
import { OPTION_LABEL, OPTION_STYLES } from '@/shared/ui/theme/lib/styles';

export const SingleValue = (valueProps: SingleValueProps<LanguageOption>) => {
  return (
    <components.SingleValue {...valueProps}>
      <Box style={OPTION_STYLES}>
        <LanguageIcon />
        <Typography as="span" style={OPTION_LABEL}>
          {valueProps.data.label}
        </Typography>
      </Box>
    </components.SingleValue>
  );
};
