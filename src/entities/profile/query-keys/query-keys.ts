export const queryKeys = {
  profile: {
    byId: (id?: string) => ['profile', id] as const,
  },
};
