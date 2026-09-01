import type { TranslateFn, WithChildren } from '@types';

import type { Profile } from '@/entities/profile';

type DetailsProps = { profile: Profile | null; t: TranslateFn };

type ProfileFieldValue = string | number | Date | null | undefined;

export type DetailsItemProps = WithChildren & {
  t?: TranslateFn;
  label?: string;
  value?: ProfileFieldValue;
};

export type DetailsFieldConfig = {
  key: keyof Profile;
  label: string;
  getter: (profile: Profile) => ProfileFieldValue;
};

export type ProfileDetailsProps = DetailsProps;
export type ProfileInfoListProps = DetailsProps;

export type ProfileHeaderProps = {
  onMode: () => void;
} & DetailsProps;
