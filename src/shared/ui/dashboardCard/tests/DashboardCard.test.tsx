import { screen } from '@testing-library/react';

import { createSetup } from '@/shared/tests/mocks/mocks';
import { DashboardCard } from '@/shared/ui/index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const setup = createSetup(DashboardCard);

describe('DashboardCard', () => {
  it('renders label', () => {
    setup({
      id: '1',
      label: 'label',
      name: 'name',
      value: 'value',
      trend: 'trend',
      trendType: 'success',
    });

    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('renders value', () => {
    setup({
      id: '1',
      label: 'label',
      name: 'name',
      value: 'value',
      trend: 'trend',
      trendType: 'success',
    });

    expect(screen.getByText('value')).toBeInTheDocument();
  });

  it('renders name', () => {
    setup({
      id: '1',
      label: 'label',
      name: 'name',
      value: 'value',
      trend: 'trend',
      trendType: 'success',
    });

    expect(screen.getByText('name')).toBeInTheDocument();
  });

  it('renders trend', () => {
    setup({
      id: '1',
      label: 'label',
      name: 'name',
      value: 'value',
      trend: 'trend',
      trendType: 'success',
    });

    expect(screen.getByText('trend')).toBeInTheDocument();
  });

  it('applies trendType class', () => {
    setup({
      id: '1',
      label: 'label',
      name: 'name',
      value: 'value',
      trend: 'trend',
      trendType: 'success',
    });

    const trendElement = screen.getByText('trend');

    expect(trendElement.className).toContain('success');
  });
});
