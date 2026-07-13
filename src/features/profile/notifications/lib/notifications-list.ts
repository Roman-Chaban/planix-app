import type { SettingSwitchList } from '@types';
import {
  NotificationEmail,
  NotificationMessage,
  NotificationProject,
  NotificationSecurity,
  NotificationTask,
} from '@/shared/ui/icons';

export const notificationsList: SettingSwitchList = [
  {
    id: 'emailNotifications',
    icon: NotificationEmail,
    title: 'notifications.items.emailNotifications.title',
    subtitle: 'notifications.items.emailNotifications.subtitle',
  },
  {
    id: 'projectNotifications',
    icon: NotificationProject,
    title: 'notifications.items.projectNotifications.title',
    subtitle: 'notifications.items.projectNotifications.subtitle',
  },
  {
    id: 'messageNotifications',
    icon: NotificationMessage,
    title: 'notifications.items.messageNotifications.title',
    subtitle: 'notifications.items.messageNotifications.subtitle',
  },
  {
    id: 'taskNotifications',
    icon: NotificationTask,
    title: 'notifications.items.taskNotifications.title',
    subtitle: 'notifications.items.taskNotifications.subtitle',
  },
  {
    id: 'securityNotifications',
    icon: NotificationSecurity,
    title: 'notifications.items.securityNotifications.title',
    subtitle: 'notifications.items.securityNotifications.subtitle',
  },
] as const;
