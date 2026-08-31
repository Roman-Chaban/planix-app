import { type SingleValueProps, components } from 'react-select';

import type { LanguageOption } from '@/features/language-switcher';
import { Box, Typography } from '@/shared/ui';
import { LanguageIcon } from '@/shared/ui/icons';

export const SingleValue = (valueProps: SingleValueProps<LanguageOption>) => {
  return (
    <components.SingleValue {...valueProps}>
      <Box>
        <LanguageIcon />
        <Typography as="span">{valueProps.data.label}</Typography>
      </Box>
    </components.SingleValue>
  );
};
