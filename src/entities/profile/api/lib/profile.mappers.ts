import type { Profile, ProfileDto } from '@/entities/profile';

export const mapProfile = (dto: ProfileDto): Profile => ({
  id: dto.id,
  email: dto.email,
  fullName: dto.full_name,
  contact: dto.contact,
  birthDate: dto.birth_date ? new Date(dto.birth_date) : null,
  createdAt: new Date(dto.created_at),
});
