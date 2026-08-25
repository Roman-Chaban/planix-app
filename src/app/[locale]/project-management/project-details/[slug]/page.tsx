import { ProjectDetails } from '@/widgets/project-details/ui/ProjectDetails';
import { PROJECTS, SLUG } from '@/shared/api';
import { supabase } from '@/shared/api/supabase';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: project } = await supabase.from(PROJECTS).select('*').eq(SLUG, slug).single();

  return <ProjectDetails project={project} />;
}
