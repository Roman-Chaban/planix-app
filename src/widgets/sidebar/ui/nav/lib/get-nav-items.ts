import type { NavItemData } from '../model/nav.types';
import type { TFunction } from 'i18next';

import { ROUTES } from '@/shared/config/routes';
import {
  AnalyticsIcon,
  ClientIcon,
  DashboardIcon,
  InboxIcon,
  LeadIcon,
  ProjectIcon,
  SettingsIcon,
} from '@/shared/ui/icons';

const { DASHBOARD, PROJECT, CLIENTS, LEADS, INBOX, ANALYTICS, SETTINGS } = ROUTES;

export const getNavItems = (t: TFunction): NavItemData[] => [
  {
    id: 'dashboard',
    icon: DashboardIcon,
    label: t('nav.dashboard'),
    href: DASHBOARD,
  },
  {
    id: 'projects',
    icon: ProjectIcon,
    label: t('nav.projects'),
    href: PROJECT,
  },
  {
    id: 'clients',
    icon: ClientIcon,
    label: t('nav.clients'),
    href: CLIENTS,
  },
  {
    id: 'leads',
    icon: LeadIcon,
    label: t('nav.leads'),
    href: LEADS,
  },
  {
    id: 'inbox',
    icon: InboxIcon,
    label: t('nav.inbox'),
    href: INBOX,
  },
  {
    id: 'analytics',
    icon: AnalyticsIcon,
    label: t('nav.analytics'),
    href: ANALYTICS,
  },
  {
    id: 'settings',
    icon: SettingsIcon,
    label: t('nav.settings'),
    href: SETTINGS,
  },
];
