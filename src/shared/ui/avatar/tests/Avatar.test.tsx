import { render, screen } from '@testing-library/react';

import { Avatar } from '@/shared/ui/index';

const setup = (avatarProps = {}) => render(<Avatar {...avatarProps} />);

const createProps = (overrides = {}) => ({
  src: '/avatar.png',
  alt: 'User avatar',
  fallback: 'AB',
  size: 'lg',
  variant: 'square',
  ...overrides,
});

describe('Avatar', () => {
  describe('rendering', () => {
    it('renders icon if icon prop is provided', () => {
      setup({ icon: <span data-testid="icon" /> });
    });

    it('renders image if src is provided and no icon', () => {
      setup(createProps());

      expect(screen.getByAltText('User avatar')).toBeInTheDocument();
    });

    it('matches snapshot (default)', () => {
      const { container } = setup();

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Fallback behavior', () => {
    it('renders custom fallback if no icon and no src', () => {
      setup(createProps());

      expect(screen.getByAltText('User avatar')).toBeInTheDocument();
    });

    it('renders default fallback if nothing is provided', () => {
      setup();

      expect(screen.getByText('Fallback')).toBeInTheDocument();
    });

    it('renders fallback correctly', () => {
      const { container } = setup({ fallback: 'AB' });

      expect(screen.getByText('AB')).toBeInTheDocument();
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('styles', () => {
    it('applies size and variant classes', () => {
      const { container } = setup(createProps());

      const root = container.firstChild;

      expect(root).toHaveClass('lg');
      expect(root).toHaveClass('square');
    });
  });
});
