import type { LanguageOption } from '@/features/language-switcher';
import { UkraineIcon, UnitedStatesIcon } from '@/shared/ui/icons/index';

export const languageOptions = [
  { value: 'en', label: 'English', icon: UnitedStatesIcon },
  { value: 'uk', label: 'Українська', icon: UkraineIcon },
] as const satisfies readonly LanguageOption[];
