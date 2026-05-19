import type { SidebarNavItems } from '@/widgets/sidebar/model/types';
import { ROUTES } from '@/shared/config/common';
import {
  AnalyticsIcon,
  ClientIcon,
  DashboardIcon,
  InboxIcon,
  LeadIcon,
  ProjectIcon,
  SettingsIcon,
} from '@/shared/ui/icons';

const { DASHBOARD, PROJECTS, CLIENTS, LEADS, INBOX, ANALYTICS, SETTINGS } = ROUTES;

export const sidebarNavItems: SidebarNavItems = [
  {
    id: 'dashboard',
    icon: DashboardIcon,
    label: 'SidebarNav.dashboard',
    href: DASHBOARD,
  },
  {
    id: 'projects',
    icon: ProjectIcon,
    label: 'SidebarNav.projects',
    href: PROJECTS,
  },
  {
    id: 'clients',
    icon: ClientIcon,
    label: 'SidebarNav.client',
    href: CLIENTS,
  },
  {
    id: 'leads',
    icon: LeadIcon,
    label: 'SidebarNav.lead',
    href: LEADS,
  },
  {
    id: 'inbox',
    icon: InboxIcon,
    label: 'SidebarNav.inbox',
    href: INBOX,
  },
  {
    id: 'analytics',
    icon: AnalyticsIcon,
    label: 'SidebarNav.analytics',
    href: ANALYTICS,
  },
  {
    id: 'settings',
    icon: SettingsIcon,
    label: 'SidebarNav.settings',
    href: SETTINGS,
  },
] as const;
