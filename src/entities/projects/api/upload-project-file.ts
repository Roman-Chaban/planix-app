import { PROJECT_FILES, supabase } from '@/shared/api';

export const uploadProjectFile = async (file: File) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}_${Math.random()}.${fileExt}`;

  const { data, error } = await supabase.storage.from(PROJECT_FILES).upload(fileName, file);

  if (error) throw error;

  const { data: publicUrlData } = supabase.storage.from(PROJECT_FILES).getPublicUrl(data.path);

  return { name: file.name, url: publicUrlData.publicUrl };
};
