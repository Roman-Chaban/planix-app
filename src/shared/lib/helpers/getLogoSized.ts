export const getLogoSized = (
  isMedia: boolean,
  width: number,
  height: number,
) => {
  return isMedia ? { width, height } : undefined;
};
