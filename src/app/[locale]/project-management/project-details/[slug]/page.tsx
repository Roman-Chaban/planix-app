import { ProjectDetails } from '@/widgets/project-details/ui/ProjectDetails';
import { supabase } from '@/shared/api/supabase';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: project } = await supabase.from('Projects').select('*').eq('slug', slug).single();

  return <ProjectDetails project={project} />;
}
