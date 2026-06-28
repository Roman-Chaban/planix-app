import type { Profile } from '@/entities/settings';
import type { TranslateFn } from '@/shared/types/types';

type ProfileProps = { profile: Profile; t: TranslateFn };

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

export type ProfileHeaderProps = {
  onMode: () => void;
} & ProfileProps;
