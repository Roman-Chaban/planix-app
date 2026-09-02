import { render, screen } from '@testing-library/react';

import { NotFoundLayout } from '@/widgets/not-found';
import { useMediaQuery } from '@/shared/lib/hooks';
import type { IconProps } from '@/shared/ui/icons/model/types';

jest.mock('@/shared/lib/hooks');

const mockedUseMediaQuery = jest.mocked(useMediaQuery);

jest.mock('@/shared/ui/icons', () => ({
  NotFoundBanner: (props: IconProps) => (
    <div data-testid="banner" data-props={JSON.stringify(props)} />
  ),
  NotFoundTextDecartionIcon: (props: IconProps) => (
    <div data-testid="text-icon" data-props={JSON.stringify(props)} />
  ),
}));

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
