import { UkraineIcon, UnitedStatesIcon } from '@/shared/ui/icons/index';
import type { LanguageOption } from '@/shared/ui/languageSelect/model/types';

export const languageOptions = [
  { value: 'en', label: 'English', icon: UnitedStatesIcon },
  { value: 'uk', label: 'Українська', icon: UkraineIcon },
] as const satisfies readonly LanguageOption[];
