import { BREAKPOINTS } from '../common/constants';

import { useResponsiveValue } from './useResponsiveValue';

const { MOBILE_LARGE } = BREAKPOINTS;

export const usePageTitles = () => {
  const pageTitle = useResponsiveValue({
    largeScreenValue: 'projects',
    smallScreenValue: 'mobile.projects',
    breakpoint: MOBILE_LARGE,
  });

  const headerTitle = useResponsiveValue({
    smallScreenValue: 'header.mobileTitle',
    largeScreenValue: 'header.title',
    breakpoint: MOBILE_LARGE,
  });

  return { pageTitle, headerTitle };
};
