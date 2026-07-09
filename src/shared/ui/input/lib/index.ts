import { InputRoot } from '@/shared/ui/input/ui/Input';
import { InputPassword } from '@/shared/ui/input/ui/InputPassword';
import { InputSearch } from '@/shared/ui/input/ui/InputSearch';

export const Input = Object.assign(InputRoot, {
  Password: InputPassword,
  Search: InputSearch,
});
