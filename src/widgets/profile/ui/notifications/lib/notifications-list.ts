import type { NotificationItemList } from '../model/types';

import {
  NotificationEmail,
  NotificationMessage,
  NotificationProject,
  NotificationSecurity,
  NotificationTask,
} from '@/shared/ui/icons';

export const notificationsList: NotificationItemList = [
  {
    id: 'emailNotifications',
    icon: NotificationEmail,
    title: 'Email Notifications',
    subtitle: 'Protect your account from unauthorized access.',
  },
  {
    id: 'projectNotifications',
    icon: NotificationProject,
    title: 'Project Notifications',
    subtitle: 'Notifications related to project progress and updates.',
  },
  {
    id: 'messageNotifications',
    icon: NotificationMessage,
    title: 'Message Notifications',
    subtitle: 'Stay updated with real-time alerts for new messages.',
  },
  {
    id: 'taskNotifications',
    icon: NotificationTask,
    title: 'Task Notifications',
    subtitle: 'Get alerts for new tasks, updates, and approaching deadlines.',
  },
  {
    id: 'securityNotifications',
    icon: NotificationSecurity,
    title: 'Security Notifications',
    subtitle: 'Get alerts for login activity and security-related actions.',
  },
];
