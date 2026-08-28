import type { TFunction } from 'i18next';

import type { ComponentType, Dispatch, FC, ReactNode, Ref, SetStateAction, SVGProps } from 'react';

import type { Project } from '@/entities/projects';
import type { Locale } from '@/shared/i18n/locales/locales';
import type { AuthStep } from '@/shared/lib/common/constants';

export type TranslateFn = TFunction;
export type AppLocale = Locale;
export type NavigateFn = (step: AuthStep) => void;
export type EmailSentFn = (email: string) => void;
export type SVGComponent = FC<SVGProps<SVGSVGElement>>;
export type SettingSwitchList = WithSwitch[];
export type Projects = Project[];
export type FileType = 'pdf' | 'image' | 'default';
export type TabId = 'AllProjects' | 'InProgress' | 'Pending' | 'Completed' | 'Canceled';
export type PlatformId = 'Web' | 'IOS' | 'Android';

export type WithChildren = {
  children?: ReactNode;
};

export type WithClassName = {
  className?: string;
};

export type WithSkeleton = {
  skeleton: ReactNode;
};

export type IsAuthenticated = {
  isAuthenticated: boolean;
};

export type WithTranslationNamespace = {
  translationNamespace: string;
};

export type WithRef<T, R> = T & {
  ref?: Ref<R>;
};

export type WithSwitch = {
  id: string;
  icon?: ComponentType;
  title: string;
  subtitle: string;
  requiresAuth?: boolean;
};

export type IdentifiableSwitch = WithSwitch & {
  id: string | number;
};

export type SettingSwitchListProps<T> = {
  list: T[];
  className?: string;
  itemClassName?: string;
};

export type ProjectsHeaderProps = {
  id: TabId;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export type ActiveTabProps = {
  activeId: TabId;
  setActiveId: Dispatch<SetStateAction<TabId>>;
};
