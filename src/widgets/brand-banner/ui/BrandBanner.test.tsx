import { render, screen } from '@testing-library/react';

import { BrandBanner } from '@/widgets/brand-banner';
import { useMediaQuery } from '@/shared/lib/hooks';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock('@/shared/lib/hooks');

const mockedUseMediaQuery = useMediaQuery as jest.Mock;

const setup = (isMobile: boolean) => {
  mockedUseMediaQuery.mockReturnValue(isMobile);

  return render(<BrandBanner />);
};

jest.mock('@/shared/ui/icons/icons', () => ({
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

    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('renders subtitle', () => {
    setup(false);

    expect(screen.getByText('subtitle')).toBeInTheDocument();
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
