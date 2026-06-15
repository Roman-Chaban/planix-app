import { ROUTES } from '@/app/routes';
import type { SidebarNavItemData } from '@/widgets/sidebar/model/types';
import {
  AnalyticsIcon,
  ClientIcon,
  DashboardIcon,
  InboxIcon,
  LeadIcon,
  ProjectIcon,
  SettingsIcon,
} from '@/shared/ui/icons';

const { DASHBOARD, PROJECT, CLIENTS, LEADS, INBOX, ANALYTICS, SETTINGS } =
  ROUTES;

export const sidebarNavItems: SidebarNavItemData[] = [
  {
    id: 'dashboard',
    icon: DashboardIcon,
    label: 'dashboard',
    href: DASHBOARD,
  },
  {
    id: 'projects',
    icon: ProjectIcon,
    label: 'projects',
    href: PROJECT,
  },
  {
    id: 'clients',
    icon: ClientIcon,
    label: 'clients',
    href: CLIENTS,
  },
  {
    id: 'leads',
    icon: LeadIcon,
    label: 'leads',
    href: LEADS,
  },
  {
    id: 'inbox',
    icon: InboxIcon,
    label: 'inbox',
    href: INBOX,
  },
  {
    id: 'analytics',
    icon: AnalyticsIcon,
    label: 'analytics',
    href: ANALYTICS,
  },
  {
    id: 'settings',
    icon: SettingsIcon,
    label: 'settings',
    href: SETTINGS,
  },
] as const;
