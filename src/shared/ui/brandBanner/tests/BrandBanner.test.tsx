import { render, screen } from '@testing-library/react';

import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { BrandBanner } from '@/shared/ui/index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock('@/shared/hooks/useMediaQuery');

const mockedUseMediaQuery = useMediaQuery as jest.Mock;

const setup = (isMobile: boolean) => {
  mockedUseMediaQuery.mockReturnValue(isMobile);

  return render(<BrandBanner />);
};

jest.mock('@/shared/ui/icons/ui/Icons', () => ({
  PlanixLogoIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg data-testid="logo-icon" {...props} />
  ),
}));

describe('BrandBanner', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title', () => {
    setup(false);

    expect(screen.getByText('BrandBanner.title')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    setup(false);

    expect(screen.getByText('BrandBanner.subtitle')).toBeInTheDocument();
  });

  it('renders logo icon', () => {
    setup(false);

    expect(screen.getByTestId('logo-icon')).toBeInTheDocument();
  });

  it('uses mobile logo sizes on mobile screens', () => {
    setup(true);

    const logo = screen.getByTestId('logo-icon');

    expect(logo).toHaveAttribute('width', '60');
    expect(logo).toHaveAttribute('height', '60');
  });

  it('uses default logo sizes on desktop screens', () => {
    setup(false);

    const logo = screen.getByTestId('logo-icon');

    expect(logo).not.toHaveAttribute('width');
    expect(logo).not.toHaveAttribute('height');
  });
});
