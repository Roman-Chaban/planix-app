import { Details } from '@/widgets/project/ui/Details';
import { supabase } from '@/shared/api/supabase';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: project } = await supabase.from('Projects').select('*').eq('slug', slug).single();

  return <Details project={project} />;
}
