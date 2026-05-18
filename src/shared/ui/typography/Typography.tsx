import type { TypographyProps, TypographyTag } from '@/shared/ui/typography/Typography.types';

export const Typography = <T extends TypographyTag = 'span'>({
  as,
  children,
  className,
  testId,
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'span';

  return (
    <Component className={className} data-testid={testId} {...props}>
      {children}
    </Component>
  );
};
