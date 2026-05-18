import { render, screen } from '@testing-library/react';

import { useMediaQuery } from '@/shared/lib/hooks';
import type { IconProps } from '@/shared/ui/icons/Icons.types';
import { NotFoundLayout } from '@/screens/not-found/NotFound';

jest.mock('@/shared/lib/hooks/useMediaQuery');

jest.mock('@/shared/ui/icons/index', () => ({
  NotFoundBanner: (props: IconProps) => (
    <div data-testid="banner" data-props={JSON.stringify(props)} />
  ),
  NotFoundTextDecartionIcon: (props: IconProps) => (
    <div data-testid="text-icon" data-props={JSON.stringify(props)} />
  ),
}));

const mockedUseMediaQuery = useMediaQuery as jest.Mock;

const setup = (isLaptop: boolean) => {
  mockedUseMediaQuery.mockReturnValue(isLaptop);
  render(<NotFoundLayout />);
};

const getProps = (testId: string) =>
  JSON.parse(screen.getByTestId(testId).getAttribute('data-props') || '{}');

describe('NotFoundLayout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render layout', () => {
    setup(false);

    expect(screen.getByTestId('banner')).toBeInTheDocument();
    expect(screen.getByTestId('text-icon')).toBeInTheDocument();
  });

  it('should pass size props on laptop screen', () => {
    setup(true);

    expect(getProps('banner')).toEqual({ width: 330, height: 330 });
    expect(getProps('text-icon')).toEqual({ width: 330, height: 330 });
  });

  it('should not pass size props on non-laptop screen', () => {
    setup(false);

    expect(getProps('banner')).toEqual({});
    expect(getProps('text-icon')).toEqual({});
  });
});
