import type { SharedI18n } from '@/shared/lib/i18n/model/types';

export const sharedI18n: SharedI18n = {
  sidebar: {
    dashboard: 'dashboard.headers.dashboard',
    projects: 'dashboard.headers.projects',
  },
  projectHeader: {
    title: 'projects.createProject.header.title',
    metaInfo: {
      label: 'projects.createProject.header.meta.label',
      value: 'projects.createProject.header.meta.value',
    },
  },
} as const;
