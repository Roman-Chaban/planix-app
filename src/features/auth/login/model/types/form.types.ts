import type { Control, UseFormRegister } from "react-hook-form";

export type AuthFormValues = {
  email: string;
  password: string;
  checked: boolean;
};

export type AuthLoginFormViewProps = {
  register: UseFormRegister<AuthFormValues>;
  control: Control<AuthFormValues>;
  onSubmit: () => void;
};
