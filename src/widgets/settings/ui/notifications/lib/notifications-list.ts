import type { NotificationItemList } from '../model/types';
import type { TFunction } from 'i18next';

import {
  NotificationEmail,
  NotificationMessage,
  NotificationProject,
  NotificationSecurity,
  NotificationTask,
} from '@/shared/ui/icons';

export const getNotificationsList = (t: TFunction): NotificationItemList => [
  {
    id: 'emailNotifications',
    icon: NotificationEmail,
    title: t('notifications.items.emailNotifications.title'),
    subtitle: t('notifications.items.emailNotifications.subtitle'),
  },
  {
    id: 'projectNotifications',
    icon: NotificationProject,
    title: t('notifications.items.projectNotifications.title'),
    subtitle: t('notifications.items.projectNotifications.subtitle'),
  },
  {
    id: 'messageNotifications',
    icon: NotificationMessage,
    title: t('notifications.items.messageNotifications.title'),
    subtitle: t('notifications.items.messageNotifications.subtitle'),
  },
  {
    id: 'taskNotifications',
    icon: NotificationTask,
    title: t('notifications.items.taskNotifications.title'),
    subtitle: t('notifications.items.taskNotifications.subtitle'),
  },
  {
    id: 'securityNotifications',
    icon: NotificationSecurity,
    title: t('notifications.items.securityNotifications.title'),
    subtitle: t('notifications.items.securityNotifications.subtitle'),
  },
];
