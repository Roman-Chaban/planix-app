export type ProfileEditFormProps = {
  onSuccess?: () => void;
};

export type ProfileFormValues = {
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  birthDate: string;
};
