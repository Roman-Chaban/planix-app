import { brandI18n } from '@/widgets/brand-banner/i18n';
import { dashboardI18n } from '@/widgets/dashboard/i18n';
import { headerI18n } from '@/widgets/header/i18n';
import { projectCreateI18n } from '@/widgets/project-create/i18n';
import { projectDetailsI18n } from '@/widgets/project-details/i18n';
import { projectEditI18n } from '@/widgets/project-edit/i18n';
import { projectManagementI18n } from '@/widgets/project-management/i18n';
import { settingsI18n } from '@/widgets/settings/i18n';
import { sidebarI18n } from '@/widgets/sidebar/i18n';
import { authI18n } from '@/features/auth/stepper/i18n';
import { projectAddI18n } from '@/features/project-add/i18n';
import { deleteProjectI18n } from '@/features/project-delete/i18n';

export const resources = {
  en: {
    auth: authI18n.en,
    dashboard: dashboardI18n.en,
    brand: brandI18n.en,
    sidebar: sidebarI18n.en,
    modal: deleteProjectI18n.en,
    header: headerI18n.en,
    projectManagement: projectManagementI18n.en,
    projectCreate: projectCreateI18n.en,
    projectAdd: projectAddI18n.en,
    projectEdit: projectEditI18n.en,
    projectDetails: projectDetailsI18n.en,
    settings: settingsI18n.en,
  },
  uk: {
    auth: authI18n.uk,
    dashboard: dashboardI18n.uk,
    brand: brandI18n.uk,
    sidebar: sidebarI18n.uk,
    modal: deleteProjectI18n.uk,
    header: headerI18n.uk,
    projectManagement: projectManagementI18n.uk,
    projectCreate: projectCreateI18n.uk,
    projectAdd: projectAddI18n.uk,
    projectEdit: projectEditI18n.uk,
    projectDetails: projectDetailsI18n.uk,
    settings: settingsI18n.uk,
  },
};
