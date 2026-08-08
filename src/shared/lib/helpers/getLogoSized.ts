import type { LogoSize } from './helpers.types';

export const getLogoSized = (isMedia: boolean, size: LogoSize) => {
  if (!isMedia) {
    return undefined;
  }

  if ('geometry' in size) {
    return {
      width: size.geometry,
      height: size.geometry,
    };
  }

  return {
    width: size.width,
    height: size.height,
  };
};
