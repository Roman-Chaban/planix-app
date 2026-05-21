import { ROUTES } from '@/app/routes';
import type { SidebarNavItems } from '@/widgets/sidebar/model/types';
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

export const sidebarNavItems: SidebarNavItems = [
  {
    id: 'dashboard',
    icon: DashboardIcon,
    label: 'sidebar.dashboard',
    href: DASHBOARD,
  },
  {
    id: 'projects',
    icon: ProjectIcon,
    label: 'sidebar.projects',
    href: PROJECT,
  },
  {
    id: 'clients',
    icon: ClientIcon,
    label: 'sidebar.clients',
    href: CLIENTS,
  },
  {
    id: 'leads',
    icon: LeadIcon,
    label: 'sidebar.leads',
    href: LEADS,
  },
  {
    id: 'inbox',
    icon: InboxIcon,
    label: 'sidebar.inbox',
    href: INBOX,
  },
  {
    id: 'analytics',
    icon: AnalyticsIcon,
    label: 'sidebar.analytics',
    href: ANALYTICS,
  },
  {
    id: 'settings',
    icon: SettingsIcon,
    label: 'sidebar.settings',
    href: SETTINGS,
  },
] as const;
