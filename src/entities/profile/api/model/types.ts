export type ProfileData = {
  id: string;
  email: string;
  full_name: string;
  contact: string;
  birth_date: string;
  created_at: string;
};

export type Profile = {
  id: string;
  email: string;
  fullName: string;
  firstName: string;
  lastName: string;
  birthDateFormatted: string;
  createdAtFormatted: string;
  initials: string;
  contact: string;
  birthDate: Date | null;
  createdAt: Date;
};
