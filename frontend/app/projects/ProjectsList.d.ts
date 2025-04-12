import { Project } from '@/lib/types';
import { Specialization } from '@/lib/domains';

declare const ProjectsList: React.FC<{
  projects: Project[];
  specializations: Specialization[];
}>;

export default ProjectsList; 