import { screen } from '@testing-library/react';

import type { AvatarProps } from '@/shared/ui/avatar/model/types';
import { Avatar } from '@/shared/ui/index';
import { createSetup } from '@/mocks';

import {
  AVATAR_SIZES,
  AVATAR_VARIANTS,
  DEFAULT_AVATAR_ALT,
  DEFAULT_AVATAR_FALLBACK,
} from '../model/constants';

const { LARGE } = AVATAR_SIZES;
const { SQUARE } = AVATAR_VARIANTS;

const setup = createSetup(Avatar);

const createProps = (overrides: Partial<AvatarProps> = {}): AvatarProps => ({
  width: 20,
  height: 20,
  src: '/avatar.png',
  alt: DEFAULT_AVATAR_ALT,
  fallback: DEFAULT_AVATAR_FALLBACK,
  size: LARGE,
  variant: SQUARE,
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
    expect(screen.queryByAltText(DEFAULT_AVATAR_ALT)).not.toBeInTheDocument();
  });

  it('renders image when src is provided', () => {
    setup(createProps());

    expect(screen.getByAltText(DEFAULT_AVATAR_ALT)).toBeInTheDocument();
  });

  it('renders fallback when no src and no icon', () => {
    setup(createProps({ src: undefined }));

    expect(screen.getByText(DEFAULT_AVATAR_FALLBACK)).toBeInTheDocument();
  });

  it('applies size and variant classes to image', () => {
    setup(createProps());

    const image = screen.getByAltText(DEFAULT_AVATAR_ALT);

    expect(image).toHaveClass(LARGE);
    expect(image).toHaveClass(SQUARE);
  });
});
