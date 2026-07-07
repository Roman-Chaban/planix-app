import type { SettingSwitchList } from '@/shared/types/types';

import { NotificationProject, NotificationSecurity } from '@/shared/ui/icons';

export const securityList: SettingSwitchList = [
  {
    id: 'twoFactorAuthentication',
    title: 'Two-Factor Authentication (2FA)',
    subtitle: 'Protect your account from unauthorized access.',
    icon: NotificationSecurity,
  },
  {
    id: 'themeMode',
    title: 'Dark Theme Mode',
    subtitle: 'Switch to a darker interface that’s easy on the eyes.',
    icon: NotificationProject,
  },
] as const;
