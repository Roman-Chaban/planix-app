import type { CardProps } from '../model/types';

import { screen } from '@testing-library/react';

import { Card } from '@/shared/ui/index';
import { createSetup } from '@/mocks';

const setup = createSetup(Card);

const createProps = (overrides: Partial<CardProps> = {}): CardProps => ({
  id: '1',
  label: 'label',
  name: 'name',
  value: 'value',
  trend: 'trend',
  trendType: 'success',
  ...overrides,
});

describe('DashboardCard', () => {
  it('renders label', () => {
    setup(createProps());

    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('renders value', () => {
    setup(createProps());

    expect(screen.getByText('value')).toBeInTheDocument();
  });

  it('renders name', () => {
    setup(createProps());

    expect(screen.getByText('name')).toBeInTheDocument();
  });

  it('renders trend', () => {
    setup(createProps());

    expect(screen.getByText('trend')).toBeInTheDocument();
  });

  it('applies trendType class', () => {
    setup(createProps());

    const trendElement = screen.getByText('trend');

    expect(trendElement.className).toContain('success');
  });
});
