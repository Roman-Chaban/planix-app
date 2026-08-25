import { screen } from '@testing-library/react';

import { Card } from '@/shared/ui/index';
import { createSetup } from '@/mocks';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const setup = createSetup(Card);

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
