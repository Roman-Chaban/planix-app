import type { ComponentType } from 'react';

export type ProfileTabId = 'personal' | 'notifications';
export type ProfileTabComponent = ComponentType;
export type ProfileTabMap = Record<ProfileTabId, ProfileTabComponent>;
export type TabId = ProfileTabId;
