import { screen } from '@testing-library/react';

import { createSetup } from '@/shared/tests/mocks/mocks';
import type { AvatarProps } from '@/shared/ui/avatar/model/types';
import { Avatar } from '@/shared/ui/index';

const setup = createSetup(Avatar);

const createProps = (overrides: Partial<AvatarProps> = {}): AvatarProps => ({
  src: '/avatar.png',
  alt: 'User avatar',
  fallback: 'AB',
  size: 'lg',
  variant: 'square',
  ...overrides,
});

describe('Avatar', () => {
  it('renders icon when provided', () => {
    setup({ icon: <span data-testid="icon" /> });

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('prioritizes icon over image', () => {
    setup({
      icon: <span data-testid="icon" />,
      src: '/avatar.png',
    });

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.queryByAltText('User avatar')).not.toBeInTheDocument();
  });

  it('renders image when src is provided', () => {
    setup(createProps());

    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });

  it('renders fallback when no src and no icon', () => {
    setup(createProps({ src: undefined }));

    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('applies size and variant classes', () => {
    const { container } = setup(createProps());

    const root = container.firstChild;

    expect(root).toHaveClass('lg');
    expect(root).toHaveClass('square');
  });
});
