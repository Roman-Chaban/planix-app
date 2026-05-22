export const queryKeys = {
  projects: {
    all: ['projects'] as const,

    byId: (id: string) => ['projects', id] as const,

    tasks: (projectId: string) => ['projects', projectId, 'tasks'] as const,
  },
};
