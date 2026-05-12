import type { TabsContent } from '@/widgets/projects/model/types';
import { AllProjects } from '@/features/projects/ui/AllProjects';

export const tabsContent: TabsContent = {
  allProjects: AllProjects,
  inProgress: () => null,
  pending: () => null,
  completed: () => null,
  canceled: () => null,
};
