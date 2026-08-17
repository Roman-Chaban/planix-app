import type { SettingSwitchList } from '@types';

import { NotificationProject, NotificationSecurity } from '@/shared/ui/icons';

export const securityList: SettingSwitchList = [
  {
    id: 'twoFactorAuthentication',
    title: 'system.twoFactorAuthentication.title',
    subtitle: 'system.twoFactorAuthentication.description',
    icon: NotificationSecurity,
    requiresAuth: true,
  },
  {
    id: 'themeMode',
    title: 'system.darkTheme.title',
    subtitle: 'system.darkTheme.description',
    icon: NotificationProject,
  },
] as const;
