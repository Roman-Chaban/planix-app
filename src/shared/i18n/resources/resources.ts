import { brandI18n } from '@/widgets/brand-banner/i18n';
import { dashboardI18n } from '@/widgets/dashboard/i18n';
import { headerI18n } from '@/widgets/header/i18n';
import { projectI18n } from '@/widgets/project-details/i18n';
import { projectManagementI18n } from '@/widgets/projects/i18n';
import { settingsI18n } from '@/widgets/settings/i18n';
import { sidebarI18n } from '@/widgets/sidebar/i18n';
import { subscriptionI18n } from '@/widgets/subscription/i18n';
import { authI18n } from '@/features/auth/stepper/i18n';
import { deleteModalI18n } from '@/features/delete-project/i18n';
import { projectAddI18n } from '@/features/project-add/i18n';

export const resources = {
  en: {
    auth: authI18n.en,
    subscription: subscriptionI18n.en,
    dashboard: dashboardI18n.en,
    brand: brandI18n.en,
    sidebar: sidebarI18n.en,
    deleteModal: deleteModalI18n.en,
    header: headerI18n.en,
    projectManagement: projectManagementI18n.en,
    project: projectI18n.en,
    projectAdd: projectAddI18n.en,
    settings: settingsI18n.en,
  },
  uk: {
    auth: authI18n.uk,
    subscription: subscriptionI18n.uk,
    dashboard: dashboardI18n.uk,
    brand: brandI18n.uk,
    sidebar: sidebarI18n.uk,
    deleteModal: deleteModalI18n.uk,
    header: headerI18n.uk,
    projectManagement: projectManagementI18n.uk,
    project: projectI18n.uk,
    projectAdd: projectAddI18n.uk,
    settings: settingsI18n.uk,
  },
};
