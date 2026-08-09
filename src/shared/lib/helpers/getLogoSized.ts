import type { LogoSize } from './helpers.types';

export const getLogoSized = (isMedia: boolean, { geometry, width, height }: LogoSize) => {
  if (!isMedia) {
    return undefined;
  }

  if (geometry !== undefined) {
    return {
      width: geometry,
      height: geometry,
    };
  }

  return {
    width,
    height,
  };
};
