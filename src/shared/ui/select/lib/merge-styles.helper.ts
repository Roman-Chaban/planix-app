import type { CSSObjectWithLabel } from 'react-select';

export const mergeStyles = (
  base: CSSObjectWithLabel,
  styles?: CSSObjectWithLabel,
  variants?: CSSObjectWithLabel,
): CSSObjectWithLabel => ({
  ...base,
  ...styles,
  ...variants,
});
