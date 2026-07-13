import type { Profile } from '@/entities/profile';
import type { TranslateFn, WithChildren } from '@types';

type ProfileProps = { profile: Profile | null; t: TranslateFn };

export type ProfileInfoItemProps = WithChildren & {
  label?: string;
  value?: string | number | Date | null | undefined;
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
