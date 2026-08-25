export const getAvatarPath = (userId: string, file: File) => {
  const extension = file.name.split('.').pop();

  return `${userId}/avatar.${extension}`;
};
