export const queryKeys = {
  projects: {
    all: ['projects'] as const,
    byId: (id: string) => ['projects', id] as const,
    projects: (projectId: string) => ['projects', projectId, 'tasks'] as const,
  },
};
