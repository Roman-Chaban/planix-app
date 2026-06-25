import type { TFunction } from 'i18next';

import { type Profile } from '@/entities/profile';

type ProfileProps = { profile: Profile; t: TFunction };

export type ProfileInfoItemProps = {
  label: string;
  value: string | number | Date | null | undefined;
};

export type ProfileFieldConfig = {
  key: string;
  label: string;
  value: string | number | Date | null | undefined;
};

export type ProfileDetailsProps = ProfileProps;
export type ProfileInfoListProps = ProfileProps;
