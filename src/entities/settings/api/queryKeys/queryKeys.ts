export const queryKeys = {
  profile: {
    all: ['profile'] as const,
    details: (id: string) => ['profile', id] as const,
  },
};
