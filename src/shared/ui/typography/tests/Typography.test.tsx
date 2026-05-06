import type { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Typography } from '@/shared/ui/typography/ui/Typography';

const setup = (component: ReactElement) => render(component);

describe('Typography', () => {
  it('renders with default span', () => {
    const { container } = setup(<Typography>Default text</Typography>);

    expect(container).toMatchSnapshot();
  });

  it.each([
    { as: 'h1' as const, text: 'Main heading' },
    { as: 'h2' as const, text: 'Section heading' },
    { as: 'p' as const, text: 'Paragraph text' },
    { as: 'span' as const, text: 'Inline text' },
  ])('renders correctly as $as tag', ({ as, text }) => {
    const { container } = setup(<Typography as={as}>{text}</Typography>);

    expect(container).toMatchSnapshot();
  });

  it('forwards all important props correctly', () => {
    const { container } = setup(
      <Typography
        as="p"
        id="test-id"
        className="text-2xl font-bold text-blue-600"
        title="This is a tooltip"
        data-testid="typography-element"
        aria-label="Styled typography"
      >
        Content with many props
      </Typography>,
    );

    expect(container).toMatchSnapshot();
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    setup(
      <Typography as="span" onClick={handleClick}>
        Clickable Typography
      </Typography>,
    );

    await user.click(screen.getByText('Clickable Typography'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
