import type { ComponentType } from 'react';

export type NotificationItemModel = {
  id: string;
  icon?: ComponentType;
  title: string;
  subtitle: string;
};

export type NotificationItemWithoutIcon = Omit<NotificationItemModel, 'icon'>;
export type NotificationItemWithIcon = NotificationItemModel & {
  icon: ComponentType;
};

export type NotificationItemList = NotificationItemModel[];

export type NotificationItemProps = NotificationItemModel;
